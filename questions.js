// Bank Soal Administratif (dari data sebelumnya)
const administrativeQuestions = [
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
            "D. Auditor Inspektorat"
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
            "B. Sekretariat negara",
            "C. Bendahara pengeluaran",
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
            "D. Rekan sejawat"
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


// Bank Soal Substantif Jabatan Fungsional Siaran (dibuat dari PDF yang Anda berikan)
const substantiveQuestions = [
    {
        question: "Peraturan Menteri PAN dan RB Nomor 1 Tahun 2023 membahas tentang...",
        options: [
            "A. Angka Kredit Jabatan Fungsional",
            "B. Jabatan Fungsional",
            "C. Tunjangan Jabatan Fungsional",
            "D. Pembinaan Jabatan Fungsional Siaran"
        ],
        answer: "B",
        explanation: "Peraturan Menteri PAN dan RB Nomor 1 Tahun 2023 membahas tentang Jabatan Fungsional secara umum. [cite: 4]"
    },
    {
        question: "Peraturan Badan Kepegawaian Negara Nomor 3 Tahun 2023 mengatur tentang...",
        options: [
            "A. Kedudukan Jabatan Fungsional",
            "B. Tugas Jabatan Fungsional",
            "C. Angka Kredit, Kenaikan Pangkat dan Jenjang Jabatan Fungsional",
            "D. Pengangkatan Jabatan Fungsional"
        ],
        answer: "C",
        explanation: "Peraturan Badan Kepegawaian Negara Nomor 3 Tahun 2023 mengatur tentang Angka Kredit, Kenaikan Pangkat dan Jenjang Jabatan Fungsional. [cite: 4]"
    },
    {
        question: "Jabatan Fungsional di Bidang Komunikasi dan Informatika diatur dalam...",
        options: [
            "A. Peraturan Pemerintah No. 11 Tahun 2017",
            "B. Peraturan Menteri PAN dan RB Nomor 1 Tahun 2023",
            "C. Peraturan Menteri PAN dan RB Nomor 17 Tahun 2023",
            "D. Undang-Undang ASN"
        ],
        answer: "C",
        explanation: "Jabatan Fungsional di Bidang Komunikasi dan Informatika diatur dalam Peraturan Menteri PAN dan RB Nomor 17 Tahun 2023. [cite: 4]"
    },
    {
        question: "Jabatan Teknisi Siaran berkedudukan sebagai pelaksana teknis di bidang...",
        options: [
            "A. Pengawasan internal dan administrasi",
            "B. Teknik produksi, penyiaran, dan layanan media baru",
            "C. Perencanaan keuangan dan anggaran",
            "D. Pengembangan kebijakan nasional"
        ],
        answer: "B",
        explanation: "Jabatan Teknisi Siaran berkedudukan sebagai pelaksana teknis di bidang teknik produksi, penyiaran, dan layanan media baru pada Lembaga Penyiaran Publik. [cite: 6]"
    },
    {
        question: "Jabatan Pranata Siaran berkedudukan sebagai pelaksana teknis di bidang...",
        options: [
            "A. Pengelolaan sarana dan prasarana umum",
            "B. Produksi, penyiaran, dan layanan media baru",
            "C. Rekayasa jaringan dan infrastruktur IT",
            "D. Audit dan pelaporan keuangan"
        ],
        answer: "B",
        explanation: "Jabatan Pranata Siaran berkedudukan sebagai pelaksana teknis di bidang produksi, penyiaran, dan layanan media baru pada Lembaga Penyiaran Publik. [cite: 7]"
    },
    {
        question: "Berikut ini yang merupakan jenjang jabatan Teknisi Siaran kategori keahlian adalah, kecuali...",
        options: [
            "A. Teknisi Siaran Ahli Pertama",
            "B. Teknisi Siaran Ahli Muda",
            "C. Teknisi Siaran Ahli Madya",
            "D. Asisten Teknisi Siaran Penyelia"
        ],
        answer: "D",
        explanation: "Asisten Teknisi Siaran Penyelia termasuk dalam kategori keterampilan, bukan keahlian. [cite: 8]"
    },
    {
        question: "Jenjang jabatan 'Asisten Pranata Siaran Mahir' termasuk dalam kategori...",
        options: [
            "A. Keahlian",
            "B. Keterampilan",
            "C. Utama",
            "D. Madya"
        ],
        answer: "B",
        explanation: "Asisten Pranata Siaran Mahir termasuk dalam kategori Keterampilan. [cite: 8]"
    },
    {
        question: "Teknisi Siaran Ahli Utama memiliki tugas utama untuk melaksanakan...",
        options: [
            "A. Teknik produksi/penyiaran program siaran rutin",
            "B. Teknik produksi/penyiaran program siaran non rutin",
            "C. Teknik produksi/penyiaran program siaran khusus",
            "D. Pengembangan strategi, desain, dan inovasi teknik produksi/penyiaran"
        ],
        answer: "D",
        explanation: "Teknisi Siaran Ahli Utama bertugas melaksanakan pengembangan strategi, desain, dan inovasi teknik produksi/penyiaran. [cite: 10, 11]"
    },
    {
        question: "Asisten Teknisi Siaran Penyelia memiliki tugas utama untuk melaksanakan...",
        options: [
            "A. Operasional teknik produksi/penyiaran program siaran rutin",
            "B. Operasional teknik produksi/penyiaran program siaran non rutin",
            "C. Operasional teknik produksi/penyiaran program siaran khusus",
            "D. Operasional pengendalian teknik produksi/penyiaran"
        ],
        answer: "D",
        explanation: "Asisten Teknisi Siaran Penyelia bertugas melaksanakan operasional pengendalian teknik produksi/penyiaran. [cite: 10, 17]"
    },
    {
        question: "Pranata Siaran Ahli Madya memiliki tugas utama untuk melaksanakan...",
        options: [
            "A. Produksi/penyiaran program siaran rutin",
            "B. Produksi/penyiaran program siaran non rutin",
            "C. Produksi/penyiaran program siaran khusus",
            "D. Pengembangan strategi, desain, dan inovasi produksi/penyiaran"
        ],
        answer: "C",
        explanation: "Pranata Siaran Ahli Madya bertugas melaksanakan produksi/penyiaran program siaran khusus. [cite: 18, 20]"
    },
    {
        question: "Besaran tunjangan jabatan fungsional Teknisi Siaran Ahli Madya adalah...",
        options: [
            "A. Rp 540.000",
            "B. Rp 850.000",
            "C. Rp 960.000",
            "D. Rp 1.275.000"
        ],
        answer: "D",
        explanation: "Tunjangan untuk Teknisi Siaran Ahli Madya adalah Rp 1.275.000. [cite: 26]"
    },
    {
        question: "Berapakah besaran tunjangan untuk Asisten Teknisi Siaran Terampil?",
        options: [
            "A. Rp 230.000",
            "B. Rp 350.000",
            "C. Rp 540.000",
            "D. Rp 850.000"
        ],
        answer: "B",
        explanation: "Besaran tunjangan untuk Asisten Teknisi Siaran Terampil adalah Rp 350.000. [cite: 26]"
    },
    {
        question: "Tunjangan jabatan fungsional Pranata Siaran Ahli Muda adalah...",
        options: [
            "A. Rp 540.000",
            "B. Rp 960.000",
            "C. Rp 1.275.000",
            "D. Rp 230.000"
        ],
        answer: "B",
        explanation: "Tunjangan untuk Pranata Siaran Ahli Muda adalah Rp 960.000. [cite: 28]"
    },
    {
        question: "Besaran tunjangan untuk Asisten Pranata Siaran Pemula adalah...",
        options: [
            "A. Rp 230.000",
            "B. Rp 350.000",
            "C. Rp 540.000",
            "D. Rp 850.000"
        ],
        answer: "A",
        explanation: "Besaran tunjangan untuk Asisten Pranata Siaran Pemula adalah Rp 230.000. [cite: 28]"
    },
    {
        question: "Berikut ini adalah jenis pengangkatan ke dalam Jabatan Fungsional, kecuali...",
        options: [
            "A. Pengangkatan Pertama",
            "B. Perpindahan dari Jabatan Lain",
            "C. Promosi Kenaikan Jenjang",
            "D. Penugasan Sementara"
        ],
        answer: "D",
        explanation: "Pengangkatan ke dalam JF terdiri atas Pengangkatan Pertama, Perpindahan dari Jabatan Lain, dan Promosi Kenaikan Jenjang. Penugasan Sementara bukan jenis pengangkatan. [cite: 30]"
    },
    {
        question: "Persyaratan pendidikan untuk Pengangkatan Pertama Teknisi Siaran adalah...",
        options: [
            "A. SLTA atau setara",
            "B. D-III di bidang teknik",
            "C. S-1 atau D-IV di bidang komputer, teknik, broadcasting, atau desain",
            "D. SMK di bidang broadcasting"
        ],
        answer: "C",
        explanation: "Teknisi Siaran untuk Pengangkatan Pertama membutuhkan pendidikan S-1 atau D-IV di bidang komputer, teknik, broadcasting, atau desain. [cite: 31]"
    },
    {
        question: "Asisten Teknisi Siaran jenjang terampil untuk pengangkatan pertama memerlukan pendidikan...",
        options: [
            "A. SLTA atau setara",
            "B. D-III di bidang teknik, komputer, broadcasting, atau desain",
            "C. S-1 ilmu komunikasi",
            "D. SMK atau setara"
        ],
        answer: "B",
        explanation: "Asisten Teknisi Siaran jenjang terampil membutuhkan D-III di bidang teknik, komputer, broadcasting, atau desain. [cite: 32]"
    },
    {
        question: "Persyaratan pendidikan untuk Pengangkatan Pertama Pranata Siaran adalah...",
        options: [
            "A. D-III broadcasting",
            "B. S-1 atau D-IV ilmu komunikasi, seni, sastra, linguistik, desain, atau ilmu sosial",
            "C. SMK multimedia",
            "D. S-2 bidang komunikasi"
        ],
        answer: "B",
        explanation: "Pranata Siaran untuk Pengangkatan Pertama membutuhkan pendidikan S-1 atau D-IV ilmu komunikasi, seni, sastra, linguistik, desain, atau ilmu sosial. [cite: 33]"
    },
    {
        question: "Asisten Pranata Siaran jenjang pemula untuk pengangkatan pertama memerlukan pendidikan...",
        options: [
            "A. D-III broadcasting",
            "B. SLTA atau setara",
            "C. S-1 ilmu komunikasi",
            "D. SMK atau setara di bidang broadcasting atau multimedia"
        ],
        answer: "D",
        explanation: "Asisten Pranata Siaran jenjang pemula membutuhkan SMK atau setara di bidang broadcasting atau multimedia. [cite: 34]"
    },
    {
        question: "Syarat usia maksimal untuk Perpindahan dari Jabatan Lain ke Teknisi Siaran Ahli Madya adalah...",
        options: [
            "A. 53 tahun",
            "B. 55 tahun",
            "C. 60 tahun",
            "D. Tidak ada batasan usia"
        ],
        answer: "B",
        explanation: "Usia maksimal untuk Teknisi Siaran Ahli Madya adalah 55 tahun. [cite: 43]"
    },
    {
        question: "Pengalaman minimal yang harus dimiliki untuk Perpindahan dari Jabatan Lain ke JF yang dituju adalah...",
        options: [
            "A. 1 tahun",
            "B. 2 tahun",
            "C. 3 tahun",
            "D. 5 tahun"
        ],
        answer: "B",
        explanation: "Calon harus memiliki pengalaman paling singkat 2 tahun. [cite: 50]"
    },
    {
        question: "Untuk Promosi ke dalam atau dari JF, predikat kinerja paling rendah harus bernilai...",
        options: [
            "A. Baik dalam 1 tahun terakhir",
            "B. Baik dalam 2 tahun terakhir",
            "C. Sangat Baik dalam 1 tahun terakhir",
            "D. Sangat Baik dalam 2 tahun terakhir"
        ],
        answer: "D",
        explanation: "Syaratnya adalah memiliki predikat kinerja paling rendah bernilai sangat baik dalam 2 tahun terakhir. [cite: 54]"
    },
    {
        question: "Berapa lama tidak pernah dikenakan hukuman disiplin PNS tingkat sedang atau berat untuk syarat promosi?",
        options: [
            "A. 1 tahun terakhir",
            "B. 2 tahun terakhir",
            "C. 3 tahun terakhir",
            "D. 5 tahun terakhir"
        ],
        answer: "C",
        explanation: "Tidak pernah dikenakan hukuman disiplin PNS tingkat sedang atau berat dalam kurun waktu 3 tahun terakhir. [cite: 56]"
    },
    {
        question: "Penilaian kinerja JF menggunakan konversi predikat kinerja ke dalam perolehan Angka Kredit dan ditetapkan oleh...",
        options: [
            "A. Tim Penilai Kinerja PNS",
            "B. Pejabat Pembina Kepegawaian",
            "C. Atasan langsung masing-masing",
            "D. Badan Kepegawaian Negara"
        ],
        answer: "C",
        explanation: "Ditetapkan oleh atasan langsung masing-masing. [cite: 63]"
    },
    {
        question: "Dalam perencanaan kinerja (SKP), berapa hasil kerja yang wajib dituliskan sesuai jabatan fungsionalnya?",
        options: [
            "A. 1 hasil kerja",
            "B. 2 hasil kerja",
            "C. 3 hasil kerja",
            "D. Tidak ada batasan"
        ],
        answer: "B",
        explanation: "Wajib menuliskan 2 hasil kerja sesuai jabatan fungsionalnya dalam perencanaan kinerja (SKP). [cite: 64]"
    },
    {
        question: "Teknisi Siaran Ahli Utama membutuhkan Angka Kredit Kumulatif Minimal kenaikan jenjang sebesar...",
        options: [
            "A. 50",
            "B. 100",
            "C. 200",
            "D. 450"
        ],
        answer: "C",
        explanation: "Teknisi Siaran Ahli Utama membutuhkan 200 Angka Kredit Kumulatif Minimal kenaikan jenjang. [cite: 66]"
    },
    {
        question: "Koefisien Angka Kredit Tahunan untuk Pranata Siaran Ahli Muda adalah...",
        options: [
            "A. 12,5",
            "B. 25",
            "C. 37,5",
            "D. 50"
        ],
        answer: "C",
        explanation: "Koefisien Angka Kredit Tahunan untuk Pranata Siaran Ahli Muda adalah 37,5. [cite: 66]"
    },
    {
        question: "Jika seorang Pranata Siaran Ahli Pertama memiliki predikat kinerja 'Sangat Baik', berapa simulasi perolehan Angka Kredit per tahunnya?",
        options: [
            "A. 12,5",
            "B. 18,75",
            "C. 25",
            "D. 37,5"
        ],
        answer: "B",
        explanation: "Untuk Ahli Pertama (Koefisien 12,5) dengan predikat 'Sangat Baik' (150%), perolehan AK adalah 12,5 * 1.5 = 18,75. [cite: 68]"
    },
    {
        question: "Salah satu penyebab pemberhentian dari jabatan fungsional adalah...",
        options: [
            "A. Mengikuti diklat lebih dari 3 bulan",
            "B. Mengundurkan diri dari jabatan",
            "C. Mendapat penghargaan",
            "D. Kenaikan pangkat"
        ],
        answer: "B",
        explanation: "Salah satu penyebab pemberhentian adalah mengundurkan diri dari jabatan. [cite: 72]"
    },
    {
        question: "Kegiatan produksi program televisi yang dilakukan secara rutin dan kondisi peralatan produksi telah terpasang/terinstal adalah hasil kerja dari...",
        options: [
            "A. Produksi Program Non Rutin Televisi",
            "B. Produksi Program Khusus Televisi",
            "C. Produksi Program Rutin Televisi",
            "D. Produksi Program Berita Non Rutin Televisi"
        ],
        answer: "C",
        explanation: "Deskripsi tersebut merujuk pada 'Produksi Program Rutin Televisi'. [cite: 80]"
    },
    {
        question: "Hasil kerja 'Dokumen Operasional Teknik Penyiaran Digital' dikerjakan oleh...",
        options: [
            "A. Pranata Siaran",
            "B. Asisten Pranata Siaran",
            "C. Teknisi Siaran dan Asisten Teknisi Siaran",
            "D. Semua jabatan fungsional siaran"
        ],
        answer: "C",
        explanation: "Dokumen Operasional Teknik Penyiaran Digital dikerjakan oleh Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 86]"
    },
    {
        question: "Siapa yang mengerjakan Dokumen Monitoring dan Evaluasi Peralatan Teknis Produksi dan Penyiaran?",
        options: [
            "A. Asisten Teknisi Siaran",
            "B. Teknisi Siaran",
            "C. Pranata Siaran",
            "D. Asisten Pranata Siaran"
        ],
        answer: "B",
        explanation: "Dokumen Monitoring dan Evaluasi Peralatan Teknis Produksi dan Penyiaran dikerjakan oleh Teknisi Siaran. [cite: 87]"
    },
    {
        question: "Dokumen hasil kegiatan monitoring operasional stasiun transmisi adalah hasil kerja dari...",
        options: [
            "A. Dokumen Perencanaan Siaran",
            "B. Dokumen Operasional Stasiun Transmisi",
            "C. Dokumen Kajian Teknis Produksi Penyiaran",
            "D. Dokumen Operasional Siaran"
        ],
        answer: "B",
        explanation: "Dokumen hasil kegiatan monitoring operasional stasiun transmisi adalah Dokumen Operasional Stasiun Transmisi. [cite: 89]"
    },
    {
        question: "Kegiatan produksi program televisi selain berita yang dilaksanakan secara rutin, dengan kondisi peralatan produksi telah terpasang/terinstal, adalah hasil kerja dari...",
        options: [
            "A. Produksi Program Berita Rutin Televisi",
            "B. Produksi Program Non Berita Rutin Televisi",
            "C. Produksi Program Berita Non Rutin Televisi",
            "D. Produksi Program Non Berita Non Rutin Televisi"
        ],
        answer: "B",
        explanation: "Deskripsi tersebut sesuai dengan 'Produksi Program Non Berita Rutin Televisi'. [cite: 94, 95]"
    },
    {
        question: "Dokumen yang berisi perencanaan program siaran dalam bentuk pola acara siaran bulanan dan tahunan adalah...",
        options: [
            "A. Dokumen Operasional Siaran",
            "B. Dokumen Perencanaan Siaran",
            "C. Dokumen Monitoring dan Evaluasi Pelaksanaan Siaran",
            "D. Dokumen Kajian Teknis Program Siaran"
        ],
        answer: "B",
        explanation: "Dokumen yang berisi perencanaan program siaran dalam bentuk pola acara siaran bulanan dan tahunan adalah Dokumen Perencanaan Siaran. [cite: 105]"
    },
    {
        question: "Kegiatan pembuatan promosi program yang akan tayang hanya menggabungkan hasil produksi yang sudah ada tanpa ada proses syuting/produksi adalah hasil kerja dari...",
        options: [
            "A. Produksi Promo Program",
            "B. Produksi Program Non Berita Khusus",
            "C. Promo Program Pasca Produksi",
            "D. Produksi Program Rutin Televisi"
        ],
        answer: "C",
        explanation: "Kegiatan pembuatan promosi program yang akan tayang hanya menggabungkan hasil produksi yang sudah ada tanpa ada proses syuting/produksi adalah Promo Program Pasca Produksi. [cite: 107]"
    },
    {
        question: "Kegiatan produksi program berita dengan tingkat kesulitan tinggi, yang membutuhkan peralatan produksi kompleks dan kemampuan kru berpengalaman, adalah...",
        options: [
            "A. Produksi Program Berita Rutin Televisi",
            "B. Produksi Program Berita Non Rutin Televisi",
            "C. Produksi Program Berita Khusus",
            "D. Produksi Program Berita Singkat LPP Lokal"
        ],
        answer: "C",
        explanation: "Deskripsi ini merujuk pada 'Produksi Program Berita Khusus'. [cite: 100, 101]"
    },
    {
        question: "Dokumen yang memuat laporan monitoring pelaksanaan siaran dan evaluasi pelaksanaan produksi program dan penyiaran tiap bulan adalah...",
        options: [
            "A. Dokumen Perencanaan Siaran",
            "B. Dokumen Operasional Siaran",
            "C. Dokumen Monitoring dan Evaluasi Pelaksanaan Siaran",
            "D. Dokumen Kajian Teknis Program Siaran"
        ],
        answer: "C",
        explanation: "Dokumen yang memuat laporan monitoring pelaksanaan siaran dan evaluasi pelaksanaan produksi program dan penyiaran tiap bulan adalah Dokumen Monitoring dan Evaluasi Pelaksanaan Siaran. [cite: 109]"
    },
    {
        question: "Untuk promosi kenaikan jenjang, seorang PNS harus berijazah paling rendah magister untuk jabatan...",
        options: [
            "A. Asisten Pranata Siaran Penyelia",
            "B. Asisten Teknisi Siaran Mahir",
            "C. Teknisi Siaran dan Pranata Siaran jenjang ahli utama",
            "D. Pranata Siaran Ahli Pertama"
        ],
        answer: "C",
        explanation: "Berijazah paling rendah magister untuk Teknisi Siaran dan Pranata Siaran jenjang ahli utama. [cite: 60]"
    },
    {
        question: "Promosi kenaikan jenjang dilaksanakan berdasarkan pertimbangan rekomendasi...",
        options: [
            "A. Pejabat Pembina Kepegawaian",
            "B. Atasan Langsung",
            "C. Tim Penilai Kinerja PNS",
            "D. Badan Kepegawaian Negara"
        ],
        answer: "C",
        explanation: "Dilaksanakan berdasarkan pertimbangan rekomendasi Tim Penilai Kinerja PNS. [cite: 61]"
    },
    {
        question: "Berikut ini yang tidak dapat diangkat kembali dalam jabatan yang sama setelah diberhentikan adalah jenis pemberhentian karena...",
        options: [
            "A. Menjalani cuti di luar tanggungan negara",
            "B. Tidak memenuhi persyaratan jabatan",
            "C. Ditugaskan secara penuh pada jabatan pimpinan tinggi",
            "D. Menjalani tugas belajar lebih dari 6 bulan"
        ],
        answer: "B",
        explanation: "Bagi jenis pemberhentian 'mengundurkan diri dari jabatan' dan 'tidak memenuhi persyaratan jabatan' tidak dapat diangkat kembali dalam jabatan yang sama. [cite: 72]"
    },
    {
        question: "Tugas Jabatan Teknisi Siaran adalah melaksanakan...",
        options: [
            "A. produksi, penyiaran, dan layanan media baru",
            "B. teknik produksi, penyiaran, dan layanan media baru",
            "C. operasional produksi, penyiaran dan layanan media baru",
            "D. operasional teknik produksi, penyiaran, dan layanan media baru"
        ],
        answer: "B",
        explanation: "Tugas Jabatan Teknisi Siaran adalah melaksanakan teknik produksi, penyiaran, dan layanan media baru. [cite: 10]"
    },
    {
        question: "Pranata Siaran memiliki tugas jabatan untuk melaksanakan...",
        options: [
            "A. teknik produksi, penyiaran, dan layanan media baru",
            "B. operasional teknik produksi, penyiaran, dan layanan media baru",
            "C. produksi, penyiaran, dan layanan media baru",
            "D. operasional produksi, penyiaran dan layanan media baru"
        ],
        answer: "C",
        explanation: "Tugas Jabatan Pranata Siaran adalah melaksanakan produksi, penyiaran, dan layanan media baru. [cite: 10]"
    },
    {
        question: "Kegiatan produksi program televisi dengan peralatan produksi yang lebih kompleks secara tidak rutin, dan perlu penginstalan serta setting peralatan produksi, adalah ruang lingkup kegiatan...",
        options: [
            "A. Produksi Program Rutin Televisi",
            "B. Produksi Program Khusus Televisi",
            "C. Produksi Program Non Rutin Televisi",
            "D. Produksi Promo Program"
        ],
        answer: "C",
        explanation: "Deskripsi ini sesuai dengan 'Produksi Program Non Rutin Televisi'. [cite: 81]"
    },
    {
        question: "Kegiatan produksi program televisi yang membutuhkan peralatan produksi sangat kompleks dengan tingkat kesulitan tinggi dan kru yang berpengalaman adalah...",
        options: [
            "A. Produksi Program Rutin Televisi",
            "B. Produksi Program Non Rutin Televisi",
            "C. Produksi Program Khusus Televisi",
            "D. Produksi Program Berita Non Rutin Televisi"
        ],
        answer: "C",
        explanation: "Ini merujuk pada 'Produksi Program Khusus Televisi'. [cite: 82]"
    },
    {
        question: "Hasil kerja berupa 'Produksi Program Khusus Olahraga Televisi' adalah kegiatan produksi program pertandingan olahraga sebagai...",
        options: [
            "A. Content Provider",
            "B. Distributor",
            "C. Host Broadcaster",
            "D. Advertiser"
        ],
        answer: "C",
        explanation: "Produksi Program Khusus Olahraga Televisi adalah kegiatan produksi program pertandingan olahraga sebagai host broadcaster. [cite: 83]"
    },
    {
        question: "Kegiatan instalasi peralatan studio televisi mulai dari perancangan sampai tahap uji coba kelayakan untuk pelaksanaan siaran adalah hasil kerja dari...",
        options: [
            "A. Dokumen Operasional Teknik Penyiaran Digital",
            "B. Dokumen Pemeliharaan Stasiun Transmisi",
            "C. Instalasi Peralatan Studio Televisi",
            "D. Dokumen Kajian Teknis Produksi Penyiaran"
        ],
        answer: "C",
        explanation: "Deskripsi ini adalah Instalasi Peralatan Studio Televisi. [cite: 85]"
    },
    {
        question: "Dokumen hasil monitoring dan evaluasi peralatan teknis produksi dan penyiaran tiap bulan adalah hasil kerja dari...",
        options: [
            "A. Dokumen Operasional Teknik Penyiaran Digital",
            "B. Dokumen Kajian Teknis Produksi Penyiaran",
            "C. Dokumen Monitoring dan Evaluasi Peralatan Teknis Produksi dan Penyiaran",
            "D. Dokumen Pemeliharaan Stasiun Transmisi"
        ],
        answer: "C",
        explanation: "Dokumen hasil monitoring dan evaluasi peralatan teknis produksi dan penyiaran tiap bulan adalah Dokumen Monitoring dan Evaluasi Peralatan Teknis Produksi dan Penyiaran. [cite: 87]"
    },
    {
        question: "Dokumen kajian strategis atau desain teknologi produksi dan penyiaran nasional adalah hasil kerja dari...",
        options: [
            "A. Dokumen Operasional Teknik Penyiaran Digital",
            "B. Dokumen Monitoring dan Evaluasi Peralatan Teknis Produksi dan Penyiaran",
            "C. Dokumen Kajian Teknis Produksi Penyiaran",
            "D. Dokumen Pemeliharaan Stasiun Transmisi"
        ],
        answer: "C",
        explanation: "Dokumen kajian strategis atau desain teknologi produksi dan penyiaran nasional adalah Dokumen Kajian Teknis Produksi Penyiaran. [cite: 88]"
    },
    {
        question: "Dokumen hasil kegiatan pemeliharaan stasiun transmisi adalah hasil kerja dari...",
        options: [
            "A. Dokumen Operasional Stasiun Transmisi",
            "B. Dokumen Pemeliharaan Stasiun Transmisi",
            "C. Dokumen Perencanaan Siaran",
            "D. Dokumen Operasional Siaran"
        ],
        answer: "B",
        explanation: "Dokumen hasil kegiatan pemeliharaan stasiun transmisi adalah Dokumen Pemeliharaan Stasiun Transmisi. [cite: 90]"
    },
    {
        question: "Ruang lingkup kegiatan Pranata Siaran Ahli Pertama adalah melaksanakan...",
        options: [
            "A. produksi/penyiaran program siaran non rutin",
            "B. produksi/penyiaran program siaran rutin",
            "C. produksi/penyiaran program siaran khusus",
            "D. pengembangan strategi, desain, dan inovasi produksi/penyiaran"
        ],
        answer: "B",
        explanation: "Pranata Siaran Ahli Pertama melaksanakan produksi/penyiaran program siaran rutin. [cite: 18]"
    },
    {
        question: "Asisten Pranata Siaran Pemula memiliki ruang lingkup kegiatan melaksanakan...",
        options: [
            "A. operasional produksi/penyiaran program non rutin",
            "B. operasional produksi/penyiaran program siaran khusus",
            "C. operasional produksi/penyiaran program rutin",
            "D. operasional pengendalian produksi/penyiaran"
        ],
        answer: "C",
        explanation: "Asisten Pranata Siaran Pemula melaksanakan operasional produksi/penyiaran program rutin. [cite: 22]"
    },
    {
        question: "Kegiatan produksi program berita televisi yang dilakukan secara rutin, dengan kondisi peralatan produksi telah terpasang/terinstal, adalah hasil kerja dari...",
        options: [
            "A. Produksi Program Non Berita Rutin Televisi",
            "B. Produksi Program Berita Rutin Televisi",
            "C. Produksi Promo Program",
            "D. Produksi Program Khusus Berita"
        ],
        answer: "B",
        explanation: "Deskripsi ini sesuai dengan 'Produksi Program Berita Rutin Televisi'. [cite: 92]"
    },
    {
        question: "Produksi program televisi selain berita dengan peralatan produksi yang lebih kompleks secara tidak rutin, dan perlu penginstalan serta setting peralatan produksi, adalah...",
        options: [
            "A. Produksi Program Non Berita Rutin Televisi",
            "B. Produksi Program Berita Non Rutin Televisi",
            "C. Produksi Program Non Berita Non Rutin Televisi",
            "D. Produksi Program Khusus Non Berita"
        ],
        answer: "C",
        explanation: "Deskripsi ini sesuai dengan 'Produksi Program Non Berita Non Rutin Televisi'. [cite: 98, 99]"
    },
    {
        question: "Hasil kerja 'Produksi Program Khusus Drama Televisi' dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran dan Asisten Teknisi Siaran",
            "B. Pranata Siaran dan Asisten Pranata Siaran",
            "C. Hanya Teknisi Siaran",
            "D. Hanya Pranata Siaran"
        ],
        answer: "A",
        explanation: "Produksi Program Khusus Drama Televisi dikerjakan oleh Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 84]"
    },
    {
        question: "Dokumen pelaksanaan operasional siaran dalam bentuk rundown siaran harian dan laporan hasil siaran/logbook adalah hasil kerja dari...",
        options: [
            "A. Dokumen Perencanaan Siaran",
            "B. Dokumen Operasional Siaran",
            "C. Dokumen Monitoring dan Evaluasi Pelaksanaan Siaran",
            "D. Dokumen Kajian Teknis Program Siaran"
        ],
        answer: "B",
        explanation: "Deskripsi ini adalah Dokumen Operasional Siaran. [cite: 106]"
    },
    {
        question: "Kegiatan produksi yang bertujuan untuk mempromosikan program mulai dari pra produksi, produksi, dan pasca produksi (perlu syuting) adalah...",
        options: [
            "A. Promo Program Pasca Produksi",
            "B. Produksi Promo Program",
            "C. Produksi Program Non Berita Rutin Televisi",
            "D. Produksi Program Khusus Berita"
        ],
        answer: "B",
        explanation: "Kegiatan produksi yang bertujuan untuk mempromosikan program mulai dari pra produksi, produksi, dan pasca produksi (perlu syuting) adalah Produksi Promo Program. [cite: 108]"
    },
    {
        question: "Dokumen kajian pelaksanaan produksi dan penyiaran nasional adalah hasil kerja dari...",
        options: [
            "A. Dokumen Perencanaan Siaran",
            "B. Dokumen Operasional Siaran",
            "C. Dokumen Monitoring dan Evaluasi Pelaksanaan Siaran",
            "D. Dokumen Kajian Teknis Program Siaran"
        ],
        answer: "D",
        explanation: "Dokumen kajian pelaksanaan produksi dan penyiaran nasional adalah Dokumen Kajian Teknis Program Siaran. [cite: 110]"
    },
    {
        question: "Asisten Teknisi Siaran jenjang pemula memerlukan SLTA atau setara di bidang...",
        options: [
            "A. Teknik",
            "B. Komputer",
            "C. Ilmu Pengetahuan Alam",
            "D. Broadcasting"
        ],
        answer: "C",
        explanation: "Asisten Teknisi Siaran jenjang pemula memerlukan SLTA atau setara di bidang ilmu pengetahuan alam. [cite: 31, 37]"
    },
    {
        question: "Untuk perpindahan dari jabatan lain ke Pranata Siaran Ahli Utama, persyaratan pendidikannya adalah...",
        options: [
            "A. S-1 atau D-IV ilmu komunikasi",
            "B. D-III di bidang komunikasi",
            "C. S-2 di bidang ilmu komunikasi, seni, sastra, linguistik, desain, atau ilmu sosial",
            "D. SMK broadcasting"
        ],
        answer: "C",
        explanation: "S-2 di bidang ilmu komunikasi, seni, sastra, linguistik, desain, atau ilmu sosial untuk jenjang ahli utama. [cite: 39]"
    },
    {
        question: "Batasan usia maksimal 53 tahun untuk perpindahan dari jabatan lain berlaku untuk Pranata Siaran jenjang...",
        options: [
            "A. Ahli Madya",
            "B. Ahli Utama",
            "C. Ahli Pertama sampai Ahli Muda",
            "D. Penyelia"
        ],
        answer: "C",
        explanation: "Berusia maksimal 53 tahun untuk jenjang ahli pertama sampai dan ahli muda. [cite: 45]"
    },
    {
        question: "Salah satu syarat Promosi Kenaikan Jenjang adalah paling singkat berapa tahun dalam jabatan terakhir?",
        options: [
            "A. 6 bulan",
            "B. 1 tahun",
            "C. 2 tahun",
            "D. 3 tahun"
        ],
        answer: "B",
        explanation: "Paling singkat 1 (satu) tahun dalam jabatan terakhir. [cite: 57]"
    },
    {
        question: "Untuk Promosi Kenaikan Jenjang, predikat kinerja paling rendah harus bernilai baik dalam berapa tahun terakhir?",
        options: [
            "A. 1 tahun",
            "B. 2 tahun",
            "C. 3 tahun",
            "D. Tidak ada batasan"
        ],
        answer: "A",
        explanation: "Memiliki predikat kinerja paling rendah bernilai baik dalam 1 (satu) tahun terakhir. [cite: 58]"
    },
    {
        question: "Teknisi Siaran ahli muda memiliki ruang lingkup kegiatan melaksanakan teknik produksi/penyiaran program siaran...",
        options: [
            "A. rutin",
            "B. non rutin",
            "C. khusus",
            "D. pengembangan strategi"
        ],
        answer: "B",
        explanation: "Teknisi Siaran ahli muda melaksanakan teknik produksi/penyiaran program siaran non rutin. [cite: 12]"
    },
    {
        question: "Asisten Teknisi Siaran terampil memiliki ruang lingkup kegiatan melaksanakan operasional teknik produksi/penyiaran program siaran...",
        options: [
            "A. rutin",
            "B. non rutin",
            "C. khusus",
            "D. pengendalian"
        ],
        answer: "B",
        explanation: "Asisten Teknisi Siaran terampil melaksanakan operasional teknik produksi/penyiaran program siaran non rutin. [cite: 15]"
    },
    {
        question: "Pranata Siaran ahli utama memiliki ruang lingkup kegiatan melaksanakan...",
        options: [
            "A. produksi/penyiaran program siaran rutin",
            "B. produksi/penyiaran program siaran non rutin",
            "C. produksi/penyiaran program siaran khusus",
            "D. pengembangan strategi, desain, dan inovasi produksi/penyiaran"
        ],
        answer: "D",
        explanation: "Pranata Siaran ahli utama melaksanakan pengembangan strategi, desain, dan inovasi produksi/penyiaran. [cite: 21]"
    },
    {
        question: "Asisten Pranata Siaran terampil memiliki ruang lingkup kegiatan melaksanakan operasional produksi/penyiaran program...",
        options: [
            "A. rutin",
            "B. non rutin",
            "C. siaran khusus",
            "D. pengendalian"
        ],
        answer: "B",
        explanation: "Asisten Pranata Siaran terampil melaksanakan operasional produksi/penyiaran program non rutin. [cite: 23]"
    },
    {
        question: "Apakah ASN dapat dikenakan hukuman disiplin PNS tingkat sedang atau berat dalam kurun waktu 3 (tiga) tahun terakhir untuk promosi ke dalam atau dari JF?",
        options: [
            "A. Ya, asalkan memenuhi Angka Kredit Kumulatif",
            "B. Tidak, harus bebas dari hukuman tersebut",
            "C. Hanya jika sudah menjalani sanksi",
            "D. Tergantung rekomendasi Tim Penilai Kinerja"
        ],
        answer: "B",
        explanation: "Tidak pernah dikenakan hukuman disiplin PNS tingkat sedang atau berat dalam kurun waktu 3 (tiga) tahun terakhir. [cite: 56]"
    },
    {
        question: "Angka Kredit Kumulatif Minimal Kenaikan Pangkat untuk Ahli Madya dari $IV/a$ ke $IV/b$ adalah...",
        options: [
            "A. 50",
            "B. 100",
            "C. 150",
            "D. 200"
        ],
        answer: "C",
        explanation: "Untuk Ahli Madya, Angka Kredit Kumulatif Minimal Kenaikan Pangkat adalah 150. [cite: 66]"
    },
    {
        question: "Jenjang Pranata Siaran Ahli Pertama memiliki Koefisien Angka Kredit Tahunan sebesar...",
        options: [
            "A. 12,5",
            "B. 25",
            "C. 37,5",
            "D. 50"
        ],
        answer: "A",
        explanation: "Pranata Siaran Ahli Pertama memiliki Koefisien Angka Kredit Tahunan sebesar 12,5. [cite: 66]"
    },
    {
        question: "Jika seorang Asisten Teknisi Siaran Penyelia memiliki predikat kinerja 'Kurang', berapa simulasi perolehan Angka Kredit per tahunnya?",
        options: [
            "A. 25",
            "B. 18,75",
            "C. 12,5",
            "D. 6,25"
        ],
        answer: "C",
        explanation: "Untuk Penyelia (Koefisien 25) dengan predikat 'Kurang' (50%), perolehan AK adalah 25 * 0.5 = 12,5. [cite: 68]"
    },
    {
        question: "Langkah pertama dalam Alur Konversi Angka Kredit melalui E-Kinerja adalah...",
        options: [
            "A. Sinkronisasi AK SIASN",
            "B. Buat Preview PAK",
            "C. Menu Angka Kredit",
            "D. Tambah PAK"
        ],
        answer: "C",
        explanation: "Langkah pertama adalah mengakses Menu Angka Kredit. [cite: 69]"
    },
    {
        question: "Pemberhentian sementara sebagai PNS dapat menjadi penyebab...",
        options: [
            "A. Kenaikan pangkat",
            "B. Penilaian kinerja",
            "C. Pemberhentian dalam jabatan",
            "D. Promosi jabatan"
        ],
        answer: "C",
        explanation: "Pemberhentian sementara sebagai PNS adalah salah satu penyebab pemberhentian dalam jabatan. [cite: 72]"
    },
    {
        question: "Kegiatan produksi program rutin radio LPP Lokal adalah hasil kerja yang dikerjakan oleh...",
        options: [
            "A. Hanya Teknisi Siaran",
            "B. Hanya Asisten Teknisi Siaran",
            "C. Teknisi Siaran dan Asisten Teknisi Siaran",
            "D. Pranata Siaran"
        ],
        answer: "C",
        explanation: "Produksi Program Rutin Radio LPP Lokal adalah hasil kerja Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 74, 75]"
    },
    {
        question: "Hasil kerja 'Produksi Program Khusus Berita' dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran dan Asisten Teknisi Siaran",
            "B. Pranata Siaran dan Asisten Pranata Siaran",
            "C. Hanya Pranata Siaran",
            "D. Hanya Asisten Pranata Siaran"
        ],
        answer: "B",
        explanation: "Produksi Program Khusus Berita dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 76]"
    },
    {
        question: "Instalasi Peralatan Studio Radio adalah salah satu hasil kerja dari Jabatan Fungsional...",
        options: [
            "A. Pranata Siaran",
            "B. Asisten Pranata Siaran",
            "C. Teknisi Siaran dan Asisten Teknisi Siaran",
            "D. Hanya Asisten Teknisi Siaran"
        ],
        answer: "C",
        explanation: "Instalasi Peralatan Studio Radio adalah hasil kerja Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 74, 75]"
    },
    {
        question: "Dokumen Operasional Siaran, yang berisi rundown siaran harian dan laporan hasil siaran/logbook, dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran",
            "B. Asisten Teknisi Siaran",
            "C. Pranata Siaran dan Asisten Pranata Siaran",
            "D. Semua JF Siaran"
        ],
        answer: "C",
        explanation: "Dokumen Operasional Siaran dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 76, 77, 106]"
    },
    {
        question: "Kegiatan produksi program berita non rutin televisi yang dilakukan dengan peralatan produksi yang lebih kompleks secara tidak rutin adalah...",
        options: [
            "A. Produksi Program Rutin Berita Televisi",
            "B. Produksi Program Non Berita Rutin Televisi",
            "C. Produksi Program Berita Non Rutin Televisi",
            "D. Produksi Program Khusus Berita"
        ],
        answer: "C",
        explanation: "Deskripsi ini sesuai dengan 'Produksi Program Berita Non Rutin Televisi'. [cite: 96]"
    },
    {
        question: "Asisten Pranata Siaran jenjang terampil untuk pengangkatan pertama memerlukan pendidikan D-III di bidang...",
        options: [
            "A. Teknik",
            "B. Ilmu Pengetahuan Alam",
            "C. Broadcasting, teknologi multimedia, jurnalistik, tata rias, komunikasi, atau penyiaran",
            "D. Komputer"
        ],
        answer: "C",
        explanation: "Asisten Pranata Siaran jenjang terampil membutuhkan D-III di bidang broadcasting, teknologi multimedia, jurnalistik, tata rias, komunikasi, atau penyiaran. [cite: 34, 41]"
    },
    {
        question: "Untuk perpindahan dari jabatan lain ke Teknisi Siaran Ahli Utama, persyaratan pendidikannya adalah...",
        options: [
            "A. S-1 atau D-IV di bidang teknik",
            "B. D-III di bidang broadcasting",
            "C. S-2 di bidang komputer, teknik, broadcasting, atau desain",
            "D. SLTA atau setara"
        ],
        answer: "C",
        explanation: "S-2 di bidang komputer, teknik, broadcasting, atau desain untuk jenjang ahli utama. [cite: 36]"
    },
    {
        question: "Dokumen operasional siaran yang berisi rundown siaran harian dan laporan hasil siaran/logbook adalah hasil kerja dari...",
        options: [
            "A. Pranata Siaran",
            "B. Asisten Pranata Siaran",
            "C. Keduanya",
            "D. Bukan keduanya"
        ],
        answer: "C",
        explanation: "Dokumen Operasional Siaran dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 106]"
    },
    {
        question: "Jika ASN menjalani tugas belajar lebih dari 6 (enam) bulan, hal ini dapat menyebabkan...",
        options: [
            "A. Promosi jabatan",
            "B. Kenaikan tunjangan",
            "C. Pemberhentian dalam jabatan",
            "D. Penilaian kinerja yang lebih tinggi"
        ],
        answer: "C",
        explanation: "Menjalani tugas belajar lebih dari 6 (enam) bulan adalah salah satu penyebab pemberhentian dalam jabatan. [cite: 72]"
    },
    {
        question: "Hasil kerja 'Produksi Program Khusus Non Berita' dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran",
            "B. Asisten Teknisi Siaran",
            "C. Pranata Siaran dan Asisten Pranata Siaran",
            "D. Semua JF Siaran"
        ],
        answer: "C",
        explanation: "Produksi Program Khusus Non Berita dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 76, 77, 102, 103]"
    },
    {
        question: "Berapa lama tidak pernah dikenakan hukuman karena melakukan pelanggaran kode etik dan profesi PNS untuk syarat promosi?",
        options: [
            "A. 1 tahun terakhir",
            "B. 2 tahun terakhir",
            "C. 3 tahun terakhir",
            "D. 5 tahun terakhir"
        ],
        answer: "C",
        explanation: "Tidak pernah dikenakan hukuman karena melakukan pelanggaran kode etik dan profesi PNS dalam kurun waktu 3 (tiga) tahun terakhir. [cite: 55]"
    },
    {
        question: "Koefisien Angka Kredit Tahunan untuk Teknisi Siaran Ahli Utama adalah...",
        options: [
            "A. 25",
            "B. 37,5",
            "C. 50",
            "D. 100"
        ],
        answer: "C",
        explanation: "Koefisien Angka Kredit Tahunan untuk Teknisi Siaran Ahli Utama adalah 50. [cite: 66]"
    },
    {
        question: "Dalam alur konversi Angka Kredit melalui E-Kinerja, setelah 'Menu Angka Kredit', langkah selanjutnya adalah...",
        options: [
            "A. Tambah PAK",
            "B. Sinkronisasi Jabatan",
            "C. Sinkronisasi AK SIASN",
            "D. Buat Preview PAK"
        ],
        answer: "B",
        explanation: "Setelah Menu Angka Kredit, langkah selanjutnya adalah Sinkronisasi Jabatan. [cite: 69]"
    },
    {
        question: "Dokumen Operasional Stasiun Transmisi dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran",
            "B. Asisten Teknisi Siaran",
            "C. Pranata Siaran",
            "D. Asisten Pranata Siaran"
        ],
        answer: "B",
        explanation: "Dokumen Operasional Stasiun Transmisi dikerjakan oleh Asisten Teknisi Siaran. [cite: 89]"
    },
    {
        question: "Jenis pemberhentian dalam jabatan fungsional yang tidak dapat diangkat kembali dalam jabatan yang sama adalah mengundurkan diri dari jabatan dan...",
        options: [
            "A. Diberhentikan sementara sebagai PNS",
            "B. Menjalani cuti di luar tanggungan negara",
            "C. Tidak memenuhi persyaratan jabatan",
            "D. Ditugaskan secara penuh pada jabatan pimpinan tinggi"
        ],
        answer: "C",
        explanation: "Bagi jenis pemberhentian 'mengundurkan diri dari jabatan' dan 'tidak memenuhi persyaratan jabatan' tidak dapat diangkat kembali dalam jabatan yang sama. [cite: 72]"
    },
    {
        question: "Koefisien Angka Kredit Tahunan untuk Asisten Pranata Siaran Pemula adalah...",
        options: [
            "A. 3,75",
            "B. 5",
            "C. 12,5",
            "D. 25"
        ],
        answer: "A",
        explanation: "Koefisien Angka Kredit Tahunan untuk Asisten Pranata Siaran Pemula adalah 3,75. [cite: 66]"
    },
    {
        question: "Berikut adalah hasil kerja yang dikerjakan oleh Teknisi Siaran, kecuali...",
        options: [
            "A. Produksi Program Rutin Televisi",
            "B. Instalasi Peralatan Studio Televisi",
            "C. Dokumen Pemeliharaan Stasiun Transmisi",
            "D. Dokumen Kajian Teknis Produksi Penyiaran"
        ],
        answer: "C",
        explanation: "Dokumen Pemeliharaan Stasiun Transmisi dikerjakan oleh Asisten Teknisi Siaran, bukan Teknisi Siaran. [cite: 90]"
    },
    {
        question: "Pranata Siaran Ahli Madya memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar...",
        options: [
            "A. 50",
            "B. 100",
            "C. 150",
            "D. 450"
        ],
        answer: "C",
        explanation: "Pranata Siaran Ahli Madya memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar 150. [cite: 66]"
    },
    {
        question: "Pranata Siaran Ahli Pertama memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar...",
        options: [
            "A. 50",
            "B. 100",
            "C. 150",
            "D. 200"
        ],
        answer: "A",
        explanation: "Pranata Siaran Ahli Pertama memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar 50. [cite: 66]"
    },
    {
        question: "Jika seorang Teknisi Siaran Ahli Madya memiliki predikat kinerja 'Butuh Perbaikan', berapa simulasi perolehan Angka Kredit per tahunnya?",
        options: [
            "A. 56,25",
            "B. 37,5",
            "C. 28,13",
            "D. 18,75"
        ],
        answer: "C",
        explanation: "Untuk Ahli Madya (Koefisien 37,5) dengan predikat 'Butuh Perbaikan' (75%), perolehan AK adalah 37,5 * 0.75 = 28,125 (dibulatkan 28,13). [cite: 68]"
    },
    {
        question: "Asisten Pranata Siaran Mahir memiliki Koefisien Angka Kredit Tahunan sebesar...",
        options: [
            "A. 5",
            "B. 12,5",
            "C. 25",
            "D. 37,5"
        ],
        answer: "B",
        explanation: "Asisten Pranata Siaran Mahir memiliki Koefisien Angka Kredit Tahunan sebesar 12,5. [cite: 66]"
    },
    {
        question: "Koefisien Angka Kredit Tahunan untuk Asisten Teknisi Siaran Terampil adalah...",
        options: [
            "A. 3,75",
            "B. 5",
            "C. 12,5",
            "D. 25"
        ],
        answer: "B",
        explanation: "Koefisien Angka Kredit Tahunan untuk Asisten Teknisi Siaran Terampil adalah 5. [cite: 66]"
    },
    {
        question: "Jika seorang Teknisi Siaran Ahli Pertama memiliki predikat kinerja 'Kurang', berapa simulasi perolehan Angka Kredit per tahunnya?",
        options: [
            "A. 12,5",
            "B. 9,38",
            "C. 6,25",
            "D. 3,13"
        ],
        answer: "C",
        explanation: "Untuk Ahli Pertama (Koefisien 12,5) dengan predikat 'Kurang' (50%), perolehan AK adalah 12,5 * 0.5 = 6,25. [cite: 68]"
    },
    {
        question: "Berikut adalah hasil kerja yang dikerjakan oleh Pranata Siaran, kecuali...",
        options: [
            "A. Produksi Program Rutin Berita Televisi",
            "B. Dokumen Perencanaan Siaran",
            "C. Produksi Program Khusus Olahraga TV",
            "D. Dokumen Kajian Teknis Program Siaran"
        ],
        answer: "C",
        explanation: "Produksi Program Khusus Olahraga TV dikerjakan oleh Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 83]"
    },
    {
        question: "Asisten Teknisi Siaran Mahir memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar...",
        options: [
            "A. 15",
            "B. 20",
            "C. 50",
            "D. 100"
        ],
        answer: "C",
        explanation: "Asisten Teknisi Siaran Mahir memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar 50. [cite: 66]"
    },
    {
        question: "Tugas Jabatan Asisten Pranata Siaran adalah melaksanakan...",
        options: [
            "A. teknik produksi, penyiaran, dan layanan media baru",
            "B. operasional teknik produksi, penyiaran, dan layanan media baru",
            "C. produksi, penyiaran, dan layanan media baru",
            "D. operasional produksi, penyiaran dan layanan media baru"
        ],
        answer: "D",
        explanation: "Tugas Jabatan Asisten Pranata Siaran adalah melaksanakan operasional produksi, penyiaran dan layanan media baru. [cite: 10]"
    },
    {
        question: "Angka Kredit Kumulatif Minimal Kenaikan Pangkat untuk Asisten Teknisi Siaran Pemula adalah...",
        options: [
            "A. 15",
            "B. 20",
            "C. 50",
            "D. 100"
        ],
        answer: "A",
        explanation: "Asisten Teknisi Siaran Pemula memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar 15. [cite: 66]"
    },
    {
        question: "Asisten Pranata Siaran Penyelia memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar...",
        options: [
            "A. 50",
            "B. 100",
            "C. 150",
            "D. 200"
        ],
        answer: "B",
        explanation: "Asisten Pranata Siaran Penyelia memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar 100. [cite: 66]"
    },
    {
        question: "Produksi Program Khusus Radio adalah hasil kerja yang dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran dan Asisten Teknisi Siaran",
            "B. Pranata Siaran",
            "C. Asisten Pranata Siaran",
            "D. Semua JF Siaran"
        ],
        answer: "A",
        explanation: "Produksi Program Khusus Radio adalah hasil kerja Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 74, 75]"
    },
    {
        question: "Hasil kerja 'Produksi Promo Program' dikerjakan oleh...",
        options: [
            "A. Pranata Siaran dan Asisten Pranata Siaran",
            "B. Teknisi Siaran",
            "C. Asisten Teknisi Siaran",
            "D. Semua JF Siaran"
        ],
        answer: "A",
        explanation: "Produksi Promo Program dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 76, 77, 108]"
    },
    {
        question: "Asisten Teknisi Siaran Penyelia memiliki Koefisien Angka Kredit Tahunan sebesar...",
        options: [
            "A. 12,5",
            "B. 25",
            "C. 37,5",
            "D. 50"
        ],
        answer: "B",
        explanation: "Asisten Teknisi Siaran Penyelia memiliki Koefisien Angka Kredit Tahunan sebesar 25. [cite: 66]"
    },
    {
        question: "Jenjang Pranata Siaran Ahli Utama memiliki Angka Kredit Kumulatif Minimal Kenaikan Jenjang sebesar...",
        options: [
            "A. 50",
            "B. 100",
            "C. 200",
            "D. 450"
        ],
        answer: "C",
        explanation: "Pranata Siaran Ahli Utama memiliki Angka Kredit Kumulatif Minimal Kenaikan Jenjang sebesar 200. [cite: 66]"
    },
    {
        question: "Apakah memiliki rekam jejak yang baik merupakan syarat untuk Promosi Kenaikan Jenjang?",
        options: [
            "A. Ya",
            "B. Tidak",
            "C. Hanya untuk jabatan tertentu",
            "D. Tergantung predikat kinerja"
        ],
        answer: "A",
        explanation: "Memiliki rekam jejak yang baik adalah syarat untuk Promosi ke Dalam atau Dari JF. [cite: 53]"
    },
    {
        question: "Tugas Jabatan Asisten Teknisi Siaran adalah melaksanakan...",
        options: [
            "A. teknik produksi, penyiaran, dan layanan media baru",
            "B. operasional teknik produksi, penyiaran, dan layanan media baru",
            "C. produksi, penyiaran, dan layanan media baru",
            "D. operasional produksi, penyiaran dan layanan media baru"
        ],
        answer: "B",
        explanation: "Tugas Jabatan Asisten Teknisi Siaran adalah melaksanakan operasional teknik produksi, penyiaran, dan layanan media baru. [cite: 10]"
    },
    {
        question: "Produksi Program Non Rutin Radio LPP Lokal dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran dan Asisten Teknisi Siaran",
            "B. Pranata Siaran dan Asisten Pranata Siaran",
            "C. Hanya Pranata Siaran",
            "D. Hanya Teknisi Siaran"
        ],
        answer: "A",
        explanation: "Produksi Program Non Rutin Radio LPP Lokal dikerjakan oleh Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 74, 75]"
    },
    {
        question: "Pranata Siaran Ahli Muda memiliki ruang lingkup kegiatan melaksanakan produksi/penyiaran program siaran...",
        options: [
            "A. rutin",
            "B. non rutin",
            "C. khusus",
            "D. pengembangan strategi"
        ],
        answer: "B",
        explanation: "Pranata Siaran Ahli Muda melaksanakan produksi/penyiaran program siaran non rutin. [cite: 19]"
    },
    {
        question: "Pengangkatan ke dalam JF melalui Promosi Kenaikan Jenjang memerlukan Angka Kredit Kumulatif kenaikan jenjang jabatan. Angka Kredit Kumulatif untuk Pranata Siaran Ahli Madya adalah...",
        options: [
            "A. 100",
            "B. 150",
            "C. 200",
            "D. 450"
        ],
        answer: "C",
        explanation: "Angka Kredit Kumulatif untuk Pranata Siaran Ahli Madya adalah 450 (kenaikan jenjang dari Ahli Muda ke Ahli Madya membutuhkan 100, dan dari Ahli Madya ke Ahli Utama membutuhkan 200, tetapi Angka Kredit Kumulatif untuk jenjang Ahli Madya sendiri adalah 450). [cite: 66]"
    },
    {
        question: "Instalasi Peralatan Studio TV dikerjakan oleh...",
        options: [
            "A. Pranata Siaran",
            "B. Asisten Pranata Siaran",
            "C. Teknisi Siaran dan Asisten Teknisi Siaran",
            "D. Hanya Teknisi Siaran"
        ],
        answer: "C",
        explanation: "Instalasi Peralatan Studio TV dikerjakan oleh Teknisi Siaran dan Asisten Teknisi Siaran. [cite: 74, 75, 85]"
    },
    {
        question: "Asisten Pranata Siaran Mahir memiliki ruang lingkup kegiatan melaksanakan operasional produksi/penyiaran program siaran...",
        options: [
            "A. rutin",
            "B. non rutin",
            "C. khusus",
            "D. pengendalian"
        ],
        answer: "C",
        explanation: "Asisten Pranata Siaran Mahir melaksanakan operasional produksi/penyiaran program siaran khusus. [cite: 11]"
    },
    {
        question: "Salah satu persyaratan Pengangkatan Pertama Asisten Pranata Siaran Pemula adalah...",
        options: [
            "A. D-III broadcasting",
            "B. S-1 ilmu komunikasi",
            "C. SMK atau setara di bidang broadcasting atau multimedia",
            "D. SLTA ilmu pengetahuan alam"
        ],
        answer: "C",
        explanation: "Asisten Pranata Siaran jenjang pemula memerlukan SMK atau setara di bidang broadcasting atau multimedia. [cite: 34]"
    },
    {
        question: "Produksi Program Non Rutin Berita dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran",
            "B. Asisten Teknisi Siaran",
            "C. Pranata Siaran dan Asisten Pranata Siaran",
            "D. Semua JF Siaran"
        ],
        answer: "C",
        explanation: "Produksi Program Non Rutin Berita dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 76, 77]"
    },
    {
        question: "Apakah tidak sedang dalam proses dan/atau menjalani hukuman disiplin merupakan syarat untuk Promosi Kenaikan Jenjang?",
        options: [
            "A. Ya",
            "B. Tidak",
            "C. Hanya jika hukumannya ringan",
            "D. Tergantung lama proses hukuman"
        ],
        answer: "A",
        explanation: "Tidak sedang dalam proses dan/atau menjalani hukuman disiplin adalah salah satu syarat Promosi Kenaikan Jenjang. [cite: 59]"
    },
    {
        question: "Yang bukan merupakan hasil kerja dari Teknisi Siaran dan Asisten Teknisi Siaran adalah...",
        options: [
            "A. Produksi Program Rutin Radio",
            "B. Produksi Program Khusus Olahraga TV",
            "C. Dokumen Perencanaan Siaran",
            "D. Instalasi Peralatan Studio Radio"
        ],
        answer: "C",
        explanation: "Dokumen Perencanaan Siaran adalah hasil kerja Pranata Siaran. [cite: 105]"
    },
    {
        question: "Produksi Program Berita Singkat LPP Lokal adalah hasil kerja yang dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran dan Asisten Teknisi Siaran",
            "B. Pranata Siaran dan Asisten Pranata Siaran",
            "C. Keduanya",
            "D. Bukan keduanya"
        ],
        answer: "C",
        explanation: "Produksi Program Berita Singkat LPP Lokal dikerjakan oleh Teknisi Siaran, Asisten Teknisi Siaran, Pranata Siaran, dan Asisten Pranata Siaran. [cite: 74, 75, 76, 77]"
    },
    {
        question: "Jika seorang Asisten Teknisi Siaran Pemula memiliki predikat kinerja 'Sangat Kurang', berapa simulasi perolehan Angka Kredit per tahunnya?",
        options: [
            "A. 3,75",
            "B. 1,88",
            "C. 0,94",
            "D. 0,47"
        ],
        answer: "C",
        explanation: "Untuk Pemula (Koefisien 3,75) dengan predikat 'Sangat Kurang' (25%), perolehan AK adalah 3,75 * 0.25 = 0,9375 (dibulatkan 0,94). [cite: 68]"
    },
    {
        question: "Produksi Program Non Rutin Non Berita adalah hasil kerja yang dikerjakan oleh...",
        options: [
            "A. Teknisi Siaran dan Asisten Teknisi Siaran",
            "B. Pranata Siaran dan Asisten Pranata Siaran",
            "C. Hanya Pranata Siaran",
            "D. Hanya Asisten Pranata Siaran"
        ],
        answer: "B",
        explanation: "Produksi Program Non Rutin Non Berita dikerjakan oleh Pranata Siaran dan Asisten Pranata Siaran. [cite: 76, 77, 98, 99]"
    },
    {
        question: "Berikut adalah hasil kerja yang dikerjakan oleh Asisten Pranata Siaran, kecuali...",
        options: [
            "A. Produksi Program Rutin Berita Televisi",
            "B. Dokumen Operasional Siaran",
            "C. Dokumen Perencanaan Siaran",
            "D. Produksi Promo Program"
        ],
        answer: "C",
        explanation: "Dokumen Perencanaan Siaran dikerjakan oleh Pranata Siaran. [cite: 105]"
    },
    {
        question: "Koefisien Angka Kredit Tahunan untuk Teknisi Siaran Ahli Muda adalah...",
        options: [
            "A. 12,5",
            "B. 25",
            "C. 37,5",
            "D. 50"
        ],
        answer: "B",
        explanation: "Teknisi Siaran Ahli Muda memiliki Koefisien Angka Kredit Tahunan sebesar 25. [cite: 66]"
    },
    {
        question: "Angka Kredit Kumulatif Minimal Kenaikan Pangkat untuk Asisten Pranata Siaran Terampil adalah...",
        options: [
            "A. 15",
            "B. 20",
            "C. 50",
            "D. 60"
        ],
        answer: "D",
        explanation: "Asisten Pranata Siaran Terampil memiliki Angka Kredit Kumulatif Minimal Kenaikan Pangkat sebesar 60. [cite: 66]"
    },
    {
        question: "Ruang lingkup kegiatan Asisten Teknisi Siaran mahir adalah melaksanakan operasional teknik produksi/penyiaran program siaran...",
        options: [
            "A. rutin",
            "B. non rutin",
            "C. khusus",
            "D. pengendalian"
        ],
        answer: "C",
        explanation: "Asisten Teknisi Siaran mahir melaksanakan operasional teknik produksi/penyiaran program siaran khusus. [cite: 16]"
    },
    {
        question: "Apakah 'berijazah paling rendah magister untuk Teknisi Siaran dan Pranata Siaran jenjang ahli utama' merupakan syarat untuk Promosi ke Dalam atau Dari JF?",
        options: [
            "A. Ya",
            "B. Tidak, itu syarat kenaikan jenjang",
            "C. Hanya jika diperlukan",
            "D. Hanya untuk Teknisi Siaran"
        ],
        answer: "B",
        explanation: "Syarat berijazah magister untuk jenjang ahli utama adalah syarat Promosi Kenaikan Jenjang, bukan Promosi ke Dalam atau Dari JF. [cite: 60]"
    },
    {
        question: "Langkah 'Sinkronisasi AK SIASN' pada alur konversi angka kredit berfungsi untuk...",
        options: [
            "A. Mengirim data konversi ke SIASN",
            "B. Membuat preview PAK",
            "C. Menyetujui PAK",
            "D. Cek data diri"
        ],
        answer: "A",
        explanation: "Sinkronisasi AK SIASN berfungsi untuk mengirim data konversi ke SIASN. [cite: 69]"
    }
];

// Combine all questions for potential use, but specific selection will happen in script.js
// const allQuestions = {
//     administrative: administrativeQuestions,
//     substantive: substantiveQuestions
// };
