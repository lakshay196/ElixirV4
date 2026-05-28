<div align="center">

<img src="https://www.elixircommunity.in/_next/image?url=%2Felixir-white.png&w=64&q=75" alt="Elixir Logo" width="64" />

# Elixir — Version 4

**The official website of the Elixir Tech Community**

[![Live Site](https://img.shields.io/badge/Live%20Site-elixircommunity.in-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://elixircommunity.in)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Discord](https://img.shields.io/badge/Join%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://dsc.gg/elixirtechcommunity)

</div>

---

## ✦ What is Elixir?

Elixir is a student-led tech community of **5000+ developers, students, and tech professionals** united under three specialized clubs — **GFG**, **GDG**, and **CodeChef**. This repository is the source code for **ElixirV4**, the fourth and current generation of the community website — built to be fast, modern, and feature-rich.

The platform powers everything: event discovery and registration, a community blog, a mentorship programme, role-based dashboards, and an admin panel — all in one place.

---

## 🚀 Features

- **Events** — Browse, register for, and manage hackathons, workshops, speaker sessions, and networking events
- **Blogs** — Community-written articles; members can submit drafts from their dashboard for editorial review
- **Mentors** — Discover experienced professionals available for one-on-one guidance
- **Role-Based Dashboards** — Tailored views for members, club heads, and admins
- **Admin Panel** — Full control over events, members, mentors, and analytics
- **Auth & Profiles** — Secure login with personal profile management
- **Responsive UI** — Mobile-first design with smooth animations via Framer Motion
- **Dark / Light Theme** — System-aware theme switching via `next-themes`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3 + `tailwindcss-animate` |
| **UI Components** | Radix UI primitives + shadcn/ui |
| **Animations** | Framer Motion / Motion |
| **Forms** | React Hook Form + Zod validation |
| **Data Fetching** | TanStack Query (React Query v5) |
| **Tables** | TanStack Table v8 |
| **Drag & Drop** | dnd-kit |
| **HTTP Client** | Axios |
| **Charts** | Recharts |
| **Markdown** | react-markdown + remark-gfm + rehype-sanitize |
| **Notifications** | Sonner |
| **Font** | Geist (via `next/font`) |
| **Backend** | Separate Node.js backend (`/backend`) |

---

## 📁 Project Structure

```
ElixirV4/
├── src/                  # Next.js App Router source
│   ├── app/              # Pages and layouts
│   ├── components/       # Shared UI components
│   └── lib/              # Utilities, hooks, API helpers
├── backend/              # Backend server (Node.js)
├── public/               # Static assets (images, icons)
├── components.json       # shadcn/ui config
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** (or yarn / pnpm / bun)

### 1. Clone the repository

```bash
git clone https://github.com/vaibhavxtripathi/ElixirV4.git
cd ElixirV4
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root and add the required variables:

```env
# Example — replace with actual values
NEXT_PUBLIC_API_URL=http://localhost:8000
```

> Contact the maintainers or check the backend repo for the full list of required variables.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 (Turbopack) |
| `npm run dev:fast` | Start dev server with experimental HTTPS |
| `npm run build` | Production build (Turbopack) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type check (no emit) |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open a Pull Request** against `main`

Please keep PRs focused and write clear commit messages. For significant changes, open an issue first to discuss.

---

## 🌐 Community

| Platform | Link |
|---|---|
| Website | [elixircommunity.in](https://elixircommunity.in) |
| Discord | [dsc.gg/elixirtechcommunity](https://dsc.gg/elixirtechcommunity) |
| Twitter / X | [@theelixirtech](https://x.com/theelixirtech) |
| LinkedIn | [Elixir Tech Community](https://www.linkedin.com/company/elixir-tech-community/) |

---

## 📄 License

This project is maintained by the **Elixir Tech Community**. For licensing details, please contact the maintainers.

---

<div align="center">
  <sub>Built with ❤️ by the Elixir Tech Community · <a href="https://elixircommunity.in">elixircommunity.in</a></sub>
</div>
