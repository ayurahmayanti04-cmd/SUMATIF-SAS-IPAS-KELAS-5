import React from 'react';
import { CONFIG } from '../config';
import { AppStage } from '../types';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  currentStage: AppStage;
  onOpenTeacherPanel: () => void;
  onBackToStudentView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentStage,
  onOpenTeacherPanel,
  onBackToStudentView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-blue-200/70 shadow-xs">
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-amber-400 to-emerald-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Sisi Kiri: Identitas Sekolah & Judul */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200 p-0.5 flex items-center justify-center shadow-xs overflow-hidden shrink-0">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-24_at_14.04.48_44be7a26.jpeg"
                alt={`Logo ${CONFIG.SEKOLAH}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  Kelas {CONFIG.KELAS} • {CONFIG.MATA_PELAJARAN}
                </span>
                <span className="hidden sm:inline-block text-xs font-medium text-slate-500">
                  Materi {CONFIG.MATERI}
                </span>
              </div>
              <h1 id="navbar-app-title" className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight">
                {CONFIG.SEKOLAH}
              </h1>
            </div>
          </div>

          {/* Sisi Tengah: Indikator Tahap (Siswa View) */}
          {currentStage !== 4 && (
            <div className="hidden md:flex items-center gap-1 text-xs font-semibold">
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                  currentStage === 1
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-black/20">
                  1
                </span>
                <span>Identitas</span>
              </div>
              <span className="text-slate-300">/</span>
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                  currentStage === 2
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-black/20">
                  2
                </span>
                <span>Soal Tes</span>
              </div>
              <span className="text-slate-300">/</span>
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                  currentStage === 3
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-black/20">
                  3
                </span>
                <span>Hasil Tes</span>
              </div>
            </div>
          )}

          {/* Sisi Kanan: Akses Panel Guru */}
          <div className="flex items-center gap-2">
            {currentStage === 4 ? (
              <button
                id="btn-back-student"
                onClick={onBackToStudentView}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-300 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Halaman Ujian Siswa</span>
              </button>
            ) : (
              <button
                id="btn-open-teacher-panel"
                onClick={onOpenTeacherPanel}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 cursor-pointer"
                title="Masuk ke Panel Guru (Password: GURUADMIN)"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Panel Guru</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
