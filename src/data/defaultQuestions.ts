import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // A. PILIHAN GANDA (18 SOAL: ID 1 - 18, masing-masing 4 opsi A/B/C/D)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Siklus Air',
    difficulty: 'Mudah',
    imageUrl: '/assets/soal/siklus_air.png',
    imageCaption: 'Diagram tahapan Siklus Air (nomor 1, 2, 3, dan 4)',
    text: 'Perhatikan gambar diagram Siklus Air di atas! Tahapan siklus air yang ditunjukkan secara berurutan oleh angka 2 (pembentukan awan) dan angka 3 (turunnya titik air ke permukaan bumi) adalah...',
    options: [
      { id: 'A', text: 'Evaporasi dan Infiltrasi' },
      { id: 'B', text: 'Kondensasi dan Presipitasi' },
      { id: 'C', text: 'Presipitasi dan Evaporasi' },
      { id: 'D', text: 'Infiltrasi dan Kondensasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada gambar Siklus Air:\n• Angka 1 menunjukkan penguapan air dari laut/sungai oleh panas matahari (Evaporasi).\n• Angka 2 menunjukkan pendinginan dan pengembunan uap air menjadi awan (Kondensasi).\n• Angka 3 menunjukkan jatuhnya titik-titik air hujan dari awan ke bumi (Presipitasi).\n• Angka 4 menunjukkan peresapan air ke dalam tanah (Infiltrasi).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Siklus Air & Kelestarian Lingkungan',
    difficulty: 'Sedang',
    text: 'Pada proses siklus air, sebagian air hujan yang jatuh ke permukaan daratan akan meresap ke dalam pori-pori tanah menjadi cadangan air tanah (infiltrasi). Apa dampak yang paling mungkin terjadi apabila daerah resapan air banyak ditutup aspal dan beton tanpa dibuat saluran resapan?',
    options: [
      { id: 'A', text: 'Proses penguapan air laut oleh matahari akan berhenti total' },
      { id: 'B', text: 'Cadangan air tanah akan meningkat jauh lebih cepat' },
      { id: 'C', text: 'Air hujan sulit meresap ke tanah sehingga memicu banjir saat hujan dan kekeringan saat kemarau' },
      { id: 'D', text: 'Awan hujan tidak lagi mampu bergerak menuju pegunungan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Permukaan aspal dan beton kedap air menghambat proses infiltrasi (peresapan air ke tanah). Akibatnya, air hujan langsung mengalir di permukaan sehingga menimbulkan genangan/banjir saat musim hujan, sedangkan cadangan air tanah menipis saat musim kemarau.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Ekosistem Akuatik & Terestrial',
    difficulty: 'Mudah',
    text: 'Berdasarkan habitat utamanya, ekosistem terbagi menjadi ekosistem air (akuatik) dan ekosistem darat (terestrial). Manakah kelompok berikut yang seluruhnya merupakan contoh ekosistem darat (terestrial)?',
    options: [
      { id: 'A', text: 'Sungai, danau, dan padang rumput' },
      { id: 'B', text: 'Pantai, laut lepas, dan gurun' },
      { id: 'C', text: 'Hutan hujan tropis, gurun, dan tundra' },
      { id: 'D', text: 'Kolam, hutan musim, dan terumbu karang' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ekosistem darat (terestrial) meliputi hutan hujan tropis, hutan musim, padang rumput, gurun, dan tundra. Sedangkan sungai, danau, kolam, pantai, dan laut lepas termasuk ekosistem air (akuatik).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Jenis-Jenis Ekosistem',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/ekosistem_jenis.png',
    imageCaption: 'Berbagai ilustrasi ekosistem akuatik dan terestrial',
    text: 'Perhatikan gambar berbagai jenis ekosistem tersebut! Pada dua baris terbawah di sisi kanan tampak ekosistem berpasir kering yang ditumbuhi kaktus serta ekosistem bersalju es dengan beruang kutub. Kedua ekosistem darat tersebut secara berurutan adalah...',
    options: [
      { id: 'A', text: 'Padang rumput dan hutan musim' },
      { id: 'B', text: 'Gurun dan tundra' },
      { id: 'C', text: 'Hutan hujan tropis dan pantai' },
      { id: 'D', text: 'Kolam dan laut lepas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ekosistem kering berpasir dengan tumbuhan kaktus adalah ekosistem Gurun, sedangkan ekosistem bersalju/es beriklim sangat dingin dengan beruang kutub adalah ekosistem Tundra.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Komponen Rantai Makanan',
    difficulty: 'Mudah',
    text: 'Dalam suatu rantai makanan, makhluk hidup yang bertugas menguraikan sisa-sisa tubuh tumbuhan dan hewan yang telah mati menjadi zat hara penyubur tanah adalah...',
    options: [
      { id: 'A', text: 'Produsen seperti padi dan rumput' },
      { id: 'B', text: 'Konsumen 1 pemakan tumbuhan' },
      { id: 'C', text: 'Konsumen 3 pemakan daging' },
      { id: 'D', text: 'Pengurai seperti jamur dan bakteri' },
    ],
    correctAnswer: 'D',
    explanation:
      'Pengurai (dekomposer) seperti jamur dan bakteri menguraikan sisa organisme yang mati menjadi nutrisi/zat hara di tanah yang kemudian dimanfaatkan kembali oleh produsen (tumbuhan).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Rantai Makanan Ekosistem Sawah',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/rantai_makanan_darat.png',
    imageCaption: 'Rantai makanan ekosistem gurun dan sawah beserta pilihan organisme',
    text: 'Perhatikan gambar diagram Rantai Makanan Gurun dan Sawah beserta pilihan makhluk hidup di bawahnya! Urutan rantai makanan yang tepat untuk mengisi diagram Ekosistem Sawah dari Produsen → Konsumen 1 → Konsumen 2 → Konsumen 3 → Pengurai adalah...',
    options: [
      { id: 'A', text: 'Rumput → Tikus → Katak → Ular → Elang' },
      { id: 'B', text: 'Padi → Tikus → Ular sawah → Elang → Jamur' },
      { id: 'C', text: 'Padi → Elang → Tikus → Ular sawah → Jamur' },
      { id: 'D', text: 'Katak → Belalang → Padi → Elang → Jamur' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada ekosistem sawah, Padi berperan sebagai Produsen. Tikus memakan padi (Konsumen 1), Ular sawah memangsa tikus (Konsumen 2), Elang memangsa ular sawah (Konsumen 3), dan sisa bangkai diuraikan oleh Jamur (Pengurai).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rantai Makanan Ekosistem Laut',
    difficulty: 'Sedang',
    text: 'Pada ekosistem laut lepas, fitoplankton berperan sebagai produsen yang dimakan oleh ikan-ikan kecil. Jika ikan kecil dimakan oleh ikan tuna, lalu ikan tuna dimakan oleh ikan hiu, maka kedudukan ikan tuna dalam rantai makanan tersebut adalah sebagai...',
    options: [
      { id: 'A', text: 'Produsen' },
      { id: 'B', text: 'Konsumen 1' },
      { id: 'C', text: 'Konsumen 2' },
      { id: 'D', text: 'Pengurai' },
    ],
    correctAnswer: 'C',
    explanation:
      'Urutan rantai makanan laut: Fitoplankton (Produsen) → Ikan kecil (Konsumen 1) → Ikan tuna (Konsumen 2) → Ikan hiu (Konsumen 3) → Bakteri laut (Pengurai). Jadi, ikan tuna adalah Konsumen 2.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Jaring-Jaring Makanan',
    difficulty: 'Sukar',
    imageUrl: '/assets/soal/jaring_makanan.png',
    imageCaption: 'Ilustrasi makhluk hidup penyusun jaring-jaring makanan',
    text: 'Perhatikan gambar ekosistem jaring-jaring makanan tersebut (terdapat tumbuhan berbunga, belalang, tikus, kelinci, katak, burung pipit, burung hantu, rubah, ular, dan elang)! Apabila populasi belalang dan tikus berkurang drastis akibat penyemprotan pestisida berlebihan, dampak langsung yang paling mungkin terjadi adalah...',
    options: [
      { id: 'A', text: 'Tumbuhan berbunga habis dimakan katak dan ular' },
      { id: 'B', text: 'Populasi katak dan ular ikut menurun karena sumber makanannya berkurang' },
      { id: 'C', text: 'Elang dan burung hantu berubah memakan rumput dan bunga' },
      { id: 'D', text: 'Populasi rubah meningkat pesat karena tidak ada belalang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Katak dan burung pipit bergantung pada belalang sebagai makanan, sedangkan ular dan burung hantu memangsa tikus. Jika belalang dan tikus berkurang drastis, katak dan ular akan kekurangan makanan sehingga populasinya ikut menurun.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Keseimbangan Ekosistem',
    difficulty: 'Sukar',
    text: 'Di sawah Desa Hujan terdapat rantai makanan: Padi → Tikus → Ular → Elang. Suatu ketika banyak ular ditangkap oleh manusia sehingga populasinya menurun drastis. Peristiwa yang terjadi pada ekosistem sawah Desa Hujan setelah jumlah ular berkurang adalah...',
    options: [
      { id: 'A', text: 'Jumlah tikus menurun dan panen padi melimpah' },
      { id: 'B', text: 'Jumlah tikus merajalela merusak tanaman padi, sementara elang semakin jarang terlihat karena kekurangan mangsa' },
      { id: 'C', text: 'Populasi elang meningkat tajam karena sawah menjadi lebih aman' },
      { id: 'D', text: 'Tikus beralih memangsa elang untuk bertahan hidup' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berdasarkan kasus "Misteri Tikus yang Merajalela", berkurangnya ular membuat pemangsa tikus berkurang sehingga tikus berkembang biak pesat dan merusak tanaman padi. Di sisi lain, elang kehilangan sumber makanannya (ular) sehingga jarang terlihat di sekitar sawah.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Piramida Makanan',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/piramida_makanan.png',
    imageCaption: 'Tingkatan trofik pada Piramida Makanan',
    text: 'Perhatikan gambar Piramida Makanan di atas! Mengapa bagian paling bawah (Produsen) digambarkan berukuran paling lebar, sedangkan bagian puncak (Konsumen 3) berukuran paling sempit?',
    options: [
      { id: 'A', text: 'Karena tumbuhan berukuran lebih tinggi daripada hewan pemangsa' },
      { id: 'B', text: 'Karena konsumen tingkat 3 tidak memerlukan energi untuk hidup' },
      { id: 'C', text: 'Karena produsen memiliki jumlah populasi dan energi paling besar untuk menopang seluruh tingkat konsumen di atasnya' },
      { id: 'D', text: 'Karena hewan konsumen 1 dan konsumen 2 hidup di puncak gunung' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada piramida makanan, semakin ke atas tingkatannya, jumlah individu dan energi yang tersedia semakin berkurang. Produsen menempati dasar terlebar karena menyediakan energi dan sumber makanan utama bagi seluruh tingkatan konsumen.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Peran Manusia dalam Ekosistem',
    difficulty: 'Mudah',
    text: 'Tindakan manusia berikut ini yang termasuk peran negatif karena dapat merusak keseimbangan ekosistem adalah...',
    options: [
      { id: 'A', text: 'Melakukan reboisasi di lahan gundul dan mengelola sampah' },
      { id: 'B', text: 'Mengolah limbah pabrik dengan benar sebelum dialirkan' },
      { id: 'C', text: 'Melakukan penebangan hutan secara liar dan perburuan satwa' },
      { id: 'D', text: 'Melindungi flora dan fauna langka di kawasan konservasi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Penebangan hutan secara liar, perburuan liar, membuang sampah sembarangan, membuang limbah ke sungai, dan penggunaan bahan kimia berlebih adalah peran negatif manusia yang merusak keseimbangan ekosistem.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Jenis Bidang Usaha Ekonomi',
    difficulty: 'Mudah',
    text: 'Kegiatan mengolah bahan mentah menjadi barang setengah jadi atau barang jadi yang memiliki nilai guna lebih tinggi (seperti mengolah kayu menjadi mebel atau kain menjadi pakaian) termasuk jenis bidang usaha...',
    options: [
      { id: 'A', text: 'Pertambangan' },
      { id: 'B', text: 'Perdagangan' },
      { id: 'C', text: 'Perindustrian' },
      { id: 'D', text: 'Perkebunan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Perindustrian adalah kegiatan usaha mengolah bahan mentah menjadi barang jadi atau setengah jadi. Pertambangan mengambil bahan tambang, perdagangan membeli dan menjual barang, dan perkebunan menanam tanaman dalam jumlah besar untuk dijual.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Pelaku & Bidang Usaha Ekonomi',
    difficulty: 'Sedang',
    text: 'Pak Made menanam tanaman kopi dalam jumlah besar di kebun pegunungan untuk dijual, sedangkan Bu Sari membeli hasil bumi dari petani lalu menjualnya kembali di kios pasar. Bidang usaha Pak Made dan Bu Sari secara berturut-turut adalah...',
    options: [
      { id: 'A', text: 'Pertanian dan Perindustrian' },
      { id: 'B', text: 'Perkebunan dan Perdagangan' },
      { id: 'C', text: 'Pertambangan dan Jasa/Layanan' },
      { id: 'D', text: 'Peternakan dan Perikanan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menanam tanaman keras/perdagangan seperti kopi dalam jumlah besar untuk dijual merupakan bidang usaha Perkebunan. Membeli barang lalu menjualnya kembali kepada konsumen merupakan bidang usaha Perdagangan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Kegiatan Ekonomi (Produksi, Distribusi, Konsumsi)',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/kegiatan_ekonomi_kartu.png',
    imageCaption: 'Kartu ilustrasi contoh kegiatan ekonomi dalam kehidupan sehari-hari',
    text: 'Perhatikan gambar 9 kartu kegiatan ekonomi di atas! Pada baris bawah paling kiri tampak seorang kurir mengendarai sepeda motor membawa kotak paket, sedangkan tepat di sebelahnya tampak seorang anak sedang menyantap es krim. Kedua gambar tersebut secara berurutan menunjukkan kegiatan...',
    options: [
      { id: 'A', text: 'Produksi dan Distribusi' },
      { id: 'B', text: 'Konsumsi dan Produksi' },
      { id: 'C', text: 'Distribusi dan Konsumsi' },
      { id: 'D', text: 'Distribusi dan Produksi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kurir pengantar paket melakukan kegiatan menyalurkan barang dari produsen ke konsumen (Distribusi). Anak yang memakan es krim sedang menggunakan/menikmati barang untuk memenuhi kebutuhannya (Konsumsi).',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Peran Pelaku Kegiatan Ekonomi',
    difficulty: 'Mudah',
    text: 'Dalam kegiatan ekonomi masyarakat, pihak yang bertugas menyalurkan barang atau jasa dari tempat pembuatnya agar dapat sampai ke tangan konsumen disebut...',
    options: [
      { id: 'A', text: 'Produsen' },
      { id: 'B', text: 'Distributor' },
      { id: 'C', text: 'Konsumen' },
      { id: 'D', text: 'Pengurai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Produsen adalah pihak yang menghasilkan barang atau jasa, Distributor adalah pihak yang menyalurkan barang atau jasa dari produsen ke konsumen, dan Konsumen adalah pihak yang menggunakan barang atau jasa.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Keragaman Sifat & Kerja Sama',
    difficulty: 'Sedang',
    text: 'Dalam kisah "Nala dan Niki", Nala memiliki sifat teratur, teliti, dan pandai mengatur anggaran, sedangkan Niki bersifat ceria, kreatif, dan pandai berbicara di depan umum. Ketika mengikuti pameran karya siswa, sikap terbaik yang mencerminkan kerja sama dari perbedaan sifat tersebut adalah...',
    options: [
      { id: 'A', text: 'Bekerja sendiri-sendiri agar tidak saling mengganggu' },
      { id: 'B', text: 'Memaksa Niki mengubah sifatnya agar selalu pendiam seperti Nala' },
      { id: 'C', text: 'Membagi peran sesuai kelebihan: Nala menyusun jadwal dan anggaran, sementara Niki mendesain poster dan mempresentasikan karya' },
      { id: 'D', text: 'Membatalkan keikutsertaan pameran karena sifat mereka tidak sama' },
    ],
    correctAnswer: 'C',
    explanation:
      'Perbedaan sifat bukanlah penghalang, melainkan kekuatan yang saling melengkapi apabila dimanfaatkan melalui pembagian tugas sesuai kelebihan masing-masing.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Nilai Karakter dalam Perbedaan',
    difficulty: 'Mudah',
    imageUrl: '/assets/soal/anak_kembar_saka_seli.png',
    imageCaption: 'Ilustrasi anak kembar Saka dan Seli di desa pesisir',
    text: 'Perhatikan ilustrasi anak kembar Saka dan Seli di desa pesisir! Saat badai melanda desa, Saka yang tenang membuat catatan kebutuhan warga dan pembagian tugas, sementara Seli yang berani mengajak teman-teman memperbaiki jaring dan membersihkan pantai. Nilai karakter utama yang ditunjukkan oleh keduanya adalah...',
    options: [
      { id: 'A', text: 'Persaingan untuk mencari pujian warga' },
      { id: 'B', text: 'Kerja sama, tanggung jawab, dan saling melengkapi perbedaan' },
      { id: 'C', text: 'Sikap mementingkan diri sendiri saat bencana' },
      { id: 'D', text: 'Ketergantungan tanpa mau berusaha' },
    ],
    correctAnswer: 'B',
    explanation:
      'Saka dan Seli membuktikan bahwa perbedaan sifat (tenang/perencana dan ceria/berani bertindak) dapat menjadi kekuatan luar biasa melalui kerja sama, tanggung jawab, dan kepedulian terhadap warga desa.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Kenampakan Alam Daratan dan Perairan',
    difficulty: 'Sedang',
    text: 'Wilayah daratan di daerah pegunungan yang terbentuk akibat proses erosi dan sedimentasi selama ratusan tahun, serta wilayah perairan atau laut yang relatif sempit dan menghubungkan dua bagian perairan yang lebih besar secara berturut-turut disebut...',
    options: [
      { id: 'A', text: 'Lembah dan Teluk' },
      { id: 'B', text: 'Bukit dan Samudra' },
      { id: 'C', text: 'Dataran tinggi dan Selat' },
      { id: 'D', text: 'Dataran rendah dan Laut' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dataran tinggi adalah dataran yang terletak di daerah pegunungan yang terbentuk karena hasil erosi dan sedimentasi selama ratusan tahun. Selat adalah wilayah perairan/laut yang relatif sempit yang menghubungkan dua bagian perairan lebih besar.',
  },

  // =========================================================================
  // B. PILIHAN GANDA KOMPLEKS / PGK (3 SOAL: ID 19 - 21, WAJIB 3 opsi A/B/C)
  // =========================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Peran Positif Manusia dalam Ekosistem',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/peran_manusia_aksi.png',
    imageCaption: 'Kartu berbagai tindakan manusia terhadap ekosistem',
    text: 'Perhatikan gambar 10 kartu labu berisi tindakan manusia terhadap lingkungan! Pilihlah SEMUA pernyataan yang menunjukkan peran POSITIF manusia untuk menjaga keseimbangan ekosistem (pilih lebih dari satu jawaban benar):',
    options: [
      { id: 'A', text: 'Melakukan reboisasi dan melindungi flora serta fauna' },
      { id: 'B', text: 'Mengolah limbah dengan benar, mengurangi polusi, dan mengelola sampah' },
      { id: 'C', text: 'Membuang limbah ke sungai dan menggunakan bahan kimia secara berlebih' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Opsi A BENAR: Reboisasi dan perlindungan flora/fauna menjaga kelestarian ekosistem.\n• Opsi B BENAR: Pengolahan limbah, pengurangan polusi, dan pengelolaan sampah mencegah pencemaran.\n• Opsi C SALAH: Membuang limbah ke sungai dan bahan kimia berlebih adalah peran negatif perusak ekosistem.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Karakteristik Wilayah Daratan & Lautan Indonesia',
    difficulty: 'Sukar',
    text: 'Wilayah Indonesia memiliki luas daratan sekitar 1.922.570 km² dan luas perairan laut sekitar 3.257.483 km². Berdasarkan data tersebut dan jenis kenampakan alam Indonesia, pilihlah SEMUA pernyataan yang benar (pilih lebih dari satu):',
    options: [
      {
        id: 'A',
        text: 'Indonesia disebut negara kepulauan sekaligus negara maritim karena wilayah perairan lautnya lebih luas dibandingkan daratannya',
      },
      {
        id: 'B',
        text: 'Lembah adalah wilayah daratan rendah yang cekung dan memanjang, diapit oleh pegunungan atau perbukitan',
      },
      {
        id: 'C',
        text: 'Teluk adalah wilayah daratan tinggi yang menjulang tajam dengan ketinggian di atas 1.000 meter dari permukaan laut',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Opsi A BENAR: Luas laut Indonesia (~3,25 juta km²) lebih besar dari daratannya (~1,92 juta km²) sehingga dikenal sebagai negara kepulauan dan maritim.\n• Opsi B BENAR: Lembah merupakan daratan rendah cekung memanjang yang diapit pegunungan/perbukitan.\n• Opsi C SALAH: Teluk adalah wilayah perairan laut yang menjorok ke daratan dan dibatasi daratan pada ketiga sisinya (bukan daratan tinggi).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Bidang Usaha Jasa dan Layanan',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/pekerja_jasa_usaha.png',
    imageCaption: 'Ilustrasi lima jenis profesi pekerja di masyarakat',
    text: 'Perhatikan gambar 5 profesi pekerja berikut (dari kiri ke kanan: pemadam kebakaran, petugas kebersihan, polisi, pemancing/nelayan ikan, dan dokter)! Pilihlah SEMUA kelompok profesi pada gambar yang termasuk bidang usaha JASA / LAYANAN (memberikan pelayanan tanpa menghasilkan barang) (pilih lebih dari satu):',
    options: [
      { id: 'A', text: 'Pemadam kebakaran, petugas kebersihan, dan polisi' },
      { id: 'B', text: 'Dokter yang memberikan pelayanan pemeriksaan kesehatan kepada pasien' },
      { id: 'C', text: 'Pemancing/nelayan yang menangkap ikan di perairan sebagai usaha perikanan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Opsi A BENAR: Pemadam kebakaran, petugas kebersihan, dan polisi memberikan pelayanan masyarakat tanpa memproduksi barang.\n• Opsi B BENAR: Dokter memberikan jasa/layanan kesehatan.\n• Opsi C SALAH: Penangkapan/budi daya ikan termasuk bidang usaha Perikanan yang menghasilkan produk ikan.',
  },

  // =========================================================================
  // C. PGK KATEGORI BENAR/SALAH (9 SOAL: ID 22 - 30, WAJIB 3 pernyataan)
  // =========================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Proses Siklus Air',
    difficulty: 'Sedang',
    text: 'Berdasarkan materi Siklus Air yang telah dipelajari, tentukan kebenaran masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Evaporasi adalah proses penguapan air dari laut, sungai, dan danau akibat pemanasan sinar matahari.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kondensasi adalah peristiwa jatuhnya air hujan dari awan menuju permukaan bumi.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menjaga kelestarian hutan di daerah pegunungan membantu memperlancar proses infiltrasi (peresapan air ke tanah).',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Evaporasi = penguapan air permukaan akibat panas matahari.\n• Pernyataan 2 SALAH: Jatuhnya air hujan adalah Presipitasi; Kondensasi adalah pengembunan uap air menjadi awan.\n• Pernyataan 3 BENAR: Akar pepohonan di hutan membantu tanah menyerap dan menyimpan air hujan.',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Ekosistem Akuatik & Terestrial',
    difficulty: 'Mudah',
    text: 'Berdasarkan pengelompokan ekosistem air (akuatik) dan ekosistem darat (terestrial), tentukan kebenaran setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Ekosistem sungai, danau, kolam, pantai, dan laut lepas termasuk kelompok ekosistem akuatik.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ekosistem padang rumput dan tundra merupakan bagian dari ekosistem air (akuatik).',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kaktus adalah tumbuhan khas yang beradaptasi untuk hidup di ekosistem gurun.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Kelima ekosistem tersebut berbasis perairan (akuatik).\n• Pernyataan 2 SALAH: Padang rumput dan tundra termasuk ekosistem darat (terestrial).\n• Pernyataan 3 BENAR: Kaktus menyimpan cadangan air dan memiliki daun berbentuk duri agar bertahan di gurun.',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Rantai Makanan Berbagai Ekosistem',
    difficulty: 'Sedang',
    text: 'Tentukan kebenaran setiap pernyataan mengenai komponen rantai makanan di ekosistem laut dan danau berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pada ekosistem laut, fitoplankton berperan sebagai produsen karena mampu membuat makanannya sendiri.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Konsumen tingkat 1 dalam rantai makanan selalu berupa hewan karnivora (pemakan daging).',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pada ekosistem danau, tumbuhan air seperti ganggang berperan sebagai produsen.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Fitoplankton melakukan fotosintesis sehingga menjadi produsen di laut.\n• Pernyataan 2 SALAH: Konsumen 1 memakan produsen (tumbuhan/alga), umumnya herbivora atau omnivora.\n• Pernyataan 3 BENAR: Tumbuhan air/ganggang menghasilkan makanan lewat fotosintesis.',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Struktur Piramida Makanan',
    difficulty: 'Sukar',
    text: 'Tentukan kebenaran setiap pernyataan mengenai susunan Piramida Makanan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pohon, rumput, dan tumbuhan berbunga menempati dasar piramida makanan sebagai produsen.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jumlah populasi Konsumen 3 (seperti singa atau elang) jauh lebih banyak dibandingkan jumlah produsen.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Hewan pemakan tumbuhan seperti kelinci, belalang, dan domba berada pada tingkat Konsumen 1.',
        correctAnswer: true,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Produsen selalu menempati dasar piramida makanan.\n• Pernyataan 2 SALAH: Konsumen puncak (Konsumen 3) berada di puncak piramida yang paling sempit karena populasinya paling sedikit.\n• Pernyataan 3 BENAR: Herbivora pemakan tumbuhan menempati tingkat Konsumen 1.',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Analisis Sebab-Akibat Keseimbangan Ekosistem',
    difficulty: 'Sukar',
    text: 'Berdasarkan penyelidikan keseimbangan ekosistem sawah Desa Hujan (Padi → Tikus → Ular → Elang), tentukan kebenaran setiap pernyataan sebab-akibat berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Jika jumlah tikus meningkat tajam, maka semakin banyak tanaman padi yang rusak dan ular berpotensi memiliki banyak mangsa.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika jumlah ular meningkat secara wajar dan seimbang, maka populasi tikus akan menurun sehingga tanaman padi kembali aman.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Cara terbaik mengembalikan keseimbangan ekosistem sawah adalah menangkap seluruh ular dan elang agar tidak masuk ke sawah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Lonjakan tikus merusak padi sekaligus menjadi sumber pakan bagi ular.\n• Pernyataan 2 BENAR: Ular mengendalikan hama tikus secara alami.\n• Pernyataan 3 SALAH: Menangkap ular dan elang justru merusak rantai makanan dan menyebabkan hama tikus tak terkendali.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Kenampakan Wilayah Perairan Indonesia',
    difficulty: 'Sedang',
    imageUrl: '/assets/soal/kenampakan_laut.png',
    imageCaption: 'Ilustrasi tiga kenampakan wilayah perairan: Laut, Samudra, dan Teluk',
    text: 'Perhatikan gambar tiga ikon kenampakan wilayah perairan (Laut, Samudra, dan Teluk) tersebut! Tentukan kebenaran setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Laut adalah perairan asin yang luas dan mengelilingi atau membagi wilayah daratan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Teluk merupakan wilayah perairan laut yang menjorok ke daratan dan dibatasi oleh daratan pada ketiga sisinya.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Samudra merupakan perairan air tawar sempit yang berada di antara dua bukit di daratan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Laut adalah perairan asin luas yang mengelilingi/membagi daratan.\n• Pernyataan 2 BENAR: Teluk menjorok ke daratan dan dikelilingi daratan pada tiga sisinya.\n• Pernyataan 3 SALAH: Samudra adalah lautan sangat luas berisi massa air asin yang meliputi permukaan bumi dan dibatasi benua atau kepulauan besar.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Jenis-Jenis Bidang Usaha Ekonomi',
    difficulty: 'Mudah',
    text: 'Tentukan kebenaran setiap pernyataan mengenai jenis-jenis bidang usaha aktivitas ekonomi masyarakat berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Peternakan adalah kegiatan memelihara dan merawat hewan untuk diambil manfaatnya, seperti daging, susu, atau telur.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pertambangan adalah kegiatan mengambil bahan tambang berharga dari dalam bumi.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bidang usaha perikanan hanya mencakup penangkapan ikan di laut dan tidak meliputi budi daya ikan di kolam.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Peternakan memelihara dan merawat hewan ternak untuk diambil hasilnya.\n• Pernyataan 2 BENAR: Pertambangan mengambil bahan tambang dari dalam bumi.\n• Pernyataan 3 SALAH: Perikanan meliputi kegiatan menangkap maupun membudidayakan ikan dan hasil air lainnya.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Pelaku Kegiatan Ekonomi',
    difficulty: 'Sedang',
    text: 'Tentukan kebenaran setiap pernyataan mengenai pengelompokan kegiatan Produksi, Distribusi, dan Konsumsi berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Petani yang menanam padi dan penjahit yang membuat pakaian sedang melakukan kegiatan produksi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pedagang buah di pasar dan penjual bakso keliling berperan menyalurkan barang kepada pembeli (distribusi).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Orang yang makan semangkuk mi dan anak yang memakan es krim termasuk kelompok produsen.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Petani dan penjahit menghasilkan barang sehingga melakukan kegiatan produksi.\n• Pernyataan 2 BENAR: Pedagang/penjual menyalurkan barang dari produsen ke konsumen (distribusi).\n• Pernyataan 3 SALAH: Orang yang makan mi atau es krim sedang memakai/menghabiskan nilai guna barang (konsumsi), sehingga disebut konsumen.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Keragaman Sifat & Peduli Lingkungan',
    difficulty: 'Mudah',
    text: 'Berdasarkan pembelajaran dari cerita-cerita "Anak Kembar" (Saka & Seli, Rana & Rani, Miko & Mita), tentukan kebenaran setiap pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Perbedaan sifat antarindividu bukanlah penghalang untuk berhasil, melainkan kekuatan yang saling melengkapi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membersihkan sampah di sungai, menanam pohon, dan bergotong royong menjaga pantai merupakan contoh tanggung jawab peduli lingkungan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Siswa yang teliti dan suka merencanakan tidak dapat bekerja sama dengan siswa yang ceria dan berani tampil.',
        correctAnswer: false,
      },
    ],
    explanation:
      '• Pernyataan 1 BENAR: Setiap anak memiliki kelebihan sifat masing-masing yang dapat saling melengkapi.\n• Pernyataan 2 BENAR: Aksi bersih sungai dan pantai serta penghijauan mencerminkan kepedulian terhadap lingkungan.\n• Pernyataan 3 SALAH: Sifat teliti/perencana dan ceria/berani justru berpadu sangat baik dalam kerja sama tim.',
  },
];
