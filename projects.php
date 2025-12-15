<?php
// Projects Data
$projects = [
    [
        'no' => 1,
        'system' => 'ERP (Enterprise Resource Planning)',
        'platform' => 'Desktop, Web, Mobile (Ecosystem)',
        'function' => 'Mengelola seluruh sumber daya perusahaan: keuangan, pembelian, persediaan, produksi, dan SDM dalam satu sistem terintegrasi.',
        'usage' => 'ERP menjadi pusat kendali seluruh aktivitas operasional — mulai dari perencanaan produksi, kebutuhan material, hingga laporan keuangan.',
        'benefit' => 'Meningkatkan efisiensi operasional. Menghubungkan seluruh divisi (Finance, HR, Production, Warehouse). Mendukung integrasi data lintas sistem seperti MES, HRIS, dan CEISA.'
    ],
    [
        'no' => 2,
        'system' => 'MES (Manufacturing Execution System)',
        'platform' => 'Desktop, Web',
        'function' => 'Mengontrol, memonitor, dan menelusuri aktivitas produksi di shop floor secara real-time.',
        'usage' => 'Digunakan untuk melacak status produksi, waktu mesin, efisiensi operator, yield rate, dan traceability komponen.',
        'benefit' => 'Sinkronisasi langsung dengan ERP. Memberikan visibilitas penuh terhadap proses produksi. Mengurangi downtime & meningkatkan OEE (Overall Equipment Effectiveness).'
    ],
    [
        'no' => 3,
        'system' => 'Digital Stock Card',
        'platform' => 'Desktop, Web, Mobile (Ecosystem)',
        'function' => 'Menggantikan sistem kartu stok manual dengan sistem digital real-time untuk semua material di gudang dan line produksi.',
        'usage' => 'Menampilkan transaksi masuk-keluar material secara otomatis dari sistem ERP & MES.',
        'benefit' => 'Transparansi stok antar divisi (Warehouse-Production). Mengurangi human error dan selisih stok. Dapat diakses dari smartphone oleh operator & supervisor.'
    ],
    [
        'no' => 4,
        'system' => 'Andon Machine Monitoring',
        'platform' => 'Web, Dashboard Display',
        'function' => 'Memantau status mesin (RUN/STOP/CHANGE MODEL) secara langsung dan menampilkan alert visual pada layar besar di area produksi.',
        'usage' => 'Digunakan di line SMT dan Assembly untuk mendeteksi downtime dan menampilkan status produksi tiap mesin.',
        'benefit' => 'Meningkatkan respons cepat terhadap gangguan produksi. Mendukung analisis downtime per shift. Integrasi langsung dengan MES dan database log mesin.'
    ],
    [
        'no' => 5,
        'system' => 'Thermohygrometer Logger (IoT Based)',
        'platform' => 'Web, Mobile',
        'function' => 'Merekam suhu & kelembapan ruangan atau mesin produksi secara otomatis melalui sensor IoT.',
        'usage' => 'Monitoring ruang SMT, reflow oven, dan area penyimpanan material sensitif (MSL).',
        'benefit' => 'Memberi peringatan otomatis saat suhu/kelembapan keluar batas. Data terekam otomatis ke server & dashboard kualitas. Mendukung audit ISO/ESD/MSL.'
    ],
    [
        'no' => 6,
        'system' => 'Attendance Employee (HRIS)',
        'platform' => 'Web, Mobile',
        'function' => 'Sistem kehadiran karyawan berbasis cloud dengan integrasi ke payroll dan ERP HR module.',
        'usage' => 'Menggantikan absensi fingerprint manual menjadi sistem digital berbasis lokasi dan perangkat mobile.',
        'benefit' => 'Integrasi langsung dengan ERP HR & payroll. Mengurangi manipulasi data absensi. Meningkatkan efisiensi administrasi HR.'
    ],
    [
        'no' => 7,
        'system' => 'Feeder Management System',
        'platform' => 'Desktop, Web',
        'function' => 'Mencatat, melacak, dan memonitor kondisi feeder pada mesin SMT (serial, status, lifetime).',
        'usage' => 'Digunakan oleh teknisi SMT untuk memastikan setiap feeder layak pakai sebelum digunakan.',
        'benefit' => 'Meningkatkan efisiensi setup SMT. Mengurangi risiko kesalahan part feeding. Data feeder terintegrasi ke sistem MES.'
    ],
    [
        'no' => 8,
        'system' => 'Stencil Management System',
        'platform' => 'Desktop, Web',
        'function' => 'Mengatur siklus penggunaan stencil dari printing hingga pembersihan dan penyimpanan.',
        'usage' => 'Menjamin kontrol kebersihan dan masa pakai stencil agar kualitas solder paste tetap optimal.',
        'benefit' => 'Meminimalkan cacat solder akibat stencil kotor atau aus. Otomatisasi penjadwalan maintenance stencil.'
    ],
    [
        'no' => 9,
        'system' => 'Spare Part Management',
        'platform' => 'Desktop, Web',
        'function' => 'Mengontrol stok, penggunaan, dan histori perawatan spare part mesin produksi.',
        'usage' => 'Digunakan oleh tim maintenance untuk memastikan ketersediaan spare part mesin utama seperti mounter dan printer.',
        'benefit' => 'Meningkatkan efisiensi pemeliharaan mesin. Integrasi dengan ERP untuk permintaan pembelian spare part.'
    ],
    [
        'no' => 10,
        'system' => 'AOI Machine Pass Rate Monitoring',
        'platform' => 'Web',
        'function' => 'Menampilkan data hasil pemeriksaan AOI (Automatic Optical Inspection) secara real-time.',
        'usage' => 'Menunjukkan rasio Pass/Fail per model, line, dan shift untuk analisis kualitas solder.',
        'benefit' => 'Mempercepat analisa defect rate. Meningkatkan respon quality assurance. Data terhubung ke modul Quality Management.'
    ],
    [
        'no' => 11,
        'system' => 'Reflow Machine Temperature Control Monitoring',
        'platform' => 'Web, IoT',
        'function' => 'Memantau kurva suhu pada reflow oven untuk memastikan kesesuaian profil soldering.',
        'usage' => 'Data dikirim dari sensor mesin ke server melalui gateway IoT.',
        'benefit' => 'Menjamin stabilitas proses reflow. Meningkatkan kepatuhan terhadap standard IPC & QA.'
    ],
    [
        'no' => 12,
        'system' => 'IT Inventory / CEISA 4.0 (Host-to-Host)',
        'platform' => 'Web',
        'function' => 'Sistem inventori IT dan integrasi otomatis dengan sistem Bea Cukai (CEISA 4.0).',
        'usage' => 'Digunakan untuk pencatatan aset IT, hardware, software, serta integrasi host-to-host data impor dan ekspor.',
        'benefit' => 'Memenuhi regulasi kepabeanan. Memudahkan pelaporan barang keluar/masuk ke Bea Cukai secara otomatis.'
    ],
    [
        'no' => 13,
        'system' => 'Material Verification (Production System)',
        'platform' => 'Desktop',
        'function' => 'Memastikan material yang digunakan sesuai dengan BOM dan Work Order sebelum produksi dimulai.',
        'usage' => 'Operator melakukan scanning barcode material dan sistem akan validasi ke database BOM.',
        'benefit' => 'Menjamin zero-mistake pada material feeding. Terintegrasi langsung ke ERP & MES. Menghindari kesalahan material di proses produksi.'
    ],
    [
        'no' => 14,
        'system' => 'Repair Management System',
        'platform' => 'Desktop, Web',
        'function' => 'Mencatat, memonitor, dan menganalisis hasil perbaikan produk NG dari proses QC atau AOI.',
        'usage' => 'Mengatur alur repair board mulai dari input defect hingga hasil rework.',
        'benefit' => 'Meningkatkan traceability NG item. Data real-time untuk analisa defect recurring.'
    ],
    [
        'no' => 15,
        'system' => '3R Management (Reject, Rework, Return)',
        'platform' => 'Desktop, Web',
        'function' => 'Mengelola dan menelusuri item yang masuk kategori Reject, Rework, dan Return secara terintegrasi.',
        'usage' => 'Memonitor setiap produk yang tidak lolos inspeksi dan status tindak lanjutnya.',
        'benefit' => 'Meningkatkan kontrol terhadap kualitas output. Terhubung ke Quality & Repair Management System.'
    ],
    [
        'no' => 16,
        'system' => 'Locator Tracking Finish Good Management',
        'platform' => 'Web, Mobile',
        'function' => 'Menentukan posisi penyimpanan (locator) produk jadi di gudang dan line menggunakan sistem barcode/RFID.',
        'usage' => 'Operator mobile melakukan scan untuk memastikan posisi dan status setiap pallet atau carton.',
        'benefit' => 'Mengurangi kesalahan penempatan produk jadi. Real-time update ke sistem ERP dan Delivery.'
    ],
    [
        'no' => 17,
        'system' => 'Delivery Management',
        'platform' => 'Web, Mobile',
        'function' => 'Mengatur alur pengiriman produk ke pelanggan, mulai dari packing list, loading, hingga status delivery.',
        'usage' => 'Digunakan oleh warehouse untuk update status pengiriman secara langsung.',
        'benefit' => 'Mempercepat proses ekspedisi. Meningkatkan transparansi antara produksi dan logistik. Sinkron ke ERP & Locator System.'
    ],
    [
        'no' => 18,
        'system' => 'Quality Management System (QMS)',
        'platform' => 'Desktop, Web',
        'function' => 'Mengelola inspeksi, audit, dan laporan kualitas untuk setiap proses produksi.',
        'usage' => 'Mencatat data QC, analisa defect, serta pengendalian CAPA (Corrective & Preventive Action).',
        'benefit' => 'Mendukung ISO 9001 & IATF 16949 compliance. Terhubung dengan AOI, MES, dan Repair System untuk analisa kualitas menyeluruh.'
    ]
];
?>
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - Roby Kornela</title>
    <meta name="description" content="List of IT Projects developed by Roby Kornela.">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Outfit', sans-serif; }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .dark .glass-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
    <script>
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <a href="index.php" class="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">ROBY <span class="text-blue-600 dark:text-blue-500">KORNELA</span></a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-center space-x-8">
                        <a href="index.php" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="index.php#about" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="index.php#experience" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                        <a href="index.php#skills" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                        <a href="projects.php" class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                        <a href="index.php#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">Contact Me</a>

                        <!-- Theme Toggle -->
                        <button id="theme-toggle" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        </button>
                    </div>
                </div>
                <!-- Mobile button -->
                <div class="-mr-2 flex md:hidden items-center gap-2">
                     <button id="theme-toggle-mobile" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                        <svg class="theme-toggle-light-icon hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <svg class="theme-toggle-dark-icon hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    </button>
                    <button type="button" id="mobile-menu-btn" class="bg-slate-200 dark:bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="hidden md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="index.php" class="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                <a href="index.php#about" class="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
                <a href="index.php#experience" class="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
                <a href="index.php#skills" class="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                <a href="projects.php" class="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800/50 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="index.php#contact" class="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4">Contact Me</a>
            </div>
        </div>
    </nav>

    <!-- Header -->
    <section class="bg-slate-50 dark:bg-slate-900 py-24 border-b border-slate-200 dark:border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div class="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                Portfolio
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Developed Systems</h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A comprehensive list of automation, monitoring, and management systems I have engaged in building and deploying.
            </p>
        </div>
    </section>

    <!-- Projects Table -->
    <section class="py-12 bg-white dark:bg-slate-900 min-h-screen">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 shadow-lg">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-200 text-sm uppercase tracking-wider">
                            <th class="p-4 border-b border-slate-200 dark:border-slate-700 text-center w-16">No</th>
                            <th class="p-4 border-b border-slate-200 dark:border-slate-700 w-64">Sistem</th>
                            <th class="p-4 border-b border-slate-200 dark:border-slate-700 w-48">Platform</th>
                            <th class="p-4 border-b border-slate-200 dark:border-slate-700">Fungsi Utama</th>
                            <th class="p-4 border-b border-slate-200 dark:border-slate-700">Penerapan di Manufacturing</th>
                            <th class="p-4 border-b border-slate-200 dark:border-slate-700">Integrasi & Manfaat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900/50">
                        <?php foreach ($projects as $project): ?>
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td class="p-4 text-center text-slate-500 dark:text-slate-400 font-mono"><?php echo $project['no']; ?></td>
                            <td class="p-4 font-semibold text-slate-900 dark:text-white"><?php echo $project['system']; ?></td>
                            <td class="p-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    <?php echo $project['platform']; ?>
                                </span>
                            </td>
                            <td class="p-4 text-slate-600 dark:text-slate-300 text-sm"><?php echo $project['function']; ?></td>
                            <td class="p-4 text-slate-600 dark:text-slate-300 text-sm"><?php echo $project['usage']; ?></td>
                            <td class="p-4 text-slate-600 dark:text-slate-300 text-sm border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/10 pl-4"><?php echo $project['benefit']; ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; 2024 Roby Kornela. IT Expert.</p>
    </footer>

    <!-- Scroll to Top Button -->
    <button id="scroll-to-top" class="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all transform translate-y-20 opacity-0 z-40 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Scroll to top">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
    </button>

    <script>
        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => {
             menu.classList.toggle('hidden');
        });

        // Dark Mode Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        const mobileThemeBtn = document.getElementById('theme-toggle-mobile');

        function updateIcons() {
            if (document.documentElement.classList.contains('dark')) {
                themeToggleDarkIcon.classList.remove('hidden');
                themeToggleLightIcon.classList.add('hidden');
                mobileThemeBtn.querySelector('.theme-toggle-dark-icon').classList.remove('hidden');
                mobileThemeBtn.querySelector('.theme-toggle-light-icon').classList.add('hidden');
            } else {
                themeToggleDarkIcon.classList.add('hidden');
                themeToggleLightIcon.classList.remove('hidden');
                mobileThemeBtn.querySelector('.theme-toggle-dark-icon').classList.add('hidden');
                mobileThemeBtn.querySelector('.theme-toggle-light-icon').classList.remove('hidden');
            }
        }
        updateIcons();

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
            updateIcons();
        }

        themeToggleBtn.addEventListener('click', toggleTheme);
        mobileThemeBtn.addEventListener('click', toggleTheme);

        // Scroll to Top Logic
        const scrollTopBtn = document.getElementById('scroll-to-top');

        // Show/Hide button on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove('translate-y-20', 'opacity-0');
            } else {
                scrollTopBtn.classList.add('translate-y-20', 'opacity-0');
            }
        });

        // Scroll to top on click
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Automatic scroll to top on page navigation (Load)
        window.addEventListener('load', () => {
             if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
             }
             window.scrollTo(0, 0);
        });
    </script>
</body>
</html>
