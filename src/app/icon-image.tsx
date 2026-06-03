import { JAMIU_NURENI_MARK_PATH } from "@/components/jamiu-nureni-mark"

type BrandIconImageProps = {
  size: number
}

export function BrandIconImage({ size }: BrandIconImageProps) {
  const logoHeight = size / 2
  const logoOffsetY = (size - logoHeight) / 2

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#000",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      >
        <rect width={size} height={size} fill="#000" />
        <g transform={`translate(0 ${logoOffsetY}) scale(${size / 256})`}>
          <path fill="#fff" d={JAMIU_NURENI_MARK_PATH} />
        </g>
      </svg>
    </div>
  )
}
