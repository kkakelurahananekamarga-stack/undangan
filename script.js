/**
 * ====================================================================
 * SCRIPT LOGIC - UNDANGAN DIGITAL SEMINAR PROPOSAL
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Tampilan & Data dari CONFIG
  initPageContent();

  // 2. Cek Parameter URL untuk Nama Tamu (contoh: ?to=Bapak+Hendra)
  initGuestName();

  // 3. Inisialisasi Countdown Timer
  initCountdown();

  // 4. Inisialisasi Dewan Penguji & Pembimbing
  renderDosenList();

  // 5. Inisialisasi Susunan Acara / Agenda
  renderAgendaTimeline();

  // 6. Inisialisasi Audio BGM & Kontrol
  initMusicController();

  // 7. Inisialisasi Buku Tamu & RSVP
  initGuestbook();

  // 8. Event Listener Buka Undangan & Tombol Aksi
  initEventListeners();
});

/**
 * Mengisi seluruh konten HTML berdasarkan variabel di config.js
 */
function initPageContent() {
  if (typeof CONFIG === 'undefined') {
    console.error("File config.js belum termuat dengan benar.");
    return;
  }

  const { mahasiswa, skripsi, jadwal } = CONFIG;

  // Nama & Info Cover
  const coverStudentName = document.getElementById('coverStudentName');
  if (coverStudentName) coverStudentName.textContent = mahasiswa.nama;

  // Info Mahasiswa di Hero
  document.getElementById('studentName').textContent = mahasiswa.nama;
  document.getElementById('targetDegree').textContent = mahasiswa.gelarTarget;
  document.getElementById('studentNim').textContent = mahasiswa.nim;
  document.getElementById('studentInstitution').textContent = `${mahasiswa.fakultas} • ${mahasiswa.universitas}`;
  
  if (mahasiswa.foto) {
    document.getElementById('studentPhoto').src = mahasiswa.foto;
  }

  // Info Skripsi
  document.getElementById('thesisTitle').textContent = skripsi.judul;
  document.getElementById('thesisField').innerHTML = `<i class="fa-solid fa-code-branch"></i> ${skripsi.bidangKajian}`;

  // Info Jadwal
  document.getElementById('eventDateText').textContent = jadwal.hariTanggal;
  document.getElementById('eventTimeText').innerHTML = `<i class="fa-regular fa-clock"></i> ${jadwal.jamPelaksanaan}`;
  document.getElementById('eventLocationName').textContent = jadwal.tempat;
  document.getElementById('eventAddressText').textContent = jadwal.alamatLengkap;

  // Google Maps Link
  const mapsBtn = document.getElementById('btnMapsLink');
  if (jadwal.googleMapsUrl) {
    mapsBtn.href = jadwal.googleMapsUrl;
  } else {
    mapsBtn.style.display = 'none';
  }

  // Hybrid Online Platform & Link
  const onlineSection = document.getElementById('onlineSection');
  const onlineBtn = document.getElementById('btnOnlineLink');
  if (jadwal.hybridOnline && jadwal.linkOnline) {
    document.getElementById('onlinePlatformText').textContent = jadwal.platformOnline || "Virtual Meeting";
    onlineBtn.href = jadwal.linkOnline;
  } else {
    if (onlineSection) onlineSection.style.display = 'none';
    if (onlineBtn) onlineBtn.style.display = 'none';
  }

  // Set Current Year di Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/**
 * Mengambil nama tamu dari URL Query string '?to=' atau '?u='
 * Contoh: https://domain.vercel.app/?to=Budi+Santoso
 */
function initGuestName() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestQuery = urlParams.get('to') || urlParams.get('u') || urlParams.get('p');
  const guestDisplay = document.getElementById('guestNameDisplay');

  if (guestQuery) {
    // Bersihkan karakter dan tampilkan
    const formattedGuest = decodeURIComponent(guestQuery).replace(/\+/g, ' ');
    guestDisplay.textContent = formattedGuest;
  } else {
    guestDisplay.textContent = "Sahabat & Rekan-rekan Tercinta";
  }
}

/**
 * Menghitung dan menjalankan Countdown Timer Real-time
 */
