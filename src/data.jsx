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
        nama: "Proker 1",
        pengeluaran: "Operasional, audio system, tenant, dekorasi, konsumsi, pemateri (total 15 jt)",
        pemasukan: "Dana rektorat, sponsorship, danusan, tiket masuk Workshop"
    },
    {
        nama: "Proker 2",
        pengeluaran: "Konsumsi dan dana pengajar",
        pemasukan: "Dana rektorat & sponsorship"
    }
];
