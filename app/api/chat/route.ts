import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { rateLimit } from '@/app/lib/rate-limit'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `Ești asistentul virtual AppRapid — un chatbot prietenos și profesional pentru agenția de dezvoltare software AppRapid.ro, cu sediul în Timișoara, România.

REGULI STRICTE:
- Răspunde DOAR în limba română
- Răspunsuri SCURTE: maxim 2-3 propoziții
- Fii direct, util și prietenos
- Pentru întrebări detaliate sau comenzi, ghidează spre WhatsApp (0756 870 425) sau formularul de onboarding de pe site
- Nu inventa informații — dacă nu știi, spune sincer și redirecționează spre echipă
- Identitate: "Sunt asistentul virtual AppRapid"
- Nu discuta despre concurență și nu compara prețuri cu alte firme

SERVICII ȘI PREȚURI:

1. Aplicații Web (PWA):
   - Starter: 2.999 RON — landing page + admin dashboard
   - Business: 6.999 RON — funcționalități avansate + integrări
   - Enterprise: 14.999+ RON — soluții complexe, personalizate

2. Aplicații Mobile (iOS & Android):
   - Standard: 7.999 RON — aplicație nativă funcțională
   - Advanced: 14.999+ RON — funcționalități complexe, API-uri multiple

3. AI Employee (Angajați AI):
   - Starter: 4.499 RON (1 agent AI, mentenanță 249 RON/lună)
   - Business: 14.999 RON (2-3 agenți AI, mentenanță 499 RON/lună)
   - Enterprise: 24.999 RON (5+ agenți AI, mentenanță 899 RON/lună)

4. Hosting & Mentenanță:
   - Standard: 149 RON/lună
   - Premium: 299 RON/lună

CONTACT:
- WhatsApp: 0756 870 425
- Website: apprapid.ro
- Locație: Timișoara, România`

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { allowed } = rateLimit(ip, 'chat', 30, 60_000) // 30 requests/minute per IP
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: 'Prea multe cereri. Încearcă din nou în câteva secunde.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const body = await request.json()
    const messages: ChatMessage[] = body.messages

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Mesajele sunt obligatorii.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Validate message structure and limit context
    const validRoles = ['user', 'assistant']
    const validMessages = messages
      .filter(
        (m) =>
          validRoles.includes(m.role) &&
          typeof m.content === 'string' &&
          m.content.length > 0 &&
          m.content.length <= 2000
      )
      .slice(-10)

    if (validMessages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Mesaje invalide.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const trimmedMessages = validMessages

    const stream = await anthropic.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    })

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              const text = event.delta.text
              controller.enqueue(new TextEncoder().encode(text))
            }
          }
          controller.close()
        } catch (err) {
          console.error('Stream error:', err)
          controller.error(err)
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({
        error: 'A apărut o eroare. Te rugăm să încerci din nou.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
