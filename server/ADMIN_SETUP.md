# Noah Surf School — Backend Setup

## Start the API server

```bash
cd server
npm run dev        # development (hot-reload)
npm start          # production (requires npm run build first)
```

API runs at: http://localhost:5000

---

## Create the admin account (one-time, curl only)

Only ONE admin account is allowed. Run this once:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@noahsurf.lk",
    "password": "YourStrongPassword123"
  }'
```

---

## Admin login (frontend)

Go to: http://localhost:3000/admin/login

Sign in with your **username** or **email** and the password you set above.

---

## API Reference

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Create admin (curl only, max 1) |
| POST | `/api/auth/login` | Login — returns JWT |
| GET  | `/api/auth/me` | Get current admin info |
| POST | `/api/auth/logout` | Logout |

### Public Blog (no auth)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/blogs` | List published posts |
| GET | `/api/blogs/:slug` | Get post by slug |

Query params for list: `?page=1&limit=20&category=Surf+Tips&search=wave`

### Admin Blog (JWT required)
| Method | Endpoint | Description |
|---|---|---|
| GET    | `/api/admin/blogs` | List all posts (drafts + published) |
| POST   | `/api/admin/blogs` | Create post |
| PUT    | `/api/admin/blogs/:id` | Update post |
| DELETE | `/api/admin/blogs/:id` | Delete post |
| PATCH  | `/api/admin/blogs/:id/toggle-publish` | Toggle publish status |
