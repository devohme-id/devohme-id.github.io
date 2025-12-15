export const profile = {
  name: 'Roby Kornela',
  title: 'IT Network & Infrastructure Specialist | Software Developer',
  tagline:
    'Transforming complex manufacturing challenges into streamlined, automated, and scalable IT solutions.',
  summary:
    'Saya adalah profesional di bidang IT Network & Infrastructure serta Software Development dengan pengalaman kerja di ISP dan industri manufaktur elektronik. Saya telah membangun berbagai sistem automasi, monitoring, dan best practice IT yang berdampak langsung pada efisiensi operasional dan pengurangan human error.',
  sub_summary:
    'Salah satu pencapaian utama saya adalah membawa perusahaan tempat saya bekerja meraih Juara 2 Best Practice System di antara seluruh vendor LG Electronics Indonesia, melalui implementasi sistem yang terstruktur, stabil, dan scalable.',
  email: 'robykornela@gmail.com',
  phone: '081319019994',
  linkedin: '#', // Placeholder
  address: 'Perum Puri Cikarang Asri Blok D4/02 006/007, Sukarukun, Sukatani, Bekasi',
  birth_place: 'Ciamis',
  birth_date: '1994-09-27',
}

export const experiences = [
  {
    company: 'PT. OHM Electronics Indonesia',
    role: 'IT Network, Infrastructure & Software Developer',
    period: 'Oktober 2020 – Present',
    description:
      'Bertanggung jawab penuh atas desain infrastruktur IT, pengembangan software manufaktur, dan automasi sistem produksi.',
    details: [
      'Desain dan implementasi IT Network & Infrastructure (LAN, VLAN, Firewall, Server)',
      'Pengembangan sistem manufaktur (monitoring mesin, andon system, database production)',
      'Automasi proses produksi dan quality control',
      'Integrasi IoT & serial device ke sistem database & web',
      'Penerapan best practice IT untuk stabilitas, keamanan, dan efisiensi',
    ],
  },
  {
    company: 'PT. Supra Primatama Nusantara (Biznet)',
    role: 'Network Operation & Infrastructure',
    period: '2014 – 2020',
    description: 'Fokus pada manajemen jaringan backbone, routing, dan layanan pelanggan.',
    details: [
      'Network operation & infrastructure',
      'Routing, switching, NAT, firewall',
      'Customer & backbone network management',
    ],
  },
]

export const skills = {
  'Network & Infrastructure': [
    'TCP/IP, VLAN, Routing, Switching',
    'Firewall, NAT, VPN',
    'Server Windows & Linux',
    'Mikrotik / Enterprise Network Concepts',
  ],
  'Software Development': [
    'VB.NET / C# (Windows Forms)',
    'PHP, JavaScript, Web API',
    'MySQL / Database Design',
    'REST API Integration',
  ],
  'Automation & IoT': [
    'ESP32 / ESP8266 / Arduino',
    'Serial Communication (RS232)',
    'Real-time monitoring system',
    'Industrial automation concept',
  ],
  'Best Practice & System Design': [
    'Manufacturing IT System',
    'Monitoring Dashboard',
    'Scalable Architecture',
    'Documentation & SOP',
  ],
}

export const achievements = [
  {
    title: '2nd Best Practice System Award',
    subtitle: 'Among all LG Electronics Indonesia vendors',
    desc: 'Successfully implemented multiple automation & monitoring systems.',
    icon: `<svg class="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
  },
  {
    title: 'System Optimization',
    subtitle: 'Reduction in Downtime',
    desc: 'Reduced downtime & human error through rigorous systemization and automation.',
    icon: `<svg class="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
  },
]

export const showcase = [
  {
    title: 'Enterprise Resource Planning (ERP)',
    subtitle: 'Integrated Business Management Suite',
    description:
      'Sebuah sistem terpusat yang mengintegrasikan seluruh proses bisnis inti perusahaan mulai dari Finance, Procurement, Inventory, Production, hingga HR. Dirancang untuk skalabilitas tinggi dan real-time decision making.',
    image: 'assets/img/showcase_erp.png',
    tags: ['Desktop & Web Ecosystem', 'Finance & Accounting', 'Supply Chain', 'Full Automation'],
  },
  {
    title: 'Ekosistem Integrasi Bea Cukai',
    subtitle: 'ERP + IT Inventory + CEISA 4.0 Host-to-Host',
    description:
      'Solusi kepatuhan Bea Cukai (Kawasan Berikat) yang menghubungkan data ERP pabrik secara langsung dengan portal CEISA 4.0. Menjamin data realtime, akurat, dan sesuai regulasi tanpa input manual ganda.',
    image: 'assets/img/showcase_bea_cukai.png',
    tags: ['Government Compliance', 'Host-to-Host API', 'Automated Reporting', 'Zero-Error Data'],
  },
  {
    title: 'Warehouse Management System (WMS)',
    subtitle: 'Automotive Industry Standard (PT. TVS)',
    description:
      'Sistem manajemen gudang canggih untuk industri otomotif dengan fitur First-In-First-Out (FIFO), serial number tracking, dan optimasi layout gudang. Meningkatkan akurasi stok hingga 99.9% dan efisiensi picking.',
    image: 'assets/img/showcase_wms.png',
    tags: ['Automotive Standard', 'FIFO Logic', 'Mobile Scanning', 'Stock Accuracy >99%'],
  },
]

