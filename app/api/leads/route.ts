import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const discordWebhookUrl = process.env.DISCORD_LEADS_WEBHOOK_URL || ''

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { product, business_name, industry, contact_name, email, phone, timeline, budget, details } = body

    if (!product || !business_name || !contact_name || !phone) {
      return NextResponse.json({ error: 'Câmpuri obligatorii lipsă' }, { status: 400 })
    }

    if (!['aplicatii', 'mobile', 'ai'].includes(product)) {
      return NextResponse.json({ error: 'Produs invalid' }, { status: 400 })
    }

    // Basic length validation
    const maxLen = 500
    if (business_name.length > maxLen || contact_name.length > maxLen || (email && email.length > maxLen) || phone.length > 30) {
      return NextResponse.json({ error: 'Date invalide' }, { status: 400 })
    }

    // Save to Supabase
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey)
      const productLabelsDB: Record<string, string> = {
        aplicatii: 'Aplicație Web (PWA)',
        mobile: 'Aplicație Mobilă',
        ai: 'AI Employee',
      }

      const { error } = await supabase.from('lead_submissions').insert({
        // Original table columns (NOT NULL)
        name: contact_name,
        service_interest: productLabelsDB[product] || product,
        source: 'website_form',
        agency_id: 'apprapid',
        honeypot_filled: false,
        processed: false,
        // New columns from our migration
        product,
        business_name,
        industry: industry || null,
        contact_name,
        email: email || null,
        phone,
        timeline: timeline || null,
        budget: budget || null,
        details: details || {},
      })

      if (error) {
        console.error('Supabase insert error:', JSON.stringify(error))
        return NextResponse.json({ error: 'Eroare la salvare. Încearcă din nou.' }, { status: 500 })
      }
    }

    // Send to Discord webhook
    if (discordWebhookUrl) {
      const productLabels: Record<string, string> = {
        aplicatii: 'Aplicații Web (PWA)',
        mobile: 'Aplicații Mobile',
        ai: 'AI Employee',
      }

      const detailLines = details
        ? Object.entries(details)
            .filter(([, v]) => v)
            .map(([k, v]) => `**${k}:** ${Array.isArray(v) ? (v as string[]).join(', ') : v}`)
            .join('\n')
        : ''

      const embed = {
        embeds: [
          {
            title: `Lead Nou — ${productLabels[product] || product}`,
            color: product === 'aplicatii' ? 0x3b82f6 : product === 'mobile' ? 0x8b5cf6 : 0xd946ef,
            fields: [
              { name: 'Business', value: business_name, inline: true },
              { name: 'Industrie', value: industry || 'Nespecificat', inline: true },
              { name: 'Contact', value: contact_name, inline: true },
              { name: 'Telefon', value: phone, inline: true },
              { name: 'Email', value: email || 'Nespecificat', inline: true },
              { name: 'Termen', value: timeline || 'Nespecificat', inline: true },
              { name: 'Buget', value: budget || 'Nespecificat', inline: true },
              ...(detailLines ? [{ name: 'Detalii', value: detailLines, inline: false }] : []),
            ],
            timestamp: new Date().toISOString(),
            footer: { text: 'AppRapid.ro — Lead Form' },
          },
        ],
      }

      try {
        await fetch(discordWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(embed),
        })
      } catch (webhookErr) {
        console.error('Discord webhook error:', webhookErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Eroare server' }, { status: 500 })
  }
}
