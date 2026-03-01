import React from 'react';

export const programs = [
    {
        title: "Review Dokumen Intensif",
        description: "Dapatkan feedback komprehensif untuk CV, Essay, dan Motivation Letter sesuai ekspektasi reviewer beasiswa.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    },
    {
        title: "Pelatihan Interview Terarah",
        description: "Simulasi wawancara dengan skenario nyata dan evaluasi komunikasi. Anda tampil meyakinkan tanpa hafalan.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    },
    {
        title: "Strategi Profil & Portofolio",
        description: "Audit latar belakang akademik & kerja untuk merumuskan 'selling point' pembeda dari pelamar lain.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    }
];

export const roadmapSteps = [
    {
        phase: "Tahap 1",
        name: "Profil & Strategi",
        duration: "Bulan 1-2",
        details: "Pemetaan gap analisis, penentuan target beasiswa dan kampus yang realistis, serta penyusunan timeline personal."
    },
    {
        phase: "Tahap 2",
        name: "Eksekusi Dokumen",
        duration: "Bulan 3-4",
        details: "Drafting dan review iteratif untuk CV, Motivation Letter, dan Proposal Riset hingga memenuhi standar seleksi."
    },
    {
        phase: "Tahap 3",
        name: "Simulasi & Submit",
        duration: "Bulan 5-6",
        details: "Pematangan kesiapan wawancara, final check administrasi, dan submit aplikasi dengan penuh percaya diri."
    }
];

export const faqs = [
    {
        question: "Siapa yang cocok mengikuti program ini?",
        answer: "Program ini dirancang maksimal bagi mahasiswa tingkat akhir, fresh graduate, atau profesional muda yang bersungguh-sungguh ingin menembus studi S2/S3 lewat jalur beasiswa."
    },
    {
        question: "Apakah saya harus punya pengalaman organisasi tinggi?",
        answer: "Tidak wajib. Tutor akan membantu mengekstrak 'selling points' dari pengalaman apapun yang Anda kerjakan (akademik, project kelas, atau sukarela) untuk dinarasikan secara profesional."
    },
    {
        question: "Bagaimana sistem jadwal program per cohort?",
        answer: "Kami menjalankan sistem cohort per kuartal. Namun sesi 1-on-1 mentoring atau dokumen review diatur secara dinamis menyesuaikan kesibukan Anda."
    },
    {
        question: "Apakah ada jaminan saya lolos beasiswa?",
        answer: "Kami tidak bisa menjamin hasil mutlak (terkait pihak eksternal), namun kami menjamin dokumen dan skill interview Anda akan meningkat drastis hingga pantas dipertimbangkan reviewer."
    },
    {
        question: "Bagaimana langkah cara bergabung?",
        answer: "Pilih CTA 'Gabung Ekosistem' untuk mengisi kuesioner profil awal (Formulir Pendaftaran). Admin kami akan merespons dalam 1-2 hari kerja."
    }
];

export const strukturKepengurusan = [
    {
        kategori: "Inti",
        items: [
            {
                role: "Dewan Pengawas",
                names: ["Muhammad Ghazian"],
                description: ""
            },
            {
                role: "Ketua Umum",
                names: ["Nurun Nisail"],
                description: ""
            },
            {
                role: "Sekretaris",
                names: ["Elgiva Syam", "Ari Achya"],
                description: ""
            },
            {
                role: "Bendahara & Divisi Keuangan",
                names: ["Nabila C", "Jasmine F"],
                description: ""
            }
        ]
    },
    {
        kategori: "Manajerial & Relasi",
        items: [
            {
                role: "Fundraising and Partnership",
                names: ["Abelina Abtari", "Avisena Putra", "Haris Vikriansah"],
                description: "Bertanggung jawab dalam pencarian pendanaan, sponsorship, serta menjalin dan menjaga kerja sama dengan pihak eksternal"
            },
            {
                role: "Strategic Planning & Research",
                names: ["Muhamad Fuad", "Muhammad Fathir", "Rafandra Patria", "Aulia Sukma"],
                description: "Pengembangan internal organisasi dan perencanaan strategi. Riset tren, evaluasi program tahunan, penyusunan roadmap."
            },
            {
                role: "Public Relation",
                names: ["Ilyas Nur", "Syifa Aprilia", "Tiara Meisya"],
                description: "Membangun dan menjaga hubungan UKM dengan pihak luar, menjalin relasi dengan lembaga beasiswa dan organisasi lain"
            }
        ]
    },
    {
        kategori: "Operasional & Program",
        items: [
            {
                role: "Kominfo",
                names: ["Najiha Husnah", "William Samuel", "Anisa Nurul", "Muhammad Fahri"],
                description: "Mengelola media sosial, publikasi, dan penyebaran informasi beasiswa."
            },
            {
                role: "HRD (Penyeleksi)",
                names: ["Muhammad Ahmad", "Amelia Farras", "Rifandi"],
                description: "Training internal pengurus, evaluasi kinerja, internal bonding & culture, SOP & sistem kerja"
            },
            {
                role: "Mentoring & Scholarship Development",
                names: ["Muhammad Fatih", "Nalita Azzuhra", "Anisa Alya", "Nabila Farah", "Fera Anggun"],
                description: "Pengelolaan sistem pendampingan mentor dan calon penerima beasiswa."
            },
            {
                role: "Academic & Scholarship Development",
                names: ["Fathur Rizki", "Muhammad Rafi", "Muhammad Hanif", "Fira Salimah"],
                description: "Pelatihan teknis workshop essay, CV, interview, serta pengembangan softskill/hardskill."
            }
        ]
    }
];

export const rancanganPemasukan = [
    {
        title: "Proker 1",
        pengeluaran: ["operasional", "audio system", "tenant", "dekorasi", "konsumsi", "pemateri"],
        pemasukan: ["Dana rektorat", "sponsorship", "danusan", "tiket masuk Workshop"],
        perkiraan_total: "15 jt"
    },
    {
        title: "Proker 2",
        pengeluaran: ["Konsumsi", "dana pengajar"],
        pemasukan: ["Dana rektorat", "sponsorship"]
    }
];

export const orgConfig = {
    orgName: "Brawijaya Pintar",
    targetCampus: "Universitas Brawijaya",
    focus: "beasiswa dalam negeri maupun luar negeri"
};

export const pengertianContent = [
    { text: `${orgConfig.orgName} merupakan organisasi unit kegiatan mahasiswa yang berfungsi sebagai wadah `, isHighlight: false },
    { text: `pengembangan SDM mahasiswa`, isHighlight: true },
    { text: ` dan `, isHighlight: false },
    { text: `pendampingan beasiswa`, isHighlight: true },
    { text: ` bagi mahasiswa ${orgConfig.targetCampus} dalam aspek pendidikan, khususnya bagi mereka yang ingin melakukan `, isHighlight: false },
    { text: `studi lanjut`, isHighlight: true },
    { text: ` melalui jalur ${orgConfig.focus}.`, isHighlight: false }
];

export const visiMisiData = {
    visi: "Menjadikan sebagai wadah yang Interaktif, Informatif dan Efektif bagi mahasiswa di Universitas Brawijaya untuk mengembangkan kemampuan serta menggali informasi terkait beasiswa tingkat nasional dan internasional.",
    misi: [
        "Memberikan sarana bagi mahasiswa Universitas Brawijaya untuk mengeksplorasi informasi terkait beasiswa di berbagai lingkup nasional dan internasional.",
        "Mengembangkan kemampuan hardskill dan softskill mahasiswa Universitas Brawijaya terkait beasiswa.",
        "Menjadikan insight terbaru dari lembaga atau institusi terkait yang bermanfaat dan efektif dalam membuka wawasan dan sudut pandang baru terkait beasiswa bagi mahasiswa Universitas Brawijaya."
    ]
};

export const budayaOrganisasiData = [
    {
        id: "m1",
        title: "Menghargai Waktu",
        desc: "Disiplin dan tepat waktu dalam setiap kegiatan organisasi.",
        behaviors: ["Hadir rapat tepat waktu", "Menyelesaikan tugas sesuai tenggat", "Merespons pesan dengan cepat"]
    },
    {
        id: "m2",
        title: "Menghargai Sistem",
        desc: "Kepatuhan terhadap aturan dan prosedur kerja yang berlaku.",
        behaviors: ["Mengikuti SOP organisasi", "Melaporkan perkembangan melalui jalur resmi", "Menjaga kerahasiaan data internal"]
    },
    {
        id: "m3",
        title: "Menghargai Setiap Individu",
        desc: "Menjunjung tinggi etika dan empati dalam berinteraksi.",
        behaviors: ["Mendengarkan pendapat orang lain", "Tidak membedakan latar belakang", "Memberikan dukungan konstruktif"]
    },
    {
        id: "m4",
        title: "Menghargai Diri Sendiri",
        desc: "Menjaga integritas, profesionalisme, dan kesejahteraan pribadi.",
        behaviors: ["Menjaga kesehatan fisik & mental", "Terus belajar dan berkembang", "Berani mengakui kesalahan dan berikhtiar maju"]
    },
    {
        id: "p1",
        title: "Peningkatan Kualitas Berkelanjutan",
        desc: "Komitmen untuk selalu berinovasi dan memperbaiki layanan.",
        behaviors: ["Melakukan evaluasi rutin", "Terbuka menerima kritik dan saran", "Mencari solusi kreatif dan efektif"]
    },
    {
        id: "p2",
        title: "Penerapan Budaya Inklusif",
        desc: "Ekosistem yang ramah dan adil bagi semua pihak.",
        behaviors: ["Melibatkan audiens yang lebih luas", "Menjamin aksesibilitas program", "Membangun lingkungan tanpa diskriminasi"]
    }
];


export const arahStrategis = {
    northStar: <>Mencetak mahasiswa yang <strong>siap seleksi</strong> (dokumen, skill, portofolio, dan mental) dengan ekosistem pendampingan yang kuat.</>,
    outcomes: [
        "Meningkatkan kesiapan anggota dari tahap awal hingga siap submit.",
        <>Membangun <strong>pipeline</strong> anggota: Explorer → Builder → Applicant.</>,
        <>Menciptakan ekosistem dukungan: <strong>mentor</strong>, alumni awardee, reviewer, dan mitra.</>
    ],
    pillars: [
        { title: "Capability Building", description: "penguatan skill inti beasiswa (CV, SOP/ML, writing, interview, dasar riset, bahasa, leadership, dan portofolio)." },
        { title: "Mentorship & Coaching", description: "sistem mentor circle + peer review terstandar (rubrik) dan coaching berkala." },
        { title: "Scholarship Intelligence & Access", description: "database beasiswa, roadmap studi, dan klinik konsultasi." },
        { title: "Portfolio & Impact", description: "dorong output nyata (proyek, artikel, riset mini, karya) sebagai bukti kompetensi." },
        { title: "Partnership & Sustainability", description: "kolaborasi kampus–komunitas–lembaga serta skema keberlanjutan organisasi." }
    ],
    principles: [
        <>Outcome-driven (fokus <strong>review dokumen</strong> & kesiapan submit)</>,
        "Cohort-based learning (bertahap dan terukur)",
        "Feedback loop (review rutin)",
        "Tracking progres anggota (progress card)"
    ],
    indicators: <>Retensi anggota tinggi, dokumen jadi, mentoring berjalan, anggota mulai <strong>submit aplikasi</strong>, serta kemitraan organisasi meningkat.</>
};

export const timelineData = [
    // Internal
    { category: 'internal', title: 'Open recruitment dan pengumuman BPH', date: 'Februari', month: 'Februari', order: 1 },
    { category: 'internal', title: 'Rancangan grand design divisi', date: 'Maret–April', month: 'Maret', order: 2 },
    { category: 'internal', title: 'Rapat kerja', date: 'Mei', month: 'Mei', order: 3 },

    // External
    { category: 'external', title: 'Open recruitment', date: '28 Agt', month: 'Agustus', order: 4 },
    { category: 'external', title: 'Deadline pengumpulan berkas', date: '4 Sep', month: 'September', order: 5 },
    { category: 'external', title: 'Screening', date: '5–6 Sep', month: 'September', order: 6 },
    { category: 'external', title: 'Pengumuman', date: '8 Sep', month: 'September', order: 7 },
    { category: 'external', title: 'First gathering', date: '12 Sep', month: 'September', order: 8 },
    { category: 'external', title: 'Rapat besar', date: '13 Sep', month: 'September', order: 9 },
    { category: 'external', title: 'Persiapan proker 1', date: 'Okt', month: 'Oktober', order: 10 },
    { category: 'external', title: 'Proker 1', date: 'Nov', month: 'November', order: 11 },
    { category: 'external', title: 'Persiapan proker 2', date: 'Februari' },
    { category: 'external', title: 'Proker 2', date: 'Maret' }
];

export const prokerData = {
    proker1: {
        title: "PROKER 1: EXPO BEASISWA",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Students/education image
        deskripsi: "Expo Beasiswa ini merupakan rancangan untuk mewadahi mahasiswa Universitas Brawijaya yang ingin mendapatkan informasi dan bimbingan terkait seluruh beasiswa yang tersedia dalam program ini. Secara garis besar program ini diadakan dalam dua sesi yaitu berupa expo beasiswa dan workshop.",
        metode: {
            title: "METODE PELAKSANAAN:",
            desc: "Expo beasiswa dilaksanakan dalam dua hari.",
            points: [
                "Hari pertama kegiatan berupa expo beasiswa dengan membuka minimal 15 tenant dan maksimal 20 beasiswa, serta tenant bazar makanan sebanyak 10.",
                "Diadakan di semester ganjil bulan September minggu ke empat dengan durasi acara empat jam dari jam 09:00 sampai 12:00.",
                "Tempat pelaksanaan berada di gedung Pertamina.",
                "Sasaran kegiatan: Seluruh mahasiswa aktif Universitas Brawijaya."
            ]
        }
    },
    proker2: {
        title: "PROKER 2: OPEN MENTORING CLASS",
        deskripsi: "Program kerja ini merupakan program yang dirancang untuk mempersiapkan mahasiswa yang memiliki minat untuk mendaftar beasiswa berskala nasional maupun internasional. Program kerja ini dilaksanakan dengan cara mengadakan kelas yang didampingi secara langsung oleh para penerima beasiswa yang telah berhasil mendapatkan beasiswa.",
        metode_title: "METODE PELAKSANAAN",
        kelas_konseling: {
            desc: "Kelas Konseling Beasiswa: Bertujuan untuk menyelenggarakan kelas bimbingan terkait dengan persyaratan yang ada dalam beasiswa (esai, screening).",
            sub_desc: "Proker ini memuat 2 kelas yang dibuka, mencakup:"
        },
        kelas_offline: [
            {
                type: "Kelas Reguler (Offline)",
                harga: "Rp75.000",
                pertemuan: "3 pertemuan dalam 1 minggu",
                jumlah: "10 orang maksimal",
                durasi: "2 jam/pertemuan"
            },
            {
                type: "Kelas Private (Offline)",
                harga: "Rp150.000",
                pertemuan: "3 pertemuan dalam 1 minggu",
                jumlah: "1 by 1 (mentor & anak kelas bimbingan)",
                durasi: "2 jam/pertemuan"
            }
        ],
        kelas_online: [
            {
                type: "Kelas Reguler (Online)",
                harga: "Rp50.000",
                pertemuan: "3 pertemuan dalam 1 minggu",
                jumlah: "10 orang maksimal",
                durasi: "2 jam/pertemuan",
                via: "Zoom/Google Meet"
            },
            {
                type: "Kelas Private (Online)",
                harga: "Rp125.000",
                pertemuan: "3 pertemuan dalam 1 minggu",
                jumlah: "1 by 1 (mentor & anak kelas bimbingan)",
                durasi: "2 jam/pertemuan",
                via: "Zoom/Google Meet"
            }
        ],
        info_tambahan: [
            "Tempat pelaksanaan: Program ini dilaksanakan di ruang kelas Universitas Brawijaya.",
            "Sasaran kegiatan: Mahasiswa Universitas Brawijaya"
        ]
    }
};
