# Kids Rules

A small application to manage children's rules and punishments using Next.js, Tailwind, ShadCN, and Prisma/SQLite.

## Features

- Display a list of rules and associated punishments.
- Create, edit, and delete rules.
- Navigate to a dedicated page to create or edit a rule.
- Future integration of a pedagogical AI assistant to explain rules.
- UI styled with Tailwind and ShadCN components.

## Tech Stack

- **Next.js 15 (App Router)**
- **React 18/19**
- **TailwindCSS + Tailwind Animate**
- **ShadCN/ui**
- **Prisma + SQLite**
- **TypeScript**

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd kids-rules
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database:

```bash
npx prisma migrate dev
```

4. (Optional) Seed the database:

```bash
npx prisma db seed
```

5. Start the development server:

```bash
npm run dev
````

6. Open http://localhost:[PORT] in your browser.

