# Usar uma imagem base que tenha Node.js
FROM node


# Definir o diretório de trabalho
WORKDIR /usr/app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar package.json e pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instalar dependências usando pnpm
RUN pnpm install --prod=false

# Copiar o restante da sua aplicação
COPY . .

EXPOSE 3333

# Comando para iniciar sua aplicação
CMD ["pnpm", "start"]
