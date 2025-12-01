// Data Simulasi Pengumuman
const announcements = [
    { 
        id: 1, 
        title: "Pendaftaran Siswa Baru 2026 Dibuka!", 
        date: "28 November 2025", 
        content: "Gelombang pertama pendaftaran untuk tahun ajaran baru telah dibuka. Daftarkan segera!" 
    },
    { 
        id: 2, 
        title: "Libur Akhir Semester Gasal", 
        date: "15 Desember 2025", 
        content: "Seluruh kegiatan belajar mengajar akan diliburkan mulai tanggal 20 Desember hingga 5 Januari." 
    },
    { 
        id: 3, 
        title: "Lomba MHQ Tingkat Provinsi", 
        date: "20 November 2024", 
        content: "Santri Mahad tahfizh Mush'ab Bin Umair Berhasil Menjuarai MHQ Tingkat Provinsi sebagai juara 1." 
    }
];

const announcementList = document.getElementById('announcement-list');

// --- FUNGSI TAMPILKAN PENGUMUMAN ---
function renderAnnouncements() {
    announcementList.innerHTML = ''; // Kosongkan list
    
    announcements.forEach(announcement => {
        const card = document.createElement('div');
        card.classList.add('announcement-card');
        card.innerHTML = `
            <h3>${announcement.title}</h3>
            <small><i class="far fa-calendar-alt"></i> ${announcement.date}</small>
            <p>${announcement.content}</p>
        `;
        announcementList.appendChild(card);
    });
}

// --- INIT: Jalankan fungsi saat halaman dimuat ---
document.addEventListener('DOMContentLoaded', () => {
    renderAnnouncements();
});