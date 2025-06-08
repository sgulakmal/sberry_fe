# SBerry

SBerry is a modern web application built using the latest version of [Next.js](https://nextjs.org). It uses the **App Router**, **Turbopack**, and **React 19**, making it fast, scalable, and easy to develop.

> Created with TypeScript, Tailwind CSS, and ESLint.

---

## 🧠 Project Overview
To develop an internal social engagement platform that enables employees to share posts, comment, and like colleagues’ contributions, fostering collaboration, communication, and community spirit within the organization. Additionally, the platform will include a reward mechanism to motivate employees and recognize valuable contributions


## 🧪 Tech Stack

| Tech                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Next.js 15.1.8**  | Framework for React — using the App Router (File-based routing system)      |
| **React 19**        | Latest version of React with modern features and concurrent rendering       |
| **Turbopack**       | Next-generation bundler (replaces Webpack for `next dev`)                   |
| **TypeScript**      | Strong typing system for JavaScript                                         |
| **Tailwind CSS**    | Utility-first CSS framework for styling                                     |
| **ESLint**          | Code linting to ensure quality and consistency                              |
| **Geist Font**      | Clean and modern font by Vercel                                             |

---

## 🛠 Requirements

- **Node.js**: 18.18 or later
- **OS**: macOS, Windows (with WSL), or Linux
- **Package Managers** supported: `npm`, `yarn`, `pnpm`, `bun`

---

## 🚀 Getting Started

### 1. 🧪 Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 2. 📁 Project Structure

```bash
src/
├── app/              # App Router entry point
│   └──(auth) page.tsx      # Default auth route (auth home)
    └──(main) page.tsx      # Default main route (main home)
├── components/       # Reusable React components
├── styles/           # Tailwind and global styles
├── public/           # Static assets like images
├── utils/            # Utility functions

```

### 3. 🧪 Development Tools
```bash
// package.json (scripts)
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```




