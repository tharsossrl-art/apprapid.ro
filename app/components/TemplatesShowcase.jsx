'use client'

import { useState } from 'react';

// Componenta PhoneMockup - cadru de telefon profesional
const PhoneMockup = ({ children, color = "from-blue-500 to-emerald-500" }) => (
  <div className="relative w-full h-full flex items-center justify-center p-2">
    {/* Telefon */}
    <div className="relative w-[85%] h-[95%] bg-slate-900 rounded-[20px] border-2 border-slate-700 shadow-2xl overflow-hidden">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
      {/* Screen content */}
      <div className="absolute inset-1 rounded-[16px] overflow-hidden bg-white">
        {children}
      </div>
      {/* Fade overlay pentru mister */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
      {/* "Vezi mai mult" hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-0.5 opacity-60">
          <div className="w-6 h-0.5 bg-slate-400 rounded-full"></div>
          <div className="w-4 h-0.5 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// Preview-uri reale ale aplicațiilor - mockup-uri concrete cu UI real
const AppPreviews = {
  restaurant: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-orange-50 to-white text-slate-800 text-[6px]">
        {/* Header */}
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center text-white text-[5px]">P</div>
            <span className="font-bold text-[7px]">Pizzeria Roma</span>
          </div>
          <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-[6px]">0</div>
        </div>
        {/* Hero */}
        <div className="px-2 py-2">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-80">Livrare gratuita</div>
            <div className="font-bold text-[7px]">La comenzi peste 50 lei</div>
          </div>
        </div>
        {/* Categories */}
        <div className="px-2 flex gap-1 overflow-hidden">
          <div className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Pizza</div>
          <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Paste</div>
          <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Salate</div>
        </div>
        {/* Menu Grid */}
        <div className="px-2 py-2 grid grid-cols-2 gap-1">
          <div className="bg-white rounded-lg p-1 border border-slate-100 shadow-sm">
            <div className="w-full h-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-md mb-1"></div>
            <div className="font-semibold text-[6px]">Margherita</div>
            <div className="text-orange-600 font-bold text-[6px]">25 lei</div>
          </div>
          <div className="bg-white rounded-lg p-1 border border-slate-100 shadow-sm">
            <div className="w-full h-6 bg-gradient-to-br from-red-200 to-red-300 rounded-md mb-1"></div>
            <div className="font-semibold text-[6px]">Diavola</div>
            <div className="text-orange-600 font-bold text-[6px]">32 lei</div>
          </div>
          <div className="bg-white rounded-lg p-1 border border-slate-100 shadow-sm">
            <div className="w-full h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-md mb-1"></div>
            <div className="font-semibold text-[6px]">Quattro Formaggi</div>
            <div className="text-orange-600 font-bold text-[6px]">35 lei</div>
          </div>
          <div className="bg-white rounded-lg p-1 border border-slate-100 shadow-sm">
            <div className="w-full h-6 bg-gradient-to-br from-green-200 to-green-300 rounded-md mb-1"></div>
            <div className="font-semibold text-[6px]">Vegetariana</div>
            <div className="text-orange-600 font-bold text-[6px]">28 lei</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  cafenea: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-amber-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-orange-600 rounded-md"></div>
            <span className="font-bold text-[7px]">Coffee House</span>
          </div>
          <div className="text-[5px] text-amber-600">9 puncte</div>
        </div>
        <div className="px-2 py-2">
          <div className="text-[5px] text-slate-500 mb-1">Precomanda acum</div>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-2">
            <div className="font-bold text-[7px]">Cappuccino</div>
            <div className="text-amber-700 text-[6px]">12 lei</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Card fidelitate</div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-2 text-white">
            <div className="flex gap-1 mb-1">
              {[1,2,3,4,5,6,7,8,9].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 9 ? 'bg-white' : 'bg-white/30'}`}></div>
              ))}
              <div className="w-2 h-2 rounded-full border border-white/50"></div>
            </div>
            <div className="text-[5px]">Inca 1 cafea pentru una gratis!</div>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="text-[5px] text-slate-500 mb-1">Meniu popular</div>
          <div className="space-y-1">
            <div className="bg-white rounded p-1 border border-slate-100 flex justify-between items-center">
              <span className="text-[6px]">Espresso</span>
              <span className="text-amber-600 font-bold text-[6px]">8 lei</span>
            </div>
            <div className="bg-white rounded p-1 border border-slate-100 flex justify-between items-center">
              <span className="text-[6px]">Latte</span>
              <span className="text-amber-600 font-bold text-[6px]">14 lei</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  brutarie: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-amber-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-md flex items-center justify-center text-white text-[5px]">B</div>
            <span className="font-bold text-[7px]">Paine Coapta</span>
          </div>
          <div className="bg-amber-100 px-1.5 py-0.5 rounded-full text-amber-700 text-[5px]">Proaspat</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-2">
            <div className="text-[5px] text-amber-700">Precomanda pentru maine</div>
            <div className="font-bold text-[7px]">Paine de casa calda</div>
            <div className="text-[5px] text-slate-500 mt-0.5">Ridicare: 07:00 - 10:00</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Produse proaspete azi</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-200 to-amber-300 rounded-md"></div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Franzela artizanala</div>
                <div className="text-[5px] text-slate-400">500g • Proaspata</div>
              </div>
              <div className="text-amber-600 font-bold text-[6px]">8 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-md"></div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Croissant unt</div>
                <div className="text-[5px] text-slate-400">Copt la 7:00</div>
              </div>
              <div className="text-amber-600 font-bold text-[6px]">6 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-md"></div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Cozonac traditional</div>
                <div className="text-[5px] text-slate-400">Cu nuca si mac</div>
              </div>
              <div className="text-amber-600 font-bold text-[6px]">45 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  salon: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-pink-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-md"></div>
            <span className="font-bold text-[7px]">Bella Salon</span>
          </div>
          <div className="w-4 h-4 bg-pink-100 rounded-full"></div>
        </div>
        <div className="px-2 py-1">
          <div className="text-[5px] text-slate-500 mb-1">Programeaza-te online</div>
          <div className="bg-white rounded-lg border border-slate-200 p-1.5">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-[6px]">Februarie 2025</span>
              <div className="flex gap-0.5">
                <div className="w-3 h-3 bg-slate-100 rounded"></div>
                <div className="w-3 h-3 bg-slate-100 rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-0.5 text-center">
              {['L','M','M','J','V','S','D'].map((d,i) => (
                <div key={i} className="text-[4px] text-slate-400">{d}</div>
              ))}
              {[...Array(31)].map((_,i) => (
                <div key={i} className={`text-[5px] p-0.5 rounded ${i === 14 ? 'bg-pink-500 text-white' : i === 20 ? 'bg-pink-100' : ''}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-2 py-1">
          <div className="text-[5px] text-slate-500 mb-1">Servicii populare</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-1.5">
              <div className="font-semibold text-[6px]">Coafor</div>
              <div className="text-pink-600 text-[5px]">de la 50 lei</div>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-lg p-1.5">
              <div className="font-semibold text-[6px]">Manichiura</div>
              <div className="text-rose-600 text-[5px]">de la 80 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  frizerie: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-slate-100 to-white text-slate-800 text-[6px]">
        <div className="bg-slate-900 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-700 rounded-md"></div>
            <span className="font-bold text-[7px] text-white">BarberShop</span>
          </div>
          <div className="text-[5px] text-slate-400">Deschis</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-70">Programeaza rapid</div>
            <div className="font-bold text-[7px]">Alege frizerul tau</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Frizeri disponibili</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-200 text-center">
              <div className="w-6 h-6 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full mx-auto mb-1"></div>
              <div className="font-semibold text-[6px]">Alex</div>
              <div className="text-[5px] text-yellow-500">4.9</div>
              <div className="text-[5px] text-green-600 mt-0.5">Liber 14:00</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-200 text-center">
              <div className="w-6 h-6 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full mx-auto mb-1"></div>
              <div className="font-semibold text-[6px]">Mihai</div>
              <div className="text-[5px] text-yellow-500">4.8</div>
              <div className="text-[5px] text-green-600 mt-0.5">Liber 15:30</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="text-[5px] text-slate-500 mb-1">Servicii</div>
          <div className="space-y-1">
            <div className="bg-white rounded p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Tuns clasic</div>
                <div className="text-[5px] text-slate-400">30 min</div>
              </div>
              <div className="text-slate-800 font-bold text-[6px]">35 lei</div>
            </div>
            <div className="bg-white rounded p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Fade + Barba</div>
                <div className="text-[5px] text-slate-400">45 min</div>
              </div>
              <div className="text-slate-800 font-bold text-[6px]">55 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  spa: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-teal-50 to-white text-slate-800 text-[6px]">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/20 rounded-md"></div>
            <span className="font-bold text-[7px] text-white">Zen Spa</span>
          </div>
          <div className="text-[5px] text-white/80">Relaxare</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-2">
            <div className="text-[5px] text-teal-700">Pachet special</div>
            <div className="font-bold text-[7px]">Masaj + Sauna + Facial</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[5px] line-through text-slate-400">450 lei</span>
              <span className="text-teal-600 font-bold text-[6px]">349 lei</span>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Tratamente populare</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-200 to-teal-300 rounded-md flex items-center justify-center text-[8px]">~</div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Masaj Relaxare</div>
                <div className="text-[5px] text-slate-400">60 min • Corp intreg</div>
              </div>
              <div className="text-teal-600 font-bold text-[6px]">180 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-md flex items-center justify-center text-[8px]">*</div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Tratament Facial</div>
                <div className="text-[5px] text-slate-400">45 min • Hidratare</div>
              </div>
              <div className="text-teal-600 font-bold text-[6px]">150 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-md flex items-center justify-center text-[6px]">S</div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Sauna + Jacuzzi</div>
                <div className="text-[5px] text-slate-400">2 ore • Acces complet</div>
              </div>
              <div className="text-teal-600 font-bold text-[6px]">120 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  fitness: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white text-[6px]">
        <div className="px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-md"></div>
            <span className="font-bold text-[7px]">FitZone Gym</span>
          </div>
          <div className="bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full text-[5px]">Activ</div>
        </div>
        <div className="px-2 py-1">
          <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
            <div className="text-[5px] text-slate-400">Progres lunar</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="relative w-10 h-10">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#374151" strokeWidth="3"/>
                  <circle cx="18" cy="18" r="14" fill="none" stroke="url(#grad)" strokeWidth="3" strokeDasharray="66 100" strokeLinecap="round"/>
                  <defs><linearGradient id="grad"><stop stopColor="#f97316"/><stop offset="1" stopColor="#ef4444"/></linearGradient></defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[7px] font-bold">75%</div>
              </div>
              <div>
                <div className="font-bold text-[7px]">18 / 24</div>
                <div className="text-[5px] text-slate-400">antrenamente</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-400 mb-1">Clase azi</div>
          <div className="space-y-1">
            <div className="bg-slate-800 rounded-lg p-1.5 border border-slate-700 flex items-center justify-between">
              <div>
                <div className="font-semibold text-[6px]">CrossFit</div>
                <div className="text-[5px] text-slate-400">10:00 • Alex T.</div>
              </div>
              <div className="bg-red-500 px-1.5 py-0.5 rounded text-[5px]">5 loc</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-1.5 border border-slate-700 flex items-center justify-between">
              <div>
                <div className="font-semibold text-[6px]">Spinning</div>
                <div className="text-[5px] text-slate-400">18:00 • Maria P.</div>
              </div>
              <div className="bg-orange-500 px-1.5 py-0.5 rounded text-[5px]">2 loc</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-1.5 text-center">
            <div className="font-bold text-[6px]">Check-in la sala</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  yoga: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-purple-50 to-white text-slate-800 text-[6px]">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-[6px]">~</div>
            <span className="font-bold text-[7px] text-white">Yoga Studio</span>
          </div>
          <div className="text-[5px] text-white/80">Namaste</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-2">
            <div className="text-[5px] text-purple-700">Clasa urmatoare</div>
            <div className="font-bold text-[7px]">Vinyasa Flow</div>
            <div className="text-[5px] text-slate-500">Azi, 18:00 • cu Ana</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Clase disponibile</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-5 bg-gradient-to-br from-purple-200 to-purple-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Hatha Yoga</div>
              <div className="text-[5px] text-slate-400">Incepatori</div>
              <div className="text-purple-600 font-bold text-[5px] mt-0.5">40 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-5 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Power Yoga</div>
              <div className="text-[5px] text-slate-400">Avansat</div>
              <div className="text-purple-600 font-bold text-[5px] mt-0.5">50 lei</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-white rounded-lg p-1.5 border border-purple-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[5px] text-slate-500">Abonament lunar</div>
                <div className="font-bold text-[7px] text-purple-600">249 lei</div>
              </div>
              <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-[5px]">Activeaza</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  clinica: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-blue-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center text-white text-[6px]">+</div>
            <span className="font-bold text-[7px]">MedCare</span>
          </div>
          <div className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full text-[5px]">Online</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-80">Programare rapida</div>
            <div className="font-bold text-[7px]">Consultatii disponibile azi</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Specialitati medicale</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-[6px]">M</div>
                <div>
                  <div className="font-semibold text-[6px]">Medicina Generala</div>
                  <div className="text-[5px] text-slate-400">Dr. Popescu</div>
                </div>
              </div>
              <div className="text-[5px] text-green-600">Azi 14:00</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-[6px]">C</div>
                <div>
                  <div className="font-semibold text-[6px]">Cardiologie</div>
                  <div className="text-[5px] text-slate-400">Dr. Ionescu</div>
                </div>
              </div>
              <div className="text-[5px] text-green-600">Maine 10:00</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[6px]">D</div>
                <div>
                  <div className="font-semibold text-[6px]">Dermatologie</div>
                  <div className="text-[5px] text-slate-400">Dr. Marin</div>
                </div>
              </div>
              <div className="text-[5px] text-orange-600">3 zile</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  dentist: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-sky-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-sky-400 to-blue-500 rounded-md flex items-center justify-center text-white text-[5px]">D</div>
            <span className="font-bold text-[7px]">DentaCare</span>
          </div>
          <div className="text-sky-500 text-[5px]">Zambeste!</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-2">
            <div className="text-[5px] text-sky-700">Urmatoarea programare</div>
            <div className="font-bold text-[7px]">Control + Detartraj</div>
            <div className="text-[5px] text-slate-500 mt-0.5">Vineri, 15 Feb • 10:00</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Servicii stomatologice</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Consultatie</div>
                <div className="text-[5px] text-slate-400">20 min</div>
              </div>
              <div className="text-sky-600 font-bold text-[6px]">100 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Detartraj complet</div>
                <div className="text-[5px] text-slate-400">45 min</div>
              </div>
              <div className="text-sky-600 font-bold text-[6px]">250 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Albire dentara</div>
                <div className="text-[5px] text-slate-400">60 min</div>
              </div>
              <div className="text-sky-600 font-bold text-[6px]">800 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Extractie</div>
                <div className="text-[5px] text-slate-400">30 min</div>
              </div>
              <div className="text-sky-600 font-bold text-[6px]">200 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  veterinar: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-green-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md flex items-center justify-center text-white text-[5px]">V</div>
            <span className="font-bold text-[7px]">VetCare</span>
          </div>
          <div className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full text-[5px]">Urgente 24h</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-2 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full"></div>
            <div>
              <div className="font-bold text-[7px]">Max</div>
              <div className="text-[5px] text-slate-500">Labrador • 3 ani</div>
              <div className="text-[5px] text-green-600">Vaccin: la zi</div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Reminder-uri active</div>
          <div className="bg-orange-50 rounded-lg p-1.5 border border-orange-200 mb-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-400 rounded-full flex items-center justify-center text-white text-[5px]">!</div>
              <div>
                <div className="font-semibold text-[6px] text-orange-700">Deparazitare</div>
                <div className="text-[5px] text-orange-600">In 5 zile</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Servicii</div>
          <div className="space-y-1">
            <div className="bg-white rounded p-1.5 border border-slate-100 flex justify-between items-center">
              <span className="text-[6px]">Consultatie</span>
              <span className="text-green-600 font-bold text-[6px]">120 lei</span>
            </div>
            <div className="bg-white rounded p-1.5 border border-slate-100 flex justify-between items-center">
              <span className="text-[6px]">Vaccinare</span>
              <span className="text-green-600 font-bold text-[6px]">80 lei</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  'service-auto': (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-slate-100 to-white text-slate-800 text-[6px]">
        <div className="bg-slate-800 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md"></div>
            <span className="font-bold text-[7px] text-white">AutoService Pro</span>
          </div>
          <div className="text-[5px] text-slate-400">24/7</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-2 border border-slate-200">
            <div className="text-[5px] text-slate-500">Masina ta</div>
            <div className="font-bold text-[7px]">BMW X5 • B 123 ABC</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="text-[5px]">
                <span className="text-slate-400">ITP:</span>
                <span className="text-green-600 ml-0.5">Valid</span>
              </div>
              <div className="text-[5px]">
                <span className="text-slate-400">RCA:</span>
                <span className="text-orange-600 ml-0.5">30 zile</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Status reparatie</div>
          <div className="bg-white rounded-lg p-2 border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-0.5 bg-blue-500"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-0.5 bg-slate-200"></div>
                <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
              </div>
            </div>
            <div className="text-[6px] font-semibold">In lucru: Schimb ulei</div>
            <div className="text-[5px] text-slate-400">Estimat: 2 ore</div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="text-[5px] text-slate-500 mb-1">Servicii populare</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded p-1.5 border border-slate-100 text-center">
              <div className="font-semibold text-[6px]">Revizie</div>
              <div className="text-blue-600 text-[5px]">350 lei</div>
            </div>
            <div className="bg-white rounded p-1.5 border border-slate-100 text-center">
              <div className="font-semibold text-[6px]">ITP</div>
              <div className="text-blue-600 text-[5px]">150 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  imobiliare: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-emerald-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-md"></div>
            <span className="font-bold text-[7px]">Casa Ta</span>
          </div>
          <div className="text-[5px] text-emerald-600">126 anunturi</div>
        </div>
        <div className="px-2 py-1">
          <div className="flex gap-1 overflow-hidden">
            <div className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Toate</div>
            <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Vanzare</div>
            <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Inchiriere</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Proprietati noi</div>
          <div className="space-y-1.5">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="h-8 bg-gradient-to-br from-emerald-200 to-green-300"></div>
              <div className="p-1.5">
                <div className="font-bold text-[6px]">Apartament 3 camere</div>
                <div className="text-[5px] text-slate-400">Timisoara • 85 mp</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-emerald-600 font-bold text-[7px]">89.000 EUR</span>
                  <span className="bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded text-[4px]">NOU</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="h-8 bg-gradient-to-br from-blue-200 to-slate-300"></div>
              <div className="p-1.5">
                <div className="font-bold text-[6px]">Casa cu gradina</div>
                <div className="text-[5px] text-slate-400">Giroc • 180 mp + 400 mp teren</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-emerald-600 font-bold text-[7px]">165.000 EUR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  avocat: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-slate-100 to-white text-slate-800 text-[6px]">
        <div className="bg-slate-900 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-md"></div>
            <span className="font-bold text-[7px] text-white">Avocat Popescu</span>
          </div>
          <div className="text-[5px] text-slate-400">Drept Civil</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-70">Consultatie online</div>
            <div className="font-bold text-[7px]">Prima consultatie gratuita</div>
            <div className="text-amber-400 text-[5px] mt-0.5">Programeaza acum</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Servicii juridice</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Consultanta juridica</div>
                <div className="text-[5px] text-slate-400">1 ora • Online/Cabinet</div>
              </div>
              <div className="text-amber-600 font-bold text-[6px]">200 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Redactare contract</div>
                <div className="text-[5px] text-slate-400">3-5 zile lucratoare</div>
              </div>
              <div className="text-amber-600 font-bold text-[6px]">500 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Reprezentare instanta</div>
                <div className="text-[5px] text-slate-400">Tarif pe caz</div>
              </div>
              <div className="text-amber-600 font-bold text-[6px]">Oferta</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-amber-50 rounded-lg p-1.5 border border-amber-200 text-center">
            <div className="text-[5px] text-amber-700">Disponibil pentru urgente</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  contabil: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-indigo-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center text-white text-[5px]">C</div>
            <span className="font-bold text-[7px]">ContaExpert</span>
          </div>
          <div className="text-[5px] text-indigo-600">Dashboard</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-80">Status lunar</div>
            <div className="font-bold text-[8px]">Totul la zi</div>
            <div className="flex gap-2 mt-1">
              <div className="bg-white/20 px-1.5 py-0.5 rounded text-[5px]">TVA: OK</div>
              <div className="bg-white/20 px-1.5 py-0.5 rounded text-[5px]">Salarii: OK</div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Termene importante</div>
          <div className="space-y-1">
            <div className="bg-orange-50 rounded-lg p-1.5 border border-orange-200 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px] text-orange-700">Declaratie TVA</div>
                <div className="text-[5px] text-orange-600">Termen: 25 feb</div>
              </div>
              <div className="text-[5px] text-orange-600">5 zile</div>
            </div>
            <div className="bg-green-50 rounded-lg p-1.5 border border-green-200 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px] text-green-700">Salarii depuse</div>
                <div className="text-[5px] text-green-600">Ianuarie 2025</div>
              </div>
              <div className="text-green-500 text-[6px]">Done</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-white rounded-lg p-1.5 border border-slate-200">
            <div className="text-[5px] text-slate-400">Incarca documente</div>
            <div className="mt-1 border-2 border-dashed border-slate-200 rounded p-1.5 text-center text-[5px] text-slate-400">
              Trage fisierele aici
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  fotograf: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white text-[6px]">
        <div className="px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white rounded-md"></div>
            <span className="font-bold text-[7px]">Art Studio</span>
          </div>
          <div className="text-[5px] text-slate-400">Portfolio</div>
        </div>
        <div className="px-2 py-1">
          <div className="flex gap-1 overflow-hidden">
            <div className="bg-white text-slate-900 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Toate</div>
            <div className="bg-slate-700 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Nunti</div>
            <div className="bg-slate-700 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Portret</div>
          </div>
        </div>
        <div className="px-2">
          <div className="grid grid-cols-3 gap-0.5">
            <div className="aspect-square bg-gradient-to-br from-rose-300 to-pink-400 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-amber-300 to-orange-400 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-emerald-300 to-green-400 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-blue-300 to-indigo-400 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-purple-300 to-violet-400 rounded"></div>
            <div className="aspect-square bg-gradient-to-br from-cyan-300 to-teal-400 rounded"></div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
            <div className="text-[5px] text-slate-400">Pachet popular</div>
            <div className="font-bold text-[7px]">Sedinta foto completa</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-[5px] text-slate-400">2h + 50 poze editate</span>
              <span className="text-white font-bold text-[6px]">800 lei</span>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-white text-slate-900 rounded-lg p-1.5 text-center">
            <div className="font-bold text-[6px]">Rezerva sedinta foto</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  croitorie: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-rose-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-rose-500 to-pink-600 rounded-md"></div>
            <span className="font-bold text-[7px]">Atelier Elena</span>
          </div>
          <div className="text-[5px] text-rose-600">Croitorie</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-2">
            <div className="text-[5px] text-rose-700">Comanda speciala</div>
            <div className="font-bold text-[7px]">Rochie la comanda</div>
            <div className="text-[5px] text-slate-500 mt-0.5">Consultatie + masuratori incluse</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Servicii disponibile</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Modificari simple</div>
                <div className="text-[5px] text-slate-400">Scurtat, largit, etc.</div>
              </div>
              <div className="text-rose-600 font-bold text-[6px]">30-80 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Reparatii</div>
                <div className="text-[5px] text-slate-400">Fermoar, nasturi, cusaturi</div>
              </div>
              <div className="text-rose-600 font-bold text-[6px]">20-60 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Creatii originale</div>
                <div className="text-[5px] text-slate-400">Rochii, costume, etc.</div>
              </div>
              <div className="text-rose-600 font-bold text-[6px]">de la 300 lei</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-rose-500 text-white rounded-lg p-1.5 text-center">
            <div className="font-bold text-[6px]">Programeaza consultatie</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  florarie: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-pink-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full"></div>
            <span className="font-bold text-[7px]">Flori cu Suflet</span>
          </div>
          <div className="w-4 h-4 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-[6px]">0</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-80">Livrare gratuita</div>
            <div className="font-bold text-[7px]">Comenzi peste 150 lei</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Buchete populare</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-8 bg-gradient-to-br from-red-200 to-pink-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Trandafiri rosii</div>
              <div className="text-[5px] text-slate-400">11 fire</div>
              <div className="text-pink-600 font-bold text-[6px]">180 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-8 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Buchet mixt</div>
              <div className="text-[5px] text-slate-400">Sezonier</div>
              <div className="text-pink-600 font-bold text-[6px]">120 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-8 bg-gradient-to-br from-white to-pink-100 rounded-md mb-1 border border-slate-100"></div>
              <div className="font-semibold text-[6px]">Bujori albi</div>
              <div className="text-[5px] text-slate-400">7 fire</div>
              <div className="text-pink-600 font-bold text-[6px]">250 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-8 bg-gradient-to-br from-purple-200 to-violet-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Aranjament</div>
              <div className="text-[5px] text-slate-400">In cutie</div>
              <div className="text-pink-600 font-bold text-[6px]">200 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  petshop: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-orange-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-md flex items-center justify-center text-white text-[5px]">P</div>
            <span className="font-bold text-[7px]">Pet Paradise</span>
          </div>
          <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-[6px]">3</div>
        </div>
        <div className="px-2 py-1">
          <div className="flex gap-1 overflow-hidden">
            <div className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Toate</div>
            <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Caini</div>
            <div className="bg-slate-100 px-2 py-0.5 rounded-full text-[5px] whitespace-nowrap">Pisici</div>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-2 mb-1.5">
            <div className="text-[5px] text-orange-700">Abonament hrana</div>
            <div className="font-bold text-[7px]">Livrare lunara -15%</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Produse populare</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-6 bg-gradient-to-br from-amber-200 to-orange-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Royal Canin</div>
              <div className="text-[5px] text-slate-400">Caini adulti 4kg</div>
              <div className="text-orange-600 font-bold text-[6px]">120 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100">
              <div className="w-full h-6 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Whiskas</div>
              <div className="text-[5px] text-slate-400">Pisici 2kg</div>
              <div className="text-orange-600 font-bold text-[6px]">65 lei</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-white rounded-lg p-1.5 border border-slate-200 flex justify-between items-center">
            <div>
              <div className="font-semibold text-[6px]">Jucarii</div>
              <div className="text-[5px] text-slate-400">De la 15 lei</div>
            </div>
            <div className="text-orange-500 text-[6px]">Vezi tot</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  farmacie: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-green-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md flex items-center justify-center text-white text-[6px]">+</div>
            <span className="font-bold text-[7px]">Farmacia Verde</span>
          </div>
          <div className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full text-[5px]">Non-stop</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-2">
            <div className="text-[5px] text-green-700">Reminder activ</div>
            <div className="font-bold text-[7px]">Vitamina D - ora 08:00</div>
            <div className="flex gap-1 mt-1">
              <div className="bg-green-500 text-white px-1.5 py-0.5 rounded text-[5px]">Luat</div>
              <div className="bg-white text-green-600 px-1.5 py-0.5 rounded text-[5px] border border-green-200">Amana</div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Cauta medicamente</div>
          <div className="bg-slate-100 rounded-lg p-1.5 mb-1.5 flex items-center gap-1">
            <div className="text-slate-400 text-[6px]">Cauta...</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Comenzi frecvente</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Paracetamol 500mg</div>
                <div className="text-[5px] text-slate-400">20 comprimate</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-600 font-bold text-[6px]">12 lei</span>
                <div className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-[6px]">+</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Vitamina C 1000mg</div>
                <div className="text-[5px] text-slate-400">30 comprimate</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-600 font-bold text-[6px]">28 lei</span>
                <div className="bg-green-500 text-white w-4 h-4 rounded flex items-center justify-center text-[6px]">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  'scoala-soferi': (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-blue-50 to-white text-slate-800 text-[6px]">
        <div className="bg-blue-600 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/20 rounded-md"></div>
            <span className="font-bold text-[7px] text-white">AutoDrive</span>
          </div>
          <div className="text-[5px] text-white/80">Scoala Soferi</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-2">
            <div className="text-[5px] text-blue-700">Progresul tau</div>
            <div className="font-bold text-[7px]">18 ore / 30 ore condus</div>
            <div className="mt-1.5 h-1.5 bg-white rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </div>
            <div className="text-[5px] text-slate-500 mt-1">60% completat</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Urmatoarea sedinta</div>
          <div className="bg-white rounded-lg p-1.5 border border-blue-200 mb-1.5">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Condus in oras</div>
                <div className="text-[5px] text-slate-400">Maine, 10:00 - 12:00</div>
              </div>
              <div className="text-blue-600 text-[5px]">Instructor Mihai</div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Sedinte disponibile</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
              <div className="font-semibold text-[6px]">Teorie</div>
              <div className="text-blue-600 text-[5px]">3 locuri</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
              <div className="font-semibold text-[6px]">Practica</div>
              <div className="text-blue-600 text-[5px]">5 locuri</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  'limba-straina': (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-violet-50 to-white text-slate-800 text-[6px]">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/20 rounded-md flex items-center justify-center text-[5px] text-white">A</div>
            <span className="font-bold text-[7px] text-white">LinguaPro</span>
          </div>
          <div className="text-[5px] text-white/80">Nivel B1</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-2">
            <div className="text-[5px] text-violet-700">Serie zilnica</div>
            <div className="font-bold text-[7px]">12 zile consecutive</div>
            <div className="flex gap-1 mt-1">
              {[1,2,3,4,5,6,7].map(i => (
                <div key={i} className={`w-3 h-3 rounded-full flex items-center justify-center text-[4px] ${i <= 5 ? 'bg-violet-500 text-white' : 'bg-white border border-violet-200'}`}>
                  {i <= 5 ? '✓' : ''}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Cursuri active</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded flex items-center justify-center text-white text-[6px]">EN</div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Engleza Business</div>
                <div className="text-[5px] text-slate-400">Lectia 14 din 30</div>
              </div>
              <div className="text-violet-600 text-[5px]">47%</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center text-white text-[6px]">IT</div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Italiana Incepatori</div>
                <div className="text-[5px] text-slate-400">Lectia 5 din 20</div>
              </div>
              <div className="text-violet-600 text-[5px]">25%</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-violet-500 text-white rounded-lg p-1.5 text-center">
            <div className="font-bold text-[6px]">Continua lectia</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  meditatii: (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-cyan-50 to-white text-slate-800 text-[6px]">
        <div className="bg-white px-2 py-1.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md flex items-center justify-center text-white text-[5px]">M</div>
            <span className="font-bold text-[7px]">EduMentor</span>
          </div>
          <div className="text-[5px] text-cyan-600">Online</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2 text-white">
            <div className="text-[5px] opacity-80">Urmatoarea sedinta</div>
            <div className="font-bold text-[7px]">Matematica - Geometrie</div>
            <div className="text-[5px] mt-0.5">Azi, 16:00 • Prof. Ionescu</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Profesorii tai</div>
          <div className="space-y-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full"></div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Prof. Ionescu</div>
                <div className="text-[5px] text-slate-400">Matematica</div>
              </div>
              <div className="text-yellow-500 text-[5px]">4.9</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"></div>
              <div className="flex-1">
                <div className="font-semibold text-[6px]">Prof. Marin</div>
                <div className="text-[5px] text-slate-400">Fizica</div>
              </div>
              <div className="text-yellow-500 text-[5px]">4.8</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-white rounded-lg p-1.5 border border-slate-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-[6px]">Pachet 10 sedinte</div>
                <div className="text-[5px] text-slate-400">Economisesti 15%</div>
              </div>
              <div className="text-cyan-600 font-bold text-[6px]">850 lei</div>
            </div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  'escape-room': (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white text-[6px]">
        <div className="px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-md"></div>
            <span className="font-bold text-[7px]">Escape Quest</span>
          </div>
          <div className="text-[5px] text-slate-400">Rezerva acum</div>
        </div>
        <div className="px-2 py-1">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-2">
            <div className="text-[5px] opacity-80">Camera populara</div>
            <div className="font-bold text-[7px]">Misterul Castelului</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 4 ? 'bg-yellow-400' : 'bg-white/30'}`}></div>
                ))}
              </div>
              <span className="text-[5px]">Dificultate: 4/5</span>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-400 mb-1">Camere disponibile</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-slate-800 rounded-lg p-1.5 border border-slate-700">
              <div className="w-full h-6 bg-gradient-to-br from-purple-800 to-purple-900 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Laboratorul</div>
              <div className="flex items-center justify-between mt-0.5">
                <div className="text-[5px] text-slate-400">60 min</div>
                <div className="flex gap-0.5">
                  {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>)}
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-1.5 border border-slate-700">
              <div className="w-full h-6 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Jungla</div>
              <div className="flex items-center justify-between mt-0.5">
                <div className="text-[5px] text-slate-400">45 min</div>
                <div className="flex gap-0.5">
                  {[1,2].map(i => <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-white text-slate-900 rounded-lg p-1.5 flex justify-between items-center">
            <div>
              <div className="font-bold text-[6px]">De la 200 lei/grup</div>
              <div className="text-[5px] text-slate-500">2-6 persoane</div>
            </div>
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-[5px]">Rezerva</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
  'sala-evenimente': (
    <PhoneMockup>
      <div className="h-full bg-gradient-to-b from-amber-50 to-white text-slate-800 text-[6px]">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/20 rounded-md"></div>
            <span className="font-bold text-[7px] text-white">Grand Events</span>
          </div>
          <div className="text-[5px] text-white/80">Rezervari</div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-2">
            <div className="text-[5px] text-amber-700">Oferta lunii</div>
            <div className="font-bold text-[7px]">Nunta completa -20%</div>
            <div className="text-[5px] text-slate-500 mt-0.5">Sala + Catering + DJ incluse</div>
          </div>
        </div>
        <div className="px-2">
          <div className="text-[5px] text-slate-500 mb-1">Tipuri de evenimente</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
              <div className="w-full h-5 bg-gradient-to-br from-pink-200 to-rose-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Nunti</div>
              <div className="text-amber-600 text-[5px]">de la 5000 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
              <div className="w-full h-5 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Corporate</div>
              <div className="text-amber-600 text-[5px]">de la 2000 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
              <div className="w-full h-5 bg-gradient-to-br from-purple-200 to-violet-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Botez</div>
              <div className="text-amber-600 text-[5px]">de la 3000 lei</div>
            </div>
            <div className="bg-white rounded-lg p-1.5 border border-slate-100 text-center">
              <div className="w-full h-5 bg-gradient-to-br from-green-200 to-emerald-300 rounded-md mb-1"></div>
              <div className="font-semibold text-[6px]">Aniversari</div>
              <div className="text-amber-600 text-[5px]">de la 1500 lei</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-amber-500 text-white rounded-lg p-1.5 text-center">
            <div className="font-bold text-[6px]">Verifica disponibilitatea</div>
          </div>
        </div>
      </div>
    </PhoneMockup>
  ),
};

// Template Data - Toate industriile cu features detaliate
const templates = [
  // ==================== FOOD & BEVERAGE ====================
  {
    id: 'restaurant',
    category: 'Food & Beverage',
    name: 'Restaurant & Pizzerie',
    emoji: '🍕',
    description: 'Transformă-ți restaurantul într-o experiență digitală completă. Clienții comandă direct din aplicație, fără comisioane la platforme terțe.',
    image: '/templates/restaurant.png',
    color: 'from-orange-500 to-red-600',
    popularBadge: true,
    packageRecommended: 'Complet',
    price: '999€',
    demoUrl: '#',
    features: [
      {
        name: 'Meniu Digital Interactiv',
        description: 'Meniu cu poze, descrieri, alergeni și prețuri actualizabile instant. Clienții văd exact ce comandă.',
        icon: 'menu'
      },
      {
        name: 'Comenzi Online',
        description: 'Sistem complet de comenzi cu coș, checkout și confirmare. Fără comisioane către Glovo sau Tazz.',
        icon: 'cart'
      },
      {
        name: 'Tracking Livrare',
        description: 'Clientul vede în timp real unde e comanda: pregătire, în drum, livrată. Reduce apelurile telefonice cu 80%.',
        icon: 'location'
      },
      {
        name: 'Rezervări Mese',
        description: 'Calendar cu disponibilitate în timp real. Clientul alege data, ora și numărul de persoane.',
        icon: 'calendar'
      },
      {
        name: 'Program Fidelitate',
        description: 'La fiecare 10 comenzi, o pizza gratis. Clienții revin pentru că au puncte de colectat.',
        icon: 'star'
      },
      {
        name: 'Notificări Promoții',
        description: 'Trimiți "Pizza zilei -30%" direct pe telefon. Rata de deschidere 90% vs 20% la email.',
        icon: 'bell'
      },
      {
        name: 'QR Code Masă',
        description: 'Clientul scanează, comandă și plătește de la masă. Reduce timpul de așteptare cu 50%.',
        icon: 'qr'
      },
      {
        name: 'Integrare Plăți',
        description: 'Card, cash la livrare sau plată la masă. Toate opțiunile într-un singur loc.',
        icon: 'card'
      }
    ],
    benefits: [
      'Economisești 15-30% comisioane platforme',
      'Comenzi directe = profit mai mare',
      'Clienți fideli care revin',
      'Mai puține apeluri telefonice'
    ],
    testimonial: {
      text: 'Am eliminat Glovo și acum toate comenzile vin direct. Economisesc 2000€/lună.',
      author: 'Marco, Pizzeria Roma',
      rating: 5
    }
  },
  {
    id: 'cafenea',
    category: 'Food & Beverage',
    name: 'Cafenea & Coffee Shop',
    emoji: '☕',
    description: 'Pentru cafenele moderne care vor clienți fideli. Precomandă, pick-up rapid și program de loialitate.',
    image: '/templates/cafenea.png',
    color: 'from-amber-600 to-orange-700',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Precomandă & Pick-up',
        description: 'Clientul comandă din drum, tu pregătești. Ajunge, ia cafeaua și pleacă. Zero așteptare.',
        icon: 'clock'
      },
      {
        name: 'Meniu cu Personalizări',
        description: 'Lapte de ovăz, extra shot, fără zahăr - toate preferințele salvate pentru comenzi viitoare.',
        icon: 'menu'
      },
      {
        name: 'Card Digital Fidelitate',
        description: 'A 10-a cafea gratis. Cardul e în telefon, nu se pierde niciodată.',
        icon: 'card'
      },
      {
        name: 'Comenzi Favorite',
        description: '"Cafeaua mea" - un singur tap și comanda preferată e plasată.',
        icon: 'heart'
      },
      {
        name: 'Notificări Happy Hour',
        description: '15:00-17:00 toate băuturile -20%. Trimis automat către toți clienții.',
        icon: 'bell'
      },
      {
        name: 'Abonamente Cafea',
        description: '30 cafele/lună pentru 99 lei. Venit recurent garantat.',
        icon: 'subscription'
      }
    ],
    benefits: [
      'Reduce coada la casă',
      'Clienți care revin zilnic',
      'Venit predictibil din abonamente',
      'Marketing gratuit prin notificări'
    ]
  },
  {
    id: 'brutarie',
    category: 'Food & Beverage',
    name: 'Brutărie & Patiserie',
    emoji: '🥐',
    description: 'Pentru brutării artizanale. Precomandă pâine proaspătă, torturi personalizate și produse de sezon.',
    image: '/templates/brutarie.png',
    color: 'from-yellow-600 to-amber-700',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Precomandă Pâine',
        description: 'Clientul comandă seara, tu coci dimineața, el ridică proaspăt. Zero risipă.',
        icon: 'calendar'
      },
      {
        name: 'Torturi Personalizate',
        description: 'Formular cu data, număr persoane, tema, text. Toate detaliile clare pentru tort perfect.',
        icon: 'cake'
      },
      {
        name: 'Catalog Produse Zilnice',
        description: 'Ce e proaspăt azi? Croissante la 7:00, franzele la 10:00. Actualizat live.',
        icon: 'menu'
      },
      {
        name: 'Notificări "Proaspăt din Cuptor"',
        description: 'Cozonacii sunt gata! Trimis instant - primii 20 clienți îi prind calzi.',
        icon: 'bell'
      },
      {
        name: 'Abonament Pâine Săptămânal',
        description: '7 franzele/săptămână livrate acasă. Venit recurent.',
        icon: 'subscription'
      },
      {
        name: 'Comenzi Corporate',
        description: 'Firme care comandă cornuri pentru ședințe. Factură automată.',
        icon: 'building'
      }
    ],
    benefits: [
      'Zero risipă prin precomandă',
      'Torturi vândute înainte să le faci',
      'Clienți fideli prin abonamente',
      'Comenzi corporate recurente'
    ]
  },

  // ==================== BEAUTY & WELLNESS ====================
  {
    id: 'salon',
    category: 'Beauty & Wellness',
    name: 'Salon Înfrumusețare',
    emoji: '💇‍♀️',
    description: 'Programări online 24/7, galerie lucrări și notificări automate. Clienții nu mai sună, rezervă singuri.',
    image: '/templates/salon.png',
    color: 'from-pink-500 to-rose-600',
    popularBadge: true,
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Programări Online 24/7',
        description: 'Clienta rezervă la 23:00 de pe canapea. Tu dormi, agenda se umple.',
        icon: 'calendar'
      },
      {
        name: 'Calendar Stiliste',
        description: 'Fiecare stilistă are calendarul ei. Clientele aleg cu cine vor.',
        icon: 'users'
      },
      {
        name: 'Galerie Lucrări',
        description: 'Portofoliu cu coafuri, manichiuri, tratamente. Clientele văd ce pot obține.',
        icon: 'image'
      },
      {
        name: 'Reminder Automat',
        description: 'SMS/notificare cu 24h și 2h înainte. Reduce neprezentările cu 70%.',
        icon: 'bell'
      },
      {
        name: 'Istoric Cliente',
        description: 'Ce nuanță a avut ultima dată? Ce tratament? Totul salvat automat.',
        icon: 'history'
      },
      {
        name: 'Pachete & Abonamente',
        description: '10 ședințe manichiură la preț de 8. Vânzări în avans garantate.',
        icon: 'package'
      },
      {
        name: 'Program Fidelitate',
        description: 'La fiecare 500 lei cheltuiți, 50 lei reducere. Cliente care revin.',
        icon: 'star'
      },
      {
        name: 'Produse Recomandate',
        description: 'După tratament, sugerează produsele potrivite pentru acasă. Venituri extra.',
        icon: 'cart'
      }
    ],
    benefits: [
      'Programări și la 3 noaptea',
      'Zero apeluri telefonice',
      'Neprezentări reduse dramatic',
      'Vânzări extra din produse'
    ],
    testimonial: {
      text: 'Înainte răspundeam la 50 apeluri/zi pentru programări. Acum? Zero. Totul online.',
      author: 'Andreea, Salon Bella',
      rating: 5
    }
  },
  {
    id: 'frizerie',
    category: 'Beauty & Wellness',
    name: 'Frizerie Bărbați',
    emoji: '💈',
    description: 'Programări rapide pentru bărbați ocupați. Alege frizerul, ora și gata. Simplu și masculin.',
    image: '/templates/frizerie.png',
    color: 'from-slate-600 to-slate-800',
    packageRecommended: 'Vitrină',
    price: '299€',
    features: [
      {
        name: 'Programare în 3 Tapuri',
        description: 'Serviciu → Frizer → Oră. Gata. Fără formulare complicate.',
        icon: 'tap'
      },
      {
        name: 'Profil Frizeri',
        description: 'Fiecare frizer cu poza, specializare și rating. Clientul alege informat.',
        icon: 'users'
      },
      {
        name: 'Servicii Clare',
        description: 'Tuns simplu, fade, barbă, pachet complet. Prețuri și durată vizibile.',
        icon: 'list'
      },
      {
        name: 'Reminder SMS',
        description: 'Notificare cu 2 ore înainte. Bărbații uită, reminder-ul salvează.',
        icon: 'bell'
      },
      {
        name: 'Walk-in Status',
        description: 'Vezi dacă e coadă acum. "3 persoane înaintea ta" - decizi dacă mergi.',
        icon: 'queue'
      },
      {
        name: 'Reprogramare Ușoară',
        description: 'Nu mai poți? Un tap și muți programarea. Fără să suni.',
        icon: 'calendar'
      }
    ],
    benefits: [
      'Programări fără telefon',
      'Bărbații apreciază simplicitatea',
      'Mai puține "am uitat"',
      'Agenda plină automat'
    ]
  },
  {
    id: 'spa',
    category: 'Beauty & Wellness',
    name: 'Spa & Masaj',
    emoji: '🧖‍♀️',
    description: 'Experiență de relaxare din primul click. Programări tratamente, pachete wellness și vouchere cadou.',
    image: '/templates/spa.png',
    color: 'from-teal-500 to-cyan-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Catalog Tratamente',
        description: 'Fiecare tratament cu descriere, beneficii, durată și preț. Clientul știe exact ce primește.',
        icon: 'menu'
      },
      {
        name: 'Programări Terapeut',
        description: 'Alege terapeutul preferat și ora disponibilă. Continuitate în tratament.',
        icon: 'calendar'
      },
      {
        name: 'Pachete Wellness',
        description: 'Masaj + Saună + Facial la preț special. Vânzări mai mari per vizită.',
        icon: 'package'
      },
      {
        name: 'Vouchere Cadou',
        description: 'Cumpără voucher digital pentru cineva drag. Cadoul perfect, vândut online.',
        icon: 'gift'
      },
      {
        name: 'Abonamente Lunare',
        description: '4 masaje/lună la preț fix. Venit recurent predictibil.',
        icon: 'subscription'
      },
      {
        name: 'Reminder Hidratare',
        description: 'După masaj: "Bea 2L apă azi". Clientul simte că îți pasă.',
        icon: 'heart'
      }
    ],
    benefits: [
      'Vouchere = vânzări fără efort',
      'Abonamente = venit garantat',
      'Experiență premium din telefon',
      'Clienți care recomandă'
    ]
  },

  // ==================== HEALTH & FITNESS ====================
  {
    id: 'fitness',
    category: 'Health & Fitness',
    name: 'Sală Fitness & Gym',
    emoji: '🏋️',
    description: 'Gestionează membrii, clasele și check-in-ul digital. Tot ce are nevoie un gym modern.',
    image: '/templates/fitness.png',
    color: 'from-red-500 to-orange-600',
    popularBadge: true,
    packageRecommended: 'Complet',
    price: '999€',
    features: [
      {
        name: 'Check-in Digital',
        description: 'Scanează QR la intrare. Vezi câți sunt în sală acum. Evită aglomerația.',
        icon: 'qr'
      },
      {
        name: 'Programare Clase',
        description: 'Yoga marți 18:00, Spinning joi 19:00. Locuri limitate, rezervare obligatorie.',
        icon: 'calendar'
      },
      {
        name: 'Abonamente Online',
        description: 'Cumpără sau reînnoiește abonamentul din aplicație. Zero cozi la recepție.',
        icon: 'card'
      },
      {
        name: 'Progres Personal',
        description: 'Tracking greutate, măsurători, PR-uri. Membrii văd cum evoluează.',
        icon: 'chart'
      },
      {
        name: 'Antrenori Disponibili',
        description: 'Profiluri antrenori cu specializări. Rezervă ședință personal training.',
        icon: 'users'
      },
      {
        name: 'Notificări Motivaționale',
        description: '"Nu ai fost la sală de 5 zile. Hai la antrenament!" - reactivează membrii.',
        icon: 'bell'
      },
      {
        name: 'Program Sală Live',
        description: 'Deschis/închis, program sărbători, modificări afișate instant.',
        icon: 'clock'
      },
      {
        name: 'Provocări & Competiții',
        description: 'Leaderboard lunar. Cine face cele mai multe antrenamente câștigă.',
        icon: 'trophy'
      }
    ],
    benefits: [
      'Membrii activi și motivați',
      'Clase pline prin rezervare',
      'Reînnoiri automate abonamente',
      'Comunitate în aplicație'
    ],
    testimonial: {
      text: 'Clasele se umplu în 2 ore de la postare. Înainte sunam fiecare membru.',
      author: 'Dan, FitZone Gym',
      rating: 5
    }
  },
  {
    id: 'yoga',
    category: 'Health & Fitness',
    name: 'Studio Yoga & Pilates',
    emoji: '🧘',
    description: 'Pentru studiouri care oferă experiențe, nu doar clase. Programări, video on-demand și comunitate.',
    image: '/templates/yoga.png',
    color: 'from-purple-500 to-indigo-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Calendar Clase',
        description: 'Toate clasele vizibile cu instructor, nivel și locuri disponibile.',
        icon: 'calendar'
      },
      {
        name: 'Video On-Demand',
        description: 'Biblioteca de clase înregistrate. Practică acasă când vrei.',
        icon: 'video'
      },
      {
        name: 'Nivel & Progres',
        description: 'Începător → Intermediar → Avansat. Tracking-ul progresului motivează.',
        icon: 'chart'
      },
      {
        name: 'Pachete Clase',
        description: '10 clase la preț de 8. Vinde în avans, cash-flow asigurat.',
        icon: 'package'
      },
      {
        name: 'Reminder Mindful',
        description: '"Respiră adânc. Clasa ta e în 1 oră." Comunicare pe tonul brandului.',
        icon: 'bell'
      },
      {
        name: 'Workshop-uri Speciale',
        description: 'Evenimente unice cu înregistrare separată și preț premium.',
        icon: 'star'
      }
    ],
    benefits: [
      'Venituri și când studioul e gol (video)',
      'Comunitate online activă',
      'Pachete vândute în avans',
      'Diferențiere față de competiție'
    ]
  },
  {
    id: 'clinica',
    category: 'Health & Fitness',
    name: 'Clinică Medicală',
    emoji: '🏥',
    description: 'Programări la medici, rezultate analize online și comunicare securizată. Profesionalism digital.',
    image: '/templates/clinica.png',
    color: 'from-blue-500 to-cyan-600',
    packageRecommended: 'Complet',
    price: '999€',
    features: [
      {
        name: 'Programări Online',
        description: 'Alege specialitatea, medicul și ora disponibilă. Confirmare instant.',
        icon: 'calendar'
      },
      {
        name: 'Rezultate Analize',
        description: 'Analizele apar în aplicație când sunt gata. Fără drum la clinică.',
        icon: 'document'
      },
      {
        name: 'Istoric Medical',
        description: 'Toate consultațiile și rezultatele într-un singur loc. Acces oricând.',
        icon: 'history'
      },
      {
        name: 'Reminder Consultație',
        description: 'Notificare cu 24h înainte + instrucțiuni pregătire (nemâncat, analize, etc).',
        icon: 'bell'
      },
      {
        name: 'Profil Medici',
        description: 'CV, specializări, experiență. Pacientul alege informat.',
        icon: 'users'
      },
      {
        name: 'Plată Online',
        description: 'Plătește consultația înainte sau după. Factură electronică automată.',
        icon: 'card'
      },
      {
        name: 'Rețete Digitale',
        description: 'Rețeta apare în aplicație. Mergi direct la farmacie.',
        icon: 'prescription'
      },
      {
        name: 'Teleconsultații',
        description: 'Video-call cu medicul pentru urmărire sau afecțiuni minore.',
        icon: 'video'
      }
    ],
    benefits: [
      'Pacienți care revin la tine',
      'Mai puține apeluri la recepție',
      'Imagine profesională modernă',
      'Eficiență operațională crescută'
    ]
  },
  {
    id: 'dentist',
    category: 'Health & Fitness',
    name: 'Cabinet Stomatologic',
    emoji: '🦷',
    description: 'Pentru cabinete dentare moderne. Programări, reminder-e tratament și comunicare cu pacienții.',
    image: '/templates/dentist.png',
    color: 'from-sky-500 to-blue-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Programări Inteligente',
        description: 'Sistem care știe cât durează fiecare procedură. Zero suprapuneri.',
        icon: 'calendar'
      },
      {
        name: 'Reminder Tratament',
        description: '"Control la 6 luni" - notificare automată. Pacienții revin la timp.',
        icon: 'bell'
      },
      {
        name: 'Plan Tratament',
        description: 'Pacientul vede ce urmează: detartraj → plombă → coroană. Clar și transparent.',
        icon: 'list'
      },
      {
        name: 'Galerie Înainte/După',
        description: 'Cazuri de albire, implanturi, estetică. Convinge prin rezultate.',
        icon: 'image'
      },
      {
        name: 'Prețuri Transparente',
        description: 'Lista completă de servicii și prețuri. Fără surprize la plată.',
        icon: 'money'
      },
      {
        name: 'Instrucțiuni Post-Procedură',
        description: 'După extracție: "Nu mânca 2h, nu fumează 24h". Trimis automat.',
        icon: 'document'
      }
    ],
    benefits: [
      'Pacienți care revin la controale',
      'Tratamente complete, nu abandonate',
      'Încredere prin transparență',
      'Recomandări de la pacienți mulțumiți'
    ]
  },
  {
    id: 'veterinar',
    category: 'Health & Fitness',
    name: 'Cabinet Veterinar',
    emoji: '🐕',
    description: 'Pentru iubitorii de animale. Programări, carnet vaccinări digital și reminder-e medicale.',
    image: '/templates/veterinar.png',
    color: 'from-green-500 to-emerald-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Profil Animal',
        description: 'Fiecare animal cu vârstă, rasă, greutate, alergii. Istoric complet.',
        icon: 'pet'
      },
      {
        name: 'Carnet Vaccinări',
        description: 'Toate vaccinurile cu date. Nu mai pierzi carnetul fizic.',
        icon: 'document'
      },
      {
        name: 'Reminder Vaccin',
        description: '"Rapelul lui Max e săptămâna viitoare" - notificare automată.',
        icon: 'bell'
      },
      {
        name: 'Programări Consultație',
        description: 'Alege veterinarul, ora și motivul vizitei.',
        icon: 'calendar'
      },
      {
        name: 'Urgențe 24/7',
        description: 'Buton de urgență cu număr direct și instrucțiuni primul ajutor.',
        icon: 'emergency'
      },
      {
        name: 'Magazin Produse',
        description: 'Hrană, antiparazitare, suplimente. Comandă și ridică sau livrare.',
        icon: 'cart'
      }
    ],
    benefits: [
      'Stăpânii nu uită vaccinurile',
      'Vizite regulate, nu doar urgențe',
      'Venituri extra din magazin',
      'Relație pe termen lung'
    ]
  },

  // ==================== SERVICES ====================
  {
    id: 'service-auto',
    category: 'Services',
    name: 'Service Auto',
    emoji: '🔧',
    description: 'Programări reparații, status lucrare în timp real și istoric mașină. Transparență totală.',
    image: '/templates/service-auto.png',
    color: 'from-slate-600 to-zinc-700',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Programare Service',
        description: 'Alege tipul intervenției, data și lasă detalii. Confirmare instant.',
        icon: 'calendar'
      },
      {
        name: 'Status Lucrare Live',
        description: 'Primită → Diagnosticare → În lucru → Gata. Clientul știe mereu unde e mașina.',
        icon: 'status'
      },
      {
        name: 'Poze Diagnostic',
        description: 'Trimiți poze cu ce ai găsit. Clientul aprobă înainte să lucrezi.',
        icon: 'camera'
      },
      {
        name: 'Istoric Mașină',
        description: 'Toate intervențiile pe mașina respectivă. Util la revânzare.',
        icon: 'history'
      },
      {
        name: 'Estimare Preț',
        description: 'Calculatorul oferă preț orientativ. Fără surprize.',
        icon: 'money'
      },
      {
        name: 'Reminder ITP/Revizie',
        description: '"ITP-ul expiră luna viitoare" - clientul revine la tine.',
        icon: 'bell'
      }
    ],
    benefits: [
      'Încredere prin transparență',
      'Clienți care revin la tine',
      'Mai puține "când e gata?"',
      'Diferențiere față de competiție'
    ]
  },
  {
    id: 'imobiliare',
    category: 'Services',
    name: 'Agenție Imobiliară',
    emoji: '🏠',
    description: 'Listări proprietăți, vizionări online și notificări proprietăți noi. Găsește casa perfectă.',
    image: '/templates/imobiliare.png',
    color: 'from-emerald-500 to-teal-600',
    packageRecommended: 'Complet',
    price: '999€',
    features: [
      {
        name: 'Catalog Proprietăți',
        description: 'Toate proprietățile cu poze, video, preț, caracteristici. Filtrare avansată.',
        icon: 'home'
      },
      {
        name: 'Tur Virtual 360°',
        description: 'Vizitează apartamentul de pe canapea. Economisește timp ambelor părți.',
        icon: 'vr'
      },
      {
        name: 'Programare Vizionare',
        description: 'Alege proprietatea și ora disponibilă agentului.',
        icon: 'calendar'
      },
      {
        name: 'Alerte Proprietăți Noi',
        description: 'Setezi criteriile, primești notificare când apare ceva potrivit.',
        icon: 'bell'
      },
      {
        name: 'Calculator Credit',
        description: 'Estimare rată lunară bazată pe preț și avans.',
        icon: 'calculator'
      },
      {
        name: 'Favorite & Comparare',
        description: 'Salvează proprietățile preferate, compară-le una lângă alta.',
        icon: 'compare'
      },
      {
        name: 'Documente Online',
        description: 'Contracte, acte necesare - toate într-un singur loc.',
        icon: 'document'
      },
      {
        name: 'Chat cu Agent',
        description: 'Întrebări rapide fără să suni. Răspuns în ore, nu zile.',
        icon: 'chat'
      }
    ],
    benefits: [
      'Vizionări doar pentru cei serioși',
      'Clienți care văd ce vor înainte',
      'Proces mai rapid de vânzare',
      'Imagine modernă și profesională'
    ]
  },
  {
    id: 'avocat',
    category: 'Services',
    name: 'Cabinet Avocatură',
    emoji: '⚖️',
    description: 'Programări consultații, documente securizate și comunicare profesională. Încredere digitală.',
    image: '/templates/avocat.png',
    color: 'from-amber-700 to-yellow-800',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Programare Consultație',
        description: 'Alege tipul cazului, data și ora. Descriere inițială a problemei.',
        icon: 'calendar'
      },
      {
        name: 'Portal Documente',
        description: 'Schimb de documente securizat. Fără email-uri nesigure.',
        icon: 'document'
      },
      {
        name: 'Status Dosar',
        description: 'Clientul vede în ce stadiu e cazul. Mai puține "ce mai e nou?"',
        icon: 'status'
      },
      {
        name: 'Plăți & Facturi',
        description: 'Onorariu clar, plată online, facturi automate.',
        icon: 'money'
      },
      {
        name: 'Reminder Termene',
        description: 'Notificare pentru termene importante. Clientul e pregătit.',
        icon: 'bell'
      },
      {
        name: 'Consultații Video',
        description: 'Pentru clienți din alte orașe sau situații urgente.',
        icon: 'video'
      }
    ],
    benefits: [
      'Imagine profesională modernă',
      'Comunicare eficientă',
      'Clienți informați = mai puține apeluri',
      'Documente organizate'
    ]
  },
  {
    id: 'contabil',
    category: 'Services',
    name: 'Birou Contabilitate',
    emoji: '📊',
    description: 'Pentru contabili moderni. Portal documente, deadline-uri fiscale și comunicare cu clienții.',
    image: '/templates/contabil.png',
    color: 'from-blue-600 to-indigo-700',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Portal Documente',
        description: 'Clientul încarcă facturi, extrase. Tu le procesezi. Tot digital.',
        icon: 'upload'
      },
      {
        name: 'Calendar Fiscal',
        description: 'Toate deadline-urile importante: TVA, impozite, declarații.',
        icon: 'calendar'
      },
      {
        name: 'Reminder Termene',
        description: '"TVA-ul trebuie plătit în 5 zile" - clientul nu uită.',
        icon: 'bell'
      },
      {
        name: 'Dashboard Financiar',
        description: 'Rezumat lunar: venituri, cheltuieli, profit. Vizualizare clară.',
        icon: 'chart'
      },
      {
        name: 'Chat Securizat',
        description: 'Întrebări rapide fără email. Istoric salvat.',
        icon: 'chat'
      },
      {
        name: 'Facturi & Plăți',
        description: 'Abonament lunar facturat automat. Zero urmărire.',
        icon: 'money'
      }
    ],
    benefits: [
      'Clienți organizați = muncă mai ușoară',
      'Mai puține "ai primit factura?"',
      'Profesionalism digital',
      'Retenție crescută clienți'
    ]
  },
  {
    id: 'fotograf',
    category: 'Services',
    name: 'Fotograf Profesionist',
    emoji: '📸',
    description: 'Portofoliu impresionant, booking ședințe și galerii private pentru clienți.',
    image: '/templates/fotograf.png',
    color: 'from-violet-500 to-purple-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Portofoliu Galerie',
        description: 'Lucrările tale organizate pe categorii: nunți, portrete, corporate, produs.',
        icon: 'image'
      },
      {
        name: 'Booking Ședințe',
        description: 'Clientul alege tipul ședinței, data și locația. Confirmare automată.',
        icon: 'calendar'
      },
      {
        name: 'Pachete & Prețuri',
        description: 'Pachet basic, standard, premium cu ce include fiecare.',
        icon: 'package'
      },
      {
        name: 'Galerii Private',
        description: 'Fiecare client are galeria lui privată cu pozele de la ședință.',
        icon: 'lock'
      },
      {
        name: 'Selecție Poze',
        description: 'Clientul alege ce poze vrea editate. Feedback direct în app.',
        icon: 'check'
      },
      {
        name: 'Download Securizat',
        description: 'Clientul descarcă pozele finale în rezoluție maximă.',
        icon: 'download'
      }
    ],
    benefits: [
      'Portofoliu care vinde singur',
      'Proces organizat de livrare',
      'Clienți care recomandă',
      'Mai puțin timp pe admin'
    ]
  },
  {
    id: 'croitorie',
    category: 'Services',
    name: 'Croitorie & Atelier',
    emoji: '🧵',
    description: 'Comenzi personalizate, măsurători salvate și status comandă. Pentru croitorii moderne.',
    image: '/templates/croitorie.png',
    color: 'from-rose-500 to-pink-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Catalog Servicii',
        description: 'Reparații, modificări, creații custom. Cu prețuri orientative.',
        icon: 'list'
      },
      {
        name: 'Profil Măsurători',
        description: 'Măsurătorile clientului salvate. Nu le mai iei de fiecare dată.',
        icon: 'ruler'
      },
      {
        name: 'Comandă Personalizată',
        description: 'Formular detaliat: tip, material, culoare, termen.',
        icon: 'form'
      },
      {
        name: 'Status Comandă',
        description: 'Croială → Cusut → Finisaje → Gata. Clientul știe mereu.',
        icon: 'status'
      },
      {
        name: 'Galerie Lucrări',
        description: 'Portofoliu cu ce ai creat. Inspirație pentru clienți noi.',
        icon: 'image'
      },
      {
        name: 'Programare Probă',
        description: 'Booking pentru proba intermediară sau finală.',
        icon: 'calendar'
      }
    ],
    benefits: [
      'Măsurători salvate = eficiență',
      'Clienți informați = mai puține apeluri',
      'Portofoliu care atrage',
      'Comenzi organizate'
    ]
  },

  // ==================== RETAIL ====================
  {
    id: 'florarie',
    category: 'Retail',
    name: 'Florărie',
    emoji: '💐',
    description: 'Comenzi buchete, livrare programată și aranjamente personalizate. Frumusețe digitală.',
    image: '/templates/florarie.png',
    color: 'from-pink-400 to-rose-500',
    packageRecommended: 'Complet',
    price: '999€',
    features: [
      {
        name: 'Catalog Buchete',
        description: 'Toate buchetele cu poze, prețuri și ce conțin. Vizual atractiv.',
        icon: 'menu'
      },
      {
        name: 'Buchete Personalizate',
        description: 'Formular: ocazie, culori preferate, buget. Creezi tu, ei comandă.',
        icon: 'custom'
      },
      {
        name: 'Livrare Programată',
        description: 'Comandă azi pentru livrare de ziua ei. Cu oră exactă.',
        icon: 'calendar'
      },
      {
        name: 'Mesaj Personalizat',
        description: 'Cartonaș cu mesajul clientului. Inclus în comandă.',
        icon: 'message'
      },
      {
        name: 'Abonament Flori',
        description: 'Buchete săptămânale pentru birouri sau acasă. Venit recurent.',
        icon: 'subscription'
      },
      {
        name: 'Ocazii Speciale',
        description: 'Reminder: "Ziua îndrăgostiților e în 7 zile". Comenzi anticipate.',
        icon: 'bell'
      }
    ],
    benefits: [
      'Comenzi și noaptea',
      'Livrări programate = organizare',
      'Abonamente = venit predictibil',
      'Personalizare care diferențiază'
    ],
    testimonial: {
      text: 'Ziua îndrăgostiților am avut 200 comenzi online. Anul trecut? 50 la telefon.',
      author: 'Maria, Flowers & More',
      rating: 5
    }
  },
  {
    id: 'petshop',
    category: 'Retail',
    name: 'Pet Shop',
    emoji: '🐾',
    description: 'Magazin online pentru iubitorii de animale. Comenzi, abonamente hrană și program fidelitate.',
    image: '/templates/petshop.png',
    color: 'from-orange-400 to-amber-500',
    packageRecommended: 'Complet',
    price: '999€',
    features: [
      {
        name: 'Catalog Produse',
        description: 'Hrană, accesorii, jucării. Organizate pe tip animal și categorie.',
        icon: 'menu'
      },
      {
        name: 'Abonament Hrană',
        description: 'Sac de mâncare lunar livrat automat. Clientul nu uită, tu ai venit garantat.',
        icon: 'subscription'
      },
      {
        name: 'Profil Animal',
        description: 'Max, 3 ani, Labrador, alergic la pui. Recomandări personalizate.',
        icon: 'pet'
      },
      {
        name: 'Livrare Programată',
        description: 'Alege ziua și intervalul orar. Confort maxim.',
        icon: 'delivery'
      },
      {
        name: 'Program Fidelitate',
        description: 'Puncte la fiecare comandă. 100 puncte = 50 lei reducere.',
        icon: 'star'
      },
      {
        name: 'Reminder Stoc',
        description: '"Hrana lui Max se termină în 5 zile" - comandă sugerată.',
        icon: 'bell'
      }
    ],
    benefits: [
      'Abonamente = venit predictibil',
      'Clienți fideli prin puncte',
      'Reminder-e care vând singure',
      'Personalizare care fidelizează'
    ]
  },
  {
    id: 'farmacie',
    category: 'Retail',
    name: 'Farmacie',
    emoji: '💊',
    description: 'Verificare stoc, comenzi medicamente și reminder tratament. Sănătate digitală.',
    image: '/templates/farmacie.png',
    color: 'from-green-500 to-teal-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Verificare Stoc',
        description: 'Clientul verifică dacă ai medicamentul înainte să vină.',
        icon: 'search'
      },
      {
        name: 'Rezervare Medicamente',
        description: 'Rezervă online, ridică în 2 ore. Fără coadă.',
        icon: 'cart'
      },
      {
        name: 'Reminder Tratament',
        description: '"Ia pastila de tensiune" - notificare la ora setată.',
        icon: 'bell'
      },
      {
        name: 'Rețete Electronice',
        description: 'Scanează codul rețetei, vezi ce trebuie să iei.',
        icon: 'qr'
      },
      {
        name: 'Sfaturi Farmacist',
        description: 'Întrebări simple prin chat. Răspuns de la specialist.',
        icon: 'chat'
      },
      {
        name: 'Livrare La Domiciliu',
        description: 'Pentru cei care nu pot ajunge la farmacie.',
        icon: 'delivery'
      }
    ],
    benefits: [
      'Clienți care verifică și vin sigur',
      'Rezervări = produs vândut',
      'Reminder = tratamente complete',
      'Diferențiere prin digital'
    ]
  },

  // ==================== EDUCATION ====================
  {
    id: 'scoala-soferi',
    category: 'Education',
    name: 'Școală de Șoferi',
    emoji: '🚗',
    description: 'Programări condus, teste teorie online și tracking progres. Permisul mai ușor.',
    image: '/templates/scoala-soferi.png',
    color: 'from-blue-500 to-sky-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Programare Condus',
        description: 'Alege instructorul, mașina, data și ora. Confirmare instant.',
        icon: 'calendar'
      },
      {
        name: 'Teste Teorie Online',
        description: 'Chestionare interactive cu explicații. Pregătire pentru examen.',
        icon: 'test'
      },
      {
        name: 'Progres Cursant',
        description: 'Ore efectuate, note la teste, feedback instructor. Totul vizibil.',
        icon: 'chart'
      },
      {
        name: 'Reminder Ședință',
        description: 'Notificare cu 2h înainte. Cursantul nu uită.',
        icon: 'bell'
      },
      {
        name: 'Materiale Video',
        description: 'Tutoriale manevre, explicații reguli. Învățare vizuală.',
        icon: 'video'
      },
      {
        name: 'Plăți & Rate',
        description: 'Pachet complet în rate. Plată online, facturi automate.',
        icon: 'money'
      }
    ],
    benefits: [
      'Programări fără telefon',
      'Cursanți pregătiți pentru examen',
      'Tracking progres clar',
      'Imagine modernă'
    ]
  },
  {
    id: 'limba-straina',
    category: 'Education',
    name: 'Centru Limbi Străine',
    emoji: '🌍',
    description: 'Cursuri, programări ore și materiale digitale. Învățare modernă.',
    image: '/templates/limba-straina.png',
    color: 'from-indigo-500 to-violet-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Catalog Cursuri',
        description: 'Engleză, germană, franceză. Nivel, durată, preț pentru fiecare.',
        icon: 'menu'
      },
      {
        name: 'Înscriere Online',
        description: 'Alege cursul, nivelul, programul. Plată și confirmare instant.',
        icon: 'form'
      },
      {
        name: 'Calendar Ore',
        description: 'Toate orele vizibile cu profesor, sală, subiect.',
        icon: 'calendar'
      },
      {
        name: 'Materiale Digitale',
        description: 'PDF-uri, audio, video. Acces din aplicație.',
        icon: 'document'
      },
      {
        name: 'Teste & Progres',
        description: 'Evaluări periodice cu rezultate. Cursantul vede cum evoluează.',
        icon: 'chart'
      },
      {
        name: 'Clase Video',
        description: 'Opțiune online pentru cei care nu pot veni fizic.',
        icon: 'video'
      }
    ],
    benefits: [
      'Înscrieri automate',
      'Cursanți cu acces la materiale',
      'Opțiune online = mai mulți cursanți',
      'Organizare impecabilă'
    ]
  },
  {
    id: 'meditatii',
    category: 'Education',
    name: 'Meditații & Tutoring',
    emoji: '📚',
    description: 'Pentru profesori particulari. Programări ședințe, materiale și tracking progres elevi.',
    image: '/templates/meditatii.png',
    color: 'from-yellow-500 to-orange-600',
    packageRecommended: 'Vitrină',
    price: '299€',
    features: [
      {
        name: 'Profil Profesor',
        description: 'Materii predate, experiență, tarif. Părinții aleg informat.',
        icon: 'user'
      },
      {
        name: 'Programare Ședință',
        description: 'Calendar cu disponibilitate. Rezervare online 24/7.',
        icon: 'calendar'
      },
      {
        name: 'Ședințe Online',
        description: 'Video call integrat pentru meditații la distanță.',
        icon: 'video'
      },
      {
        name: 'Materiale Partajate',
        description: 'Fișe, exerciții, teste. Totul într-un loc.',
        icon: 'document'
      },
      {
        name: 'Raport Progres',
        description: 'Feedback pentru părinți după fiecare ședință.',
        icon: 'chart'
      },
      {
        name: 'Plată Automată',
        description: 'Pachete de ore, plată online. Fără bani cash.',
        icon: 'money'
      }
    ],
    benefits: [
      'Părinți care găsesc ușor',
      'Programări fără negocieri',
      'Ședințe online = flexibilitate',
      'Imagine profesională'
    ]
  },

  // ==================== ENTERTAINMENT ====================
  {
    id: 'escape-room',
    category: 'Entertainment',
    name: 'Escape Room',
    emoji: '🔐',
    description: 'Rezervări camere, descrieri tematice și booking grupuri. Aventură digitală.',
    image: '/templates/escape-room.png',
    color: 'from-purple-600 to-violet-700',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Catalog Camere',
        description: 'Fiecare cameră cu temă, dificultate, durată, capacitate și poze atmosferice.',
        icon: 'menu'
      },
      {
        name: 'Rezervare Instant',
        description: 'Alege camera, data, ora, număr persoane. Confirmare pe loc.',
        icon: 'calendar'
      },
      {
        name: 'Plată Anticipată',
        description: 'Plătești online, nu mai anulează. Venit garantat.',
        icon: 'card'
      },
      {
        name: 'Voucher Cadou',
        description: 'Cumpără experiență cadou pentru prieteni. Vânzări fără cameră ocupată.',
        icon: 'gift'
      },
      {
        name: 'Leaderboard',
        description: 'Top 10 cele mai rapide echipe. Motivație să revină să-și bată recordul.',
        icon: 'trophy'
      },
      {
        name: 'Reminder Rezervare',
        description: 'Notificare cu 24h și 2h înainte. Zero no-show.',
        icon: 'bell'
      }
    ],
    benefits: [
      'Rezervări și la miezul nopții',
      'Plată anticipată = zero anulări',
      'Vouchere = vânzări extra',
      'Leaderboard = clienți care revin'
    ]
  },
  {
    id: 'sala-evenimente',
    category: 'Entertainment',
    name: 'Sală Evenimente',
    emoji: '🎉',
    description: 'Pentru săli de nunți, conferințe sau petreceri. Rezervări, pachete și vizualizare.',
    image: '/templates/sala-evenimente.png',
    color: 'from-gold-500 to-amber-600',
    packageRecommended: 'Business',
    price: '499€',
    features: [
      {
        name: 'Calendar Disponibilitate',
        description: 'Vezi instant ce date sunt libere. Fără telefoane.',
        icon: 'calendar'
      },
      {
        name: 'Galerie & Tur Virtual',
        description: 'Poze profesionale și tur 360°. Clientul "vizitează" de acasă.',
        icon: 'image'
      },
      {
        name: 'Pachete Complete',
        description: 'Sală + catering + muzică + foto. Oferte clare cu prețuri.',
        icon: 'package'
      },
      {
        name: 'Cerere Ofertă',
        description: 'Formular detaliat: dată, număr invitați, stil. Ofertă personalizată.',
        icon: 'form'
      },
      {
        name: 'Meniuri Catering',
        description: 'Toate meniurile disponibile cu prețuri per persoană.',
        icon: 'menu'
      },
      {
        name: 'Documente Online',
        description: 'Contract, facturi, detalii eveniment. Tot într-un loc.',
        icon: 'document'
      }
    ],
    benefits: [
      'Cereri calificate, nu curioși',
      'Tur virtual = mai puține vizite fizice degeaba',
      'Pachete clare = decizie rapidă',
      'Imagine premium'
    ]
  }
];

// Categoriile disponibile
const categories = [
  { id: 'all', name: 'Toate', count: templates.length },
  { id: 'Food & Beverage', name: 'Restaurant & Café', count: templates.filter(t => t.category === 'Food & Beverage').length },
  { id: 'Beauty & Wellness', name: 'Beauty & Wellness', count: templates.filter(t => t.category === 'Beauty & Wellness').length },
  { id: 'Health & Fitness', name: 'Health & Fitness', count: templates.filter(t => t.category === 'Health & Fitness').length },
  { id: 'Services', name: 'Servicii', count: templates.filter(t => t.category === 'Services').length },
  { id: 'Retail', name: 'Retail', count: templates.filter(t => t.category === 'Retail').length },
  { id: 'Education', name: 'Educație', count: templates.filter(t => t.category === 'Education').length },
  { id: 'Entertainment', name: 'Entertainment', count: templates.filter(t => t.category === 'Entertainment').length },
];

// Icon components
const Icons = {
  menu: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  cart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  location: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  bell: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  qr: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
    </svg>
  ),
  card: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  subscription: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  image: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  history: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  package: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  trophy: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  video: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  gift: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  money: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  list: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  status: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  camera: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  upload: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
  download: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  lock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  user: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  delivery: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  pet: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  ),
  emergency: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  test: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  form: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  ruler: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  message: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  custom: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  tap: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  queue: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  prescription: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  cake: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
    </svg>
  ),
  vr: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  compare: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  calculator: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

// Template Card Component
const TemplateCard = ({ template, onClick }) => {
  return (
    <div
      onClick={() => onClick(template)}
      className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 cursor-pointer hover:transform hover:scale-[1.01]"
    >
      {/* Badge Popular */}
      {template.popularBadge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
            Popular
          </span>
        </div>
      )}

      {/* Phone Preview Area */}
      <div className={`h-[380px] bg-gradient-to-br ${template.color} relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
        </div>

        {/* Phone Mockup - larger container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-[160px] h-[320px] transform group-hover:scale-105 transition-transform duration-500">
            {/* Phone Shadow */}
            <div className="absolute -inset-3 bg-black/30 rounded-[36px] blur-xl"></div>
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-slate-900 rounded-[32px] border-[4px] border-slate-700 shadow-2xl overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30"></div>
              {/* Screen */}
              <div className="absolute inset-1 rounded-[26px] overflow-hidden bg-white">
                {AppPreviews[template.id] ? (
                  <div className="h-full w-full scale-[1.15] origin-top">
                    {AppPreviews[template.id].props.children}
                  </div>
                ) : (
                  <div className="h-full bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-400 text-xs">Preview</span>
                  </div>
                )}
              </div>
              {/* Bottom fade for mystery */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/95 to-transparent z-10"></div>
              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
                <div className="w-10 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        <span className="text-xs text-slate-500 uppercase tracking-wider">{template.category}</span>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
          {template.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm mt-2 line-clamp-2">
          {template.description}
        </p>

        {/* Features Preview */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {template.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded-full">
              {feature.name}
            </span>
          ))}
          {template.features.length > 3 && (
            <span className="text-xs px-2 py-1 bg-slate-800 text-slate-500 rounded-full">
              +{template.features.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
          <div>
            <span className="text-xs text-slate-500">Pachet recomandat</span>
            <p className={`font-bold bg-gradient-to-r ${template.color} text-transparent bg-clip-text`}>
              {template.packageRecommended}
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500">De la</span>
            <p className="text-xl font-bold text-white">{template.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Template Detail Modal
const TemplateModal = ({ template, onClose }) => {
  if (!template) return null;

  const whatsappMessage = encodeURIComponent(
    `Bună! Sunt interesat de template-ul "${template.name}" pentru afacerea mea. Aș vrea să aflu mai multe detalii despre pachetul ${template.packageRecommended}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with Large Phone */}
        <div className={`h-[280px] bg-gradient-to-br ${template.color} relative overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Large Phone Mockup */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-[140px] h-[280px]">
              {/* Phone Shadow */}
              <div className="absolute -inset-3 bg-black/30 rounded-[36px] blur-xl"></div>
              {/* Phone Frame */}
              <div className="relative w-full h-full bg-slate-900 rounded-[28px] border-[3px] border-slate-700 shadow-2xl overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-30"></div>
                {/* Screen */}
                <div className="absolute inset-1 rounded-[22px] overflow-hidden bg-white">
                  {AppPreviews[template.id] ? (
                    <div className="h-full w-full scale-[1.1] origin-top">
                      {AppPreviews[template.id].props.children}
                    </div>
                  ) : (
                    <div className="h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400 text-xs">Preview</span>
                    </div>
                  )}
                </div>
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/95 to-transparent z-10"></div>
                {/* Home indicator */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title Section */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-sm text-slate-500 uppercase tracking-wider">{template.category}</span>
              <h2 className="text-3xl font-black text-white mt-1">{template.name}</h2>
              <p className="text-slate-400 mt-2 max-w-2xl">{template.description}</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-500">De la</span>
              <p className="text-3xl font-black text-white">{template.price}</p>
              <span className={`text-sm font-medium bg-gradient-to-r ${template.color} text-transparent bg-clip-text`}>
                Pachet {template.packageRecommended}
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Ce primești</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {template.features.map((feature, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {Icons[feature.icon] || Icons.check}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.name}</h4>
                      <p className="text-sm text-slate-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {template.benefits && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Beneficii pentru afacerea ta</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {template.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <svg className={`w-5 h-5 text-emerald-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {template.testimonial && (
            <div className="mb-8 bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-1 mb-3">
                {[...Array(template.testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 italic">"{template.testimonial.text}"</p>
              <p className="text-slate-500 mt-2">— {template.testimonial.author}</p>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/40756870425?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 bg-gradient-to-r ${template.color} text-white font-bold py-4 px-6 rounded-full text-center hover:shadow-lg transition-all`}
            >
              Vreau acest template
            </a>
            <button
              onClick={onClose}
              className="flex-1 bg-slate-800 text-white font-bold py-4 px-6 rounded-full text-center hover:bg-slate-700 transition-all border border-slate-700"
            >
              Vezi alte template-uri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const TemplatesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="template-uri" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-400 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            {templates.length} Template-uri Disponibile
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Template-uri pentru{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400">
              Orice Industrie
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Alege template-ul perfect pentru afacerea ta. Fiecare vine cu funcționalități specifice industriei tale, gata de personalizat.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Caută template... (ex: restaurant, salon, fitness)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={setSelectedTemplate}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
            <h3 className="text-xl font-bold text-white mb-2">Niciun template găsit</h3>
            <p className="text-slate-400">Încearcă alte cuvinte cheie sau selectează altă categorie.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
            >
              Resetează filtrele
            </button>
          </div>
        )}

        {/* Custom Template CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Nu găsești ce cauți?
              </h3>
              <p className="text-slate-400 text-lg mb-6">
                Construim template-uri personalizate pentru orice tip de afacere. Spune-ne ce ai nevoie și îți facem o aplicație pe măsură.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">Clinici veterinare</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">Ateliere auto</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">Magazine online</span>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">Orice altceva</span>
              </div>
            </div>
            <div>
              <a
                href="https://wa.me/40756870425?text=Bună! Am nevoie de un template personalizat pentru afacerea mea."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discută cu noi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </section>
  );
};

export default TemplatesShowcase;
export { templates, categories };
