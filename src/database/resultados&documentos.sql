CREATE TABLE resultados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    codigo VARCHAR(100),
    determinacion VARCHAR(255),
    ub DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE documentos_pdf (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    nombre_archivo VARCHAR(255),
    ubicacion_archivo VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