let countdownInterval;
function initCountdown() {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');

  function update() {
    const targetDate = new Date(CONFIG.jadwal.waktuMulaiISO).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

/**
 * Render Kartu Dewan Penguji dan Pembimbing
 */
function renderDosenList() {
  const container = document.getElementById('dosenListContainer');
  if (!container) return;

  container.innerHTML = '';
  const list = [...(CONFIG.pembimbing || []), ...(CONFIG.penguji || [])];

  list.forEach(item => {
    const isPembimbing = item.peran.toLowerCase().includes('pembimbing');
    const iconClass = isPembimbing ? 'fa-chalkboard-user' : 'fa-user-tie';

    const card = document.createElement('div');
    card.className = 'dosen-card';
    card.innerHTML = `
      <div class="dosen-icon">
        <i class="fa-solid ${iconClass}"></i>
      </div>
      <div>
        <div class="dosen-role">${item.peran}</div>
        <div class="dosen-name">${item.nama}</div>
        ${item.nip ? `<div class="dosen-nip">NIP/NIDN: ${item.nip}</div>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Render Timeline Rundown / Agenda
 */
function renderAgendaTimeline() {
  const container = document.getElementById('agendaTimeline');
  if (!container || !CONFIG.agenda) return;

  container.innerHTML = '';
  CONFIG.agenda.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-time"><i class="fa-regular fa-clock"></i> ${item.jam}</div>
      <div class="timeline-content">${item.kegiatan}</div>
    `;
    container.appendChild(el);
  });
}

/**
 * Controller Musik & Audio
 */
let audioCtx;
let isAudioPlaying = false;
const bgAudio = document.getElementById('bgAudio');
const btnToggleMusic = document.getElementById('btnToggleMusic');

function initMusicController() {
  if (CONFIG.musik && CONFIG.musik.url && bgAudio) {
    bgAudio.src = CONFIG.musik.url;
  }

  btnToggleMusic.addEventListener('click', toggleMusic);
}

function playMusic() {
  if (bgAudio && CONFIG.musik.aktif) {
    bgAudio.play().then(() => {
      isAudioPlaying = true;
      btnToggleMusic.classList.add('playing');
    }).catch(err => {
      console.log("Audio autoplay dicegah browser:", err);
      // Fallback: putar harmonic chime halus dengan Web Audio API
      playGentleChime();
    });
  }
}

function toggleMusic() {
  if (!bgAudio) return;

  if (isAudioPlaying) {
    bgAudio.pause();
    isAudioPlaying = false;
    btnToggleMusic.classList.remove('playing');
    showToast("Musik dijeda");
  } else {
    bgAudio.play().then(() => {
      isAudioPlaying = true;
      btnToggleMusic.classList.add('playing');
      showToast("Musik diputar");
    }).catch(() => {
      playGentleChime();
    });
  }
}

// Gentle pleasant chime synthesizer jika browser memblokir CDN MP3 eksternal
function playGentleChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // Chord C Major high harmonics
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + idx * 0.12 + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + idx * 0.12);
      osc.stop(audioCtx.currentTime + idx * 0.12 + 1.3);
    });
  } catch (e) {
    console.log(e);
  }
}

/**
 * Event Listeners & Integrasi Fitur
 */
function initEventListeners() {
  // Tombol Buka Undangan di Cover
  const btnOpen = document.getElementById('btnOpenInvitation');
  const coverScreen = document.getElementById('coverScreen');
  const mainWrapper = document.getElementById('mainWrapper');

  btnOpen.addEventListener('click', () => {
    coverScreen.classList.add('opened');
    mainWrapper.classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mulai Audio setelah interaksi pengguna
    if (CONFIG.musik && CONFIG.musik.aktif) {
      playMusic();
    }
  });

  // Tombol Simpan ke Google Calendar
  const btnCalendar = document.getElementById('btnAddToCalendar');
  if (btnCalendar) {
    btnCalendar.addEventListener('click', addToGoogleCalendar);
  }

  // Tombol Share Link
  const btnShare = document.getElementById('btnShareLink');
  if (btnShare) {
    btnShare.addEventListener('click', shareInvitationLink);
  }

  // Update Link WhatsApp RSVP secara dinamis
  updateWhatsAppButtonLink();
}

/**
 * Membuat tautan instan Google Calendar
 */
function addToGoogleCalendar() {
  const startDate = new Date(CONFIG.jadwal.waktuMulaiISO);
  const endDate = new Date(CONFIG.jadwal.waktuSelesaiISO);

  function formatDateISO(date) {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  }

  const title = encodeURIComponent(`Seminar Proposal Skripsi - ${CONFIG.mahasiswa.nama}`);
  const details = encodeURIComponent(
    `Seminar Proposal Skripsi\n` +
    `Mahasiswa: ${CONFIG.mahasiswa.nama} (${CONFIG.mahasiswa.nim})\n` +
    `Judul: ${CONFIG.skripsi.judul}\n` +
    `Lokasi: ${CONFIG.jadwal.tempat}\n` +
    (CONFIG.jadwal.hybridOnline ? `Link Online: ${CONFIG.jadwal.linkOnline}\n` : '')
  );
  const location = encodeURIComponent(`${CONFIG.jadwal.tempat}, ${CONFIG.jadwal.alamatLengkap}`);
  const dates = `${formatDateISO(startDate)}/${formatDateISO(endDate)}`;

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  window.open(calendarUrl, '_blank');
}

/**
 * Salin / Bagikan Link Undangan
 */
function shareInvitationLink() {
  const currentUrl = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: `Undangan Seminar Proposal - ${CONFIG.mahasiswa.nama}`,
      text: `Mengharap kehadiran Bapak/Ibu/Rekan pada Seminar Proposal Skripsi ${CONFIG.mahasiswa.nama}:`,
      url: currentUrl,
    }).catch(() => {
      copyUrlToClipboard(currentUrl);
    });
  } else {
    copyUrlToClipboard(currentUrl);
  }
}

function copyUrlToClipboard(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast("Tautan undangan berhasil disalin!");
  }).catch(() => {
    showToast("Gagal menyalin tautan.");
  });
}

/**
 * Toast Notification Helper
 */
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/**
 * Buku Tamu (Wishes) & RSVP
 */
const DEFAULT_WISHES = [
  {
    nama: "Budi Santoso",
    kehadiran: "Hadir Langsung",
    pesan: "Bismillah lancar dan sukses seminar proposalnya! Semoga dimudahkan revisinya nanti.",
    waktu: "1 jam yang lalu"
  },
  {
    nama: "Aulia Rahma",
    kehadiran: "Hadir Online",
    pesan: "Semangat kawan seperjuangan! Insya Allah ikut gabung via Google Meet yaa.",
    waktu: "3 jam yang lalu"
  },
  {
    nama: "Dian Pratama",
    kehadiran: "Doa Dari Jauh",
    pesan: "Mohon maaf belum bisa hadir langsung, sukses selalu dan lancar sampai wisuda!",
    waktu: "Kemarin"
  }
];

function initGuestbook() {
  const rsvpForm = document.getElementById('rsvpForm');
  const wishesList = document.getElementById('wishesList');

  // Ambil dari LocalStorage atau default
  let storedWishes = JSON.parse(localStorage.getItem('sempro_wishes_data'));
  if (!storedWishes || !Array.isArray(storedWishes) || storedWishes.length === 0) {
    storedWishes = DEFAULT_WISHES;
    localStorage.setItem('sempro_wishes_data', JSON.stringify(storedWishes));
  }

  renderWishes(storedWishes);

  // Handle Form Submit
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('inputName');
    const attendanceInput = document.getElementById('inputAttendance');
    const messageInput = document.getElementById('inputMessage');

    const newWish = {
      nama: nameInput.value.trim(),
      kehadiran: attendanceInput.value,
      pesan: messageInput.value.trim(),
      waktu: "Baru saja"
    };

    storedWishes.unshift(newWish);
    localStorage.setItem('sempro_wishes_data', JSON.stringify(storedWishes));
    renderWishes(storedWishes);

    showToast("Terima kasih, ucapan Anda telah dikirim!");
    updateWhatsAppButtonLink(newWish.nama, newWish.kehadiran, newWish.pesan);

    messageInput.value = '';
  });

  // Pantau perubahan pada form untuk memperbarui tombol WhatsApp
  ['inputName', 'inputAttendance', 'inputMessage'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => updateWhatsAppButtonLink());
  });
}

function renderWishes(wishes) {
  const container = document.getElementById('wishesList');
  if (!container) return;

  container.innerHTML = '';
  wishes.forEach(item => {
    let statusClass = 'status-hadir';
    if (item.kehadiran.includes('Online')) statusClass = 'status-online';
    if (item.kehadiran.includes('Doa')) statusClass = 'status-doa';

    const div = document.createElement('div');
    div.className = 'wish-item';
    div.innerHTML = `
      <div class="wish-header">
        <span class="wish-sender">${escapeHtml(item.nama)}</span>
        <span class="wish-status ${statusClass}">${escapeHtml(item.kehadiran)}</span>
      </div>
      <div class="wish-message">“${escapeHtml(item.pesan)}”</div>
      <div class="wish-time">${item.waktu}</div>
    `;
    container.appendChild(div);
  });
}

function updateWhatsAppButtonLink(optName, optStatus, optMsg) {
  const btnWA = document.getElementById('btnWhatsAppRsvp');
  if (!btnWA) return;

  const phone = (CONFIG.kontak && CONFIG.kontak.nomorWhatsApp) ? CONFIG.kontak.nomorWhatsApp : "6281234567890";
  const name = optName || document.getElementById('inputName')?.value.trim() || "Tamu";
  const attendance = optStatus || document.getElementById('inputAttendance')?.value || "Hadir";
  const message = optMsg || document.getElementById('inputMessage')?.value.trim() || "Semoga sukses dan lancar!";

  const text = encodeURIComponent(
    `Halo ${CONFIG.mahasiswa.nama},\n` +
    `Saya *${name}* mengonfirmasi bahwa saya: *${attendance}* di acara Seminar Proposal Skripsi kamu.\n\n` +
    `Pesan & Doa: "${message}"\n\n` +
    `Terima kasih!`
  );

  btnWA.href = `https://wa.me/${phone}?text=${text}`;
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.innerText = string;
  return div.innerHTML;
}
