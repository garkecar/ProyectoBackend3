# 🐾 Adoptme - Proyecto Final Backend III

Proyecto final para el curso de Programación Backend III en Coderhouse. Sistema de adopción de mascotas con arquitectura profesional, testing automatizado y despliegue en contenedores.

## 🚀 Enlaces del Proyecto

- **Repositorio GitHub:** [https://github.com/garkecar/ProyectoBackend3](https://github.com/garkecar/ProyectoBackend3)
- **DockerHub Image:** [https://hub.docker.com/r/garkecar92/adoptme-final](https://hub.docker.com/r/garkecar92/adoptme-final)

---

## 🛠️ Tecnologías y Herramientas

- **Runtime:** Node.js v20+
- **Framework:** Express.js
- **Base de Datos:** MongoDB Atlas (Mongoose)
- **Documentación:** Swagger / OpenAPI 3.0
- **Testing:** Mocha, Chai & Supertest
- **Logging:** Winston (Custom levels & File rotation)
- **Contenedores:** Docker

---

## 📦 Instalación y Ejecución (Local)

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/garkecar/ProyectoBackend3.git
   cd ProyectoBackend3
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno (`.env`):
   ```env
   PORT=8080
   MONGO_URL=tu_url_de_mongo_atlas
   ```
4. Iniciar el servidor:
   ```bash
   npm start
   ```

---

## 🐳 Ejecución con Docker (Recomendado)

Puedes correr el proyecto sin instalar dependencias locales usando la imagen oficial:

```bash
docker run --rm -p 8080:8080 \
  -e MONGO_URL='mongodb+srv://admin:qCvEtsWIqrh8PID0@cluster0.cihtj42.mongodb.net/adoptme?retryWrites=true&w=majority' \
  garkecar92/adoptme-final:1.0.0
```

---

## 🧪 Testing

Se han implementado **35 tests funcionales** que cubren los módulos de:

- **Adoptions:** Flujo completo de adopción y validaciones de negocio.
- **Pets:** CRUD y estados de adopción.
- **Users:** Gestión de usuarios y perfiles.
- **Sessions:** Registro, Login y persistencia de sesión.

Para ejecutar los tests:

```bash
npm test
```

---

## 📖 Documentación de la API

Una vez iniciado el servidor, puedes acceder a la documentación interactiva de Swagger en:
`http://localhost:8080/apidocs`

---

## ✨ Funcionalidades Destacadas

- **Mocking:** Endpoint `/api/mocks/generateData` para generación masiva de usuarios y mascotas de prueba.
- **Logger:** Implementación de Winston con niveles personalizados (`fatal`, `error`, `warning`, `info`, `http`, `debug`). Los errores se persisten automáticamente en `errors.log`.
- **Seguridad:** Validaciones defensivas de `ObjectId` en todos los parámetros de ruta para evitar caídas del servidor por `CastError`.
- **Gestión de Documentos:** Subida de archivos mediante Multer en `/api/users/:uid/documents` con almacenamiento organizado.

---

## 👤 Autor

**Carlos Gallardo** - _Microsoft 365 Administrator / Infrastructure Engineer_