export const projects = [
  {
    no: 1,
    system: 'ERP (Enterprise Resource Planning)',
    platform: 'Desktop, Web, Mobile (Ecosystem)',
    function:
      'Mengelola seluruh sumber daya perusahaan: keuangan, pembelian, persediaan, produksi, dan SDM dalam satu sistem terintegrasi.',
    usage:
      'ERP menjadi pusat kendali seluruh aktivitas operasional — mulai dari perencanaan produksi, kebutuhan material, hingga laporan keuangan.',
    benefit:
      'Meningkatkan efisiensi operasional. Menghubungkan seluruh divisi (Finance, HR, Production, Warehouse). Mendukung integrasi data lintas sistem seperti MES, HRIS, dan CEISA.',
  },
  {
    no: 2,
    system: 'MES (Manufacturing Execution System)',
    platform: 'Desktop, Web',
    function:
      'Mengontrol, memonitor, dan menelusuri aktivitas produksi di shop floor secara real-time.',
    usage:
      'Digunakan untuk melacak status produksi, waktu mesin, efisiensi operator, yield rate, dan traceability komponen.',
    benefit:
      'Sinkronisasi langsung dengan ERP. Memberikan visibilitas penuh terhadap proses produksi. Mengurangi downtime & meningkatkan OEE (Overall Equipment Effectiveness).',
  },
  {
    no: 3,
    system: 'Digital Stock Card',
    platform: 'Desktop, Web, Mobile (Ecosystem)',
    function:
      'Menggantikan sistem kartu stok manual dengan sistem digital real-time untuk semua material di gudang dan line produksi.',
    usage: 'Menampilkan transaksi masuk-keluar material secara otomatis dari sistem ERP & MES.',
    benefit:
      'Transparansi stok antar divisi (Warehouse-Production). Mengurangi human error dan selisih stok. Dapat diakses dari smartphone oleh operator & supervisor.',
  },
  {
    no: 4,
    system: 'Andon Machine Monitoring',
    platform: 'Web, Dashboard Display',
    function:
      'Memantau status mesin (RUN/STOP/CHANGE MODEL) secara langsung dan menampilkan alert visual pada layar besar di area produksi.',
    usage:
      'Digunakan di line SMT dan Assembly untuk mendeteksi downtime dan menampilkan status produksi tiap mesin.',
    benefit:
      'Meningkatkan respons cepat terhadap gangguan produksi. Mendukung analisis downtime per shift. Integrasi langsung dengan MES dan database log mesin.',
  },
  {
    no: 5,
    system: 'Thermohygrometer Logger (IoT Based)',
    platform: 'Web, Mobile',
    function:
      'Merekam suhu & kelembapan ruangan atau mesin produksi secara otomatis melalui sensor IoT.',
    usage: 'Monitoring ruang SMT, reflow oven, dan area penyimpanan material sensitif (MSL).',
    benefit:
      'Memberi peringatan otomatis saat suhu/kelembapan keluar batas. Data terekam otomatis ke server & dashboard kualitas. Mendukung audit ISO/ESD/MSL.',
  },
  {
    no: 6,
    system: 'Attendance Employee (HRIS)',
    platform: 'Web, Mobile',
    function:
      'Sistem kehadiran karyawan berbasis cloud dengan integrasi ke payroll dan ERP HR module.',
    usage:
      'Menggantikan absensi fingerprint manual menjadi sistem digital berbasis lokasi dan perangkat mobile.',
    benefit:
      'Integrasi langsung dengan ERP HR & payroll. Mengurangi manipulasi data absensi. Meningkatkan efisiensi administrasi HR.',
  },
  {
    no: 7,
    system: 'Feeder Management System',
    platform: 'Desktop, Web',
    function:
      'Mencatat, melacak, dan memonitor kondisi feeder pada mesin SMT (serial, status, lifetime).',
    usage:
      'Digunakan oleh teknisi SMT untuk memastikan setiap feeder layak pakai sebelum digunakan.',
    benefit:
      'Meningkatkan efisiensi setup SMT. Mengurangi risiko kesalahan part feeding. Data feeder terintegrasi ke sistem MES.',
  },
  {
    no: 8,
    system: 'Stencil Management System',
    platform: 'Desktop, Web',
    function:
      'Mengatur siklus penggunaan stencil dari printing hingga pembersihan dan penyimpanan.',
    usage:
      'Menjamin kontrol kebersihan dan masa pakai stencil agar kualitas solder paste tetap optimal.',
    benefit:
      'Meminimalkan cacat solder akibat stencil kotor atau aus. Otomatisasi penjadwalan maintenance stencil.',
  },
  {
    no: 9,
    system: 'Spare Part Management',
    platform: 'Desktop, Web',
    function: 'Mengontrol stok, penggunaan, dan histori perawatan spare part mesin produksi.',
    usage:
      'Digunakan oleh tim maintenance untuk memastikan ketersediaan spare part mesin utama seperti mounter dan printer.',
    benefit:
      'Meningkatkan efisiensi pemeliharaan mesin. Integrasi dengan ERP untuk permintaan pembelian spare part.',
  },
  {
    no: 10,
    system: 'AOI Machine Pass Rate Monitoring',
    platform: 'Web',
    function:
      'Menampilkan data hasil pemeriksaan AOI (Automatic Optical Inspection) secara real-time.',
    usage: 'Menunjukkan rasio Pass/Fail per model, line, dan shift untuk analisis kualitas solder.',
    benefit:
      'Mempercepat analisa defect rate. Meningkatkan respon quality assurance. Data terhubung ke modul Quality Management.',
  },
  {
    no: 11,
    system: 'Reflow Machine Temperature Control Monitoring',
    platform: 'Web, IoT',
    function: 'Memantau kurva suhu pada reflow oven untuk memastikan kesesuaian profil soldering.',
    usage: 'Data dikirim dari sensor mesin ke server melalui gateway IoT.',
    benefit:
      'Menjamin stabilitas proses reflow. Meningkatkan kepatuhan terhadap standard IPC & QA.',
  },
  {
    no: 12,
    system: 'IT Inventory / CEISA 4.0 (Host-to-Host)',
    platform: 'Web',
    function: 'Sistem inventori IT dan integrasi otomatis dengan sistem Bea Cukai (CEISA 4.0).',
    usage:
      'Digunakan untuk pencatatan aset IT, hardware, software, serta integrasi host-to-host data impor dan ekspor.',
    benefit:
      'Memenuhi regulasi kepabeanan. Memudahkan pelaporan barang keluar/masuk ke Bea Cukai secara otomatis.',
  },
  {
    no: 13,
    system: 'Material Verification (Production System)',
    platform: 'Desktop',
    function:
      'Memastikan material yang digunakan sesuai dengan BOM dan Work Order sebelum produksi dimulai.',
    usage: 'Operator melakukan scanning barcode material dan sistem akan validasi ke database BOM.',
    benefit:
      'Menjamin zero-mistake pada material feeding. Terintegrasi langsung ke ERP & MES. Menghindari kesalahan material di proses produksi.',
  },
  {
    no: 14,
    system: 'Repair Management System',
    platform: 'Desktop, Web',
    function:
      'Mencatat, memonitor, dan menganalisis hasil perbaikan produk NG dari proses QC atau AOI.',
    usage: 'Mengatur alur repair board mulai dari input defect hingga hasil rework.',
    benefit: 'Meningkatkan traceability NG item. Data real-time untuk analisa defect recurring.',
  },
  {
    no: 15,
    system: '3R Management (Reject, Rework, Return)',
    platform: 'Desktop, Web',
    function:
      'Mengelola dan menelusuri item yang masuk kategori Reject, Rework, dan Return secara terintegrasi.',
    usage: 'Memonitor setiap produk yang tidak lolos inspeksi dan status tindak lanjutnya.',
    benefit:
      'Meningkatkan kontrol terhadap kualitas output. Terhubung ke Quality & Repair Management System.',
  },
  {
    no: 16,
    system: 'Locator Tracking Finish Good Management',
    platform: 'Web, Mobile',
    function:
      'Menentukan posisi penyimpanan (locator) produk jadi di gudang dan line menggunakan sistem barcode/RFID.',
    usage:
      'Operator mobile melakukan scan untuk memastikan posisi dan status setiap pallet atau carton.',
    benefit:
      'Mengurangi kesalahan penempatan produk jadi. Real-time update ke sistem ERP dan Delivery.',
  },
  {
    no: 17,
    system: 'Delivery Management',
    platform: 'Web, Mobile',
    function:
      'Mengatur alur pengiriman produk ke pelanggan, mulai dari packing list, loading, hingga status delivery.',
    usage: 'Digunakan oleh warehouse untuk update status pengiriman secara langsung.',
    benefit:
      'Mempercepat proses ekspedisi. Meningkatkan transparansi antara produksi dan logistik. Sinkron ke ERP & Locator System.',
  },
  {
    no: 18,
    system: 'Quality Management System (QMS)',
    platform: 'Desktop, Web',
    function: 'Mengelola inspeksi, audit, dan laporan kualitas untuk setiap proses produksi.',
    usage:
      'Mencatat data QC, analisa defect, serta pengendalian CAPA (Corrective & Preventive Action).',
    benefit:
      'Mendukung ISO 9001 & IATF 16949 compliance. Terhubung dengan AOI, MES, dan Repair System untuk analisa kualitas menyeluruh.',
  },
]
