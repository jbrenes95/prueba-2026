# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 21 standalone SPA with routing (SCSS). Technical test project.

## Tech Stack

- **Framework:** Angular 21 (standalone components, no NgModules)
- **Routing:** `provideRouter()` in `src/app/app.config.ts`, routes in `src/app/app.routes.ts`
- **UI Components:** Angular Material (azure-blue theme, Material 3) — use for ALL UI components
- **Layout/Grid:** Bootstrap (CSS classes only, no JS) — use for layout and spacing only
- **i18n:** `@ngx-translate/core` v17 + `@ngx-translate/http-loader` v17 — JSON files in `public/i18n/`
- **Styles:** SCSS — Bootstrap imported in `src/styles.scss`
- **Testing:** Vitest (`ng test`)

## Commands

```bash
ng serve        # Dev server at http://localhost:4200
ng build        # Production build → dist/
ng test         # Unit tests (Vitest)
ng generate component <name>   # Scaffold a component
```

## Folder Structure

```
src/app/
├── core/
│   ├── components/
│   │   └── language-toggle/         # MatButtonToggle ES/EN — calls TranslateService.use()
│   ├── interceptors/
│   │   └── error.interceptor.ts     # Functional interceptor — catches HTTP errors, shows toast
│   ├── models/
│   │   └── user.model.ts            # UserApi, UserDetailApi (back) + User, UserDetail (front)
│   ├── mappers/
│   │   └── user.mapper.ts           # mapUser() / mapUserDetail()
│   └── services/
│       └── notification.service.ts  # Wraps MatSnackBar — use for all user-facing toasts
└── features/
    └── users/
        ├── services/
        │   └── users.service.ts    # Signals + HTTP, applies mapper on incoming data
        ├── user-list/              # /users — tabla de usuarios con Material
        └── user-detail/            # /users/:id — detalle de un usuario
```

Routes use lazy loading via `loadComponent`. Default route redirects to `/users`.

`core/` is shared across all features. Models define API shapes (back) and frontend models separately — `password` is excluded from `User` (list) but included in `UserDetail` (detail view only).

## i18n

`@ngx-translate/core` v17. Default language: `es`. Runtime language switch via `LanguageToggle` component.

- **Templates:** `{{ 'KEY.SUBKEY' | translate }}` — import `TranslatePipe` in component `imports`.
- **TypeScript:** `this.translate.instant('KEY')` — inject `TranslateService`.
- **Translation files:** `public/i18n/es.json` and `public/i18n/en.json`. Keys follow `FEATURE.CONTEXT` pattern (e.g. `USERS.COL.NAME`, `ERROR.404`, `COMMON.CLOSE`, `VALIDATION.REQUIRED`).
- **Adding new text:** add key to both JSON files simultaneously.
- **Language toggle:** `<app-language-toggle />` — import `LanguageToggle` in component `imports`.

## Coding Conventions

- Always use `inject()` for dependency injection — never constructor injection.
- API base URL lives in `src/environments/environment.ts` (`environment.apiUrl`). Services compose endpoint URLs from it.
- Forms with validation use `ReactiveFormsModule` + `FormBuilder` via `inject()`.
- Use `effect()` in constructor (not `ngOnInit`) to react to signal changes and trigger side effects like navigation.

## State Pattern

`UsersService` uses Angular Signals (`signal<User[]>`, `signal<boolean>`, `signal<string|null>`). Components call `loadUsers()` / `loadUserDetail()` on init and read state via signals. `loadUsers()` is cached — skips HTTP if `users()` already has data. No NgRx.

Signals exposed by `UsersService`:
- `users`, `loading`, `error` — list state
- `userDetail`, `loadingDetail`, `userDetailError` — detail state

## Repository

- **Remote:** https://github.com/jbrenes95/prueba-2026
- **Working branch:** `dev` — all changes go to `dev`, not `main`

## Workflow Rules

- All commits and pushes go to the `dev` branch only.
- Keep `prompts.md` up to date with every new prompt the user sends.
- Keep `CLAUDE.md` up to date as the project evolves.
- **Never auto-commit or auto-push.** The user decides when to commit and push — except for `CLAUDE.md` and `prompts.md`, which Claude keeps updated and pushes automatically after every change.
- Feature flow: user proposes a feature → Claude presents multiple approaches → user picks one → Claude implements it.
