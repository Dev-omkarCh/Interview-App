<!-- Technology Tags -->

# 🎥 Video Call Interview App
<div align="center">
  <div>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="nextjs" />
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/GetStream-1C1E21?style=for-the-badge&logo=stream&logoColor=white" alt="GetStream" />
    <img src="https://img.shields.io/badge/Clerk-F73D93?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
    <img src="https://img.shields.io/badge/Convex-2D3748?style=for-the-badge" alt="Convex" />
    <img src="https://img.shields.io/badge/ShadCN-111827?style=for-the-badge&logo=tailwind-css&logoColor=white&color=blue" alt="ShadCN" />
  </div>
  <h2 align="center">🎥 Video Call Interview App 📷</h2>

   <div align="center">
    A full-featured web application that enables real-time interviews using video calling and messaging. Built with Next.js, GetStream, and Convex, it includes candidate evaluation tools, collaborative coding, screen sharing, and secure authentication via Clerk.
    </div>
</div>

## 📚 Table of Contents

- [📖 Introduction](#introduction)  
- [🛠 Tech Stack](#tech-stack)  
- [✨ Features](#features)  
- [📸 Demonstration](#demonstration)  
- [🚀 Project Start Guide](#project-start-guide)  
- [🌍 Deployment](#deployment)  
- [👨‍💻 Author](#author)  
- [🔗 Socials](#socials)

---

<a id="introduction"></a>
## 📖 Introduction

This app streamlines technical interviews by allowing interviewers and candidates to connect via live video, chat, and a real-time code editor. Admins can review analytics, schedule interviews, and collect structured feedback with ratings and notes.

---

<a id="tech-stack"></a>
## 🛠 Tech Stack

**Frontend:**
- Next.js (App Router)
- TailwindCSS
- ShadCN UI Components
- Lucide react

**Backend & Services:**
- GetStream (Video + Chat APIs)
- Convex (Real-time backend functions + storage)
- Clerk (Authentication & User Management)
- Webhooks (for session logs, reviews, etc.)

---

<a id="features"></a>
## ✨ Features

- 🎥 High-quality real-time video calls  
- 💬 In-call chat using GetStream  
- 🖥️ Screen sharing support for presentations or walkthroughs  
- 🧑‍💼 Candidate profile viewer  
- 📝 Recruiter notes and feedback system  
- ⭐ Interviewer rating and review after the session  
- 🧑‍💻 Real-time collaborative code editor for coding interviews  
- 📊 Interview history and analytics  
- 🔒 Secure room tokens and access control  
- 🌐 Webhooks for real-time updates (e.g., session end, rating submission, call logs)  
- 📅 Scheduling integration (optional)  
- ⚙️ Account preferences and settings  
- 🌙 Dark/light theme support  
- 📱 Fully responsive design

---

<a id="demonstration"></a>
## 📸 Demonstration

> Will Update it soon..

<a id="project-start-guide"></a>
## 🚀 Project Start Guide

### Prerequisites

- Node.js and npm  
- GetStream account  
- Convex project  
- Clerk account

### Clone the Repository

```bash
git clone https://github.com/Dev-omkarCh/Interview-App.git
cd video-call-interview-app
```

### Next Setup
```bash
npx create-next-app@14.2.25 . #14.2.25 supports clerk

✔ Would you like to use TypeScript? › Yes
✔ Would you like to use ESLint? › No
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like to use `src/` directory? › Yes
✔ Would you like to use App Router? (recommended) › Yes
✔ Would you like to customize the default import alias (@/*)? › No

```
### Shadcn Setup
```bash
npx shadcn@latest init
npx shadcn@latest add button ...
```

### Clerk setup

1. Install Clerk
```bash
npm install @clerk/nextjs
```
<br>

2. Create a middleware.ts file.

- If you're using the /src directory, create middleware.ts in the /src directory.
- If you're not using the /src directory, create middleware.ts in the root directory.
<br>

3. In your middleware.ts file, export the clerkMiddleware() helper:

```bash
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
```

</br>

4. Add `<ClerkProvider>` and Clerk components to your app
- Add the <ClerkProvider> component to your app's layout. This component provides Clerk's authentication context to your app.
- Copy and paste the following file into your `layout.tsx` file.
- This creates a header with Clerk's prebuilt components to allow users to sign in and out.

```bash
import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clerk Next.js Quickstart',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
```
<br/>

5. Create your first user
- Run your project with the following command:

```bash
npm run dev 
```
- Visit your app's homepage at http://localhost:3000.

- Click "Sign up" in the header and authenticate to create your first user.

</br>

### Convex setup
```bash
npm i convex
npx convex dev
```

### Environment Variables
Create a .env.local file inside the server/ directory with the following keys:
```.env
# Deployment used by `npx convex dev`

CONVEX_DEPLOYMENT=string
NEXT_PUBLIC_CONVEX_URL=string

NEXT_PUBLIC_STREAM_API_KEY=string
STREAM_SECRET_KEY= string

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=string
CLERK_SECRET_KEY=string

```

<a id="deployment"></a>

# 🌍 Deployment
Deploy easily to Vercel:

1. Push your code to GitHub
2. Import into Vercel
3. Add your .env.local variables in Vercel Dashboard
4. Deploy 🚀

<a id="author"></a>

## 👨‍💻 Author

- Omkar Chikhale
- omkarchikhale.dev@gmail.com 📧

<a id="socials"></a>

## 🔗 Socials
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/omkar-chikhale/)  
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/your-username)  
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/om.kar816?igsh=MWd5dDF5bGd5ejFpMw==)  
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100087449895467&amp;mibextid=ZbWKwL)

> 





