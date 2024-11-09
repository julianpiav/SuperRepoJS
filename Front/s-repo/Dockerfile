# Usa una imagen base de Node para compilar la aplicación
FROM node:14 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen ligera de Nginx para servir los archivos
FROM nginx:alpine

# Copia la configuración personalizada de Nginx, si tienes una
# COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos de construcción desde el contenedor de build
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
