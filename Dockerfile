FROM node:lts-alpine3.19 AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Clear pnpm cache
RUN pnpm store prune

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the Nuxt 3 project
RUN pnpm run build

# --- Production Stage ---
FROM node:lts-alpine3.19 AS runner

# Install pnpm globally
RUN npm install -g pnpm

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./

# Install only production dependencies
RUN pnpm install --prod --ignore-scripts

# Expose port
EXPOSE 3000

# Start Nuxt 3 application
CMD ["node", ".output/server/index.mjs"]
