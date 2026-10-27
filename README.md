# AutoJourney — Smart Car Buying & Reliability Intelligence

A full-stack car-buying planner: a React + Vite SPA plus an Express + Gemini API
for engine lookup, reliability scoring, deal scouting, and dealer quote auditing.

## Dev

```bash
npm install
cp .env.example .env      # GEMINI_API_KEY + APP_URL (optional for AI features)
npm run dev               # → http://localhost:3000
```

Dev mode runs `tsx server.ts` (HMR) with the built Vite assets proxied.

## Production build

```bash
npm run build          # → dist/ (Vite SPA)
npm start              # → tsx server.ts (NODE_ENV=production)
```

The Express server serves the built SPA and its own JSON API. In production it
listens on `$PORT` (Cloud Run sets this automatically).

## Cloud Run deployment

The app is containerized and ready to deploy to Google Cloud Run. Secrets like
`GEMINI_API_KEY` are supplied by Cloud Run, **not** baked into the image.

### 1. Build & push the image

```bash
npm run build
docker build -t auto-journey .
```

### 2. Deploy

```bash
gcloud run deploy auto-journey \
  --image gcr.io/PROJECT_ID/auto-journey \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=<your-key>
```

### 3. GitHub Actions (automatic)

The repo ships a Cloud Run deploy workflow (`.github/workflows/cloudrun-deploy.yml`).
Enable it with these Repository secrets:

| Secret | Purpose |
|---|---|
| `CLOUD_RUN_PROJECT_ID` | GCP project ID |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Workload Identity Pool / Provider |
| `GEMINI_API_KEY` | (optional) Gemini key — set on the Cloud Run service instead |

## Local + cloud parity

- Dev: `npm run dev` → `tsx server.ts` (HMR)
- Prod: `NODE_ENV=production npx tsx server.ts` → serves `dist/` + API on `$PORT`
- The Gemini API is optional at runtime: without a key the app returns curated
  fallback data for all endpoints (see `data/car-data.ts`).

## Layout

```
server.ts          Express + API + production SPA serving
src/               React + Vite frontend
data/car-data.ts   fallback data / heuristics (no Gemini required)
Dockerfile         Cloud Run image
.github/workflows/ automated Cloud Run deployment
```
