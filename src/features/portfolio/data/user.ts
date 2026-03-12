import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Jamiu",
  lastName: "Nureni",
  displayName: "Jamiu Nureni",
  username: "penocrat",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Building the web, pixel-by-pixel",
    "Software Engineer",
    "Solutions Architect",
    // "Open Source Contributor",
    "Perpetual Student",
  ],
  address: "Lagos, Nigeria",
  phoneNumber: "KzIzNDkxNjAyNTgxMDU=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bWVAbnVyZW5pamFtaXUudGVjaA==", // base64 encoded
  website: "https://nurenijamiu.tech",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "MCPS",
      website: "https://marinecriticalparts.com",
      experienceId: "mcps",
    },
    {
      title: "Founder",
      company: "ReStack",
      website: "https://re-stack.vercel.app",
      experienceId: "restack",
    },
  ],
  about: `
- **Software Engineer** with 3+ years of experience, known for pixel-perfect execution and strong attention to small details.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Creator of [ReStack](https://re-stack.vercel.app) (2026): enhances Data Structures and Algorithms (DSA) mastery through spaced repititions and daily reminders.
`,
  avatar:
    "https://www.linkedin.com/dms/prv/image/v2/D4D06AQG_8DzGyVgUXQ/messaging-image-720/B4DZzRXaeqG0AY-/0/1773039102867?m=AQICgGgkALSsOwAAAZzRaNJ5wapwKc5CF4pelcWdvc5NOBufFnAMqKXPEA&ne=1&v=beta&t=V3MH0A2oCKgeqxu05GrbfAw2XmyCyEgLN_BQaoMfNFs",
  // remember to change og image
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=7",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3?v=1",
  timeZone: "Africa/Lagos",
  keywords: [
    "jamiu",
    "nureni",
    "nureni jamiu",
    "jamiu nureni",
    "penocrat",
    "iampenocrat",
    "restack",
    "penoverse",
    "nureni jamiu olawale",
    "olawale",
  ],
  dateCreated: "2026-03-09", // YYYY-MM-DD
}
