-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Okt 2021 pada 12.20
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_persuratan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `derajat_surat`
--

CREATE TABLE `derajat_surat` (
  `ID_DERAJAT_SURAT` int(11) NOT NULL,
  `DERAJAT_SURAT` varchar(20) DEFAULT NULL,
  `DESKRIPSI` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `derajat_surat`
--

INSERT INTO `derajat_surat` (`ID_DERAJAT_SURAT`, `DERAJAT_SURAT`, `DESKRIPSI`) VALUES
(3, 'Biasa', 'Naskah dinas dengan urgensi biasa merupakan derajat naskah dinas yang penyampaian dan penyelesaiannya tidak cepat seperti derajat sangat segera dan segera'),
(1, 'Sangat Segera', 'Naskah dinas dengan urgensi sangat segera merupakan derajat naskah dinas yang isi dari surat tersebut harus segera diketahui penerima surat dan penyelesaiannya harus dilakukan pada kesempatan pertama atau secepat mungkin'),
(2, 'Segera', 'Naskah dinas dengan urgensi segera merupakan derajat surat yang isi dari surat tersebut harus segera diketahui atau ditanggapi oleh penerima surat');

-- --------------------------------------------------------

--
-- Struktur dari tabel `disposisi`
--

CREATE TABLE `disposisi` (
  `ID_DISPOSISI` int(11) NOT NULL,
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `ID_PENCATATAN` int(11) NOT NULL,
  `TANGGAL_DISPOSISI` date DEFAULT NULL,
  `NAMA_FILE_DISPOSISI` varchar(100) DEFAULT NULL,
  `PROSES_SELANJUTNYA` varchar(255) DEFAULT NULL,
  `INFORMASI` varchar(255) DEFAULT NULL,
  `NOMOR_AGENDA` char(4) DEFAULT NULL,
  `JENIS_DISPOSISI` char(1) DEFAULT NULL,
  `KOMENTAR_DISPOSISI` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `disposisi`
--

INSERT INTO `disposisi` (`ID_DISPOSISI`, `ID_PENGGUNA`, `ID_PENCATATAN`, `TANGGAL_DISPOSISI`, `NAMA_FILE_DISPOSISI`, `PROSES_SELANJUTNYA`, `INFORMASI`, `NOMOR_AGENDA`, `JENIS_DISPOSISI`, `KOMENTAR_DISPOSISI`) VALUES
(1, 2, 1254, '2021-10-15', 'asd_disposisi', 'qwert', 'qwert', '2', '1', 'a'),
(2, 2, 1244, '2021-10-15', 'B_6_PL.1_KM.00.01_2021_disposisi', 'qwert', 'qwert', '6', '2', 'a');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jenis_surat`
--

CREATE TABLE `jenis_surat` (
  `ID_JENIS_SURAT` int(11) NOT NULL,
  `JENIS_SURAT` varchar(80) DEFAULT NULL,
  `KETERANGAN` varchar(255) DEFAULT NULL,
  `TIPE_SURAT` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `jenis_surat`
--

INSERT INTO `jenis_surat` (`ID_JENIS_SURAT`, `JENIS_SURAT`, `KETERANGAN`, `TIPE_SURAT`) VALUES
(12, 'Korespondensi - Disposisi', 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal', '2'),
(9, 'Korespondensi - Memo', 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal', '2'),
(8, 'Korespondensi - Nota Dinas', 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal', '2'),
(10, 'Korespondensi - Surat Dinas', 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal', '2'),
(11, 'Korespondensi - Surat Undangan', 'Naskah dinas korespondensi merupakan naskah dinas atau surat yang dibuat oleh pejabat dalam melaksanakan tugas dan fungsinya, yang ditunjukan kepada pejabat atau pihak lain baik internal maupun eksternal', '2'),
(2, 'Naskah Arahan - Instruksi', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(5, 'Naskah Arahan - Penetapan', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(1, 'Naskah Arahan - Peraturan', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(3, 'Naskah Arahan - SOP', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(4, 'Naskah Arahan - Surat Edaran', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(7, 'Naskah Arahan - Surat Izin', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(6, 'Naskah Arahan - Surat Tugas', 'Naskah dinas arahan merupakan naskah dinas atau surat yang memuat kebijakan pokok atau kebijakan pelaksanaan yang harus dipedomani dan dilaksanakan dalam penyelenggaran tugas dan kegiatan Politeknik Negeri Bandung', '1'),
(18, 'Naskah Khusus - Berita Acara', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(13, 'Naskah Khusus - Nota Kesepahaman', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(22, 'Naskah Khusus - Notula Rapat', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(16, 'Naskah Khusus - Pelimpahan Wewenang', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(21, 'Naskah Khusus - Pengumuman', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(23, 'Naskah Khusus - Proposal/KAK', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(24, 'Naskah Khusus - Sertifikat', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(17, 'Naskah Khusus - Surat Keterangan', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(15, 'Naskah Khusus - Surat Kuasa', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(19, 'Naskah Khusus - Surat Pengantar', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(14, 'Naskah Khusus - Surat Perjanjian', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3'),
(20, 'Naskah Khusus - Surat Pernyataan', 'Naskah dinas khusus, yaitu naskah dinas atau surat yang dibuat untuk kepentingan khusus', '3');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kode_hal`
--

CREATE TABLE `kode_hal` (
  `ID_KODE_HAL` int(11) NOT NULL,
  `KODE_HAL` varchar(10) DEFAULT NULL,
  `HAL` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kode_hal`
--

INSERT INTO `kode_hal` (`ID_KODE_HAL`, `KODE_HAL`, `HAL`) VALUES
(2, 'KM.00.01', 'Cuti/Dispensasi mahasiswa'),
(3, 'KM.00.02', 'Perpanjang masa studi'),
(4, 'KM.00.03', 'Evaluasi Masa Studi'),
(5, 'KM.00.04', 'Mutasi/Perpindahan mahasiswa'),
(6, 'KM.00.05', 'Skorsing'),
(7, 'KM.00.06', 'Pengunduran diri'),
(8, 'KM.00.07', 'Pemutusan studi/Drop Out'),
(9, 'KM.00.08', 'Mahasiswa meninggal dunia'),
(10, 'KM.01.00', 'Beasiswa'),
(11, 'KM.01.01', 'Keringan/Penundaan biaya pendidikan'),
(12, 'KM.01.02', 'Layanan kesehatan mahasiswa'),
(13, 'KM.01.03', 'Penyuluhan kesehatan'),
(14, 'KM.03.00', 'Peraturan asrama'),
(15, 'KM.03.01', 'Seleksi dan penetapan penghuni asrama'),
(16, 'KM.03.02', 'Berkas perseorangan penghuni asrama'),
(17, 'KM.03.03', 'Kegiatan penghuni asrama'),
(18, 'KM.04', 'Penggunaan fasilitas mahasiswa '),
(19, 'KM.05.01', 'Pembentukan organisasi ormawa'),
(20, 'KM.05.02', 'Pengangkatan/Pemberhentian pengurus ormawa'),
(21, 'KM.05.03', 'Program kerja/kegiatan ormawa'),
(22, 'KM.05.04', 'Laporan pelaksanaan kegiatan/kepengurusan ormawa'),
(23, 'KM.06.00', 'Kegiatan rutin unit kegiatan mahasiswa'),
(24, 'KM.06.01', 'Program Kreatifitas Mahasiswa'),
(25, 'KM.06.02', 'Pembinaan disiplin mahasiswa'),
(26, 'KM.06.03', 'Lembaga kemahasiswaan lokal, nasional, internasional'),
(27, 'KM.06.04', 'Pretasi mahasiswa'),
(28, 'KM.06.05', 'Inventori mahasiswa'),
(29, 'KM.07.00', 'Pembentukan organisasi IOM'),
(30, 'KM.07.01', 'Pengangkatan/Pemberhentikan pengurus IOM'),
(31, 'KM.07.02', 'Kegiatan organisasi IOM'),
(32, 'KM.07.03', 'Laporan kepengurusan IOM'),
(33, 'KM.08', 'Berkas perseorangan mahasiswa');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kode_perguruan_tinggi`
--

CREATE TABLE `kode_perguruan_tinggi` (
  `ID_KODE_PERGURUAN_TINGGI` int(11) NOT NULL,
  `KODE_PERGURUAN_TINGGI` varchar(10) DEFAULT NULL,
  `PERGURUAN_TINGGI` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kode_perguruan_tinggi`
--

INSERT INTO `kode_perguruan_tinggi` (`ID_KODE_PERGURUAN_TINGGI`, `KODE_PERGURUAN_TINGGI`, `PERGURUAN_TINGGI`) VALUES
(1, 'PL1', 'Politeknik Negeri Bandung'),
(2, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kode_sifat_naskah`
--

CREATE TABLE `kode_sifat_naskah` (
  `ID_SIFAT_NASKAH` int(11) NOT NULL,
  `KODE_SIFAT_NASKAH` varchar(2) DEFAULT NULL,
  `SIFAT_NASKAH` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kode_sifat_naskah`
--

INSERT INTO `kode_sifat_naskah` (`ID_SIFAT_NASKAH`, `KODE_SIFAT_NASKAH`, `SIFAT_NASKAH`) VALUES
(4, 'B', 'Biasa'),
(2, 'R', 'Rahasia'),
(1, 'SR', 'Sangat Rahasia'),
(3, 'T', 'Terbatas');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kode_unit_kerja`
--

CREATE TABLE `kode_unit_kerja` (
  `ID_KODE_UNIT_KERJA` int(11) NOT NULL,
  `KODE_UNIT_KERJA` varchar(10) DEFAULT NULL,
  `NAMA_UNIT_KERJA` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kode_unit_kerja`
--

INSERT INTO `kode_unit_kerja` (`ID_KODE_UNIT_KERJA`, `KODE_UNIT_KERJA`, `NAMA_UNIT_KERJA`) VALUES
(1, 'R3', 'Wakil Direktur Bagian Kemahasiswaan'),
(2, 'R1', 'Pembantu Direktur Bidang Akademik'),
(3, 'R2', 'Pembantu Direktur Bidang Adm. Umum dan Keuangan'),
(4, 'PL1', 'Direktur'),
(5, 'R4', 'Pembantu Direktur Bidang Perencanaan dan Kerja Sama'),
(6, 'R5', 'Senat'),
(7, 'R6', 'Dewan Pertimbangan/Dewan Penyantun'),
(8, 'R7', 'Unit Penelitian dan Pengabdian Masyarakat'),
(9, 'R8', 'Satruan Pengawasan Internal'),
(10, 'R9', 'Satuan Penjamin Mutu'),
(11, 'R10', 'Pusat Pembelajaran Aktivitas Intruksional'),
(12, 'R11', 'Bagian Administrasi dan Kemahasiswaan'),
(13, 'R11.1', 'Subbagian Akademik'),
(14, 'R11.2', 'Subbagian Kemahasiswaan'),
(15, 'R12', 'Bagian '),
(16, 'R12.1', 'Subbagian Kepegawaian'),
(17, 'R12.2', 'Subbagian Tata Usaha'),
(18, 'R13', 'Bagian Administrasi Perencanaan dan Sistem Informasi'),
(19, 'R13.1', 'Subbagian Perancangan dan Pengendalian'),
(20, 'R13.2', 'Subbagian Sistem Informasi'),
(21, 'R14', 'Pusat Hubungan Industri, Alumni dan Penempatan Kerja'),
(22, 'R15', 'Hubungan Internasional'),
(23, 'R16', 'Koordinator Layanan Kemahasiswaan'),
(24, 'R17', 'Kantor Layanan Kealumnian'),
(25, 'R18.1', 'UPT komputer'),
(26, 'R18.2', 'UPT Studio Gambar'),
(27, 'R18.3', 'UPT Perpustakaan'),
(28, 'R18.4', 'UPT Penerbitan dan Perbaikan'),
(29, 'R18.5', 'UPT Bahasa'),
(30, 'R18.6', 'UPT Perawatan dan Perbaikan'),
(31, 'R18.7', 'UPT Bimbingan, Konseling dan Pendampingan'),
(32, 'R18.8', 'UPT Layanan Pengadaan'),
(33, 'R18.9', 'Layanan Pengadaan Secara Elektronik (LPSE)'),
(34, 'R18.10', 'UPT Layanan Kesehatan'),
(35, 'R19', 'Hubungan Masyarakat'),
(36, 'R20', 'Pejabat Pembuat Komitmen*'),
(37, 'R21', 'Program Hibah Dalam atau Luar Negeri*'),
(38, 'S1', 'Jurusan Teknik Sipil'),
(39, 'S1.1', 'Program Studi Teknik Konstruksi Gedung (D3)'),
(40, 'S1.2', 'Program Studi Teknik Konstruksi Sipil (D3)'),
(41, 'S1.3', 'Program Studi Teknik Perancangan Jalan dan Jembatan (D4)'),
(42, 'S1.4', 'Program Studi Teknik Perawatan dan Perbaikan Gedung (D4)'),
(43, 'ME', 'Jurusan Teknik Mesin '),
(44, 'ME.1', 'Program Studi Teknik Mesin (D3)'),
(45, 'ME.2', 'Program Studi Teknik Aeronautika (D3)'),
(46, 'ME.3', 'Program Studi Teknik Perancangan dan Konstruksi Mesin (D4)'),
(47, 'ME.3', 'Program Studi Teknologi Teknik Mesin (D2)'),
(48, 'EN', 'Jurusan Teknik Konversi Energi'),
(49, 'EN.1', 'Program Studi Teknik Konversi Energi (D3)'),
(50, 'EN.2', 'Program Studi Teknologi Pembangkit Tenaga Listrik (D4)'),
(51, 'EN.3', 'Program Studi Konversi Energi (D4)'),
(52, 'RA', 'Jurusan Teknik Refrigasi dan Tata Udara'),
(53, 'RA.1', 'Program Studi Teknik Refrigasi dan Tata Udara (D3)'),
(54, 'RA.2', 'Program Studi Teknik Refrigasi dan Tata Udara (D4)'),
(55, 'EL', 'Jurusan Teknik Elektro'),
(56, 'EL.1', 'Program Studi Teknik Elektronika (D3)'),
(57, 'EL.2', 'Program Studi Teknik Telekomunikasi (D3)'),
(58, 'EL.3', 'Program Studi Teknik Listrik (D3)'),
(59, 'EL.4', 'Program Studi Teknik Elektronika (D4)'),
(60, 'EL.5', 'Program Studi Teknik Otomasi Industri (D4)'),
(61, 'EL.6', 'Program Studi Teknik Telekomunikasi (D4)'),
(62, 'KI', 'Jurusan Teknik Kimia'),
(63, 'KI.1', 'Program Studi Teknik Kimia (D3)'),
(64, 'KI.2', 'Program Studi Analis Kimia (D3)'),
(65, 'KI.3', 'Program Studi Kimia Produksi Bersih (D4)'),
(66, 'KI.4', 'Program Studi Teknik Kimia (D2)'),
(67, 'KO', 'Jurusan Teknik Komputer dan Informatika'),
(68, 'KO.1', 'Program Studi Teknik Informatika (D3)'),
(69, 'KO.2', 'Program Studi Teknik Informatika (D4)'),
(70, 'KO.3', 'Program Studi Teknik Informatika (D2)'),
(71, 'AN', 'Jurusan Administrasi Niaga'),
(72, 'AN.1', 'Program Studi Administradi Bisnis (D3)'),
(73, 'AN.2', 'Program Studi Usaha Perjalanan Wisata (D3)'),
(74, 'AN.3', 'Program Studi Manajemen Pemasaran (D3)'),
(75, 'AN.4', 'Program Studi Administrasi Bisnis (D4)'),
(76, 'AN.5', 'Program Studi Manajemen Asset (D4)'),
(77, 'AK', 'Jurusan Akuntansi'),
(78, 'AK.1', 'Program Studi Akuntansi (D3)'),
(79, 'AK.2', 'Program Studi Keuangan dan Perbankan (D3)'),
(80, 'AK.3', 'Akuntansi Manajemen Pemerintahan (D4)'),
(81, 'AK.1', 'Program Studi Akuntansi (D4)'),
(82, 'AK.4', 'Program Studi Keuangan Syariah (D4)'),
(83, 'IG', 'Jurusan Bahasa Inggris (D3)'),
(84, 'IG.1', 'Program Studi Bahasa Inggris (D3)'),
(85, 'KU', 'UP MKU'),
(86, 'MT', 'Program Magister'),
(87, 'MT.1', 'Program Studi Magister Terapan Rekayasa Infrastruktur'),
(88, 'MT.2', 'Program Studi Magister Keuangan Syariah'),
(89, 'PDD', 'Program Studi Di Luar Domisili'),
(90, 'PDD.1', 'Program Studi Teknik Komputer dan Informatika PDD (D2)'),
(91, 'PDD.2', 'Program Studi Teknik Kimia PDD (D2)'),
(92, 'PDD.3', 'Program Studi Teknik Mesin PDD (D2)'),
(105, 'Djarum', 'Djarum'),
(106, 'BEMse', 'BEM'),
(130, 'BEMse', 'BEM'),
(131, '123', 'BemKema'),
(132, 'cuasd', 'cuing'),
(134, 'cuasd2', 'cuing2'),
(138, 'asdasd', 'asd'),
(142, 'cuasd2', 'asd'),
(145, 'asdasd', 'asd'),
(149, 'aaaa', 'asaa'),
(152, 'cuasd2', 'cuing2'),
(154, 'asdasd', 'cuing'),
(156, 'aas', 'aas'),
(159, 'cuasd2', 'cuing'),
(161, 'qwer', 'qwe'),
(166, 'HMJRK', 'HMJRK'),
(196, 'HIMAKOM', 'HIMAKOM'),
(197, 'BEM', 'BEM'),
(200, 'BEM', 'BEM'),
(201, NULL, NULL),
(202, 'HIMAKOM', 'HIMAKOM'),
(203, NULL, NULL),
(204, NULL, NULL),
(205, NULL, NULL),
(206, NULL, NULL),
(207, NULL, NULL),
(208, 'BEM', 'BEM'),
(209, 'BEM', 'BEM'),
(210, 'Djarum', 'Djarum'),
(211, NULL, NULL),
(212, 'qwer', 'HIMAKOM'),
(213, 'HIMAKOM', 'HIMAKOM'),
(214, NULL, NULL),
(215, NULL, NULL),
(216, NULL, NULL),
(217, NULL, NULL),
(218, NULL, NULL),
(219, 'HIMAKOM', 'HIMAKOM'),
(220, NULL, NULL),
(221, NULL, NULL),
(222, NULL, NULL),
(223, 'HIMAKOM', 'HIMAKOM'),
(224, 'HIMAKOM', 'HIMAKOM'),
(225, 'HIMAKOM', 'HIMAKOM'),
(226, 'HIMAKOM', 'HIMAKOM'),
(227, NULL, NULL),
(228, 'BEM', 'BEM'),
(229, 'cuasd2', 'cuing'),
(230, 'BEM', 'BEM'),
(231, 'Djarum', 'Djarum'),
(232, 'BEM', 'BEM'),
(233, NULL, NULL),
(234, 'cuasd2', 'cuing'),
(235, NULL, NULL),
(236, 'cuasd2', 'cuing'),
(237, 'HIMAKOM', 'HIMAKOM'),
(238, 'qwer', 'qwe'),
(239, NULL, NULL),
(240, NULL, NULL),
(241, 'HIMAKOM', 'HIMAKOM'),
(242, 'HIMAKOM', 'HIMAKOM'),
(243, NULL, NULL),
(244, 'BEM', 'BEM'),
(245, 'BEM', 'BEM'),
(246, 'HIMAKOM', 'HIMAKOM'),
(247, 'HIMAKOM', 'HIMAKOM'),
(248, 'HIMAKOM', 'HIMAKOM'),
(249, 'HIMAKOM', 'HIMAKOM'),
(250, 'HIMAKOM', 'HIMAKOM'),
(251, 'HIMAKOM', 'HIMAKOM'),
(252, 'BEM', 'BEM'),
(253, 'HMM', 'HMM'),
(254, 'HIMAKOM', 'HIMAKOM'),
(255, 'BEM', 'BEM'),
(256, 'HIMAKOM', 'HIMAKOM'),
(257, 'HMM', 'HMM'),
(258, 'BEM', 'BEMKEMAUNPAD');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `nomor_surat`
--

CREATE TABLE `nomor_surat` (
  `ID_NOMOR_SURAT` int(11) NOT NULL,
  `ID_KODE_UNIT_KERJA` int(11) DEFAULT NULL,
  `ID_KODE_HAL` int(11) DEFAULT NULL,
  `ID_KODE_PERGURUAN_TINGGI` int(11) DEFAULT NULL,
  `ID_SIFAT_NASKAH` int(11) DEFAULT NULL,
  `NOMOR_URUT` int(4) NOT NULL,
  `TAHUN` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `nomor_surat`
--

INSERT INTO `nomor_surat` (`ID_NOMOR_SURAT`, `ID_KODE_UNIT_KERJA`, `ID_KODE_HAL`, `ID_KODE_PERGURUAN_TINGGI`, `ID_SIFAT_NASKAH`, `NOMOR_URUT`, `TAHUN`) VALUES
(180, 1, 2, 1, 4, 1, 2021),
(182, 1, 2, 1, 4, 3, 2021),
(183, 1, 13, 1, NULL, 4, 2021),
(184, 1, NULL, 1, NULL, 5, 2021),
(185, 1, 2, 1, 4, 6, 2021),
(186, 1, 2, 1, 4, 7, 2021),
(187, 1, 2, 1, 4, 8, 2021),
(188, 1, 23, 1, NULL, 9, 2021),
(189, 1, 2, 1, 2, 10, 2021),
(190, 1, 16, 1, NULL, 11, 2021),
(191, 1, 16, 1, NULL, 12, 2021),
(192, 1, 16, 1, NULL, 13, 2021),
(193, 1, 2, 1, 4, 14, 2021),
(194, 1, 16, 1, NULL, 15, 2021),
(195, 1, 3, 1, 4, 16, 2021),
(196, 1, 2, 1, 4, 17, 2021),
(197, 1, 3, 1, NULL, 18, 2021),
(198, 1, NULL, 1, NULL, 19, 2021),
(199, 1, 4, 1, 4, 20, 2021),
(200, 1, 6, 1, NULL, 21, 2021),
(201, 1, 5, 1, 2, 22, 2021),
(202, 1, NULL, 1, NULL, 23, 2021);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemohon`
--

CREATE TABLE `pemohon` (
  `ID_PEMOHON` int(11) NOT NULL,
  `NAMA_PEMOHON` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pemohon`
--

INSERT INTO `pemohon` (`ID_PEMOHON`, `NAMA_PEMOHON`) VALUES
(1, 'Harita'),
(2, 'satria'),
(3, 'nadia'),
(4, 'Lena'),
(6, 'Hesty'),
(7, 'Jujun'),
(8, 'Ratna'),
(9, 'Dali'),
(10, 'ujang'),
(11, 'rifa'),
(12, 'ihcan'),
(13, 'mnmnm'),
(14, 'nnnnnnnnnnn'),
(15, 'Naruto'),
(16, 'kusina'),
(17, 'sasuke');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pencatatan`
--

CREATE TABLE `pencatatan` (
  `ID_PENCATATAN` int(11) NOT NULL,
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `ID_JENIS_SURAT` int(11) NOT NULL,
  `ID_DERAJAT_SURAT` int(11) DEFAULT NULL,
  `KODE_ARSIP_KOM` varchar(30) DEFAULT NULL,
  `KODE_ARSIP_HLM` varchar(30) DEFAULT NULL,
  `KODE_ARSIP_MANUAL` varchar(30) DEFAULT NULL,
  `NAMA_FILE_SURAT` varchar(100) DEFAULT NULL,
  `NAMA_FILE_LAMPIRAN` varchar(100) DEFAULT NULL,
  `PERIHAL` varchar(255) DEFAULT NULL,
  `TGL_SURAT` date DEFAULT NULL,
  `PENANDATANGAN` varchar(30) DEFAULT NULL,
  `KOMENTAR_SURAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pencatatan`
--

INSERT INTO `pencatatan` (`ID_PENCATATAN`, `ID_PENGGUNA`, `ID_JENIS_SURAT`, `ID_DERAJAT_SURAT`, `KODE_ARSIP_KOM`, `KODE_ARSIP_HLM`, `KODE_ARSIP_MANUAL`, `NAMA_FILE_SURAT`, `NAMA_FILE_LAMPIRAN`, `PERIHAL`, `TGL_SURAT`, `PENANDATANGAN`, `KOMENTAR_SURAT`) VALUES
(1241, 2, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', 'B_3_PL1.R3_KM.00.01_2021', NULL, 'oio', '2021-10-05', 'Bambang W', NULL),
(1243, 2, 23, 3, 'MK12', '12', 'TUAK.00.00-0001', '4_PL1.R3_KM.01.03_2021', NULL, 'undangan zoom', '2021-10-05', 'Harita', NULL),
(1244, 2, 12, 3, 'MK12', '12', 'TUAK.00.00-0001', 'B_6_PL.1_KM.00.01_2021', NULL, 'asd', '2021-10-05', 'Ihksan', NULL),
(1245, 2, 12, 1, 'TUKAKCIA', '12', 'TUAK.00.00-0001', 'B_7_PL1.R3_KM.00.01_2021', NULL, 'asd', '2021-10-06', 'Bambang W', NULL),
(1246, 2, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'baru', '2021-10-05', 'Bambang W', NULL),
(1247, 2, 12, 3, 'TUKAKCIA', '123333', 'TUAK.00.00-0001', 'SR_7_PL1.R3_KM.00.02_2021', NULL, 'qwerty', '2021-10-05', 'Bambang', NULL),
(1248, 2, 17, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', '7_PL1.R3_KM.00.02_2021', NULL, 'qwerty', '2021-10-06', 'Bambang W', NULL),
(1249, 2, 9, 3, 'MK12', '12', 'TUAK.00.00-0001', 'B_7_PL1.R3_KM.00.01_2021', NULL, 'popi', '2021-10-05', 'Bambang W', NULL),
(1250, 2, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', 'B_8_PL1.R3_KM.00.01_2021', NULL, 'undangan zoom', '2021-10-06', 'Harita', NULL),
(1251, 2, 21, 3, 'MK12', '12', 'TUAK.00.00-0001', '9_PL1.R3_KM.06.00_2021', NULL, 'undangan zoom meet', '2021-10-05', 'Harita', NULL),
(1252, 2, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'undangan room meeting', '2021-10-06', 'Bambang W', NULL),
(1253, 2, 12, 1, 'MK12', '12', 'TUAK.00.00-0001', NULL, NULL, 'surat undangan rapat', '2021-10-06', 'Bambang W', NULL),
(1254, 2, 12, 3, 'asd', 'asd', 'asd', NULL, NULL, 'asd', '2021-10-14', 'asd', NULL),
(1255, 2, 12, 3, 'qwe', 'qwe', 'qwe', NULL, NULL, 'qwe', '2021-10-14', 'qwe', NULL),
(1256, 2, 13, 3, 'asd', 'asd', 'asd', NULL, NULL, 'qqq', '2021-10-14', 'asd', NULL),
(1257, 2, 22, 3, 'asd', 'asd', 'asd', NULL, NULL, 'eee', '2021-10-07', 'qwe', NULL),
(1258, 2, 13, 3, 'asd', 'asd', 'qwe', NULL, NULL, 'qqqw', '2021-09-30', 'asd', NULL),
(1259, 2, 10, 3, 'asd', 'asd', 'asd', NULL, NULL, 'qqqwe', '2021-10-15', 'qwe', NULL),
(1260, 2, 13, 3, 'asd', 'asd', 'asd', NULL, NULL, 'qqqqqq', '2021-10-15', 'asd', NULL),
(1261, 5, 9, 3, 'TUKAKCIA', '123333', 'TUAK.00.00-0001', NULL, NULL, 'a', '2021-10-14', 'q', NULL),
(1262, 5, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'qwe', '2021-10-14', 'Ihksan', NULL),
(1263, 5, 23, 3, 'MK12', '123333', 'TUAK.00.00-0001', NULL, NULL, 'qwe', '2021-10-14', 'Ihksan', NULL),
(1264, 5, 7, 3, 'MK12', '123333', 'TUAK.00.00-0001', NULL, NULL, 'qqweqwe', '2021-10-14', 'Bambang W', NULL),
(1265, 5, 11, 1, 'MK12', '12', 'TUAK.00.00-0001', NULL, NULL, 'aasd', '2021-10-07', 'Bambang W', NULL),
(1266, 5, 16, 3, 'MK12', '123333', '1', NULL, NULL, 'aaasd', '2021-10-08', 'Ihksan', NULL),
(1267, 5, 11, 3, 'MK12', '123333', 'TUAK.00.00-0001', NULL, NULL, 'qwerty', '2021-10-22', 'Ihksan', NULL),
(1268, 5, 4, 3, 'MK12', '12', 'TUAK.00.00-0001', NULL, NULL, 'qqwe', '2021-10-15', 'Ihksan', NULL),
(1269, 5, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'pop', '2021-10-15', 'Ihksanasd', NULL),
(1270, 5, 12, 3, 'TUKAKCIA', '12333312', 'TUAK.00.00-0001', NULL, NULL, 'opopop', '2021-10-07', 'Bambang W', NULL),
(1271, 5, 12, 1, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'oioioioio', '2021-10-15', 'Bambang W', NULL),
(1272, 5, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'yuyu', '2021-10-15', 'Bambang W', NULL),
(1273, 5, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'qwer', '2021-10-10', 'Bambang W', NULL),
(1274, 5, 2, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'asdqwe', '2021-10-15', 'Bambang', NULL),
(1275, 5, 12, 1, 'TUKAKCIA', '123333', 'TUAK.00.00-0001', NULL, NULL, 'yui', '2021-10-08', 'Bambang', NULL),
(1276, 5, 12, 3, 'TUKAKCIA', '12333312', 'TUAK.00.00-0001', NULL, NULL, 'yui', '2021-10-15', 'Harita', NULL),
(1277, 5, 12, 3, 'TUKAKCIA', '12', 'TUAK.00.00-0001', NULL, NULL, 'yuiii', '2021-10-15', 'Ihksan', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengguna`
--

CREATE TABLE `pengguna` (
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `USERNAME` varchar(16) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  `NAMA` varchar(30) DEFAULT NULL,
  `ROLE` char(1) DEFAULT NULL,
  `NIP` char(18) DEFAULT NULL,
  `JABATAN` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pengguna`
--

INSERT INTO `pengguna` (`ID_PENGGUNA`, `USERNAME`, `PASSWORD`, `NAMA`, `ROLE`, `NIP`, `JABATAN`) VALUES
(1, 'admin', '$2y$10$xbLRhBbKVurD.6OqyJ7Tgez/pVTPmPL8PSfW/adw7Bkx/6AmdD966', 'admin', '1', NULL, NULL),
(2, 'satria', '$2y$10$INBzE/iLei0KlUYD660VLerwsGF7IqODI8p5nbtGBux2HWCQz/5Rm', 'Satria Nata', '2', '1815110479', 'Staf arsip 2'),
(5, 'Harita', '$2y$10$a4brC6tCkZqJfgPNk1Vve.huy4wHvmQs9uwFD/TEqnDWfGvPrHNLC', 'Harita', '3', '000000000', 'Wakil Direktur 3');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengingat`
--

CREATE TABLE `pengingat` (
  `ID_PENGINGAT` int(11) NOT NULL,
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `ID_PENCATATAN` int(11) NOT NULL,
  `WAKTU_PENGINGAT` datetime DEFAULT NULL,
  `STATUS` tinyint(1) DEFAULT NULL,
  `DESKRIPSI` varchar(255) DEFAULT NULL,
  `JENIS_PENGINGAT` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(50, 'App\\Models\\User', 2, 'token-auth', '348edfb1c92f1bb1c2ac296c5d6a264184aea833edf8d7aed248917479938f77', '[\"*\"]', '2021-10-04 05:49:46', '2021-10-02 06:46:12', '2021-10-04 05:49:46'),
(51, 'App\\Models\\User', 2, 'token-auth', '1a6d656491fc06639954a0002f202638cf35e554cb5cadc13e7703132820e506', '[\"*\"]', '2021-10-15 07:17:15', '2021-10-02 07:19:06', '2021-10-15 07:17:15'),
(52, 'App\\Models\\User', 2, 'token-auth', '24e47eaa47e2f948f4a9e8411633ebd788fa371fa32e03a64c55fea7178b61ac', '[\"*\"]', '2021-10-02 08:39:37', '2021-10-02 07:51:33', '2021-10-02 08:39:37'),
(53, 'App\\Models\\User', 2, 'token-auth', '715a64efe5ce15a3477efa405abda35d96caec69c6c27228c7503c9da806e294', '[\"*\"]', '2021-10-04 04:26:51', '2021-10-03 06:03:25', '2021-10-04 04:26:51'),
(62, 'App\\Models\\User', 5, 'token-auth', '0ae1f732372003ad187b619cf06cdf579cd7854ded349027197ef528febbec9d', '[\"*\"]', '2021-10-06 06:54:19', '2021-10-06 06:49:37', '2021-10-06 06:54:19'),
(64, 'App\\Models\\User', 5, 'token-auth', '59ac9425a1ed82f90465479d7ffe74caa431004160c648bfca541836941b6a87', '[\"*\"]', '2021-10-14 06:24:58', '2021-10-06 06:54:54', '2021-10-14 06:24:58'),
(66, 'App\\Models\\User', 2, 'token-auth', '76f3e24c0afc09c8b9217ae972853e27bfa2a49adeca08ed462919e4bc7b22a0', '[\"*\"]', '2021-10-15 06:52:50', '2021-10-15 06:51:49', '2021-10-15 06:52:50'),
(68, 'App\\Models\\User', 5, 'token-auth', 'c04df9133105872dac8f3f7addb428365788a36971d50d4d84301d9a012b5946', '[\"*\"]', '2021-10-16 02:02:28', '2021-10-15 06:55:23', '2021-10-16 02:02:28'),
(69, 'App\\Models\\User', 5, 'token-auth', '75f2c55da4d6c9489dda7aa7b7aaa5b20b52175e365317e3aade6460e2cf5163', '[\"*\"]', '2021-10-20 06:26:47', '2021-10-16 02:03:55', '2021-10-20 06:26:47'),
(70, 'App\\Models\\User', 2, 'token-auth', '1919e41a1b178c5957c73a7d90e27281eb45fc4ccc1bdef5290313ff970b9395', '[\"*\"]', '2021-10-20 05:31:29', '2021-10-20 05:30:55', '2021-10-20 05:31:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `riwayat_aktivitas`
--

CREATE TABLE `riwayat_aktivitas` (
  `ID_RIWAYAT_ALTIVITAS` int(11) NOT NULL,
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `ID_PENCATATAN` int(11) NOT NULL,
  `WAKTU` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `DESKRIPSI` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `surat_keluar`
--

CREATE TABLE `surat_keluar` (
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `ID_PENCATATAN` int(11) NOT NULL,
  `ID_NOMOR_SURAT` int(11) NOT NULL,
  `ID_PEMOHON` int(11) DEFAULT NULL,
  `TGL_KIRIM` date DEFAULT NULL,
  `NOMOR_SURAT` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `surat_keluar`
--

INSERT INTO `surat_keluar` (`ID_PENGGUNA`, `ID_PENCATATAN`, `ID_NOMOR_SURAT`, `ID_PEMOHON`, `TGL_KIRIM`, `NOMOR_SURAT`) VALUES
(2, 1241, 182, 12, '2021-10-05', 'B/3/PL1.R3/KM.00.01/2021'),
(2, 1243, 184, 4, '2021-10-05', '4/PL1.R3/KM.01.03/2021'),
(2, 1244, 185, 15, '2021-10-05', 'B/6/PL.1/KM.00.01/2021'),
(2, 1249, 186, 16, '2021-10-05', 'B/7/PL1.R3/KM.00.01/2021'),
(2, 1250, 187, 17, '2021-10-06', 'B/8/PL1.R3/KM.00.01/2021'),
(2, 1251, 188, 10, '2021-10-05', '9/PL1.R3/KM.06.00/2021'),
(5, 1262, 196, 1, '2021-10-14', 'B/17/PL1.R3/KM.00.01/2021'),
(5, 1263, 197, 1, '2021-10-14', '18/PL1.R3/KM.00.02/2021'),
(5, 1264, 198, 1, '2021-10-14', 'Nomor 19 Tahun 2021'),
(5, 1265, 199, 1, '2021-10-15', 'B/20/PL1.R3/KM.00.03/2021'),
(5, 1266, 200, 2, '2021-10-16', '21/PL1.R3/KM.00.05/2021'),
(5, 1267, 201, 2, '2021-10-22', 'R/22/PL1.R3/KM.00.04/2021'),
(5, 1268, 202, 3, '2021-10-15', 'Nomor 23 Tahun 2021');

-- --------------------------------------------------------

--
-- Struktur dari tabel `surat_masuk`
--

CREATE TABLE `surat_masuk` (
  `ID_PENGGUNA` int(10) UNSIGNED NOT NULL,
  `ID_PENCATATAN` int(11) NOT NULL,
  `ID_KODE_UNIT_KERJA` int(11) NOT NULL,
  `ID_SIFAT_NASKAH` int(11) NOT NULL,
  `NOMOR_SURAT` varchar(100) DEFAULT NULL,
  `NAMA_PENGIRIM` varchar(30) DEFAULT NULL,
  `TGL_DITERIMA` date DEFAULT NULL,
  `NOMOR_AGENDA` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `surat_masuk`
--

INSERT INTO `surat_masuk` (`ID_PENGGUNA`, `ID_PENCATATAN`, `ID_KODE_UNIT_KERJA`, `ID_SIFAT_NASKAH`, `NOMOR_SURAT`, `NAMA_PENGIRIM`, `TGL_DITERIMA`, `NOMOR_AGENDA`) VALUES
(2, 1253, 1, 4, 'B/1/PL1.KO/AK.00.00/2020', 'Ihksan', '2021-10-06', 1),
(2, 1254, 1, 4, 'asd', 'asd', '2021-10-14', 2),
(2, 1255, 1, 4, 'qwe', 'asd', '2021-10-14', 3),
(5, 1269, 13, 4, 'B/1/PL1.KO/AK.00.00/2090', 'Ujang Raharja', '2021-10-15', 4),
(5, 1270, 7, 4, 'B/1/PL1.KO/AK.00.00/2099', 'LIAQW', '2021-10-08', 5),
(5, 1271, 6, 4, 'B/1/PL1.KO/AK.00.00/2089', 'LIA', '2021-10-15', 6),
(5, 1272, 11, 4, 'B/1/PL1.KO/AK.00.00/2087', 'Ihksan', '2021-10-15', 7),
(5, 1273, 12, 4, 'B/1/PL1.KO/AK.00.00/2032', 'LIAQW', '2021-10-10', 8),
(5, 1274, 5, 2, 'B/1/PL1.KO/AK.00.00/2031', 'Ujang Raharja', '2021-10-15', 9),
(5, 1275, 5, 1, 'B/1/PL1.KO/AK.00.00/2067', 'Ujang Raharja', '2021-10-08', 10),
(5, 1276, 6, 4, 'B/1/PL1.KO/AK.00.00/2027', 'Ujang Raharja', '2021-10-15', 11),
(5, 1277, 5, 4, 'B/1/PL1.KO/AK.00.00/2055', 'Ujang Raharja', '2021-10-17', 12);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tujuan_disposisi`
--

CREATE TABLE `tujuan_disposisi` (
  `ID_DISPOSISI` int(11) NOT NULL,
  `ID_KODE_UNIT_KERJA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tujuan_disposisi`
--

INSERT INTO `tujuan_disposisi` (`ID_DISPOSISI`, `ID_KODE_UNIT_KERJA`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tujuan_pencatatan`
--

CREATE TABLE `tujuan_pencatatan` (
  `ID_PENCATATAN` int(11) NOT NULL,
  `ID_KODE_UNIT_KERJA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tujuan_pencatatan`
--

INSERT INTO `tujuan_pencatatan` (`ID_PENCATATAN`, `ID_KODE_UNIT_KERJA`) VALUES
(1241, 1),
(1241, 242),
(1243, 1),
(1244, 2),
(1244, 4),
(1244, 245),
(1245, 1),
(1246, 1),
(1247, 1),
(1247, 249),
(1248, 1),
(1249, 1),
(1249, 2),
(1250, 1),
(1250, 2),
(1250, 254),
(1250, 255),
(1251, 257),
(1251, 258),
(1253, 1),
(1254, 1),
(1255, 1),
(1262, 2),
(1263, 2),
(1264, 2),
(1265, 1),
(1266, 2),
(1267, 2),
(1268, 2),
(1269, 11),
(1270, 10),
(1271, 11),
(1272, 10),
(1273, 9),
(1274, 3),
(1275, 3),
(1276, 7),
(1277, 11);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `username_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin', NULL, '$2y$10$zwsxDDPL6vPmoYlBEzq3du7.ujddduzn36zh29WIeYN0pCbn1YgJW', NULL, '2021-07-17 23:40:47', '2021-07-17 23:40:47'),
(2, 'satria', 'satria', NULL, '$2y$10$wRw6SAIG7gqe4ObN.9hkbe.BO.XQQ3aBaBrCdE9PaGVfDK.1STj9W', NULL, '2021-07-17 23:40:47', '2021-08-13 07:44:47'),
(5, 'Harita', 'Harita', NULL, '$2y$10$mZiqeZxM2RDxsK7T.R7jjuH76DOa6R7x38GE9R7OcL3KP82dFQDD.', NULL, '2021-10-06 06:49:19', '2021-10-06 06:49:19');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `derajat_surat`
--
ALTER TABLE `derajat_surat`
  ADD PRIMARY KEY (`ID_DERAJAT_SURAT`),
  ADD UNIQUE KEY `iderajatsurat` (`DERAJAT_SURAT`,`DESKRIPSI`) USING BTREE;

--
-- Indeks untuk tabel `disposisi`
--
ALTER TABLE `disposisi`
  ADD PRIMARY KEY (`ID_DISPOSISI`,`ID_PENGGUNA`,`ID_PENCATATAN`),
  ADD KEY `FK_DISPOSIS_MENAMBAHK_PENCATAT` (`ID_PENCATATAN`,`ID_PENGGUNA`);

--
-- Indeks untuk tabel `jenis_surat`
--
ALTER TABLE `jenis_surat`
  ADD PRIMARY KEY (`ID_JENIS_SURAT`),
  ADD UNIQUE KEY `ijenissurat` (`JENIS_SURAT`,`KETERANGAN`,`TIPE_SURAT`) USING BTREE;

--
-- Indeks untuk tabel `kode_hal`
--
ALTER TABLE `kode_hal`
  ADD PRIMARY KEY (`ID_KODE_HAL`),
  ADD UNIQUE KEY `ikode` (`HAL`) USING BTREE;

--
-- Indeks untuk tabel `kode_perguruan_tinggi`
--
ALTER TABLE `kode_perguruan_tinggi`
  ADD PRIMARY KEY (`ID_KODE_PERGURUAN_TINGGI`);

--
-- Indeks untuk tabel `kode_sifat_naskah`
--
ALTER TABLE `kode_sifat_naskah`
  ADD PRIMARY KEY (`ID_SIFAT_NASKAH`),
  ADD UNIQUE KEY `ikodesifatnaskah` (`KODE_SIFAT_NASKAH`,`SIFAT_NASKAH`) USING BTREE;

--
-- Indeks untuk tabel `kode_unit_kerja`
--
ALTER TABLE `kode_unit_kerja`
  ADD PRIMARY KEY (`ID_KODE_UNIT_KERJA`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `nomor_surat`
--
ALTER TABLE `nomor_surat`
  ADD PRIMARY KEY (`ID_NOMOR_SURAT`),
  ADD KEY `FK_NOMOR_SU_BERSIFAT_KODE_SIF` (`ID_SIFAT_NASKAH`),
  ADD KEY `FK_NOMOR_SU_OLEH_KODE_UNI` (`ID_KODE_UNIT_KERJA`),
  ADD KEY `FK_NOMOR_SU_PERGURUAN_KODE_PER` (`ID_KODE_PERGURUAN_TINGGI`),
  ADD KEY `FK_NOMOR_SU_PERIHAL_KODE_HAL` (`ID_KODE_HAL`);

--
-- Indeks untuk tabel `pemohon`
--
ALTER TABLE `pemohon`
  ADD PRIMARY KEY (`ID_PEMOHON`);

--
-- Indeks untuk tabel `pencatatan`
--
ALTER TABLE `pencatatan`
  ADD PRIMARY KEY (`ID_PENCATATAN`,`ID_PENGGUNA`),
  ADD KEY `FK_PENCATAT_BERDERAJA_DERAJAT_` (`ID_DERAJAT_SURAT`),
  ADD KEY `FK_PENCATAT_BERJENIS_JENIS_SU` (`ID_JENIS_SURAT`),
  ADD KEY `FK_PENCATAT_MEMBUAT_PENGGUNA` (`ID_PENGGUNA`);

--
-- Indeks untuk tabel `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`ID_PENGGUNA`),
  ADD UNIQUE KEY `inama` (`NAMA`) USING BTREE;

--
-- Indeks untuk tabel `pengingat`
--
ALTER TABLE `pengingat`
  ADD PRIMARY KEY (`ID_PENGINGAT`,`ID_PENGGUNA`,`ID_PENCATATAN`),
  ADD KEY `FK_PENGINGA_MENGINGAT_PENCATAT` (`ID_PENGGUNA`,`ID_PENCATATAN`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_id_foreign` (`tokenable_id`);

--
-- Indeks untuk tabel `riwayat_aktivitas`
--
ALTER TABLE `riwayat_aktivitas`
  ADD PRIMARY KEY (`ID_RIWAYAT_ALTIVITAS`,`ID_PENGGUNA`,`ID_PENCATATAN`),
  ADD KEY `FK_RIWAYAT__MENDAPATK_PENCATAT` (`ID_PENGGUNA`,`ID_PENCATATAN`);

--
-- Indeks untuk tabel `surat_keluar`
--
ALTER TABLE `surat_keluar`
  ADD PRIMARY KEY (`ID_PENGGUNA`,`ID_PENCATATAN`),
  ADD KEY `FK_SURAT_KE_MEMILIKI_NOMOR_SU` (`ID_NOMOR_SURAT`),
  ADD KEY `FK_SURAT_KE_MEMOHON2_PEMOHON` (`ID_PEMOHON`);

--
-- Indeks untuk tabel `surat_masuk`
--
ALTER TABLE `surat_masuk`
  ADD PRIMARY KEY (`ID_PENGGUNA`,`ID_PENCATATAN`),
  ADD KEY `FK_SURAT_MA_BERUPA2_KODE_SIF` (`ID_SIFAT_NASKAH`),
  ADD KEY `FK_SURAT_MA_DARI_KODE_UNI` (`ID_KODE_UNIT_KERJA`);

--
-- Indeks untuk tabel `tujuan_disposisi`
--
ALTER TABLE `tujuan_disposisi`
  ADD PRIMARY KEY (`ID_DISPOSISI`,`ID_KODE_UNIT_KERJA`),
  ADD KEY `FK_TUJUAN_D_MENUJU_KODE_UNI` (`ID_KODE_UNIT_KERJA`);

--
-- Indeks untuk tabel `tujuan_pencatatan`
--
ALTER TABLE `tujuan_pencatatan`
  ADD PRIMARY KEY (`ID_PENCATATAN`,`ID_KODE_UNIT_KERJA`),
  ADD KEY `FK_TUJUAN_P_DITUJU_KODE_UNI` (`ID_KODE_UNIT_KERJA`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `derajat_surat`
--
ALTER TABLE `derajat_surat`
  MODIFY `ID_DERAJAT_SURAT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `disposisi`
--
ALTER TABLE `disposisi`
  MODIFY `ID_DISPOSISI` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `jenis_surat`
--
ALTER TABLE `jenis_surat`
  MODIFY `ID_JENIS_SURAT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `kode_hal`
--
ALTER TABLE `kode_hal`
  MODIFY `ID_KODE_HAL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT untuk tabel `kode_perguruan_tinggi`
--
ALTER TABLE `kode_perguruan_tinggi`
  MODIFY `ID_KODE_PERGURUAN_TINGGI` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `kode_sifat_naskah`
--
ALTER TABLE `kode_sifat_naskah`
  MODIFY `ID_SIFAT_NASKAH` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `kode_unit_kerja`
--
ALTER TABLE `kode_unit_kerja`
  MODIFY `ID_KODE_UNIT_KERJA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=259;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `nomor_surat`
--
ALTER TABLE `nomor_surat`
  MODIFY `ID_NOMOR_SURAT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;

--
-- AUTO_INCREMENT untuk tabel `pemohon`
--
ALTER TABLE `pemohon`
  MODIFY `ID_PEMOHON` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `pencatatan`
--
ALTER TABLE `pencatatan`
  MODIFY `ID_PENCATATAN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1278;

--
-- AUTO_INCREMENT untuk tabel `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `ID_PENGGUNA` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `pengingat`
--
ALTER TABLE `pengingat`
  MODIFY `ID_PENGINGAT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT untuk tabel `riwayat_aktivitas`
--
ALTER TABLE `riwayat_aktivitas`
  MODIFY `ID_RIWAYAT_ALTIVITAS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `disposisi`
--
ALTER TABLE `disposisi`
  ADD CONSTRAINT `FK_DISPOSIS_MENAMBAHK_PENCATAT` FOREIGN KEY (`ID_PENCATATAN`,`ID_PENGGUNA`) REFERENCES `pencatatan` (`ID_PENCATATAN`, `ID_PENGGUNA`);

--
-- Ketidakleluasaan untuk tabel `nomor_surat`
--
ALTER TABLE `nomor_surat`
  ADD CONSTRAINT `FK_NOMOR_SU_BERSIFAT_KODE_SIF` FOREIGN KEY (`ID_SIFAT_NASKAH`) REFERENCES `kode_sifat_naskah` (`ID_SIFAT_NASKAH`),
  ADD CONSTRAINT `FK_NOMOR_SU_OLEH_KODE_UNI` FOREIGN KEY (`ID_KODE_UNIT_KERJA`) REFERENCES `kode_unit_kerja` (`ID_KODE_UNIT_KERJA`),
  ADD CONSTRAINT `FK_NOMOR_SU_PERGURUAN_KODE_PER` FOREIGN KEY (`ID_KODE_PERGURUAN_TINGGI`) REFERENCES `kode_perguruan_tinggi` (`ID_KODE_PERGURUAN_TINGGI`),
  ADD CONSTRAINT `FK_NOMOR_SU_PERIHAL_KODE_HAL` FOREIGN KEY (`ID_KODE_HAL`) REFERENCES `kode_hal` (`ID_KODE_HAL`);

--
-- Ketidakleluasaan untuk tabel `pencatatan`
--
ALTER TABLE `pencatatan`
  ADD CONSTRAINT `FK_PENCATAT_BERDERAJA_DERAJAT_` FOREIGN KEY (`ID_DERAJAT_SURAT`) REFERENCES `derajat_surat` (`ID_DERAJAT_SURAT`),
  ADD CONSTRAINT `FK_PENCATAT_BERJENIS_JENIS_SU` FOREIGN KEY (`ID_JENIS_SURAT`) REFERENCES `jenis_surat` (`ID_JENIS_SURAT`),
  ADD CONSTRAINT `FK_PENCATAT_MEMBUAT_PENGGUNA` FOREIGN KEY (`ID_PENGGUNA`) REFERENCES `pengguna` (`ID_PENGGUNA`);

--
-- Ketidakleluasaan untuk tabel `pengingat`
--
ALTER TABLE `pengingat`
  ADD CONSTRAINT `FK_PENGINGA_MENGINGAT_PENCATAT` FOREIGN KEY (`ID_PENGGUNA`,`ID_PENCATATAN`) REFERENCES `pencatatan` (`ID_PENGGUNA`, `ID_PENCATATAN`);

--
-- Ketidakleluasaan untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD CONSTRAINT `personal_access_tokens_tokenable_id_foreign` FOREIGN KEY (`tokenable_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `riwayat_aktivitas`
--
ALTER TABLE `riwayat_aktivitas`
  ADD CONSTRAINT `FK_RIWAYAT__MENDAPATK_PENCATAT` FOREIGN KEY (`ID_PENGGUNA`,`ID_PENCATATAN`) REFERENCES `pencatatan` (`ID_PENGGUNA`, `ID_PENCATATAN`);

--
-- Ketidakleluasaan untuk tabel `surat_keluar`
--
ALTER TABLE `surat_keluar`
  ADD CONSTRAINT `FK_SURAT_KE_INHERITAN_PENCATAT` FOREIGN KEY (`ID_PENGGUNA`,`ID_PENCATATAN`) REFERENCES `pencatatan` (`ID_PENGGUNA`, `ID_PENCATATAN`),
  ADD CONSTRAINT `FK_SURAT_KE_MEMILIKI_NOMOR_SU` FOREIGN KEY (`ID_NOMOR_SURAT`) REFERENCES `nomor_surat` (`ID_NOMOR_SURAT`),
  ADD CONSTRAINT `FK_SURAT_KE_MEMOHON2_PEMOHON` FOREIGN KEY (`ID_PEMOHON`) REFERENCES `pemohon` (`ID_PEMOHON`);

--
-- Ketidakleluasaan untuk tabel `surat_masuk`
--
ALTER TABLE `surat_masuk`
  ADD CONSTRAINT `FK_SURAT_MA_BERUPA2_KODE_SIF` FOREIGN KEY (`ID_SIFAT_NASKAH`) REFERENCES `kode_sifat_naskah` (`ID_SIFAT_NASKAH`),
  ADD CONSTRAINT `FK_SURAT_MA_DARI_KODE_UNI` FOREIGN KEY (`ID_KODE_UNIT_KERJA`) REFERENCES `kode_unit_kerja` (`ID_KODE_UNIT_KERJA`),
  ADD CONSTRAINT `FK_SURAT_MA_INHERITAN_PENCATAT` FOREIGN KEY (`ID_PENGGUNA`,`ID_PENCATATAN`) REFERENCES `pencatatan` (`ID_PENGGUNA`, `ID_PENCATATAN`);

--
-- Ketidakleluasaan untuk tabel `tujuan_disposisi`
--
ALTER TABLE `tujuan_disposisi`
  ADD CONSTRAINT `FK_TUJUAN_D_MENUJU_KODE_UNI` FOREIGN KEY (`ID_KODE_UNIT_KERJA`) REFERENCES `kode_unit_kerja` (`ID_KODE_UNIT_KERJA`),
  ADD CONSTRAINT `FK_TUJUAN_D_RELATIONS_DISPOSIS` FOREIGN KEY (`ID_DISPOSISI`) REFERENCES `disposisi` (`ID_DISPOSISI`);

--
-- Ketidakleluasaan untuk tabel `tujuan_pencatatan`
--
ALTER TABLE `tujuan_pencatatan`
  ADD CONSTRAINT `FK_TUJUAN_P_DITUJU_KODE_UNI` FOREIGN KEY (`ID_KODE_UNIT_KERJA`) REFERENCES `kode_unit_kerja` (`ID_KODE_UNIT_KERJA`),
  ADD CONSTRAINT `FK_TUJUAN_P_RELATIONS_PENCATAT` FOREIGN KEY (`ID_PENCATATAN`) REFERENCES `pencatatan` (`ID_PENCATATAN`);

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pengguna` (`ID_PENGGUNA`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
