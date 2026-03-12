import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

const SITE_URL = process.env.APP_URL || USER.website
const OG_IMAGE = USER.ogImage.startsWith("http")
  ? USER.ogImage
  : `${SITE_URL}${USER.ogImage}`

export const SITE_INFO = {
  name: USER.displayName,
  url: SITE_URL,
  ogImage: OG_IMAGE,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  // {
  //   title: "UI",
  //   href: "/components",
  // },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Sponsors",
  //   href: "/sponsors",
  // },
]

export const X_USERNAME = "@iampenocrat"
export const GITHUB_USERNAME = "nurenijamiu"
export const SOURCE_CODE_GITHUB_REPO = "nurenijamiu/nurenijamiu.tech"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/nurenijamiu/nurenijamiu.tech"

export const SPONSORSHIP_URL = "https://github.com/sponsors/ncdai"

export const UTM_PARAMS = {
  utm_source: "nurenijamiu.tech",
}
