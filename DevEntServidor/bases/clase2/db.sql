DROP DATABASE if EXISTS pelis; --Base de datos de prueba
CREATE DATABASE pelis;
USE pelis;
CREATE TABLE peliculas(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(30),
	anio VARCHAR(4),
	genero TEXT
);
INSERT INTO peliculas (nombre, anio, genero) VALUES ('hola', '1999', 'Prueba'), 
('medianoche en paris','1989', 'Prueba'), 
('patatas','1991', 'Prueba'), 
('fin', '1992', 'Prueba');