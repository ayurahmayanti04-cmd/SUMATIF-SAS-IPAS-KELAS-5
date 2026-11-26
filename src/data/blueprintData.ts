import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 5) Mata Pelajaran IPAS
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi tahapan siklus air dan perubahan wujud air di alam.',
    indikatorSoal:
      'Disajikan gambar diagram siklus air bernomor 1-4, peserta didik dapat menentukan nama tahapan yang ditunjukkan oleh angka 2 dan 3 secara berurutan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan proses infiltrasi pada siklus air dengan kelestarian lingkungan.',
    indikatorSoal:
      'Disajikan narasi penutupan daerah resapan air dengan aspal dan beton, peserta didik dapat memprediksi dampak lingkungan yang ditimbulkan terhadap ketersediaan air dan banjir.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan jenis ekosistem air (akuatik) dan ekosistem darat (terestrial).',
    indikatorSoal:
      'Disajikan beberapa kelompok nama ekosistem, peserta didik dapat mengidentifikasi kelompok yang seluruhnya termasuk ekosistem darat (terestrial).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi karakteristik ekosistem darat berdasarkan ciri biotik dan abiotiknya.',
    indikatorSoal:
      'Disajikan gambar ilustrasi berbagai ekosistem, peserta didik dapat menentukan nama dua ekosistem darat (gurun dan tundra) berdasarkan ciri visualnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran komponen produsen, konsumen, dan pengurai dalam rantai makanan.',
    indikatorSoal:
      'Disajikan deskripsi peran pengurai zat organik di alam, peserta didik dapat menentukan komponen rantai makanan yang dimaksud.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun urutan rantai makanan pada ekosistem sawah dengan tepat.',
    indikatorSoal:
      'Disajikan gambar diagram rantai makanan sawah dan pilihan makhluk hidup, peserta didik dapat menyusun urutan produsen hingga pengurai yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan kedudukan makhluk hidup dalam rantai makanan ekosistem laut.',
    indikatorSoal:
      'Disajikan narasi aliran makan-dimakan pada ekosistem laut lepas, peserta didik dapat menentukan kedudukan trofik ikan tuna sebagai konsumen tingkat 2.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan antarpopulasi pada jaring-jaring makanan ketika terjadi gangguan.',
    indikatorSoal:
      'Disajikan gambar jaring-jaring makanan ekosistem darat, peserta didik dapat menganalisis dampak penurunan populasi belalang dan tikus terhadap populasi konsumen lainnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi hubungan sebab-akibat perubahan populasi dalam keseimbangan ekosistem sawah.',
    indikatorSoal:
      'Disajikan studi kasus "Misteri Tikus yang Merajalela" saat populasi ular menurun di sawah, peserta didik dapat menganalisis akibat yang terjadi pada tanaman padi dan elang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan konsep aliran energi dan perbandingan jumlah populasi pada piramida makanan.',
    indikatorSoal:
      'Disajikan gambar piramida makanan, peserta didik dapat menjelaskan alasan bagian dasar (produsen) berukuran paling lebar dibandingkan konsumen puncak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan peran positif dan peran negatif manusia terhadap keseimbangan ekosistem.',
    indikatorSoal:
      'Disajikan empat pilihan aktivitas manusia, peserta didik dapat mengidentifikasi tindakan yang berdampak negatif terhadap keseimbangan ekosistem.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi jenis-jenis bidang usaha dalam aktivitas ekonomi masyarakat.',
    indikatorSoal:
      'Disajikan definisi kegiatan mengolah bahan mentah menjadi barang jadi atau setengah jadi, peserta didik dapat menentukan nama bidang usahanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan contoh aktivitas pelaku ekonomi berdasarkan bidang usahanya.',
    indikatorSoal:
      'Disajikan ilustrasi kegiatan warga yang menanam kopi skala besar dan membuka kios barang kebutuhan, peserta didik dapat menentukan kedua bidang usaha tersebut secara berurutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh kegiatan produksi, distribusi, dan konsumsi dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar 9 kartu kegiatan ekonomi, peserta didik dapat menentukan jenis kegiatan ekonomi (distribusi dan konsumsi) dari dua ilustrasi yang ditunjuk.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peran produsen, distributor, dan konsumen dalam kegiatan ekonomi.',
    indikatorSoal:
      'Disajikan deskripsi peran penyalur barang dari produsen ke konsumen, peserta didik dapat menentukan sebutan pelaku ekonomi tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan sikap saling menghargai keragaman sifat dan bekerja sama dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan kisah perbedaan sifat Nala dan Niki saat persiapan pameran karya siswa, peserta didik dapat menentukan cara kerja sama yang saling melengkapi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat menyimpulkan nilai karakter positif dari keragaman sifat tokoh dalam cerita.',
    indikatorSoal:
      'Disajikan gambar ilustrasi dan ringkasan cerita anak kembar Saka dan Seli saat membantu desa pascabadai, peserta didik dapat mengidentifikasi nilai karakter yang tercermin.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat mendeskripsikan berbagai kenampakan alam wilayah daratan dan perairan di Indonesia.',
    indikatorSoal:
      'Disajikan ciri-ciri dua kenampakan alam (dataran tinggi dan selat), peserta didik dapat menentukan nama kedua kenampakan alam tersebut secara berurutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat memilih tindakan manusia yang merupakan peran positif dalam menjaga keseimbangan ekosistem.',
    indikatorSoal:
      'Disajikan gambar 10 kartu tindakan manusia terhadap lingkungan, peserta didik dapat memilih lebih dari satu pernyataan yang termasuk peran positif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis luas wilayah daratan dan lautan Indonesia sebagai negara kepulauan dan maritim.',
    indikatorSoal:
      'Disajikan data luas daratan dan perairan laut Indonesia serta ciri kenampakan alam, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan profesi masyarakat yang termasuk bidang usaha jasa/layanan.',
    indikatorSoal:
      'Disajikan gambar 5 profesi pekerja (pemadam kebakaran, petugas kebersihan, polisi, nelayan, dan dokter), peserta didik dapat memilih profesi yang termasuk bidang jasa/layanan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebenaran konsep tahapan siklus air (evaporasi, kondensasi, presipitasi, dan infiltrasi).',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang tahapan siklus air dan peran hutan, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan contoh ekosistem akuatik dan ekosistem terestrial beserta makhluk hidupnya.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai klasifikasi ekosistem air, darat, dan adaptasi tumbuhan gurun, peserta didik dapat menentukan Benar/Salah untuk setiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi peran organisme dalam rantai makanan ekosistem laut dan danau.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang produsen dan konsumen pada ekosistem laut dan danau, peserta didik dapat menentukan Benar/Salah secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis susunan tingkatan trofik pada piramida makanan.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang posisi produsen, herbivora, dan jumlah populasi konsumen puncak pada piramida makanan, peserta didik dapat menilai Benar/Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan sebab-akibat dan upaya pemulihan keseimbangan ekosistem sawah.',
    indikatorSoal:
      'Disajikan tiga pernyataan hubungan sebab-akibat perubahan jumlah tikus, ular, dan elang di sawah, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karakteristik kenampakan perairan laut, samudra, dan teluk di Indonesia.',
    indikatorSoal:
      'Disajikan gambar tiga ikon kenampakan wilayah perairan beserta tiga pernyataan definisinya, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis bidang usaha peternakan, pertambangan, dan perikanan.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang ruang lingkup usaha peternakan, pertambangan, dan perikanan, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan aktivitas ekonomi masyarakat ke dalam produksi, distribusi, dan konsumsi.',
    indikatorSoal:
      'Disajikan tiga pernyataan contoh kegiatan ekonomi sehari-hari beserta pelakunya, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik dapat menyimpulkan pentingnya kerja sama dalam keragaman sifat dan kepedulian lingkungan.',
    indikatorSoal:
      'Disajikan tiga pernyataan mengenai nilai kerja sama dalam perbedaan sifat dan kepedulian lingkungan, peserta didik dapat menentukan Benar/Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep materi ${q.topic} dalam mata pelajaran IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (
    t.includes('ekonomi') ||
    t.includes('usaha') ||
    t.includes('jasa') ||
    t.includes('kenampakan') ||
    t.includes('daratan') ||
    t.includes('perairan') ||
    t.includes('sifat') ||
    t.includes('karakter') ||
    t.includes('kerja sama')
  ) {
    return 'Pemahaman IPAS (Sosial)';
  }
  if (t.includes('sebab-akibat') || t.includes('analisis')) {
    return 'Keterampilan Proses';
  }
  return 'Pemahaman IPAS (Sains)';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
