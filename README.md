# School Management

Web application for the management and administration of students in an educational center.(Aplicación web para la gestión y administración de alumnos en un centro educativo.)

## Tabla de Contenidos

1. [Características](#características)
2. [Tecnologías](#tecnologías)
3. [Nomenclaturas](#nomenclaturas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Licencia](#licencia)

## Características

- **Gestión de Reservas:** Realiza, edita y cancela reservas de habitaciones en tiempo real.
- **Administración de Habitaciones:** Configura y organiza habitaciones, tipos de cama, y disponibilidad.
- **Facturación:** Genera y gestiona facturas, con soporte para diferentes métodos de pago.
- **Informes y Estadísticas:** Accede a reportes detallados sobre ocupación, ingresos y otros indicadores clave.
- **Interfaz de Usuario Amigable:** Diseñado para facilitar el uso y navegación, tanto para el personal del hotel como para los administradores.

## Tecnologías

- **Lenguaje de Programación:** JavaScript (Node.js)
- **Framework:** Express.js
- **Base de Datos:** MongoDB
    - **Librería:** Mongoose
- **Autenticación:** JWT (JSON Web Token)
- **Otras Herramientas:**
    - Dotenv (variables de entorno)
    - CORS (gestión de peticiones entre dominios)
    - Nodemon (reinicio automático del servidor en desarrollo)

## Nomenclaturas

	--------------------------------------------------
	- feat: agregar o eliminar una caracteristica.
	--------------------------------------------------
	- add: agregar archivos a la carpeta del proyecto.
	--------------------------------------------------
	- build: cambios en la estuctura del proyecto.
	--------------------------------------------------
	- docs: cambios en la documentacion.
	--------------------------------------------------
	- fix: arreglar bugs del proyecto.(Es diferente
	a el feat)
	--------------------------------------------------
	- refactor: cambios en el programa que no afecta
	en lo absoluto.
	--------------------------------------------------
	- style: agregar o modificar los estilos(front).
	--------------------------------------------------
	- chore: cambios a las dependencias.
	--------------------------------------------------
 
## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/usuario/repositorio.git
    ```
2. Navega a la carpeta del proyecto:
    ```bash
    cd repositorio
    ```
3. Instala las dependencias:
    ```bash
    npm install # o 'pip install -r requirements.txt' si es Python
    ```
4. Ejecuta la aplicación:
    ```bash
    npm start  # o 'python app.py' si es un proyecto Python
    ```

## Uso

Describe cómo usar la aplicación, qué funcionalidades ofrece, y ejemplos si es posible.

```bash
# Ejemplo de cómo usar la app
npm run dev
```

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
