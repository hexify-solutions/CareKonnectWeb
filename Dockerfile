FROM node:22.13.1-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=9000

RUN ls .

COPY . .
COPY .next .

COPY .next ./.next
COPY public ./public
COPY ../../package.json ./package.json
COPY ../../yarn.lock ./yarn.lock
COPY ../../node_modules ./node_modules
COPY next.config.ts ./next.config.ts

EXPOSE 9000

#RUN #ls -la && ls -la docker-context
# Start Next.js app
CMD ["node", ".next/standalone/apps/patients/server.js"]
