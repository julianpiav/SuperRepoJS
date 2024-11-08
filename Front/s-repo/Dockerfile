# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .
# Define la variable de entorno directamente en el Dockerfile
ENV REACT_APP_BFF_URL=http://localhost:5000

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen ligera de servidor para servir el contenido de `build`
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# No se necesita CMD porque Nginx usa el valor predeterminado
