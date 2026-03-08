# Chat Log — Prueba Técnica 2026

Registro de prompts y respuestas del desarrollo completo.

---

## [1] Análisis inicial del repositorio
**Usuario:** Analiza el codebase y crea un CLAUDE.md para futuras instancias de Claude Code.
**Claude:** Generado `CLAUDE.md` con descripción del proyecto, estructura de carpetas, convenciones y comandos.

---

## [2] Conectar con repositorio remoto
**Usuario:** Engánchame el proyecto con este repo https://github.com/jbrenes95/prueba-2026
**Claude:** Configurado el remoto, primer push a GitHub.

---

## [3-4] Configuración de contexto y archivos de seguimiento
**Usuario:** Esto es una prueba técnica. Sube tus archivos de contexto al repo y guarda todos los prompts en un archivo.
**Claude:** Creado `prompts.md`. Configurado para subir `CLAUDE.md` y `prompts.md` automáticamente tras cada cambio.

---

## [5-6] Definición del flujo de trabajo
**Usuario:** No quiero auto-commits. El flujo es: tú propones opciones, yo elijo, yo decido cuándo hacer commit. Solo `CLAUDE.md` y `prompts.md` los puedes subir tú siempre.
**Claude:** Flujo registrado. A partir de aquí: propuestas → elección del usuario → implementación → el usuario decide el commit.

---

## [7-8] Iniciar proyecto Angular
**Usuario:** Instala Angular CLI e inicia un proyecto con rutas.
**Claude:** Propuestas A (Angular standalone) y B (NgModules). Usuario eligió A.
**Resultado:** Proyecto Angular 21 con standalone components, `provideRouter()`, SCSS.

---

## [9-10] Instalar Angular Material y Bootstrap
**Usuario:** Instala Angular Material para componentes UI y Bootstrap solo para clases de maquetación.
**Claude:** Propuestas A (tema azure-blue Material 3) y B (tema custom). Usuario eligió A.
**Resultado:** Angular Material con tema azure-blue M3, Bootstrap importado en `styles.scss` solo CSS.

---

## [11] Actualización automática de prompts
**Usuario:** No preguntes si actualizar el prompts, hazlo siempre.
**Claude:** Registrado. `prompts.md` se actualiza automáticamente con cada prompt.

---

## [12-13] Estructura de carpetas
**Usuario:** Crea la estructura de carpetas para lista de usuarios y detalle de usuario.
**Claude:** Propuesta A (`core/` + `features/users/`) y B (estructura plana). Usuario eligió A.
**Resultado:** Carpetas `core/components`, `core/interceptors`, `core/models`, `core/mappers`, `core/services`, `features/users/user-list`, `features/users/user-detail`.

---

## [14-15] Vista de lista de usuarios con HTTP y tabla Material
**Usuario:** `user-list` como punto de entrada. Llamada a la API, guardar en estado, mostrar en tabla de Angular Material.
**Claude:** Propuestas A (Signals) y B (Observable + async pipe). Usuario eligió A.
**Resultado:** `UsersService` con `signal<User[]>`, `loading`, `error`. Tabla `mat-table` con columnas id/name/surname/email. Ruta por defecto `/users`.

---

## [16] Advertencia de deprecación SCSS
**Usuario:** Deprecation [plugin angular-sass]
**Claude:** Corregida la importación de Bootstrap en `styles.scss` para usar la sintaxis moderna `@use` y eliminar el warning.

---

## [17] Convención de inyección de dependencias
**Usuario:** Siempre usa `inject()`, nunca constructor injection. La URL al archivo de environments.
**Claude:** Refactorizado el servicio con `inject(HttpClient)`, URL movida a `environment.ts` como `apiUrl`.

---

## [18-19] Mappers y modelos separados
**Usuario:** Mapea los datos en el servicio para separar lógica de back/front. Modelos y mappers separados del componente. El detalle de usuario tiene además el campo `password`.
**Claude:** Propuestas A (inline en servicio) y B (archivos separados). Usuario eligió B.
**Resultado:** `core/models/user.model.ts` con `UserApi`, `UserDetailApi`, `User`, `UserDetail`. `core/mappers/user.mapper.ts` con `mapUser()` y `mapUserDetail()`. `password` excluida de `User`, incluida en `UserDetail`.

---

## [20] Estilos de la cabecera de tabla
**Usuario:** Quita el título de la lista y pon la cabecera de otro color.
**Claude:** Eliminado el título. Cabecera `mat-header-row` con color primario de Material (`--mat-sys-primary`).

