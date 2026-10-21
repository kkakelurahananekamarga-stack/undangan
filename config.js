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
    nama: "Zatnika Maulana", // Nama lengkap mahasiswa
    gelarTarget: "S.T.", // Gelar yang dituju
    nim: "22315015", // NIM mahasiswa
    programStudi: "Sistem dan Teknologi Informasi", // Program Studi
    fakultas: "Fakultas Teknik", // Fakultas
    universitas: "Universitas Muhammadiyah Kendari", // Universitas
    foto: "profile.jpg", // Path foto profil
  },

  // Informasi Judul Proposal Skripsi
  skripsi: {
    judul: "Implementasi Metode Fuzzy pada Sistem Smart Water Tank Berbasis IoT untuk Optimasi Pengendalian Adaptif Pompa Pengisian Air",
    bidangKajian: "Internet of Things & Sistem Cerdas",
  },

  // Waktu & Pelaksanaan Seminar (Format ISO YYYY-MM-DDTHH:mm:ss untuk Countdown & Kalender)
  jadwal: {
    // Tanggal untuk countdown & Google Calendar
    waktuMulaiISO: "2026-10-23T09:00:00",
    waktuSelesaiISO: "2026-10-23T11:30:00",

    // Tampilan teks yang dibaca pengunjung di halaman
    hariTanggal: "Jumat, 23 Oktober 2026",
    jamPelaksanaan: "09.00 - 11.30 WITA",
    tempat: "Ruang Seminar Fakultas Teknik",
    alamatLengkap: "Universitas Muhammadiyah Kendari, Jl. KH. Ahmad Dahlan No. 10, Kendari",
    
    // Tautan Google Maps lokasi
    googleMapsUrl: "https://maps.google.com/?q=Universitas+Muhammadiyah+Kendari",

    // Pelaksanaan Online (Zoom / Google Meet)
    hybridOnline: true,
    platformOnline: "Google Meet",
    linkOnline: "https://meet.google.com/und-sempro-2026",
  },

  // Dosen Pembimbing
  pembimbing: [
    {
      peran: "Dosen Pembimbing I",
      nama: "Ir. Ery Muchyar Hasiri, S.Kom., M.T.",
      nip: "0913098203"
    },
    {
      peran: "Dosen Pembimbing II",
      nama: "Muh. Avied Bachmid, S.Kom., M.Kom.",
      nip: ""
    }
  ],

  // Dosen Penguji
  penguji: [
    {
      peran: "Dosen Penguji I",
      nama: "Ir. Ery Muchyar Hasiri, S.Kom., M.T.",
      nip: "0913098203"
    },
    {
      peran: "Dosen Penguji II",
      nama: "Muh. Avied Bachmid, S.Kom., M.Kom.",
      nip: ""
    },
    {
      peran: "Dosen Penguji III",
      nama: "Alfiah Fajriani, S.T., M.Eng.",
      nip: "0907099101"
    },
    {
      peran: "Dosen Penguji IV",
      nama: "Sitti Najmia Rifai, S.T., M.T.",
      nip: "0917129502"
    }
  ],

  // Agenda Acara
  agenda: [
    { jam: "09.00 - 09.15", kegiatan: "Pembukaan oleh Moderator & Doa Bersama" },
    { jam: "09.15 - 09.45", kegiatan: "Presentasi Proposal Skripsi oleh Mahasiswa" },
    { jam: "09.45 - 11.15", kegiatan: "Sesi Tanya Jawab, Kritik & Saran Dewan Penguji & Pembimbing" },
    { jam: "11.15 - 11.30", kegiatan: "Rapat Penilaian, Pengumuman Hasil & Penutup" }
  ],

  // Kontak & RSVP WhatsApp Mahasiswa
  kontak: {
    nomorWhatsApp: "6282211981566", // Nomor WhatsApp Anda
    namaKontak: "Zatnika",
  },

  // Background Music (Audio instrumen santai)
  musik: {
    aktif: true,
    url: "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
  }
};

// Jangan ubah baris di bawah ini agar konfigurasi terbaca di script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
