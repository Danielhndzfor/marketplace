CREATE DATABASE IF NOT EXISTS `marketplace`
USE `marketplace`

-- Tabla Usuarios
CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255),
    CorreoElectronico VARCHAR(255),
    Contraseña VARCHAR(255),
);

-- Tabla Productos
CREATE TABLE Productos (
    ProductoID INT PRIMARY KEY AUTO_INCREMENT,
    NombreProducto VARCHAR(255),
    Descripcion TEXT,
    Precio DECIMAL(10, 2),
    IDVendedor INT,
    UbicacionProducto VARCHAR(255),
    CalificacionProducto DECIMAL(3, 2),
    FOREIGN KEY (IDVendedor) REFERENCES Usuarios(UsuarioID)
);

-- Tabla Ventas
CREATE TABLE Ventas (
    VentaID INT PRIMARY KEY AUTO_INCREMENT,
    IDVendedor INT,
    IDComprador INT,
    ProductoID INT,
    FechaVenta DATE,
    MontoVenta DECIMAL(10, 2),
    FOREIGN KEY (IDVendedor) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (IDComprador) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

-- Tabla Calificaciones y Reseñas
CREATE TABLE CalificacionesResenas (
    CalificacionID INT PRIMARY KEY AUTO_INCREMENT,
    IDUsuarioCalifica INT,
    ProductoID INT,
    Calificacion DECIMAL(2, 1),
    Comentario TEXT,
    FOREIGN KEY (IDUsuarioCalifica) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

-- Tabla Ubicaciones de Vendedores
CREATE TABLE UbicacionesVendedores (
    UbicacionID INT PRIMARY KEY AUTO_INCREMENT,
    IDVendedor INT,
    Edificio VARCHAR(255),
    Aula VARCHAR(255),
    FOREIGN KEY (IDVendedor) REFERENCES Usuarios(UsuarioID)
);
