import './App.css'
import { useMemo, useState } from 'react'

function Section({ id, title, children }) {
  return (
    <section>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Reo Sato</h1>
        <p className="hero-sub">HCI / XR / Handheld AR /</p>
        {/* <div className="hero-cta">
          <a href="#paper-info" className="btn">文献を見る</a>
          <a href="#activities" className="btn ghost">活動を見る</a>
        </div> */}
      </div>
    </div>
  )
}

function ProfilePhoto() {
  return (
    <div className="profile-photo-wrapper">
      <img
        className="profile-photo"
        src={`${import.meta.env.BASE_URL}img/profile_image.jpg`}
        alt="佐藤玲生のプロフィール写真"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${import.meta.env.BASE_URL}img/profile_image_250.png` }}
      />
    </div>
  )
}

function ProfileSection() {
  return (
    <Section id="profile" title="プロフィール">
      <div className="profile">
        <div className="profile-info full">
          <dl>
            <dt>所属</dt>
            <dd>
              <a href="https://www.cs.tsukuba.ac.jp/">筑波大学大学院 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム </a>
            </dd>
            <dd>
              <a href="https://www.iplab.cs.tsukuba.ac.jp/">IPLAB WAVEチーム (志築文太郎 教授 指導)</a>
            </dd>
          </dl>
          <dl>
            <dt>研究の興味</dt>
            <dd>XR, ハンドヘルドデバイス（スレートデバイス）, Back-of-user interaction, Eye-Gaze interface</dd>
          </dl>
          <dl>
            <dt>連絡先</dt>
            <dd>rsato[at]iplab.cs.tsukuba.ac.jp</dd>
          </dl>
          <dl>
            <dt>略歴</dt>
            <dd><span className="history-year">2017年(平成29年)</span><br/> 大分高等学校 入学</dd>
            <dd><span className="history-year">2020年(令和2年)</span><br/> 大分高等学校 卒業</dd>
            <dd><span className="history-year">2020年(令和2年)</span><br/> 筑波大学 情報学群 情報科学類 入学</dd>
            <dd><span className="history-year">2024年(令和6年)</span><br/> 筑波大学 情報学群 情報科学類 卒業</dd>
            <dd><span className="history-year">2024年(令和6年)</span><br/> 筑波大学大学院 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム 入学</dd>
          </dl>
        </div>
      </div>
    </Section>
  )
}

function TabNav({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button
          key={t.key}
          className={`tab${active === t.key ? ' active' : ''}`}
          onClick={() => onChange(t.key)}
          type="button"
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

function Accordion({ items }) {
  const [openKey, setOpenKey] = useState(items[0]?.key ?? null)
  return (
    <div className="accordion">
      {items.map(item => (
        <div key={item.key} className={`ac-item${openKey === item.key ? ' open' : ''}`}>
          <button className="ac-header" onClick={() => setOpenKey(openKey === item.key ? null : item.key)} type="button">
            {item.title}
          </button>
          <div className="ac-panel">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

function ActivitiesSection() {
  const groups = [
    {
      key: 'awards',
      title: '表彰',
      items: [
        '令和6年度 筑波大学 心青会賞（情報科学類OB賞），2024年3月29日．',
      ],
    },
    {
      key: 'intern',
      title: 'インターンシップ・パートタイム',
      items: [
        'Rakutenグループ株式会社 夏の陣2024 アプリケーション開発コース（オンライン）（2024/8）．',
        'ビジョナル株式会社 プロダクト職 サマーインターン（現地）（2024/9）．',
      ],
    },
    {
      key: 'scholar',
      title: '奨学金',
      items: [
        '独立行政法人 日本学生支援機構（JASSO）第一種奨学金（貸与型無利子），2024年4月-．',
      ],
    },
    {
      key: 'ta',
      title: 'ティーチングアシスタント',
      items: [
        '「情報メディア実験A・B」，筑波大学情報科学類，2024年4月-7月．',
        '「プログラミング入門A・B」，筑波大学情報メディア創成学類，2024年10月-2月．',
        '「ソフトウェアサイエンス実験A」，筑波大学情報科学類，2025年4月-7月．',
      ],
    },
    {
      key: 'vol',
      title: 'ボランティア',
      items: [
        '学生ボランティア，第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），2023年11月29日-12月1日．',
      ],
    },
    {
      key: 'campus',
      title: '学内活動',
      items: [
        '筑波大学スポーツ・デー学生委員会副委員長 2021年11月-2022年11月．',
        '2024年4月21日 筑波大学大学院 情報理工学位プログラムオープンキャンパス 研究室説明．',
        '2024年8月3日 筑波大学大学院 情報科学類オープンキャンパス 研究室説明．',
        '2025年8月2日 筑波大学大学院 情報科学類オープンキャンパス 研究室説明．',
      ],
    },
    {
      key: 'other',
      title: 'その他',
      items: [
        'TOEIC Listening & Reading Test 835点',
      ],
    },
  ]
  const timelineItems = [
    { start: '2025-08-02', label: '2025-08-02', badge: '学内活動', text: '筑波大学大学院 情報科学類オープンキャンパス 研究室説明' },
    { start: '2025-04-01', label: '2025-04–07', badge: 'ティーチングアシスタント', text: 'ソフトウェアサイエンス実験A（筑波大学情報科学類）' },
    { start: '2024-09-01', label: '2024-09', badge: 'インターン', text: 'ビジョナル株式会社 プロダクト職 サマーインターン（現地）' },
    { start: '2024-08-01', label: '2024-08', badge: 'インターン', text: 'Rakutenグループ株式会社 夏の陣2024 アプリケーション開発コース（オンライン）' },
    { start: '2024-04-21', label: '2024-04-21', badge: '学内活動', text: '筑波大学大学院 情報理工学位プログラムオープンキャンパス 研究室説明' },
    { start: '2024-03-29', label: '2024-03-29', badge: '表彰', text: '筑波大学 心青会賞（情報科学類OB賞）' },
    { start: '2024-10-01', label: '2024-10–2025-02', badge: 'ティーチングアシスタント', text: 'プログラミング入門A・B（筑波大学情報メディア創成学類）' },
    { start: '2024-04-01', label: '2024-04–07', badge: 'ティーチングアシスタント', text: '情報メディア実験A・B（筑波大学情報科学類）' },
    { start: '2024-04-01', label: '2024-04–', badge: '奨学金', text: 'JASSO 第一種奨学金（貸与型無利子）' },
    { start: '2024-08-03', label: '2024-08-03', badge: '学内活動', text: '筑波大学大学院 情報科学類オープンキャンパス 研究室説明' },
    { start: '2023-11-29', label: '2023-11-29–12-01', badge: 'ボランティア', text: 'WISS2023 学生ボランティア' },
    { start: '2023-2-26', label: '2023-2-26', badge: 'その他', text: 'TOEIC Listening & Reading Test 835点' },
    { start: '2021-11-01', label: '2021-11–2022-11', badge: '学内活動', text: '筑波大学スポーツ・デー学生委員会副委員長' },
  ].sort((a, b) => a.start.localeCompare(b.start))
  const [mode, setMode] = useState('timeline')
  return (
    <Section id="activities" title="活動">
      <div className="view-switch">
        <button className={`seg${mode === 'timeline' ? ' active' : ''}`} onClick={() => setMode('timeline')} type="button">タイムライン</button>
        <button className={`seg${mode === 'category' ? ' active' : ''}`} onClick={() => setMode('category')} type="button">カテゴリー</button>
      </div>
      {mode === 'timeline' ? (
        <ActivityTimeline items={timelineItems} />
      ) : (
        <div className="activity-grid">
          {groups.map(g => (
            <article key={g.key} className="activity-card">
              <div className="activity-head">
                <span className="tag">{g.title}</span>
              </div>
              <ul>
                {g.items.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}

function ActivityTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it, idx) => (
        <div key={idx} className="tl-item">
          <div className="tl-dot" />
          <div className="tl-content">
            <div className="tl-meta">
              <span className="tl-date">{formatTimelineDate(it.label)}</span>
              <span className="tl-badge">{it.badge}</span>
            </div>
            <div className="tl-text">{it.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function formatTimelineDate(label) {
  // 入力例: '2024-09', '2023-11-29–12-01', '2021-11–2022-11'
  if (label.includes('–')) return label.replaceAll('-', '/');
  const parts = label.split('-').filter(Boolean)
  if (parts.length === 3) return `${parts[0]}/${parts[1]}/${parts[2]}`
  if (parts.length === 2) return `${parts[0]}/${parts[1]}`
  return label
}

function PublicationsSection() {
  const [query, setQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [year, setYear] = useState('')
  const [onlyPdf, setOnlyPdf] = useState(false)

  const categories = useMemo(() => {
    return Array.from(new Set(publications.map(p => p.category)))
  }, [])

  const years = useMemo(() => {
    return Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)
  }, [])

  const filteredPubs = useMemo(() => {
    return publications.filter(p => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false
      if (year && p.year !== Number(year)) return false
      if (onlyPdf && !p.pdfUrl) return false
      if (query) {
        const q = query.toLowerCase()
        const text = `${p.authors} ${p.title} ${p.venue}`.toLowerCase()
        return text.includes(q)
      }
      return true
    })
  }, [query, selectedCategories, year, onlyPdf])

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])
  }

  return (
    <Section id="paper-info" title="文献情報">
      <div className="filters">
        <input
          className="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="キーワード検索（題名・著者・会議名）"
          aria-label="文献検索"
        />
        <div className="chips">
          {categories.map(cat => (
            <button
              key={cat}
              className={`chip${selectedCategories.includes(cat) ? ' active' : ''}`}
              type="button"
              onClick={() => toggleCategory(cat)}
              aria-pressed={selectedCategories.includes(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="filter-row">
          <label>
            年:
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">すべて</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </label>
          <label className="checkbox">
            <input type="checkbox" checked={onlyPdf} onChange={(e) => setOnlyPdf(e.target.checked)} /> PDFありのみ
          </label>
        </div>
      </div>

      <div className="cards">
        {filteredPubs.map(p => (
          <article key={p.id} className="card">
            <div className="card-header">
              <span className="tag">{p.category}</span>
              <span className="year">{p.year}</span>
            </div>
            <h3 className="title">{p.title}</h3>
            <p className="authors">{p.authors}</p>
            <p className="venue">{p.venue}</p>
            <div className="actions">
              {p.pdfUrl ? (
                <a className="btn" href={p.pdfUrl} target="_blank" rel="noreferrer">
                  <img className="pdf_icon" src={`${import.meta.env.BASE_URL}img/PDF_icon.svg`} />PDF
                </a>
              ) : (
                <span className="muted">PDF準備中</span>
              )}
            </div>
          </article>
        ))}
        {filteredPubs.length === 0 && (
          <p className="muted">該当する文献がありません。</p>
        )}
      </div>
    </Section>
  )
}

const publications = [
  {
    id: 'thesis-2024',
    category: '学位論文',
    year: 2024,
    authors: '学士論文，学士（情報科学）',
    title: 'スマートフォンを用いたAR環境における片手用空中キーボードの性能調査',
    venue: '筑波大学 情報学群 情報科学類，2024年2月，44 pages．',
    pdfUrl: 'https://www.iplab.cs.tsukuba.ac.jp/paper/bachelor/reosato_bachelor_thesis.pdf',
  },
  {
    id: 'wiss-2023',
    category: '国内会議(査読なし)',
    year: 2023,
    authors: '佐藤玲生，小西智樹, 志築文太郎',
    title: '片手用空中キーボードのスレートデバイスAR空間上への構築',
    venue: '第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），日本ソフトウェア科学会，2023年11月，3 pages．',
    pdfUrl: 'https://www.wiss.org/WISS2023Proceedings/data/1-B08.pdf',
  },
  {
    id: 'ipsj-2024',
    category: '国内会議(査読なし)',
    year: 2024,
    authors: '佐藤玲生，小西智樹，志築文太郎',
    title: 'スマートフォンを用いたAR環境における片手用空中キーボードの性能調査',
    venue: '第206回ヒューマンコンピュータインタラクション研究会（HCI206），情報処理学会，2024年1月，8 pages．',
    pdfUrl: 'https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_uri&item_id=231605&file_id=1&file_no=1',
  },
  {
    id: 'ahs-2025',
    category: '国際会議(査読あり)',
    year: 2025,
    authors: 'Reo Sato，Taisei Yamaguchi，Tadatsugu Shibahara, Kirk Honda, Myungguen Choi, Buntarou Shizuki',
    title: 'GazeScope: Gaze Target Selection with a Magnifier in VR Environments',
    venue: "The Augmented Humans International Conference (AHs '25), March 2025, pp. 1-12.",
    pdfUrl: 'https://www.iplab.cs.tsukuba.ac.jp/~rsato/paper/ahs25-30.pdf',
  },
  {
    id: 'sui-2025',
    category: '国際会議(査読あり)',
    year: 2025,
    authors: 'Reo Sato，Myungguen Choi, Buntarou Shizuki',
    title: 'Handheld AR Target Selection Method using a Smartphone’s Front Camera for Targets Behind the User',
    venue: "ACM Symposium on Spatial User Interaction (SUI '25) (to appear), November 2025, pp. 1-10.",
    pdfUrl: '',
  },
  {
    id: 'interaction-2025',
    category: '国内会議(査読なし)',
    year: 2025,
    authors: '本田佳杏樹，佐藤玲生，和田優斗，志築文太郎',
    title: '立体図形学習のためのタブレットコンピュータ用 AR アプリケーション',
    venue: 'インタラクション 2025，情報処理学会，4 pages．',
    pdfUrl: 'https://www.iplab.cs.tsukuba.ac.jp/~rsato/paper/h-interaction2025.pdf',
  },
]

function App() {
  const [activeTab, setActiveTab] = useState('pubs')
  return (
    <div className="contents-wrapper">
      <Hero />
      <ProfilePhoto />
      <div className="single-column">
        <ProfileSection />
        <div className="right-contents">
          <TabNav
            tabs={[
              { key: 'pubs', label: '文献' },
              { key: 'activities', label: '活動' },
            ]}
            active={activeTab}
            onChange={setActiveTab}
          />

          {activeTab === 'pubs' && (
            <PublicationsSection />
          )}

          {activeTab === 'activities' && (
            <ActivitiesSection />
          )}

          {false}
        </div>
      </div>
    </div>
  )
}

export default App
