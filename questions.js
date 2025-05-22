const questions = [
    {
        question: "Apa fungsi utama Direktorat Umum di lingkungan instansi pemerintah?",
        options: [
            "A. Mengelola proyek pembangunan fisik",
            "B. Menyusun kebijakan nasional",
            "C. Memberikan dukungan administrasi dan layanan umum",
            "D. Melakukan pengawasan internal"
        ],
        answer: "C",
        explanation: "Direktorat Umum bertugas menyelenggarakan dukungan administrasi, pengelolaan sarana prasarana, dan layanan umum lainnya untuk mendukung kelancaran organisasi."
    },
    {
        question: "Dalam struktur organisasi, Direktorat Keuangan berperan penting dalam...",
        options: [
            "A. Mengawasi pelaksanaan audit",
            "B. Menyusun dan melaksanakan anggaran serta pelaporan keuangan",
            "C. Mengembangkan aplikasi digital",
            "D. Menentukan kebijakan pengadaan barang"
        ],
        answer: "B",
        explanation: "Direktorat Keuangan bertanggung jawab atas pengelolaan anggaran, pembukuan, serta pelaporan keuangan instansi."
    },
    {
        question: "Salah satu tugas bagian kepegawaian adalah...",
        options: [
            "A. Menyusun laporan keuangan bulanan",
            "B. Menyediakan pelatihan pengadaan barang",
            "C. Mengelola data pegawai dan proses mutasi",
            "D. Menyiapkan bahan rapat umum"
        ],
        answer: "C",
        explanation: "Kepegawaian berfungsi mengelola data pegawai, mutasi, promosi, serta sistem informasi kepegawaian."
    },
    {
        question: "Tunjangan kinerja diberikan kepada PNS berdasarkan...",
        options: [
            "A. Masa kerja dan usia",
            "B. Golongan dan jabatan struktural",
            "C. Penilaian kinerja dan capaian kerja",
            "D. Tingkat pendidikan terakhir"
        ],
        answer: "C",
        explanation: "Tunjangan kinerja diberikan sesuai capaian kinerja individu dan unit kerja, sebagai bagian dari reformasi birokrasi."
    },
    {
        question: "Apa dasar hukum pemberian Uang Makan bagi PNS?",
        options: [
            "A. Peraturan Pemerintah No. 30 Tahun 2019",
            "B. Permenpan RB No. 6 Tahun 2022",
            "C. Peraturan Menteri Keuangan",
            "D. Undang-Undang ASN"
        ],
        answer: "C",
        explanation: "Uang Makan diatur dalam peraturan teknis dari Menteri Keuangan berdasarkan anggaran belanja pegawai."
    },
    {
        question: "Dalam aplikasi kepegawaian, informasi yang paling sering diakses adalah...",
        options: [
            "A. Laporan keuangan",
            "B. SKP dan absensi",
            "C. Peta jabatan",
            "D. Daftar inventaris kantor"
        ],
        answer: "B",
        explanation: "SKP (Sasaran Kinerja Pegawai) dan absensi menjadi bagian utama dalam pengelolaan kepegawaian berbasis digital."
    },
    {
        question: "Layanan umum dalam Direktorat Umum mencakup hal berikut, kecuali...",
        options: [
            "A. Pengelolaan kendaraan dinas",
            "B. Pengarsipan dan persuratan",
            "C. Pengawasan internal",
            "D. Pengelolaan fasilitas gedung"
        ],
        answer: "C",
        explanation: "Pengawasan internal merupakan tugas unit pengendalian intern, bukan bagian dari layanan umum."
    },
    {
        question: "Uang Makan tidak diberikan kepada PNS pada hari...",
        options: [
            "A. Libur nasional",
            "B. Cuti sakit",
            "C. Tugas luar kantor",
            "D. Hadir di kantor"
        ],
        answer: "A",
        explanation: "Uang Makan hanya diberikan pada hari kerja di mana PNS hadir dan bekerja di kantor."
    },
    {
        question: "Sistem informasi kepegawaian digunakan untuk...",
        options: [
            "A. Memonitor anggaran tahunan",
            "B. Mengarsipkan laporan pengadaan",
            "C. Mencatat riwayat dan kinerja pegawai",
            "D. Mengelola sistem keamanan kantor"
        ],
        answer: "C",
        explanation: "Sistem ini mendokumentasikan data-data kepegawaian seperti riwayat jabatan, pangkat, SKP, dan diklat."
    },
    {
        question: "Fungsi Direktorat Keuangan berkaitan dengan hal berikut, kecuali...",
        options: [
            "A. Penerbitan SPM",
            "B. Pengarsipan surat dinas",
            "C. Pelaporan anggaran",
            "D. Pembayaran gaji"
        ],
        answer: "B",
        explanation: "Pengarsipan surat adalah fungsi dari layanan administrasi umum, bukan dari Direktorat Keuangan."
    },
    {
        question: "Tujuan utama pemberian Tunjangan Kinerja (Tukin) adalah...",
        options: [
            "A. Menambah gaji pokok PNS",
            "B. Meningkatkan kesejahteraan tanpa evaluasi",
            "C. Meningkatkan kinerja dan produktivitas",
            "D. Menyamaratakan pendapatan antar pegawai"
        ],
        answer: "C",
        explanation: "Tukin mendorong PNS untuk bekerja lebih baik sesuai capaian target kinerja."
    },
    {
        question: "Pemberian tunjangan kinerja dilakukan berdasarkan...",
        options: [
            "A. Laporan bulanan",
            "B. Analisis jabatan",
            "C. Penilaian kinerja dan absensi",
            "D. Ujian kompetensi"
        ],
        answer: "C",
        explanation: "Penilaian ini berbasis capaian kinerja harian dan kehadiran yang dicatat dalam sistem."
    },
    {
        question: "Layanan pengelolaan surat masuk dan keluar termasuk fungsi...",
        options: [
            "A. Direktorat Keuangan",
            "B. Direktorat Umum",
            "C. Direktorat SDM",
            "D. Subdirektorat Internal"
        ],
        answer: "B",
        explanation: "Direktorat Umum menangani kebutuhan administratif termasuk surat menyurat."
    },
    {
        question: "Dalam sistem aplikasi kepegawaian, SKP digunakan untuk...",
        options: [
            "A. Mengatur penempatan pegawai",
            "B. Menilai kinerja tahunan",
            "C. Menyusun laporan anggaran",
            "D. Menghitung tunjangan fungsional"
        ],
        answer: "B",
        explanation: "SKP adalah alat ukur kinerja PNS tahunan yang wajib diisi dan dinilai."
    },
    {
        question: "Uang makan diberikan berdasarkan...",
        options: [
            "A. Golongan dan jabatan",
            "B. Jam kerja efektif",
            "C. Daftar hadir harian",
            "D. Rekapitulasi lembur"
        ],
        answer: "C",
        explanation: "Daftar hadir menjadi dasar verifikasi pemberian uang makan sesuai kehadiran."
    },
    {
        question: "Aplikasi kepegawaian modern umumnya terintegrasi dengan...",
        options: [
            "A. Sistem logistik nasional",
            "B. Aplikasi anggaran",
            "C. Sistem absensi elektronik",
            "D. Laporan proyek"
        ],
        answer: "C",
        explanation: "Sistem absensi elektronik memungkinkan keterpaduan antara data kehadiran dan kinerja."
    },
    {
        question: "Yang bukan termasuk dokumen kepegawaian adalah...",
        options: [
            "A. SK CPNS",
            "B. SKP",
            "C. SPPD",
            "D. SK Kenaikan Pangkat"
        ],
        answer: "C",
        explanation: "SPPD (Surat Perintah Perjalanan Dinas) adalah dokumen perjalanan, bukan dokumen kepegawaian utama."
    },
    {
        question: "Pengelolaan BMN (Barang Milik Negara) dilakukan oleh...",
        options: [
            "A. Direktorat Umum",
            "B. Direktorat Keuangan",
            "C. Direktorat SDM",
            "D. Inspektorat"
        ],
        answer: "A",
        explanation: "Direktorat Umum bertugas mencatat, mengelola, dan melaporkan penggunaan BMN."
    },
    {
        question: "Salah satu indikator pemberian tunjangan kinerja adalah...",
        options: [
            "A. Jam masuk dan pulang kantor",
            "B. Nilai SKP dan kehadiran",
            "C. Jumlah dokumen diselesaikan",
            "D. Waktu kerja lembur"
        ],
        answer: "B",
        explanation: "SKP dan kehadiran menjadi dua indikator utama dalam sistem evaluasi kinerja."
    },
    {
        question: "Apa peran Direktorat Umum dalam pengembangan SDM?",
        options: [
            "A. Menyusun pelatihan keuangan",
            "B. Mencetak bahan ajar diklat",
            "C. Mendukung pelaksanaan pelatihan pegawai",
            "D. Melakukan seleksi CPNS"
        ],
        answer: "C",
        explanation: "Direktorat Umum berperan dalam dukungan fasilitas, logistik, dan administratif dalam pelatihan pegawai."
    },
    {
        question: "Sistem absensi elektronik digunakan dalam kepegawaian untuk...",
        options: [
            "A. Mengatur penempatan pegawai",
            "B. Memverifikasi kehadiran dan waktu kerja",
            "C. Menyusun laporan SKP",
            "D. Menghitung gaji pokok"
        ],
        answer: "B",
        explanation: "Absensi elektronik berfungsi mencatat kehadiran secara real-time dan menjadi dasar penilaian kedisiplinan serta tunjangan."
    },
    {
        question: "Dalam manajemen ASN, SKP memiliki fungsi utama sebagai...",
        options: [
            "A. Bukti kehadiran",
            "B. Alat ukur kinerja pegawai",
            "C. Dokumen kenaikan jabatan",
            "D. Instrumen pemotongan gaji"
        ],
        answer: "B",
        explanation: "SKP (Sasaran Kinerja Pegawai) digunakan untuk menilai capaian kerja individu PNS."
    },
    {
        question: "Apa komponen utama dalam penyusunan SKP tahunan?",
        options: [
            "A. Tugas pokok dan hasil kerja",
            "B. Jam kerja dan lembur",
            "C. Absensi dan perjalanan dinas",
            "D. Golongan dan masa kerja"
        ],
        answer: "A",
        explanation: "SKP disusun berdasarkan tugas pokok jabatan dan indikator hasil kerja."
    },
    {
        question: "Salah satu tujuan aplikasi kepegawaian adalah...",
        options: [
            "A. Menekan pengeluaran anggaran",
            "B. Mempercepat pelayanan administrasi ASN",
            "C. Menambah beban administrasi",
            "D. Mencegah pengadaan barang"
        ],
        answer: "B",
        explanation: "Aplikasi ini mendigitalisasi layanan kepegawaian agar lebih cepat, transparan, dan efisien."
    },
    {
        question: "Yang termasuk indikator kedisiplinan ASN adalah...",
        options: [
            "A. Masa kerja dan usia",
            "B. Jenis jabatan",
            "C. Ketepatan waktu masuk dan pulang",
            "D. Riwayat pendidikan"
        ],
        answer: "C",
        explanation: "Kedisiplinan dinilai dari kehadiran, kepatuhan jam kerja, dan kepatuhan pada aturan kerja."
    },
    {
        question: "Proses penilaian SKP dilakukan oleh...",
        options: [
            "A. Pegawai itu sendiri",
            "B. Atasan langsung",
            "C. Direktorat Umum",
            "D. Auditor internal"
        ],
        answer: "B",
        explanation: "Penilaian kinerja dilakukan oleh atasan langsung sesuai peraturan ASN."
    },
    {
        question: "Direktorat Keuangan bertugas menerbitkan SPM. SPM adalah...",
        options: [
            "A. Surat Penetapan Mandiri",
            "B. Surat Perintah Membayar",
            "C. Surat Penyampaian Mutasi",
            "D. Surat Penugasan Menyeluruh"
        ],
        answer: "B",
        explanation: "SPM adalah dokumen resmi untuk pencairan anggaran belanja negara oleh bendahara."
    },
    {
        question: "Apa jenis tunjangan yang dihitung berdasarkan kehadiran dan disiplin kerja?",
        options: [
            "A. Tunjangan fungsional",
            "B. Tunjangan jabatan",
            "C. Tunjangan kinerja",
            "D. Tunjangan keluarga"
        ],
        answer: "C",
        explanation: "Tunjangan kinerja (tukin) disesuaikan dengan capaian kerja dan tingkat kedisiplinan."
    },
    {
        question: "Jika ASN tidak hadir tanpa keterangan, maka...",
        options: [
            "A. Tetap menerima tunjangan kinerja penuh",
            "B. Tidak berhak menerima uang makan",
            "C. Dianggap hadir sesuai jadwal",
            "D. Dapat klaim biaya perjalanan dinas"
        ],
        answer: "B",
        explanation: "Ketidakhadiran tanpa keterangan membuat ASN tidak berhak menerima hak-hak berbasis kehadiran seperti uang makan."
    },
    {
        question: "Aplikasi kepegawaian yang efisien dapat mengurangi...",
        options: [
            "A. Beban kerja pegawai secara keseluruhan",
            "B. Transparansi informasi",
            "C. Ketergantungan pada teknologi",
            "D. Efektivitas pengawasan"
        ],
        answer: "A",
        explanation: "Sistem digital mempercepat proses dan mengurangi beban administratif manual."
    },
    {
        question: "Data absensi ASN disinkronkan dengan...",
        options: [
            "A. Aplikasi perencanaan strategis",
            "B. Laporan pengadaan",
            "C. Sistem penggajian dan tunjangan",
            "D. Sistem transportasi"
        ],
        answer: "C",
        explanation: "Absensi digunakan dalam perhitungan tunjangan dan gaji, seperti uang makan dan tukin."
    },
    {
        question: "Yang tidak termasuk hak ASN adalah...",
        options: [
            "A. Tunjangan keluarga",
            "B. Tunjangan jabatan",
            "C. Uang transport pribadi",
            "D. Cuti tahunan"
        ],
        answer: "C",
        explanation: "Transportasi pribadi bukan hak yang diberikan secara langsung oleh negara kepada ASN."
    },
    {
        question: "Siapa yang menyusun SKP pegawai setiap tahun?",
        options: [
            "A. Direktorat Keuangan",
            "B. Direktorat Umum",
            "C. Pegawai yang bersangkutan",
            "D. Pegawai Kontrak"
        ],
        answer: "C",
        explanation: "SKP disusun sendiri oleh pegawai berdasarkan tugasnya, kemudian diverifikasi oleh atasan langsung."
    },
    {
        question: "Sistem presensi digital biasanya menggunakan metode...",
        options: [
            "A. Manual tulis tangan",
            "B. Daftar cetak",
            "C. Fingerprint atau scan wajah",
            "D. Pesan teks ke atasan"
        ],
        answer: "C",
        explanation: "Sistem digital menggunakan biometrik seperti sidik jari atau wajah untuk keabsahan."
    },
    {
        question: "Komponen utama dalam pengelolaan kepegawaian meliputi:",
        options: [
            "A. Jabatan, honorarium, tempat tinggal",
            "B. Data diri, SK, SKP, dan pelatihan",
            "C. Surat tugas dan kendaraan dinas",
            "D. Dana hibah dan CSR"
        ],
        answer: "B",
        explanation: "Elemen penting termasuk data administratif, surat keputusan, kinerja, dan pengembangan pegawai."
    },
    {
        question: "Siapa yang bertanggung jawab terhadap laporan keuangan instansi?",
        options: [
            "A. Kepala bagian umum",
            "B. Kepala bagian SDM",
            "C. Direktorat Keuangan",
            "D. Sekretaris pribadi pimpinan"
        ],
        answer: "C",
        explanation: "Direktorat Keuangan bertugas menyusun dan menyampaikan laporan keuangan."
    },
    {
        question: "SKP harus disusun dan dinilai setiap...",
        options: [
            "A. 3 bulan",
            "B. 6 bulan",
            "C. 1 tahun",
            "D. 2 tahun"
        ],
        answer: "C",
        explanation: "Penilaian SKP dilakukan tiap tahun sesuai siklus kinerja tahunan ASN."
    },
    {
        question: "Tunjangan kinerja yang dipotong karena ketidakhadiran disebut...",
        options: [
            "A. Penyesuaian jabatan",
            "B. Pemotongan fungsional",
            "C. Penyesuaian tukin",
            "D. Koreksi presensi"
        ],
        answer: "C",
        explanation: "Ketidakhadiran mempengaruhi besaran tukin melalui sistem penyesuaian."
    },
    {
        question: "Aplikasi kepegawaian digunakan untuk semua hal berikut, kecuali...",
        options: [
            "A. Penilaian kinerja",
            "B. Cuti tahunan",
            "C. Pencairan dana BOS",
            "D. Mutasi jabatan"
        ],
        answer: "C",
        explanation: "Dana BOS (sekolah) tidak terkait aplikasi kepegawaian di instansi pemerintah umum."
    },
    {
        question: "Dalam sistem pelaporan keuangan, siapa yang melakukan verifikasi awal?",
        options: [
            "A. Auditor eksternal",
            "B. Salma, Mba Eka, Kak Dira",
            "C. Bendahara",
            "D. Pustakawan"
        ],
        answer: "C",
        explanation: "Bendahara melakukan verifikasi awal atas transaksi dan bukti pengeluaran sebelum dilaporkan."
    },
    {
        question: "Sistem informasi kepegawaian dikembangkan untuk...",
        options: [
            "A. Menyulitkan prosedur administrasi",
            "B. Meningkatkan akuntabilitas dan efisiensi",
            "C. Mengurangi jumlah pegawai",
            "D. Menghapuskan pengarsipan"
        ],
        answer: "B",
        explanation: "Sistem ini mendukung pelayanan berbasis data yang cepat dan akurat."
    },
    {
        question: "Tugas utama Direktorat Umum yang berkaitan dengan lingkungan kerja adalah...",
        options: [
            "A. Menentukan gaji pokok",
            "B. Menyusun SPM",
            "C. Mengelola fasilitas kantor dan kenyamanan kerja",
            "D. Mengarsipkan dokumen anggaran"
        ],
        answer: "C",
        explanation: "Direktorat Umum menangani pengelolaan gedung, fasilitas, dan sarana kerja."
    },
    {
        question: "SKP yang tidak disusun akan berdampak pada...",
        options: [
            "A. Penurunan jabatan",
            "B. Penghentian gaji pokok",
            "C. Tidak diberikannya tunjangan kinerja",
            "D. Pemutusan hubungan kerja"
        ],
        answer: "C",
        explanation: "Tanpa SKP yang valid, kinerja tidak dapat dinilai sehingga Tukin tidak bisa dicairkan."
    },
    {
        question: "Aplikasi kepegawaian umumnya menyediakan fitur berikut, kecuali...",
        options: [
            "A. Profil ASN",
            "B. Usulan cuti",
            "C. Laporan pengadaan barang",
            "D. Riwayat diklat"
        ],
        answer: "C",
        explanation: "Pengadaan barang berada di ranah keuangan/logistik, bukan kepegawaian."
    },
    {
        question: "Yang bukan tugas dari Direktorat Umum adalah...",
        options: [
            "A. Pengelolaan BMN",
            "B. Penyediaan ruang kerja",
            "C. Pencairan gaji",
            "D. Pengelolaan arsip"
        ],
        answer: "C",
        explanation: "Pencairan gaji adalah kewenangan Direktorat Keuangan, bukan Direktorat Umum."
    },
    {
        question: "Penilaian kinerja ASN disampaikan melalui...",
        options: [
            "A. Aplikasi Absensi",
            "B. Aplikasi Sistem Informasi Kepegawaian",
            "C. Portal Layanan Keuangan",
            "D. Email pribadi"
        ],
        answer: "B",
        explanation: "Penilaian kinerja dilakukan secara sistematis lewat aplikasi khusus kepegawaian."
    },
    {
        question: "Pengelolaan aset kantor menjadi tanggung jawab...",
        options: [
            "A. Kepala seksi kepegawaian",
            "B. Direktorat Umum",
            "C. Tim IT",
            "D. Auditor internal"
        ],
        answer: "B",
        explanation: "Direktorat Umum mengelola dan melaporkan seluruh aset Barang Milik Negara (BMN)."
    },
    {
        question: "SKP harus disusun berdasarkan...",
        options: [
            "A. Minat pribadi",
            "B. Tugas dan fungsi jabatan",
            "C. Wewenang pimpinan",
            "D. Perintah tertulis"
        ],
        answer: "B",
        explanation: "SKP mengacu pada uraian tugas yang melekat pada jabatan ASN."
    },
    {
        question: "Dalam manajemen ASN, absensi digunakan sebagai indikator...",
        options: [
            "A. Kompetensi teknis",
            "B. Kedisiplinan kerja",
            "C. Peluang promosi",
            "D. Kinerja kolektif"
        ],
        answer: "B",
        explanation: "Tingkat kehadiran merupakan indikator utama dalam penilaian disiplin pegawai."
    },
    {
        question: "Siapa yang melakukan validasi akhir SKP?",
        options: [
            "A. Pegawai itu sendiri",
            "B. Direktorat Keuangan",
            "C. Atasan langsung",
            "D. Bahrin"
        ],
        answer: "C",
        explanation: "Validasi akhir SKP dilakukan oleh atasan sebagai bentuk pertanggungjawaban penilaian."
    },
    {
        question: "Nilai dasar ASN yang pertama kali disebut dalam UU ASN adalah...",
        options: [
            "A. Keadilan",
            "B. Integritas",
            "C. Akuntabilitas",
            "D. Profesionalisme"
        ],
        answer: "B",
        explanation: "Nilai dasar ASN menurut UU No. 5 Tahun 2014 mencakup integritas, profesionalisme, akuntabilitas, dan lainnya. Integritas disebut pertama karena menyangkut moralitas dan kejujuran dalam bekerja."
    },
    {
        question: "Prinsip utama dalam memberikan pelayanan publik yang baik adalah...",
        options: [
            "A. Cepat dan gratis",
            "B. Transparan dan akuntabel",
            "C. Mahal namun efisien",
            "D. Terbatas dan eksklusif"
        ],
        answer: "B",
        explanation: "Pelayanan publik harus dilakukan secara transparan, akuntabel, cepat, dan sesuai dengan prosedur yang berlaku."
    },
    {
        question: "Salah satu indikator pelayanan publik yang baik adalah...",
        options: [
            "A. Banyaknya jumlah pegawai",
            "B. Banyaknya anggaran yang digunakan",
            "C. Kepuasan masyarakat",
            "D. Banyaknya surat edaran"
        ],
        answer: "C",
        explanation: "Kepuasan masyarakat terhadap layanan merupakan indikator utama pelayanan publik yang berkualitas."
    },
    {
        question: "Kode etik ASN mengatur tentang...",
        options: [
            "A. Waktu kerja",
            "B. Hak cuti",
            "C. Norma perilaku dalam bekerja",
            "D. Golongan pangkat"
        ],
        answer: "C",
        explanation: "Kode etik merupakan pedoman sikap, nilai, dan moral dalam menjalankan tugas sebagai ASN."
    },
    {
        question: "Seorang ASN yang melanggar kode etik dapat dikenai sanksi berupa...",
        options: [
            "A. Penghargaan",
            "B. Cuti tambahan",
            "C. Hukuman disiplin",
            "D. Promosi jabatan"
        ],
        answer: "C",
        explanation: "Pelanggaran kode etik ASN termasuk pelanggaran disiplin yang dapat dikenai sanksi administratif."
    },
    {
        question: "Yang dimaksud dengan pelayanan prima adalah...",
        options: [
            "A. Layanan yang diberikan oleh pegawai senior",
            "B. Layanan terbaik yang mengutamakan kepuasan pengguna",
            "C. Layanan khusus untuk pejabat",
            "D. Layanan berbasis proyek"
        ],
        answer: "B",
        explanation: "Pelayanan prima berorientasi pada kualitas dan kepuasan pengguna layanan."
    },
    {
        question: "Prinsip profesionalisme ASN mencakup...",
        options: [
            "A. Keterlibatan dalam politik",
            "B. Pemihakan kepada kelompok tertentu",
            "C. Kompetensi dan etika kerja",
            "D. Otonomi mutlak"
        ],
        answer: "C",
        explanation: "Profesionalisme mengacu pada kemampuan, etika, dan sikap bertanggung jawab dalam melaksanakan tugas."
    },
    {
        question: "ASN harus bebas dari pengaruh...",
        options: [
            "A. Atasan langsung",
            "B. Sistem birokrasi",
            "C. Politik praktis",
            "D. Pelatihan berkala"
        ],
        answer: "C",
        explanation: "ASN harus netral dan tidak terlibat dalam kegiatan politik praktis sesuai UU ASN."
    },
    {
        question: "Perilaku yang mencerminkan integritas adalah...",
        options: [
            "A. Menerima hadiah dari mitra kerja",
            "B. Menyampaikan laporan palsu",
            "C. Menjaga kerahasiaan data",
            "D. Mengabaikan tugas tambahan"
        ],
        answer: "C",
        explanation: "Menjaga kerahasiaan data penting menunjukkan komitmen terhadap etika dan kepercayaan publik."
    },
    {
        question: "Salah satu bentuk akuntabilitas ASN adalah...",
        options: [
            "A. Menunda pekerjaan",
            "B. Bekerja tanpa pelaporan",
            "C. Menyusun laporan pertanggungjawaban",
            "D. Menghindari pengawasan"
        ],
        answer: "C",
        explanation: "Akuntabilitas berarti tanggung jawab atas kinerja, dibuktikan dengan laporan kerja yang jelas."
    },
    {
        question: "Sikap profesional ASN harus ditunjukkan dalam bentuk...",
        options: [
            "A. Tunduk pada semua keinginan atasan",
            "B. Patuh pada prosedur dan kompeten dalam tugas",
            "C. Tidak mengerjakan tugas yang sulit",
            "D. Menyimpan semua informasi untuk pribadi"
        ],
        answer: "B",
        explanation: "Profesionalisme mencakup kepatuhan terhadap sistem dan kemampuan melaksanakan tugas dengan baik."
    },
    {
        question: "Pelayanan publik yang baik harus bersifat...",
        options: [
            "A. Rumit dan tertutup",
            "B. Cepat, murah, dan mudah diakses",
            "C. Berjenjang dan sulit",
            "D. Eksklusif dan terbatas"
        ],
        answer: "B",
        explanation: "Layanan publik ideal harus efisien, murah, dan mudah diakses semua lapisan masyarakat."
    },
    {
        question: "Peraturan pemerintah yang mengatur disiplin ASN adalah...",
        options: [
            "A. PP No. 53 Tahun 2010",
            "B. PP No. 45 Tahun 1999",
            "C. PP No. 94 Tahun 2021",
            "D. PP No. 30 Tahun 1980"
        ],
        answer: "C",
        explanation: "Peraturan Pemerintah No. 94 Tahun 2021 adalah aturan terbaru tentang disiplin ASN yang menggantikan PP No. 53 Tahun 2010."
    },
    {
        question: "Ketika ASN tidak hadir kerja tanpa alasan sah selama 10 hari kerja berturut-turut, maka...",
        options: [
            "A. Tidak mendapat uang makan",
            "B. Diberi peringatan lisan",
            "C. Diberhentikan tidak hormat",
            "D. Tidak mendapat cuti"
        ],
        answer: "C",
        explanation: "Berdasarkan PP No. 94 Tahun 2021, ketidakhadiran tanpa keterangan selama 10 hari kerja berturut-turut bisa dikenai sanksi pemberhentian tidak hormat."
    },
    {
        question: "Tujuan utama adanya kode etik ASN adalah untuk...",
        options: [
            "A. Membedakan ASN dari non-ASN",
            "B. Meningkatkan pendapatan ASN",
            "C. Menjamin standar perilaku dalam menjalankan tugas",
            "D. Menentukan golongan ASN"
        ],
        answer: "C",
        explanation: "Kode etik menjadi acuan standar sikap dan perilaku ASN agar sesuai nilai-nilai dasar ASN."
    },
    {
        question: "Salah satu cara menunjukkan netralitas ASN adalah...",
        options: [
            "A. Mengikuti kampanye partai",
            "B. Memberikan donasi untuk caleg",
            "C. Tidak memakai atribut partai saat dinas",
            "D. Menyebarkan brosur politik di kantor"
        ],
        answer: "C",
        explanation: "ASN harus menjauhkan diri dari simbol-simbol partai saat menjalankan tugas."
    },
    {
        question: "Profesionalisme ASN dibangun melalui...",
        options: [
            "A. Koneksi keluarga",
            "B. Pendidikan, pelatihan, dan pengalaman",
            "C. Kegiatan sosial",
            "D. Kegiatan politik"
        ],
        answer: "B",
        explanation: "Profesionalisme lahir dari peningkatan kapasitas diri secara berkelanjutan."
    },
    {
        question: "Prinsip transparansi dalam pelayanan publik berarti...",
        options: [
            "A. Selalu mempublikasikan laporan keuangan",
            "B. Memberi akses informasi kepada masyarakat",
            "C. Memberikan semua data rahasia",
            "D. Menghindari laporan kepada atasan"
        ],
        answer: "B",
        explanation: "Transparansi berarti terbuka dalam proses dan informasi kepada publik sejauh tidak melanggar kerahasiaan negara."
    },
    {
        question: "Dalam pelayanan publik, akuntabilitas berarti...",
        options: [
            "A. Menolak laporan masyarakat",
            "B. Tidak perlu laporan pertanggungjawaban",
            "C. Harus bisa dipertanggungjawabkan setiap tindakan dan keputusan",
            "D. Menghindari proses hukum"
        ],
        answer: "C",
        explanation: "Akuntabilitas dalam pelayanan publik adalah kewajiban mempertanggungjawabkan hasil kerja kepada publik."
    },
    {
        question: "Salah satu indikator ASN berintegritas adalah...",
        options: [
            "A. Memilih-milih pekerjaan",
            "B. Selalu hadir di kantor walau tanpa kerja",
            "C. Jujur dan konsisten antara ucapan dan tindakan",
            "D. Pandai menyembunyikan kesalahan"
        ],
        answer: "C",
        explanation: "Integritas ditunjukkan lewat konsistensi perilaku dan kejujuran."
    },
    {
        question: "Prinsip responsif dalam pelayanan publik mengharuskan...",
        options: [
            "A. Pegawai menunda semua laporan",
            "B. Pegawai merespons cepat keluhan masyarakat",
            "C. Tidak ada komunikasi dengan masyarakat",
            "D. Membuat laporan berjenjang"
        ],
        answer: "B",
        explanation: "Responsif artinya cepat tanggap terhadap kebutuhan dan pengaduan masyarakat."
    },
    {
        question: "Pelayanan publik bersifat inklusif artinya...",
        options: [
            "A. Hanya untuk kalangan menengah ke atas",
            "B. Tidak terbuka untuk semua",
            "C. Menjangkau semua lapisan masyarakat tanpa diskriminasi",
            "D. Harus dilakukan oleh swasta"
        ],
        answer: "C",
        explanation: "Inklusif berarti layanan harus bisa diakses oleh siapa pun, termasuk kelompok rentan."
    }
];