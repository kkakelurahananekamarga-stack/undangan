# 🎓 Undangan Digital Seminar Proposal Skripsi

Undangan digital interaktif, elegan, dan modern untuk Seminar Proposal Skripsi. Dibuat menggunakan HTML5, Vanilla CSS3 (Luxury Midnight Navy & Gold), dan Modern JavaScript murni tanpa ketergantungan rumit, sehingga **100% siap dihosting di Vercel secara gratis dan instan**.

---

## ✨ Fitur Utama

1. **Cover Amplop Interaktif**: Tampilan pembuka eksklusif dengan nama penerima tamu khusus dan tombol *Buka Undangan*.
2. **Personalisasi Nama Tamu**: Cukup tambahkan parameter `?to=Nama+Tamu` pada link undangan (contoh: `https://undangan-anda.vercel.app/?to=Bapak+Hendra`).
3. **Profil & Foto Mahasiswa**: Menggunakan foto formal yang Anda berikan dengan bingkai emas dan efek glow mewah.
4. **Countdown Timer Real-Time**: Hitung mundur hari, jam, menit, dan detik menuju jadwal seminar Anda.
5. **Simpan ke Google Calendar**: Tombol otomatis untuk menambahkan jadwal seminar langsung ke kalender tamu lengkap dengan judul, deskripsi, dan lokasi.
6. **Arah Lokasi & Virtual Meeting**: Tombol link Google Maps dan link Google Meet/Zoom (jika hybrid).
7. **Daftar Dewan Pembimbing & Penguji**: Kartu profesional untuk dosen pembimbing dan penguji.
8. **Rundown Acara**: Susunan timeline agenda seminar proposal.
9. **Buku Tamu Interaktif & RSVP**: Tamu dapat mengirimkan ucapan/doa restu dan konfirmasi kehadiran langsung tersimpan atau konfirmasi via WhatsApp.
10. **Background Music Player**: Pemutar musik instrumen elegan dengan tombol putar/jeda mengambang.

---

## 🛠️ Cara Mengedit Tanggal & Data (Sangat Mudah!)

Semua data dapat diedit hanya di satu file: **`config.js`**.

Buka file `config.js` dengan text editor apa saja (VS Code, Notepad, dll), lalu ubah teks di dalamnya:

### 1. Mengubah Tanggal & Jam Seminar
Cari bagian `jadwal`:
```javascript
jadwal: {
  // Format waktu ISO (Tahun-Bulan-HariTJam:Menit:Detik) untuk Countdown & Kalender
  waktuMulaiISO: "2026-10-20T09:00:00",
  waktuSelesaiISO: "2026-10-20T11:30:00",

  // Teks tampilan di halaman
  hariTanggal: "Selasa, 20 Oktober 2026",
  jamPelaksanaan: "09.00 - 11.30 WIB",
  tempat: "Ruang Seminar Gedung Dekanat Lantai 3",
  alamatLengkap: "Kampus Utama, Jl. Pendidikan No. 1",
  
  googleMapsUrl: "https://maps.google.com/?q=Lokasi+Kampus",
  hybridOnline: true,
  platformOnline: "Google Meet",
  linkOnline: "https://meet.google.com/und-sempro-2026",
},
```

### 2. Mengubah Nama Mahasiswa, NIM & Judul Skripsi
```javascript
mahasiswa: {
  nama: "Nama Anda Lengkap",
  gelarTarget: "S.Kom.",
  nim: "1234567890",
  programStudi: "Teknik Informatika",
  fakultas: "Fakultas Ilmu Komputer",
  universitas: "Universitas Anda",
  foto: "assets/profile.jpg",
},
skripsi: {
  judul: "Tuliskan Judul Skripsi Anda di Sini...",
  bidangKajian: "Rekayasa Perangkat Lunak",
}
```

### 3. Mengubah Nomor WhatsApp untuk RSVP
```javascript
kontak: {
  nomorWhatsApp: "6281234567890", // Awali dengan 62 (tanpa tanda + atau angka 0)
  namaKontak: "Nama Anda",
}
```

---

## 🚀 Cara Hosting ke Vercel (Gratis & 2 Menit Selesai)

### Cara 1: Menggunakan GitHub (Paling Direkomendasikan)
1. Buat repositori baru di GitHub (misal: `undangan-sempro`).
2. Upload semua file dari folder ini (`index.html`, `style.css`, `script.js`, `config.js`, `vercel.json`, dan folder `assets`) ke repositori GitHub tersebut.
3. Buka [https://vercel.com](https://vercel.com) dan masuk menggunakan akun GitHub Anda.
4. Klik tombol **"Add New..."** -> **"Project"**.
5. Pilih repositori GitHub tadi, lalu klik **"Deploy"** (tanpa perlu mengubah pengaturan build apa pun karena sudah static web).
6. Dalam beberapa detik, web undangan Anda sudah live dengan tautan aktif yang siap dibagikan!

### Cara 2: Menggunakan Vercel CLI (Lewat Terminal)
1. Buka terminal di folder ini:
   ```bash
   npx vercel
   ```
2. Ikuti instruksi login di layar.
3. Saat ditanya *`Set up and deploy?`*, ketik `y` lalu tekan Enter.
4. Selesai! URL aktif langsung muncul di terminal.

---

## 💌 Cara Membagikan Undangan dengan Nama Tamu
Setelah dihosting (misalnya domain Anda `https://sempro-fajar.vercel.app`):
- Untuk umum: `https://sempro-fajar.vercel.app`
- Untuk dosen penguji: `https://sempro-fajar.vercel.app/?to=Bapak+Dr.+Hendra`
- Untuk sahabat: `https://sempro-fajar.vercel.app/?to=Sahabat+Tercinta`
