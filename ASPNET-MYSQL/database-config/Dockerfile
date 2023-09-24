FROM mysql:latest

# Establece las variables de entorno para la contraseña de root
ENV MYSQL_ROOT_PASSWORD=123456
RUN echo "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';" 
RUN echo "FLUSH PRIVILEGES;"


