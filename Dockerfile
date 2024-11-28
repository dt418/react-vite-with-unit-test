FROM oven/bun:1

# Install git
RUN apt-get update && apt-get install -y git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Configure git to avoid husky errors
RUN git config --global init.defaultBranch main \
    && git config --global --add safe.directory /app

COPY package.json bun.lockb ./
COPY . .

# Initialize git repository if it doesn't exist
RUN git init

RUN bun install

EXPOSE 5173 6006

# The actual command will be specified in docker-compose.yml
CMD ["bun", "run", "dev", "--host"]
