# Portfolio (Vite + React)

GitHub Pages で公開する設定が入っています。リポジトリ名は `portfolio`（ユーザー `leo10969`）。

## 開発

```bash
npm i
npm run dev
```

Node は 20.19+ を推奨（Vite 7 の要件）。

## ビルド

```bash
npm run build
npm run preview
```

## デプロイ（GitHub Pages）

- `vite.config.js` の `base` は `/portfolio/` に設定済み
- GitHub Actions ワークフロー `.github/workflows/deploy.yml` で `dist/` を自動公開
- リポジトリ Settings → Pages → Source: `GitHub Actions` を選択してください

公開 URL（想定）: `https://leo10969.github.io/portfolio/`
