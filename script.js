const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeClass = document.getElementById("welcomeClass");
const welcomeCard = document.querySelector(".welcome-card");

const welcomeTexts = {
    home: ["Selamat Datang, Nama Mahasiswa", "Kelas SI-3X"],
    mahasiswa: ["Halo, Angel Marsaulina SITORUS", "Kelas SI-3E"],
    kelas: ["Progres Kelas Kamu", "4 Matakuliah - 158 Pendaftar"],
    aktivitas: ["Aktivitas Selanjutnya", "4 Aktivitas Menunggumu"],
    aktifitas: ["Aktivitas Selanjutnya", "4 Aktivitas Menunggumu"],
    statistik: ["Statistik Mahasiswa", "Lihat Grafik Kelas A sampai E"],
    dokumen: ["Lampiran Dokumen", "3 Dokumen Siap Dilihat"],
    settings: ["Pengaturan Akun", "Ubah Nama dan Kelasmu"],
};

// Mengambil semua menu di sidebar
const menuLinks = document.querySelectorAll(".nav-link");

// Mengambil elemen nama dan kelas
const studentName = document.getElementById("studentName");
const className = document.getElementById("className");

// Mengambil bagian dashboard
const progressPanel = document.getElementById("progressPanel");
const activitiesPanel = document.getElementById("activitiesPanel");
const attachmentsPanel = document.getElementById("attachmentsPanel");
const statisticsPanel = document.getElementById("statisticsPanel");

// Fungsi untuk mengembalikan warna seperti semula
function resetPanelColors() {
    progressPanel.classList.remove("red-mode");
    activitiesPanel.classList.remove("red-mode");
    attachmentsPanel.classList.remove("red-mode");
    statisticsPanel.classList.remove("red-mode");
}

// Perintah ketika menu diklik
menuLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const selectedMenu = link.dataset.menu;

        // Mengatur menu yang sedang aktif
        menuLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Mengembalikan warna panel ke awal
        resetPanelColors();

        const teks = welcomeTexts[selectedMenu];
        if (teks) {
            welcomeTitle.textContent = teks[0];
            welcomeClass.textContent = teks[1];
        }

        if (selectedMenu === "mahasiswa") {
            welcomeTitle.innerHTML = 'Halo, <span id="welcomeName">Angel Marsaulina SITORUS</span>';
            welcomeClass.textContent = "Kelas SI-3E";
            const namaSpan = document.getElementById("welcomeName");
            namaSpan.classList.remove("timbul-nama");
            void namaSpan.offsetWidth;
            namaSpan.classList.add("timbul-nama");
        }


        // MENU HOME
        if (selectedMenu === "home") {
            studentName.textContent = "Nama Mahasiswa";
            className.textContent = "Kelas SI-3X";
        }

        // MENU MAHASISWA
        if (selectedMenu === "mahasiswa") {
            studentName.textContent = "Angel Marsaulina SITORUS";
        }

        // MENU KELAS
        if (selectedMenu === "kelas") {
            welcomeTitle.textContent = "Selamat Datang, Angel Marsaulina SITORUS";
            welcomeClass.innerHTML = '<span id="kelasNama">Kelas SI-3E</span>';
            const kelasSpan = document.getElementById("kelasNama");
            kelasSpan.classList.remove("timbul-kelas");
            void kelasSpan.offsetWidth;
            kelasSpan.classList.add("timbul-kelas");
        }

        // MENU AKTIVITAS
        if (selectedMenu === "aktivitas") {
            progressPanel.classList.add("red-mode");
            activitiesPanel.classList.add("red-mode");
        }

        // MENU STATISTIK
        if (selectedMenu === "statistik") {
            statisticsPanel.classList.add("red-mode");
            studentName.textContent = "Statistik Mahasiswa";
        }

        // MENU DOKUMEN
        if (selectedMenu === "dokumen") {
            attachmentsPanel.classList.add("red-mode");
            studentName.textContent = "Angel Marsaulina SITORUS";
        }

        // MENU SETTINGS
        if (selectedMenu === "settings") {
            studentName.textContent = "Pengaturan";
            className.textContent = "Kelas SI-3E";
            alert("Menu Settings: Angel marsaulina sitorus, SI 3e, dan tampilan dashboard di sini.");
            }

        // MENU SIGN OUT
        if (selectedMenu === "signout") {
            const yakin = confirm("Yakin mau Sign Out, Angel?");
            if (yakin) {
                studentName.textContent = "Angel marsaulina Sitorus";
                className.textContent = "Kelas SI-3E";
                alert("Kamu sudah Sign Out. Klik Home untuk masuk lagi.");
            }

    }});

    // FITUR SEARCH - LANGSUNG TERTUJU KE PANEL
const searchInput = document.getElementById("searchInput");

const searchTargets = [
    { kata: ["statistik"], panel: statisticsPanel, menu: "statistik" },
    { kata: ["kelas", "progres", "matakuliah"], panel: progressPanel, menu: "kelas" },
    { kata: ["aktifitas", "aktivitas", "perkuliahan"], panel: activitiesPanel, menu: "aktivitas" },
    { kata: ["dokumen", "lampiran"], panel: attachmentsPanel, menu: "dokumen" },
];

searchInput.addEventListener("input", () => {
    const teks = searchInput.value.toLowerCase().trim();

    progressPanel.classList.remove("search-highlight");
    activitiesPanel.classList.remove("search-highlight");
    attachmentsPanel.classList.remove("search-highlight");
    statisticsPanel.classList.remove("search-highlight");

    if (teks === "") return;

    for (const target of searchTargets) {
        if (target.kata.some((k) => teks.includes(k))) {
            target.panel.classList.add("search-highlight");
            target.panel.scrollIntoView({ behavior: "smooth", block: "center" });
        }

     if (selectedMenu === "mahasiswa") {   
    const namaSpan = document.getElementById("welcomeName");
    namaSpan.classList.remove("timbul-nama");
    void namaSpan.offsetWidth;
    namaSpan.classList.add("timbul-nama");
}
    }
});

    
           
});
