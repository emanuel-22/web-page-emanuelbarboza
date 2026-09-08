# syntax=docker/dockerfile:1

# ---- Base ----------------------------------------------------------------
FROM node:22-alpine AS base
# libc6-compat: algunas dependencias nativas (satori/resvg) lo necesitan en Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- Dependencies -------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .

ARG NEXT_PUBLIC_SITE_URL=https://emanuelbarboza.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start"]