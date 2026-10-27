# Cloud Run container image for AutoJourney.
#
# Multi-stage build: installs deps, builds the Vite SPA (dist/), then runs
# the Express + tsx server in production mode.
#
# Build locally:
#   docker build -t auto-journey .
#
# Push to Artifact Registry:
#   docker tag auto-journey gcr.io/<PROJECT_ID>/auto-journey
#   docker push gcr.io/<PROJECT_ID>/auto-journey
#
# Deploy to Cloud Run:
#   gcloud run deploy auto-journey --image gcr.io/<PROJECT_ID>/auto-journey \
#     --region us-central1 --allow-unauthenticated \
#     --set-env-vars GEMINI_API_KEY=<your-key>
#
# Or set GEMINI_API_KEY as a Cloud Run secret/injection and leave it out of this
# image entirely (this image deliberately excludes .env — see .dockerignore).

FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production: serve the built SPA + the Express API.
ENV NODE_ENV=production
ENV PORT=3000

# .env is intentionally NOT copied into the image (excluded via .dockerignore).
# Secrets like GEMINI_API_KEY are supplied by Cloud Run, not baked into the image.
CMD ["npx", "tsx", "server.ts"]
