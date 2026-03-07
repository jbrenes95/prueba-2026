# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 21 standalone SPA with routing (SCSS). Technical test project.

## Tech Stack

- **Framework:** Angular 21 (standalone components, no NgModules)
- **Routing:** `provideRouter()` in `src/app/app.config.ts`, routes in `src/app/app.routes.ts`
- **UI Components:** Angular Material (azure-blue theme, Material 3) — use for ALL UI components
- **Layout/Grid:** Bootstrap (CSS classes only, no JS) — use for layout and spacing only
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
└── features/
    └── users/
        ├── models/
        │   └── user.model.ts       # User interface: { id, name, surname, email }
        ├── services/
        │   └── users.service.ts    # Signals: users(), loading(), error() + loadUsers()
        ├── user-list/              # /users — tabla de usuarios con Material
        └── user-detail/            # /users/:id — detalle de un usuario
```

Routes use lazy loading via `loadComponent`. Default route redirects to `/users`.

## Coding Conventions

- Always use `inject()` for dependency injection — never constructor injection.
- API base URL lives in `src/environments/environment.ts` (`environment.apiUrl`). Services compose endpoint URLs from it.

## State Pattern

`UsersService` uses Angular Signals (`signal<User[]>`, `signal<boolean>`, `signal<string|null>`). Components call `loadUsers()` on init and read state via signals. No NgRx.

## Repository

- **Remote:** https://github.com/jbrenes95/prueba-2026
- **Working branch:** `dev` — all changes go to `dev`, not `main`

## Workflow Rules

- All commits and pushes go to the `dev` branch only.
- Keep `prompts.md` up to date with every new prompt the user sends.
- Keep `CLAUDE.md` up to date as the project evolves.
- **Never auto-commit or auto-push.** The user decides when to commit and push — except for `CLAUDE.md` and `prompts.md`, which Claude keeps updated and pushes automatically after every change.
- Feature flow: user proposes a feature → Claude presents multiple approaches → user picks one → Claude implements it.
