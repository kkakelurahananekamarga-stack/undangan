/**
 * ====================================================================
 * KONFIGURASI UNDANGAN SEMINAR PROPOSAL
 * ====================================================================
 * Anda dapat mengedit semua informasi di bawah ini dengan sangat mudah.
 * Cukup ubah teks di dalam tanda kutip ("...") sesuai data Anda.
 */

const CONFIG = {
  // Informasi Mahasiswa / Peneliti
  mahasiswa: {
    nama: "Zatnika Maulana", // Ganti dengan nama lengkap Anda
    gelarTarget: "S.T.", // Gelar yang dituju (misal: S.Kom, S.T, S.Si, S.E, dll)
    nim: "22315015", // Ganti dengan NIM Anda
    programStudi: "Sistem dan Teknologi Informasi", // Ganti dengan Program Studi Anda
    fakultas: "Fakultas Teknik", // Ganti dengan Fakultas Anda
    universitas: "Universitas Muhammadiyah Kendari", // Ganti dengan Universitas Anda
    foto: "assets/profile.jpg", // Path foto profil (sudah diset foto Anda)
  },

  // Informasi Judul Proposal Skripsi
  skripsi: {
    judul: "IMPLEMENTASI METODE FUZZY PADA SISTEM SMART WATER TANK BERBASIS IOT UNTUK OPTIMASI PENGENDALIAN ADAPTIF POMPA PENGISIAN AIR",
    bidangKajian: "Internet Of Things",
  },

  // Waktu & Pelaksanaan Seminar (SANGAT PENTING: Format ISO YYYY-MM-DDTHH:mm:ss untuk Countdown & Kalender)
  jadwal: {
    // Tanggal untuk countdown & Google Calendar (Tahun-Bulan-HariTJam:Menit:Detik)
    // Contoh: "2026-10-20T09:00:00" artinya 20 Oktober 2026 pukul 09:00 WIB
    waktuMulaiISO: "2026-10-20T09:00:00",
    waktuSelesaiISO: "2026-10-20T11:30:00",

    // Tampilan teks yang dibaca pengunjung di halaman
    hariTanggal: "Jumat,11 Oktober 2026",
    jamPelaksanaan: "09.00 - 11.30 WIB",
    tempat: "Ruang Seminar",
    alamatLengkap: "Kampus lama Umkendari",
    
    // Tautan Google Maps lokasi (opsional, jika kosong tombol maps tidak muncul)
    googleMapsUrl: "https://maps.google.com/?q=Ruang+Seminar+Kampus",

    // Pelaksanaan Online (Zoom / Google Meet)
    hybridOnline: true, // Ubah false jika hanya tatap muka offline
    platformOnline: "Google Meet", // Zoom / Google Meet / Microsoft Teams
    linkOnline: "https://meet.google.com/und-sempro-2026", // Link meeting
  },

  // Dosen Pembimbing
  pembimbing: [
    {
      peran: "Dosen Pembimbing I",
      nama: "Ir. Ery Muchyar Hasiri, S.Kom.,M.T",
      nip: "19820512 200812 1 002"
    },
    {
      peran: "Dosen Pembimbing II",
      nama: "AMuh. Avied Bachmid, S.Kom.,M.Kom",
      nip: "19890423 201504 2 001"
    }
  ],

  // Dosen Penguji (Bisa dikosongkan jika belum ada pengumuman penguji)
  penguji: [
    {
      peran: "Dosen Penguji I",
      nama: "Prof. Dr. Ir. Hendra Saputra, M.Eng.",
      nip: "19750311 200003 1 001"
    },
    {
      peran: "Dosen Penguji II",
      nama: "Bambang Hermawan, S.T., M.Kom.",
      nip: "19860718 201212 1 003"
    }
  ],

  // Agenda Acara
  agenda: [
    { jam: "09.00 - 09.15", kegiatan: "Pembukaan oleh Moderator & Doa Bersama" },
    { jam: "09.15 - 09.45", kegiatan: "Presentasi Proposal Skripsi oleh Mahasiswa" },
    { jam: "09.45 - 11.15", kegiatan: "Sesi Tanya Jawab, Kritik & Saran Dosen Penguji & Pembimbing" },
    { jam: "11.15 - 11.30", kegiatan: "Rapat Penilaian, Pengumuman Hasil & Penutup" }
  ],

  // Kontak & RSVP WhatsApp Mahasiswa
  kontak: {
    nomorWhatsApp: "6281234567890", // Ganti dengan nomor WhatsApp Anda (awali dengan 62 tanpa + atau 0)
    namaKontak: "Zatnika Maulana",
  },

  // Background Music (Audio instrumen akustik / piano santai)
  musik: {
    aktif: true, // set false jika tidak ingin audio
    url: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3", // Sumber MP3 audio instrumen lembut
  }
};

// Jangan ubah baris di bawah ini agar konfigurasi terbaca di script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
