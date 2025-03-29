# 🧠 CodeMax – Competitive Programming Game

CodeMax is a clean, fast-paced competitive programming platform where players face off in real-time 1v1, 2v2, or larger team matches. Players solve problems of varying difficulty, earn points, and climb the leaderboard.

---

## ⚙️ Tech Stack

| Layer         | Tech                                                        |
| ------------- | ----------------------------------------------------------- |
| **UI**        | React                                                       |
| **Fullstack** | [Remix](https://remix.run/)                                 |
| **Styling**   | Tailwind CSS, React Bootstrap                               |
| **Editor**    | [Monaco Editor](https://microsoft.github.io/monaco-editor/) |
| **Code Exec** | Python + [Judge0 API](https://judge0.com/)                  |
| **Auth**      | Supabase (or fallback: JWT)                                 |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-org/codemax.git
cd codemax
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
JUDGE0_API=https://your-judge0-endpoint.com
```

> 🔐 **Do not commit `.env`** — it is listed in `.gitignore`.

---

## 🛠 Dev Commands

```bash
npm run dev        # Start Remix dev server
npm run build      # Build for production
npm run start      # Start production server
```

---

## 🌳 Branching & Commit Rules

### 📦 Branch Naming Convention

| Type        | Format                  | Example                   |
|-------------|-------------------------|---------------------------|
| Feature     | `feature/<short-desc>`  | `feature/matchmaking`     |
| Bug Fix     | `fix/<issue-desc>`      | `fix/timer-bug`           |
| Refactor    | `refactor/<desc>`       | `refactor/editor-wrapper` |
| UI Changes  | `ui/<page-name>`        | `ui/homepage-layout`      |

### ✅ Commit Guidelines

- Use clear, present-tense messages:
  - `Add bonus round logic to match handler`
  - `Fix incorrect point calculation for hard problems`
  - `Refactor code editor layout and styling`

- Group related changes into single commits.
- Avoid mixing unrelated fixes/features in one commit.

---

## 📌 Coming Soon

- Bonus round mechanics
- Player profiles and unlockables
- Leaderboards & XP system
- Tournament mode
- In-game chat

---

## 🤝 Contributing

1. Create a feature branch.
2. Make changes with clean commits.
3. Submit a PR with a clear description.
4. Tag teammates for review.

---

## 📄 License
MIT

---
