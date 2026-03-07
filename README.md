# Prueba Técnica 2026

SPA desarrollada con Angular 21 como prueba técnica. La aplicación consume una API REST mock y permite visualizar y editar una lista de usuarios.

---

## ¿Qué hace la aplicación?

- **Lista de usuarios** (`/users`): muestra una tabla con nombre, apellido y email de todos los usuarios. Incluye buscador en tiempo real que filtra por nombre, apellido o email.
- **Detalle de usuario** (`/users/:id`): muestra todos los datos del usuario incluyendo la contraseña (oculta por defecto con toggle de visibilidad). Permite editar los campos con validación de formulario y guarda los cambios contra la API.
- **i18n**: la interfaz está disponible en español e inglés. El idioma por defecto es español y puede cambiarse en tiempo real desde el toolbar mediante un toggle.
- **Manejo de errores**: todos los errores HTTP muestran un toast con un mensaje entendible para el usuario.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **Angular 21** | Framework principal — componentes standalone, sin NgModules |
| **Angular Router** | Navegación SPA con lazy loading por componente |
| **Angular Signals** | Gestión de estado reactivo (`signal`, `computed`, `effect`) |
| **Angular Material** | Todos los componentes de UI (tabla, toolbar, card, inputs, botones, spinner, snackbar...) |
| **Bootstrap** | Clases CSS para layout y espaciado (sin JS de Bootstrap) |
| **@ngx-translate/core v17** | Internacionalización — archivos JSON en `public/i18n/` |
| **HttpClient + interceptor funcional** | Peticiones HTTP y captura centralizada de errores |
| **Reactive Forms** | Formulario de edición con validaciones (required, pattern email) |

---

## Arquitectura

```
src/app/
├── core/                          # Código compartido entre features
│   ├── components/language-toggle/  # Toggle ES/EN en el toolbar
│   ├── interceptors/error.interceptor.ts  # Interceptor HTTP funcional
│   ├── models/user.model.ts       # Modelos de API (UserApi, UserDetailApi) y frontend (User, UserDetail)
│   ├── mappers/user.mapper.ts     # Transformación de datos API → modelo frontend
│   └── services/notification.service.ts  # Servicio de toasts (MatSnackBar)
└── features/
    └── users/
        ├── services/users.service.ts  # Estado con Signals + llamadas HTTP
        ├── user-list/             # Vista lista de usuarios
        └── user-detail/           # Vista detalle y edición de usuario
```

### Decisiones de diseño

- **Separación back/front en modelos**: `UserApi` y `UserDetailApi` representan la forma de los datos de la API. `User` y `UserDetail` son los modelos del frontend. La contraseña nunca llega al modelo de lista.
- **Caché en signals**: `loadUsers()` comprueba si ya hay datos en la signal antes de hacer la petición HTTP, evitando llamadas innecesarias al navegar hacia atrás desde el detalle.
- **Actualización optimista**: al editar un usuario, el estado local se actualiza con los datos del formulario sin depender de la respuesta del servidor.
- **Redirección automática**: si se navega a un `id` de usuario inexistente, la aplicación redirige automáticamente a la lista.

---

## Comandos

```bash
npm install       # Instalar dependencias
ng serve          # Servidor de desarrollo en http://localhost:4200
ng build          # Build de producción
ng test           # Tests unitarios (Vitest)
```

---

## API

La aplicación consume una API mock de Postman:

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/v1/users` | Lista de usuarios |
| GET | `/api/v1/users/:id` | Detalle de un usuario |
| PUT | `/api/v1/users/:id` | Actualizar un usuario |

La URL base de la API se configura en `src/environments/environment.ts`.
