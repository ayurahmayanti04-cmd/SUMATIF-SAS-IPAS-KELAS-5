import React from 'react';

/**
 * Latar belakang tematik IPAS (Siklus Air, Ekosistem, Kenampakan Alam)
 * yang selaras dengan palet biru langit, emas, dan hijau alam logo SD Negeri 3 Dangintukadaya.
 * Dirancang halus agar teks dan kartu ujian tetap nyaman dibaca.
 */
export const ThemeBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Pola titik halus seperti buku catatan sains / peta */}
      <div className="absolute inset-0 bg-ipas-grid opacity-80" />

      {/* Cahaya matahari pagi lembut di kanan atas */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-300/25 blur-3xl" />

      {/* Cahaya biru langit / perairan di kiri atas */}
      <div className="absolute -top-16 -left-20 w-80 h-80 rounded-full bg-sky-300/25 blur-3xl" />

      {/* Cahaya hijau ekosistem di kanan bawah */}
      <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* Awan & lintasan siklus air dekoratif tipis di bagian atas */}
      <svg
        className="absolute top-14 left-0 w-full h-64 opacity-45"
        viewBox="0 0 1440 260"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Garis kontur angin / siklus air halus */}
        <path
          d="M-40 160 C 220 70, 480 210, 760 120 C 1020 35, 1240 155, 1480 95"
          stroke="url(#skyArc)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <path
          d="M-20 205 C 280 145, 560 240, 860 165 C 1120 100, 1290 190, 1470 140"
          stroke="url(#emeraldArc)"
          strokeWidth="1.5"
          strokeDasharray="4 10"
        />
        <defs>
          <linearGradient id="skyArc" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="emeraldArc" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Siluet pegunungan, bukit hijau, dan ombak laut lembut di horizon bawah */}
      <svg
        className="absolute bottom-0 left-0 w-full h-56 sm:h-72"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Pegunungan belakang */}
        <path
          d="M0 245 L160 155 L320 220 L510 115 L720 215 L910 135 L1120 205 L1290 130 L1440 195 L1440 320 L0 320 Z"
          fill="url(#mountainGrad)"
        />
        {/* Perbukitan hijau tengah */}
        <path
          d="M0 265 Q 240 205, 480 255 T 980 245 T 1440 250 L1440 320 L0 320 Z"
          fill="url(#hillGrad)"
        />
        {/* Ombak perairan biru laut depan */}
        <path
          d="M0 285 Q 180 255, 360 282 T 720 280 T 1080 284 T 1440 274 L1440 320 L0 320 Z"
          fill="url(#waveGrad)"
        />
        <defs>
          <linearGradient id="mountainGrad" x1="0" y1="115" x2="0" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="hillGrad" x1="0" y1="205" x2="0" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="waveGrad" x1="0" y1="255" x2="0" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
