import { ImageResponse } from "next/og"

import { BrandIconImage } from "@/app/icon-image"

export const runtime = "edge"

export async function GET() {
  const size = {
    width: 192,
    height: 192,
  }

  return new ImageResponse(<BrandIconImage size={size.width} />, size)
}