---

## [21-22] Estilo moderno y responsive
**Usuario:** Quiero estilo moderno con Angular Material que sea responsive.
**Claude:** Propuesta A (Material cards + Bootstrap grid) y B (solo Material). Usuario eligió A.
**Resultado:** Tabla dentro de `mat-card` con `border-radius`, sombra suave, scroll horizontal en móvil, hover en filas.

---

## [23] Campo de búsqueda fuera de la card
**Usuario:** Pon el input de búsqueda encima de la tabla con el mismo ancho. (Corrección) Fuera de la card.
**Claude:** `mat-form-field` de búsqueda movido fuera del `mat-card`, con `width: 100%`. Filtro reactivo con `signal` + `computed`.

---

## [24-25] Interceptor de errores con toast
**Usuario:** Interceptor para controlar códigos de error HTTP y mostrar un toast con mensaje entendible para el usuario.
**Claude:** Propuesta A (interceptor funcional) y B (clase). Usuario eligió B → funcional.
**Resultado:** `error.interceptor.ts` funcional, `NotificationService` wrapeando `MatSnackBar`. Mensajes traducidos por código HTTP en `es.json` y `en.json`.

---

## [26-27] Internacionalización (i18n)
**Usuario:** Añadir i18n para textos en español e inglés. Siempre la opción más nativa.
**Claude:** Propuesta A (`@ngx-translate/core`) y B (`@angular/localize`). Usuario eligió A (más nativa para runtime switching).
**Resultado:** `ngx-translate` v17 instalado, JSONs en `public/i18n/es.json` y `en.json`, `TranslateHttpLoader` configurado en `app.config.ts`.

---

## [28-30] Toggle de idioma
**Usuario:** Botón toggle de Angular Material (ES/EN) que cambie el idioma en runtime. Idioma por defecto español.
**Claude:** Componente `LanguageToggle` con `MatButtonToggleModule`. `TranslateService.use('es')` en `App` constructor.
**Resultado:** Toggle ES/EN en toolbar. Idioma inicial español al cargar la app.

---

## [31-33] Posición del toggle
**Usuario:** Pegado a la izquierda → rechazado. Quita el título y ponlo en el toolbar → rechazado. Pegado a la derecha.
**Claude:** Solución final: `<span class="spacer"></span>` antes del toggle empuja el toggle a la derecha (patrón estándar de Angular Material toolbar).

---

## [34] Eliminar columna ID de la tabla
**Usuario:** Quita la columna ID de la tabla, un usuario externo no debería ver las IDs.
**Claude:** Eliminada columna `id` del HTML (`ng-container matColumnDef="id"`) y del array `displayedColumns` en el componente.

---

## [35] Caché en `loadUsers()`
**Usuario:** Antes de hacer la petición HTTP, comprueba si ya tenemos los datos en la signal para evitar peticiones innecesarias.
**Claude:** Añadido early return en `loadUsers()`: `if (this.users().length > 0) return;`

---

## [36-37] Child route vs sibling route
**Usuario:** ¿No debería `user-detail` ser una ruta hija de `user-list`?
**Claude:** Explicación: las rutas hijas renderizan dentro del padre via `<router-outlet>`, mostrando lista y detalle simultáneamente (master-detail). Las rutas hermanas navegan a página completa. Usuario decidió mantener rutas hermanas.

---

## [38] Vista de detalle de usuario
**Usuario:** Implementar `user-detail` con nombre, apellido, email y contraseña (oculta con icono ojo toggle). Botón Volver y botón Editar (PUT `/users/:id`).
**Claude:** Componente completo con:
- Vista de solo lectura con layout `field-row`
- Contraseña oculta por defecto, toggle con icono Material
- Modo edición con formulario reactivo (`ReactiveFormsModule`, `FormBuilder`)
- `effect()` en constructor para redirección automática
- Botones Volver / Editar (vista) y Cancelar / Guardar (edición)

---

## [39-40] Actualización optimista del estado
**Usuario:** Cuando el PUT sea correcto, busca el usuario en el estado y actualízalo localmente. (Corrección) No con datos del servidor, sino con los datos del formulario.
**Claude:** `updateUser()` actualiza `userDetail` signal y `users` signal usando los datos del formulario (`data`), no la respuesta del servidor.

---

