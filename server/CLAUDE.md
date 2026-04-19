# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with hot reload (localhost:5000)
npm run build     # compile TypeScript to dist/
npm start         # run compiled build
```

No test suite configured.

## Stack

- Node.js + Express 4 (TypeScript strict)
- MongoDB via Mongoose 8
- JWT auth — httpOnly cookie + `Authorization: Bearer` header
- `express-validator` for request validation
- `helmet` + `express-rate-limit` for security
- `bcryptjs` for password hashing

## Architecture

```
src/
  app.ts              # Express app bootstrap — routes, middleware, DB connect
  config/
    db.ts             # Mongoose connection
  routes/             # Router files only — no logic here
  controllers/        # Business logic handlers
  middleware/
    auth.ts           # protect() — JWT verify, attaches req.user
    errorHandler.ts   # notFound + errorHandler global handlers
  models/             # Mongoose schemas
```

## API Routes (base: http://localhost:5000)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | /health | — | Health check |
| POST | /api/auth/register | — | Register user |
| POST | /api/auth/login | — | Login, sets httpOnly cookie |
| GET | /api/auth/me | ✓ | Current user |
| POST | /api/auth/logout | ✓ | Clear auth cookie |
| GET | /api/blogs | — | List published blogs |
| GET | /api/blogs/:slug | — | Get blog by slug |
| GET | /api/admin/blogs | ✓ | List all blogs (admin) |
| POST | /api/admin/blogs | ✓ | Create blog |
| PUT | /api/admin/blogs/:id | ✓ | Update blog |
| DELETE | /api/admin/blogs/:id | ✓ | Delete blog |
| PATCH | /api/admin/blogs/:id/toggle-publish | ✓ | Toggle publish state |
| GET | /api/packages | — | List published packages |
| GET | /api/admin/packages | ✓ | List all packages (admin) |
| POST | /api/admin/packages | ✓ | Create package |
| PUT | /api/admin/packages/:id | ✓ | Update package |
| DELETE | /api/admin/packages/:id | ✓ | Delete package |
| PATCH | /api/admin/packages/:id/toggle-publish | ✓ | Toggle publish state |

## Auth

Protected routes require `Authorization: Bearer <token>` header or `token` httpOnly cookie.
JWT_SECRET must be ≥ 32 chars — server exits on startup if missing.

## Rate limits

- `/api/auth/*` — 20 req / 15 min
- All other `/api/*` — 200 req / 15 min

## Rules

- No `any` types
- Validation lives in route files using `express-validator` `body()`
- Controllers return `{ success: boolean, data/message }` shape consistently
- Blog categories: `Surf Tips | Sri Lanka | Gear | Lifestyle | News`
- Package levels: `Beginner | Intermediate | Advanced | Beginner-Advance | Surf Guide`
