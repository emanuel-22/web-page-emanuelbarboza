# syntax=docker/dockerfile:1

# ---- Base ----------------------------------------------------------------
FROM node:22-alpine AS base
# libc6-compat: algunas dependencias nativas (satori/resvg) lo necesitan en Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- Dependencies -------------------------------------------------------
# Instala TODAS las deps (incluye devDependencies): el build y la generación
# de la imagen OpenGraph usan tsx, satori y @resvg/resvg-js.
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build ------------------------------------------------------------------
FROM base AS builder
# NEXT_PUBLIC_* se inlinea en el bundle en tiempo de build, por eso llega como ARG.
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runner ---------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Salida standalone: server.js + node_modules mínimo. public/ y .next/static
# se copian aparte porque server.js no los incluye por defecto.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