## [41] Redirección automática si usuario no existe
**Usuario:** Si se navega a un usuario que no existe, redirigir automáticamente a la lista.
**Claude:** Añadida signal `userDetailError = signal(false)` al servicio. En `loadUserDetail()`, el error HTTP la pone a `true`. En el componente, `effect()` en constructor la observa y navega a `/users`.

---

## [42] Validaciones de formulario
**Usuario:** Validación de email (required + regex con @ y .) y de contraseña (required).
**Claude:** Añadido `Validators.required` + `Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)` al campo email. `Validators.required` al campo password. Mensajes de error con `mat-error` y claves i18n `VALIDATION.REQUIRED` / `VALIDATION.EMAIL_INVALID`.

---

## [43] Margen entre campos del formulario de edición
**Usuario:** Añadir margen top entre los inputs del detalle para que se vean mejor los mensajes de error.
**Claude:** Añadido `form mat-form-field { margin-top: 0.75rem; }` en `user-detail.scss`.

---

## [44] Confirmación de seguimiento
**Usuario:** ¿Me estás guardando los prompts y el contexto?
**Claude:** Sí. `prompts.md` se actualiza con cada prompt. `CLAUDE.md` se mantiene al día con los patrones del proyecto. Ambos se pushean automáticamente.

---

## [45-46] Mover LanguageToggle al app shell
**Usuario:** ¿No sería mejor poner el `app-language-toggle` en el `app` para no importarlo muchas veces y no renderizarlo varias veces? → Opción A.
**Claude:** Propuesta A (toolbar global en `app.html`) y B (mantener por feature). Usuario eligió A.
**Resultado:** `app.html` tiene el `mat-toolbar` con el toggle. `app.ts` importa `MatToolbarModule` + `LanguageToggle`. Eliminado toolbar de `user-list` y `user-detail` (HTML, TS imports y SCSS).

---

## [47] Actualizar lista al editar usuario
**Usuario:** Cuando la edición sea correcta, actualiza el usuario en el listado.
**Claude:** Añadida línea en `updateUser()`: `this.users.update((list) => list.map((u) => (u.id === id ? { ...u, ...data } : u)));`
Ahora el éxito del PUT actualiza tanto `userDetail` como `users`.

---

## [48] Mensaje de error del backend
**Usuario:** En el toast de error, mostrar el `message` que devuelva el back si existe.
**Claude:** Actualizado `error.interceptor.ts`: si `error.error?.message` existe lo muestra directamente; si no, cae al mensaje traducido por código HTTP; si tampoco existe, `ERROR.DEFAULT`.

---

## [49-50] Planificación de tests unitarios
**Usuario:** ¿Qué probaríamos primero? / Explícame paso a paso qué vas a probar del servicio y por qué.
**Claude:** Orden recomendado: Mappers (funciones puras) → Interceptor (lógica de ramas) → UsersService (estado con signals + HTTP).
Para `UsersService` — `loadUsers()`: caché, éxito con mapeo, error con señal. `loadUserDetail()`: reset inicial, éxito, error con redirect. `updateUser()`: petición PUT, actualización de ambas signals, toast.

---

## [51] Test unitario de `loadUsers()`
**Usuario:** Haz solo el test de `loadUsers()`.
**Claude:** Creado `users.service.spec.ts` con 3 tests usando `TestBed` + `HttpTestingController`:
1. Popula `users` signal con datos mapeados en éxito
2. No hace segunda petición HTTP si hay caché
3. Establece `error` signal y limpia `loading` en fallo

---

## [52] Log de chat
**Usuario:** Saca un archivo de log de todo el chat con prompts y respuestas, simple y de lectura fácil.
**Claude:** Generado este archivo `chat-log.md`.

---

## [53] Spinner durante la edición
**Usuario:** Cuando se edita un usuario, lanzar el spinner hasta que el back devuelva respuesta y se actualicen los datos visualmente.
**Claude:** Añadida signal `loadingUpdate = signal(false)` al servicio. Se activa a `true` antes del PUT y vuelve a `false` en éxito y en error. En el template, mientras `loadingUpdate()` es `true` se muestra el spinner y desaparecen el formulario y los botones de acción.

---

## [54] Validación de contraseña
**Usuario:** Añadir validación al campo contraseña: mínimo una minúscula, una mayúscula y un carácter especial.
**Claude:** Añadido `PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/` y `Validators.pattern(PASSWORD_PATTERN)` al campo password. Mensaje de error `@else if (pattern)` en el template. Clave `VALIDATION.PASSWORD_INVALID` añadida a `es.json` y `en.json`.