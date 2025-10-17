import './App.css'

function Section({ id, title, children }) {
  return (
    <section>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="contents-wrapper">
      <h1>佐藤 玲生- Sato Reo</h1>
      <div className="container">
        <div className="left-contents">
          <img src={new URL('./../public/img/profile_image_250.png', import.meta.url).pathname} alt="" />

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

        <div className="anchor-linkbox">
          <input id="check-a" type="checkbox" className="check" />
          <label className="label" htmlFor="check-a">目次</label>
          <div className="text">
            <a className="anchor-link" href="#paper-info">文献情報</a>
            <a className="anchor-link" href="#awards">表彰</a>
            <a className="anchor-link" href="#schoolwork">学業</a>
            <a className="anchor-link" href="#internship">インターンシップ・パートタイム</a>
            <a className="anchor-link" href="#scholarship">奨学金</a>
            <a className="anchor-link" href="#teaching-assistant">ティーチングアシスタント</a>
          </div>
        </div>

        <div className="right-contents">
          <Section id="paper-info" title="文献情報">
            <h3>学位論文</h3>
            <ul>
              <li>
                学士論文，学士（情報科学）<br/>
                スマートフォンを用いたAR環境における片手用空中キーボードの性能調査<br/>
                筑波大学 情報学群 情報科学類，2024年2月，44 pages．
                <a href="https://www.iplab.cs.tsukuba.ac.jp/paper/bachelor/reosato_bachelor_thesis.pdf">
                  <img className="pdf_icon" src={new URL('./../public/img/PDF_icon.svg', import.meta.url).pathname} />
                  PDF
                </a>
              </li>
            </ul>

            <h3>国内会議論文(査読なし)</h3>
            <ul>
              <li>
                <b><u>佐藤玲生</u></b>，小西智樹, 志築文太郎<br/>
                片手用空中キーボードのスレートデバイスAR空間上への構築<br/>
                第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），<br/>
                日本ソフトウェア科学会，2023年11月，3 pages．
                <a href="https://www.wiss.org/WISS2023Proceedings/data/1-B08.pdf">
                  <img className="pdf_icon" src={new URL('./../public/img/PDF_icon.svg', import.meta.url).pathname} />
                  PDF
                </a>
              </li>
              <li>
                <b><u>佐藤玲生</u></b>，小西智樹，志築文太郎<br/>
                スマートフォンを用いたAR環境における片手用空中キーボードの性能調査<br/>
                第206回ヒューマンコンピュータインタラクション研究会（HCI206），<br/>
                情報処理学会，2024年1月，8 pages．
                <a href="https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_uri&item_id=231605&file_id=1&file_no=1">
                  <img className="pdf_icon" src={new URL('./../public/img/PDF_icon.svg', import.meta.url).pathname} />
                  PDF
                </a>
              </li>
              <li>
                本田佳杏樹，<b><u>佐藤玲生</u></b>，和田優斗，志築文太郎<br/>
                立体図形学習のためのタブレットコンピュータ用 AR アプリケーション<br/>
                インタラクション 2025，<br/>
                情報処理学会，4 pages． 
                <a href="https://www.iplab.cs.tsukuba.ac.jp/~rsato/paper/h-interaction2025.pdf">
                  <img className="pdf_icon" src="/img/PDF_icon.svg" />
                  PDF
                </a>
              </li>
            </ul>

            <h3>国内会議論文(査読あり)</h3>
            <ul></ul>

            <h3>国際会議論文(査読あり)</h3>
            <ul>
              <li>
                <b><u>Reo Sato</u></b>，Taisei Yamaguchi，Tadatsugu Shibahara, Kirk Honda, Myungguen Choi, Buntarou Shizuki<br/>
                GazeScope: Gaze Target Selection with a Magnifier in VR Environments<br/>
                The Augmented Humans International Conference (AHs '25),<br/>
                March 2025, pp. 1-12.&ensp;
                <a href="https://www.iplab.cs.tsukuba.ac.jp/~rsato/paper/ahs25-30.pdf">
                  <img className="pdf_icon" src="/img/PDF_icon.svg" />
                  PDF
                </a>
              </li>
              <li>
                <b><u>Reo Sato</u></b>，Myungguen Choi, Buntarou Shizuki<br/>
                Handheld AR Target Selection Method using a Smartphone’s Front Camera for Targets Behind the User<br/>
                ACM Symposium on Spatial User Interaction (SUI '25) (to appear),<br/>
                November 2025, pp. 1-10.&ensp;
              </li>
            </ul>
          </Section>

          <Section id="awards" title="表彰">
            <ul>
              <li>
                令和6年度 筑波大学 心青会賞（情報科学類OB賞），2024年3月29日．
              </li>
            </ul>
          </Section>

          <Section id="schoolwork" title="学業">
            <ul></ul>
          </Section>

          <Section id="internship" title="インターンシップ・パートタイム">
            <ul>
              <li>
                Rakutenグループ株式会社 夏の陣2024 アプリケーション開発コース（オンライン）（2024/8）．
              </li>
              <li>
                ビジョナル株式会社 プロダクト職 サマーインターン（現地）（2024/9）．
              </li>
            </ul>
          </Section>

          <Section id="scholarship" title="奨学金">
            <ul>
              <li>
                独立行政法人 日本学生支援機構（JASSO）第一種奨学金（貸与型無利子），2024年4月-．
              </li>
            </ul>
          </Section>

          <Section id="teaching-assistant" title="ティーチングアシスタント">
            <ul>
              <li>
                「情報メディア実験A・B」，筑波大学情報科学類，2024年4月-7月．
              </li>
              <li>
                「プログラミング入門A・B」，筑波大学情報メディア創成学類，2024年10月-2月．
              </li>
              <li>
                「ソフトウェアサイエンス実験A」，筑波大学情報科学類，2025年4月-7月．
              </li>
            </ul>
          </Section>

          <Section title="ボランティア">
            <ul>
              <li>
                学生ボランティア，第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），2023年11月29日-12月1日．
              </li>
            </ul>
          </Section>

          <Section title="学内活動">
            <ul>
              <li>
                筑波大学スポーツ・デー学生委員会副委員長 2021年11月-2022年11月．
              </li>
              <li>
                2024年4月21日 筑波大学大学院 情報理工学位プログラムオープンキャンパス 研究室説明．
              </li>
              <li>
                2024年8月3日 筑波大学大学院 情報科学類オープンキャンパス 研究室説明．
              </li>
              <li>
                2025年8月2日 筑波大学大学院 情報科学類オープンキャンパス 研究室説明．
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  )
}

export default App
