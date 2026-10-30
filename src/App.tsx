import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  FileChartColumnIncreasing,
  FileText,
  Handshake,
  Lightbulb,
  Menu,
  MessageCircle,
  Plus,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
  X,
} from 'lucide-react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/app/dashboard', icon: BriefcaseBusiness },
  { label: 'Pembukuan', path: '/app/pembukuan', icon: Wallet },
  { label: 'Analisis Usaha', path: '/app/analisis', icon: FileChartColumnIncreasing },
  { label: 'Ide Bisnis', path: '/app/ide-bisnis', icon: Lightbulb },
  { label: 'Business Model Canvas', path: '/app/business-model-canvas', icon: ClipboardList },
  { label: 'AI Consultant', path: '/app/ai-consultant', icon: MessageCircle },
  { label: 'Rencana Pengembangan', path: '/app/rencana-pengembangan', icon: Target },
  { label: 'Laporan', path: '/app/laporan', icon: FileText },
  { label: 'Pengingat', path: '/app/pengingat', icon: Bell },
  { label: 'Pengaturan', path: '/app/pengaturan', icon: Settings },
]

const features = [
  { number: '01', title: 'Pembukuan yang lebih rapi', text: 'Catat pemasukan dan pengeluaran agar gambaran usaha terasa lebih jelas.', icon: BookOpen },
  { number: '02', title: 'Pahami kesehatan usaha', text: 'Lihat kondisi keuangan dan operasional sebagai dasar mengambil keputusan.', icon: TrendingUp },
  { number: '03', title: 'Uji ide sebelum melangkah', text: 'Susun asumsi dan peluang bisnis baru dengan kerangka yang lebih terarah.', icon: Lightbulb },
  { number: '04', title: 'Rencana yang bisa dijalankan', text: 'Ubah hasil analisis menjadi prioritas dan langkah pengembangan berikutnya.', icon: Target },
]

