# Next.js Phase 1: Code Reference & Syntax Guide

**Use this file for syntax reference only.**

---

## 1) File-based Routing (App Router)

```txt
app/
  page.js          -> /
  about/page.js    -> /about
  contact/page.js  -> /contact
```

---

## 2) Layouts

```jsx
// app/layout.js
export const metadata = {
  title: "My App",
  description: "Demo app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 3) Navigation

```jsx
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

---

## 4) Data Fetching (Server Components)

```jsx
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

---

## 5) Route Handlers (API)

```jsx
// app/api/hello/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

---

## 6) next/image

```jsx
import Image from "next/image";

export default function Page() {
  return (
    <Image src="/hero.jpg" alt="Hero" width={800} height={400} />
  );
}
```

---

## 7) Metadata Per Page

```jsx
export const metadata = {
  title: "About",
  description: "About page"
};
```

---

**Use this file for syntax reference only.**