const faqs = [
  { question: 'Apakah SkorUsaha cocok untuk usaha yang baru dimulai?', answer: 'Ya. SkorUsaha membantu usaha berjalan merapikan catatan dan meninjau kondisi aktual, sekaligus membantu calon usaha menguji ide dan menyusun model bisnis.' },
  { question: 'Apakah SkorUsaha menggantikan akuntan atau konsultan?', answer: 'Tidak. SkorUsaha membantu menata informasi dan memberi panduan awal. Untuk keputusan perpajakan, hukum, atau keuangan yang kompleks, tetap konsultasikan dengan tenaga profesional.' },
  { question: 'Bagaimana koperasi dapat menggunakan SkorUsaha?', answer: 'Workspace koperasi direncanakan untuk membantu pendampingan anggota dengan persetujuan akses data. Akses hanya dapat diberikan sesuai persetujuan dan pengaturan yang berlaku.' },
  { question: 'Apakah data pada preview dashboard merupakan data usaha nyata?', answer: 'Tidak. Seluruh angka dan grafik pada preview ditandai DEMO dan hanya digunakan untuk menunjukkan tampilan produk.' },
]

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? ' brand-inverse' : ''}`} to="/" aria-label="SkorUsaha, beranda">
      <span className="brand-mark">S</span>
      <span>skorusaha</span>
    </Link>
  )
}

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <main className="landing">
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <button className="icon-button mobile-menu-toggle" aria-label={mobileMenu ? 'Tutup menu' : 'Buka menu'} onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`site-nav${mobileMenu ? ' site-nav-open' : ''}`} aria-label="Navigasi utama">
            <a href="#fitur" onClick={() => setMobileMenu(false)}>Fitur</a>
            <a href="#cara-kerja" onClick={() => setMobileMenu(false)}>Cara kerja</a>
            <a href="#solusi" onClick={() => setMobileMenu(false)}>Untuk siapa</a>
            <a href="#harga" onClick={() => setMobileMenu(false)}>Harga</a>
            <Link to="/app/dashboard" className="nav-sign-in" onClick={() => setMobileMenu(false)}>Masuk</Link>
            <Link to="/app/dashboard" className="button button-small" onClick={() => setMobileMenu(false)}>Mulai analisis <ArrowRight size={15} /></Link>
          </nav>
        </div>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Ruang tumbuh untuk usaha Indonesia</div>
          <h1>Kenali Kondisi Usahamu. <em>Tentukan Langkah Berikutnya.</em></h1>
          <p className="hero-lede">Rapikan pembukuan, pahami kesehatan usaha, uji ide bisnis, dan susun strategi pengembangan dengan dukungan AI.</p>
          <div className="hero-actions">
            <Link className="button" to="/app/dashboard">Mulai Analisis Usaha <ArrowRight size={17} /></Link>
            <a className="text-link" href="#cara-kerja">Kenali cara kerjanya <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-note"><ShieldCheck size={16} /> Data usaha tetap dalam kendali Anda</div>
        </div>
        <DashboardPreview />
      </section>

      <section className="trust-strip">
        <div className="section-wrap strip-inner">
          <span>Dirancang untuk perjalanan usaha yang nyata</span>
          <div><span>USAHA BERJALAN</span><i /> <span>IDE BARU</span><i /> <span>KOPERASI</span></div>
        </div>
      </section>

      <section className="section-wrap problem-section">
        <div className="section-heading problem-heading">
          <div className="eyebrow"><span className="eyebrow-line" /> Mengapa SkorUsaha</div>
          <h2>Keputusan besar sebaiknya tidak dibuat dalam <em>gelap.</em></h2>
        </div>
        <div className="problem-copy">
          <p>Banyak pelaku usaha bekerja keras setiap hari, tetapi catatan yang tersebar membuat kondisi usaha sulit dibaca.</p>
          <p>SkorUsaha membantu menyusun informasi menjadi gambaran yang lebih mudah dipahami—agar langkah berikutnya punya alasan yang jelas.</p>
        </div>
      </section>

      <section className="features-section" id="fitur">
        <div className="section-wrap">
          <div className="section-heading centered-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> Satu ruang untuk bertumbuh</div>
            <h2>Dari catatan harian menuju <em>arah yang lebih jelas.</em></h2>
          </div>
          <div className="feature-grid">
            {features.map(({ number, title, text, icon: Icon }) => (
              <article className="feature-item" key={number}>
                <div className="feature-top"><span>{number}</span><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to="/app/dashboard" aria-label={`Buka ${title}`}><ArrowRight size={17} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap process-section" id="cara-kerja">
        <div className="process-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> Cara kerja</div>
          <h2>Mulai dari yang Anda punya. <em>Bergerak dengan terarah.</em></h2>
          <p>Tidak perlu menunggu semua sempurna. Bangun pemahaman usaha sedikit demi sedikit, sesuai kebutuhan dan kesiapan Anda.</p>
          <Link className="text-link" to="/app/dashboard">Jelajahi ruang kerja <ArrowRight size={16} /></Link>
        </div>
        <div className="process-steps">
          {[
            ['01', 'Ceritakan usaha Anda', 'Mulai dari profil, tujuan, dan informasi yang sudah tersedia.'],
            ['02', 'Susun dan pahami data', 'Rapikan catatan dan tinjau temuan dalam bahasa yang mudah dipahami.'],
            ['03', 'Pilih langkah berikutnya', 'Tentukan prioritas pengembangan sesuai kondisi usaha Anda.'],
          ].map(([number, title, text]) => (
            <div className="process-step" key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <ChevronRight className="step-arrow" size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="analysis-section">
        <div className="section-wrap analysis-inner">
          <div className="section-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> Satu platform, dua perjalanan</div>
            <h2>Setiap usaha punya titik mulai <em>yang berbeda.</em></h2>
          </div>
          <div className="analysis-columns">
            <article>
              <div className="analysis-label">01 / USAHA BERJALAN</div>
              <h3>Memahami apa yang sudah terjadi.</h3>
              <p>Gunakan catatan pemasukan, pengeluaran, dan gambaran operasional untuk membaca kesehatan usaha saat ini.</p>
              <ul><li><Check size={15} /> Tinjau pembukuan dan arus usaha</li><li><Check size={15} /> Kenali area yang perlu perhatian</li><li><Check size={15} /> Susun prioritas perbaikan</li></ul>
            </article>
            <article>
              <div className="analysis-label">02 / USAHA BARU</div>
              <h3>Menguji apa yang bisa dimulai.</h3>
              <p>Jernihkan ide, calon pelanggan, dan cara usaha memberi nilai sebelum mengambil langkah lebih jauh.</p>
              <ul><li><Check size={15} /> Uji asumsi dan peluang pasar</li><li><Check size={15} /> Rancang Business Model Canvas</li><li><Check size={15} /> Petakan langkah awal yang realistis</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-wrap audience-section" id="solusi">
        <div className="audience-title">
          <div className="eyebrow"><span className="eyebrow-line" /> Dirancang dengan empati</div>
          <h2>Bertumbuh bersama <em>ekosistem usaha.</em></h2>
        </div>
        <div className="audience-card">
          <div className="audience-icon"><BriefcaseBusiness size={19} /></div>
          <div><div className="analysis-label">UNTUK PELAKU UMKM</div><h3>Kenali usaha Anda lebih dekat.</h3><p>Ruang kerja pribadi untuk menata informasi, memahami kondisi, dan merencanakan pengembangan usaha.</p><Link to="/app/dashboard" className="text-link">Jelajahi untuk UMKM <ArrowRight size={15} /></Link></div>
        </div>
        <div className="audience-card">
          <div className="audience-icon"><Handshake size={19} /></div>
          <div><div className="analysis-label">UNTUK KOPERASI</div><h3>Pendampingan yang berangkat dari kepercayaan.</h3><p>Workspace koperasi direncanakan untuk mendukung pendampingan anggota melalui persetujuan akses data.</p><span className="coming-label">Direncanakan untuk tahap berikutnya</span></div>
        </div>
      </section>

      <section className="pricing-section" id="harga">
        <div className="section-wrap">
          <div className="section-heading centered-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> Paket penggunaan</div>
            <h2>Mulai dari kebutuhan <em>hari ini.</em></h2>
            <p className="section-subtitle">Pilih ruang yang sesuai dengan perjalanan usaha Anda.</p>
          </div>
          <div className="pricing-grid">
            <PriceCard name="Gratis" description="Untuk mulai mengenal kondisi usaha." price="Rp0" period="selamanya" items={['Ruang profil usaha', 'Pencatatan dasar', 'Panduan awal analisis']} />
            <PriceCard name="Pro" description="Untuk usaha yang siap bertumbuh lebih terarah." price="Segera hadir" period="" items={['Ruang kerja lebih lengkap', 'Analisis dan rencana pengembangan', 'Pendamping AI']} featured />
            <PriceCard name="Koperasi" description="Untuk pendampingan anggota secara kolaboratif." price="Diskusikan" period="sesuai kebutuhan" items={['Workspace koperasi', 'Persetujuan akses anggota', 'Ringkasan pendampingan']} />
          </div>
          <p className="pricing-disclaimer">Rincian paket Pro dan Koperasi akan diumumkan saat layanan tersedia. Tidak ada pembayaran pada tahap demo ini.</p>
        </div>
      </section>

      <section className="section-wrap faq-section">
        <div className="faq-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> Punya pertanyaan?</div>
          <h2>Hal yang ingin Anda <em>ketahui.</em></h2>
          <p>Belum menemukan jawaban? Kami siap membantu menjelaskan.</p>
          <a className="text-link" href="mailto:halo@skorusaha.id">Hubungi tim SkorUsaha <ArrowRight size={16} /></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className={`faq-item${openFaq === index ? ' faq-open' : ''}`} key={faq.question}>
              <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{faq.question}</span><Plus size={19} />
              </button>
              {openFaq === index && <p>{faq.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap closing-cta">
        <div className="cta-rule" />
        <div><div className="eyebrow"><span className="eyebrow-line" /> Langkah pertama dimulai di sini</div><h2>Usahamu punya cerita. <em>Mari pahami bersama.</em></h2></div>
        <Link className="button button-light" to="/app/dashboard">Mulai Analisis Usaha <ArrowRight size={17} /></Link>
      </section>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <div className="footer-brand"><Brand inverse /><p>Data yang Lebih Terstruktur,<br />Keputusan Usaha yang Lebih Terarah.</p></div>
          <div className="footer-links"><div><span>JELAJAHI</span><a href="#fitur">Fitur</a><a href="#cara-kerja">Cara kerja</a><a href="#harga">Harga</a></div><div><span>RUANG KERJA</span><Link to="/app/dashboard">Masuk ke aplikasi</Link><a href="mailto:halo@skorusaha.id">Hubungi kami</a></div></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© 2026 SkorUsaha. Dibangun untuk perjalanan usaha Indonesia.</span><span>Data demo ditampilkan untuk keperluan pratinjau.</span></div>
      </footer>
    </main>
  )
}

function DashboardPreview() {
  return (
    <div className="preview-frame" aria-label="Pratinjau dashboard demo">
      <div className="preview-window">
        <div className="preview-topbar"><div className="preview-brand"><span>S</span> skorusaha</div><div className="preview-user">Usaha Kopi Pagi <span>UP</span></div></div>
        <div className="preview-body">
          <div className="preview-sidebar"><i /><i /><i /><i /><i /></div>
          <div className="preview-content">
            <div className="preview-heading"><div><span className="demo-label">DEMO</span><h3>Selamat pagi, Rani</h3><p>Ringkasan usaha Anda bulan ini</p></div><span className="preview-date">Oktober 2026 <ChevronDown size={12} /></span></div>
            <div className="preview-stats">
              <div><span>Total pemasukan</span><b>Rp 18,4 jt</b><small><ArrowUpRight size={12} /> 8,2% <i>vs. bulan lalu</i></small></div>
              <div><span>Pengeluaran</span><b>Rp 11,2 jt</b><small className="neutral"><span /> Tercatat <i>bulan ini</i></small></div>
              <div><span>Catatan usaha</span><b>24 transaksi</b><small className="neutral"><span /> Terbarui <i>hari ini</i></small></div>
            </div>
            <div className="preview-chart">
              <div className="chart-header"><div><span>Arus usaha</span><b>Pemasukan & pengeluaran</b></div><span>DEMO</span></div>
              <svg viewBox="0 0 540 125" role="img" aria-label="Grafik demo pemasukan dan pengeluaran">
                <line x1="0" y1="22" x2="540" y2="22" /><line x1="0" y1="62" x2="540" y2="62" /><line x1="0" y1="102" x2="540" y2="102" />
                <path className="chart-area" d="M0 85 C35 74,48 82,78 65 S125 74,155 50 S204 63,232 42 S285 60,310 31 S354 50,386 39 S423 56,452 28 S497 39,540 14 V125 H0 Z" />
                <path className="chart-line" d="M0 85 C35 74,48 82,78 65 S125 74,155 50 S204 63,232 42 S285 60,310 31 S354 50,386 39 S423 56,452 28 S497 39,540 14" />
                <path className="chart-line chart-line-muted" d="M0 108 C35 101,48 105,78 94 S125 100,155 88 S204 96,232 79 S285 89,310 76 S354 83,386 70 S423 79,452 65 S497 74,540 58" />
              </svg>
              <div className="chart-months"><span>Mei</span><span>Jun</span><span>Jul</span><span>Agu</span><span>Sep</span><span>Okt</span></div>
            </div>
            <div className="preview-foot"><span><i className="legend-green" /> Pemasukan</span><span><i className="legend-brass" /> Pengeluaran</span><span className="demo-foot">Seluruh data adalah DEMO</span></div>
          </div>
        </div>
      </div>
      <div className="preview-caption"><span><span className="caption-dot" /> Pratinjau ruang kerja</span><span>Data ilustrasi · DEMO</span></div>
    </div>
  )
}

function PriceCard({ name, description, price, period, items, featured = false }: { name: string; description: string; price: string; period: string; items: string[]; featured?: boolean }) {
  return (
    <article className={`price-card${featured ? ' price-featured' : ''}`}>
      {featured && <span className="price-ribbon">UNTUK LANGKAH BERIKUTNYA</span>}
      <div className="price-name">{name}</div><p>{description}</p>
      <div className="price-amount">{price}<span>{period}</span></div>
      <ul>{items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul>
      <Link to="/app/dashboard" className={featured ? 'button' : 'button button-outline'}>{name === 'Gratis' ? 'Mulai gratis' : name === 'Pro' ? 'Jelajahi aplikasi' : 'Pelajari lebih lanjut'} <ArrowRight size={15} /></Link>
    </article>
  )
}

function AppShell() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const activeItem = navItems.find((item) => item.path === location.pathname) ?? navItems[0]
  const isDashboard = location.pathname === '/app/dashboard'

  return (
    <div className="app-shell">
      {mobileOpen && <button className="sidebar-backdrop" aria-label="Tutup navigasi" onClick={() => setMobileOpen(false)} />}
      <aside className={`app-sidebar${mobileOpen ? ' sidebar-open' : ''}`}>
        <div className="sidebar-brand-row"><Brand /><button className="icon-button sidebar-close" aria-label="Tutup navigasi" onClick={() => setMobileOpen(false)}><X size={19} /></button></div>
        <div className="workspace-switch"><span className="workspace-avatar">K</span><span><b>Kopi Pagi</b><small>Workspace usaha</small></span><ChevronDown size={15} /></div>
        <div className="side-label">RUANG USAHA</div>
        <nav className="side-navigation" aria-label="Navigasi aplikasi">
          {navItems.map(({ label, path, icon: Icon }) => (
            <Link key={path} to={path} onClick={() => setMobileOpen(false)} className={`side-link${activeItem.path === path ? ' side-link-active' : ''}`}>
              <Icon size={17} strokeWidth={1.7} /><span>{label}</span>
              {label === 'Pengingat' && <i className="nav-count">2</i>}
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><CircleHelp size={17} /><div><b>Butuh bantuan?</b><span>Temukan jawaban untuk memulai.</span></div><ChevronRight size={15} /></div>
          <div className="sidebar-foot"><span className="status-dot" /> Ruang usaha pribadi</div>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <div className="topbar-left"><button className="icon-button mobile-sidebar-toggle" aria-label="Buka navigasi" onClick={() => setMobileOpen(true)}><Menu size={20} /></button><div className="breadcrumb">Ruang usaha <ChevronRight size={14} /> <span>{activeItem.label}</span></div></div>
          <div className="topbar-actions">
            <div className="topbar-popover-wrap">
              <button className="icon-button notification-button" aria-label="Notifikasi" aria-expanded={notificationsOpen} onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false) }}><Bell size={18} /><i /></button>
              {notificationsOpen && <div className="topbar-popover"><b>Notifikasi</b><p>Belum ada notifikasi baru.</p><Link to="/app/pengingat" onClick={() => setNotificationsOpen(false)}>Lihat pengingat <ArrowRight size={13} /></Link></div>}
            </div>
            <div className="topbar-popover-wrap">
              <button className="profile-button" aria-expanded={profileOpen} onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false) }}><span className="profile-avatar">RA</span><span className="profile-name">Rani A.</span><ChevronDown size={14} /></button>
              {profileOpen && <div className="topbar-popover profile-popover"><b>Rani Andini</b><p>Pemilik usaha · Kopi Pagi</p><Link to="/app/pengaturan" onClick={() => setProfileOpen(false)}>Pengaturan akun <ArrowRight size={13} /></Link><Link to="/" onClick={() => setProfileOpen(false)}>Kembali ke beranda <ArrowRight size={13} /></Link></div>}
            </div>
          </div>
        </header>
        <main className="app-content">
          <div className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> RUANG USAHA</div><h1>{activeItem.label}</h1><p>{isDashboard ? 'Gambaran ringkas untuk membantu Anda memahami usaha hari ini.' : pageDescriptions[activeItem.path]}</p></div><span className="demo-label demo-label-large">MODE DEMO</span></div>
          {isDashboard ? <DashboardPage /> : activeItem.path === '/app/pengaturan' ? <SettingsPage /> : <EmptyPage item={activeItem.label} />}
        </main>
        <footer className="app-footer"><span>SkorUsaha · Data yang Lebih Terstruktur, Keputusan Usaha yang Lebih Terarah.</span><span>Mode demo · Data pratinjau bukan data usaha nyata</span></footer>
      </div>
    </div>
  )
}

const pageDescriptions: Record<string, string> = {
  '/app/pembukuan': 'Catat dan tinjau transaksi usaha Anda dalam satu ruang.',
  '/app/analisis': 'Pahami kondisi usaha dan temukan hal yang perlu diperhatikan.',
  '/app/ide-bisnis': 'Uji gagasan dan petakan peluang untuk usaha Anda.',
  '/app/business-model-canvas': 'Susun gambaran model bisnis secara lebih terstruktur.',
  '/app/ai-consultant': 'Jelajahi panduan untuk membantu menjawab pertanyaan usaha.',
  '/app/rencana-pengembangan': 'Ubah prioritas menjadi langkah pengembangan yang terarah.',
  '/app/laporan': 'Tinjau rangkuman informasi usaha Anda.',
  '/app/pengingat': 'Kelola hal yang perlu ditindaklanjuti dalam usaha.',
  '/app/pengaturan': 'Atur profil dan preferensi ruang usaha Anda.',
}

function DashboardPage() {
  return (
    <div className="dashboard-content">
      <div className="demo-banner"><Sparkles size={16} /><span><b>Ini adalah pratinjau DEMO.</b> Angka dan aktivitas ditampilkan sebagai ilustrasi, bukan data usaha nyata.</span><button aria-label="Tutup informasi demo" onClick={(event) => event.currentTarget.parentElement?.remove()}><X size={16} /></button></div>
      <div className="dashboard-stats">
        <StatCard label="Total pemasukan" value="Rp 18.450.000" change="+8,2%" positive />
        <StatCard label="Total pengeluaran" value="Rp 11.275.000" change="Bulan ini" />
        <StatCard label="Selisih sementara" value="Rp 7.175.000" change="Perlu ditinjau" />
        <StatCard label="Transaksi tercatat" value="24 transaksi" change="Oktober 2026" />
      </div>
      <div className="dashboard-grid">
        <section className="app-panel chart-panel">
          <div className="panel-heading"><div><span className="panel-overline">RINGKASAN KEUANGAN · DEMO</span><h2>Arus usaha</h2><p>Pemasukan dan pengeluaran bulanan</p></div><button className="select-button">6 bulan terakhir <ChevronDown size={14} /></button></div>
          <div className="dashboard-chart">
            <div className="y-labels"><span>Rp 20 jt</span><span>Rp 15 jt</span><span>Rp 10 jt</span><span>Rp 5 jt</span><span>Rp 0</span></div>
            <svg viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Grafik arus usaha demo">
              {[10, 58, 106, 154, 202].map((y) => <line key={y} x1="0" y1={y} x2="700" y2={y} className="gridline" />)}
              <path className="dashboard-area" d="M0 154 C45 145 65 134 110 139 S180 118 220 124 S295 91 330 105 S395 83 440 92 S510 60 550 72 S625 41 700 30 V220 H0 Z" />
              <path className="dashboard-line" d="M0 154 C45 145 65 134 110 139 S180 118 220 124 S295 91 330 105 S395 83 440 92 S510 60 550 72 S625 41 700 30" />
              <path className="dashboard-line muted" d="M0 188 C45 179 65 185 110 170 S180 174 220 163 S295 151 330 159 S395 137 440 145 S510 124 550 130 S625 112 700 105" />
            </svg>
            <div className="x-labels"><span>Mei</span><span>Jun</span><span>Jul</span><span>Agu</span><span>Sep</span><span>Okt</span></div>
          </div>
          <div className="chart-legend"><span><i className="legend-green" /> Pemasukan</span><span><i className="legend-brass" /> Pengeluaran</span><span className="legend-demo">Data ilustrasi · DEMO</span></div>
        </section>
        <section className="app-panel health-panel">
          <div className="panel-heading"><div><span className="panel-overline">TINJAUAN AWAL · DEMO</span><h2>Gambaran usaha</h2><p>Hal yang dapat mulai Anda perhatikan</p></div><button className="more-button" aria-label="Lihat analisis"><ArrowRight size={17} /></button></div>
          <div className="health-score"><div className="score-ring"><span>—</span><small>SKOR</small></div><div><b>Belum ada analisis</b><span>Lengkapi profil usaha untuk memulai.</span></div></div>
          <div className="health-note"><span className="note-icon"><TrendingUp size={16} /></span><span><b>Langkah awal yang disarankan</b><br />Mulai dengan mencatat transaksi usaha bulan ini.</span></div>
          <Link className="panel-link" to="/app/analisis">Mulai analisis usaha <ArrowRight size={15} /></Link>
        </section>
        <section className="app-panel activity-panel">
          <div className="panel-heading"><div><span className="panel-overline">AKTIVITAS · DEMO</span><h2>Catatan terbaru</h2></div><Link className="panel-link" to="/app/pembukuan">Lihat pembukuan <ArrowRight size={14} /></Link></div>
          <div className="activity-table">
            <div className="activity-row activity-head"><span>CATATAN</span><span>KATEGORI</span><span>NILAI</span><span>TANGGAL</span></div>
            <ActivityRow title="Pembelian biji kopi" category="Bahan baku" value="− Rp 680.000" date="28 Okt" expense />
            <ActivityRow title="Penjualan harian" category="Penjualan" value="+ Rp 1.240.000" date="28 Okt" />
            <ActivityRow title="Tagihan listrik" category="Operasional" value="− Rp 425.000" date="26 Okt" expense />
            <ActivityRow title="Penjualan akhir pekan" category="Penjualan" value="+ Rp 1.875.000" date="25 Okt" />
          </div>
        </section>
        <section className="app-panel next-panel">
          <span className="panel-overline">LANJUTKAN PERJALANAN</span><h2>Mulai dari satu langkah kecil.</h2><p>Catatan usaha yang rapi membantu Anda melihat gambaran yang lebih utuh.</p>
          <Link to="/app/pembukuan" className="button button-small">Catat transaksi <Plus size={15} /></Link>
          <div className="next-decoration"><FileText size={59} strokeWidth={0.8} /></div>
        </section>
      </div>
    </div>
  )
}

function StatCard({ label, value, change, positive = false }: { label: string; value: string; change: string; positive?: boolean }) {
  return <article className="stat-card"><span>{label}</span><b>{value}</b><small className={positive ? 'stat-positive' : ''}>{positive && <ArrowUpRight size={13} />}{change}</small></article>
}

function ActivityRow({ title, category, value, date, expense = false }: { title: string; category: string; value: string; date: string; expense?: boolean }) {
  return <div className="activity-row"><span className="activity-title"><span className={`activity-mark${expense ? ' mark-expense' : ''}`} />{title}</span><span>{category}</span><b className={expense ? 'value-expense' : 'value-income'}>{value}</b><span>{date}</span></div>
}

function EmptyPage({ item }: { item: string }) {
  const [showForm, setShowForm] = useState(false)
  const [saved, setSaved] = useState(false)
  return (
    <section className="empty-page-panel">
      <div className="empty-illustration"><div><FileText size={32} strokeWidth={1.3} /></div><span><Sparkles size={14} /></span></div>
      <span className="panel-overline">{item.toUpperCase()} · TAHAP AWAL</span>
      <h2>Ruang {item.toLowerCase()} Anda siap disusun.</h2>
      <p>Belum ada data di sini. Saat fitur ini tersedia, Anda dapat mulai menambahkan informasi usaha dan meninjaunya dari ruang ini.</p>
      {!showForm && <button className="button" onClick={() => setShowForm(true)}>Beri tahu saat tersedia <ArrowRight size={16} /></button>}
      {showForm && !saved && <form className="notify-form" onSubmit={(event) => { event.preventDefault(); setSaved(true) }}><label htmlFor="notify-email">Alamat email untuk menerima kabar</label><div><input id="notify-email" type="email" placeholder="nama@email.com" required /><button className="button button-small" type="submit">Simpan <ArrowRight size={14} /></button></div></form>}
      {saved && <p className="success-message"><Check size={16} /> Terima kasih. Preferensi demo Anda tersimpan untuk sesi ini.</p>}
      <span className="empty-footnote"><ShieldCheck size={14} /> Tidak ada data usaha yang dikirim dari halaman demo ini.</span>
    </section>
  )
}

function SettingsPage() {
  const [saved, setSaved] = useState(false)
  return (
    <div className="settings-layout">
      <section className="app-panel settings-panel">
        <div className="panel-heading"><div><span className="panel-overline">PROFIL USAHA</span><h2>Informasi dasar</h2><p>Perbarui informasi ruang usaha Anda.</p></div></div>
        <form className="settings-form" onSubmit={(event) => { event.preventDefault(); setSaved(true) }}>
          <label htmlFor="business-name">Nama usaha<input id="business-name" defaultValue="Kopi Pagi" required onChange={() => setSaved(false)} /></label>
          <label htmlFor="owner-name">Nama pemilik<input id="owner-name" defaultValue="Rani Andini" required onChange={() => setSaved(false)} /></label>
          <label htmlFor="business-type">Jenis usaha<select id="business-type" defaultValue="Kuliner" onChange={() => setSaved(false)}><option>Kuliner</option><option>Perdagangan</option><option>Jasa</option><option>Produksi</option><option>Lainnya</option></select></label>
          <label htmlFor="business-stage">Tahap usaha<select id="business-stage" defaultValue="Usaha berjalan" onChange={() => setSaved(false)}><option>Usaha berjalan</option><option>Usaha baru</option><option>Dalam perencanaan</option></select></label>
          <div className="settings-submit"><button className="button button-small" type="submit">Simpan perubahan <Check size={15} /></button>{saved && <span><Check size={15} /> Perubahan tersimpan di sesi demo.</span>}</div>
        </form>
      </section>
      <section className="app-panel settings-note"><ShieldCheck size={19} /><div><b>Data tetap dalam kendali Anda</b><p>Ini hanya formulir demo. Informasi tidak dikirim ke server atau disimpan permanen.</p></div></section>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Navigate to="/app/dashboard" replace />} />
      <Route path="/app/*" element={<AppShell />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
