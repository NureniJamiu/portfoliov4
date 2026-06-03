export const JAMIU_NURENI_MARK_PATH =
  "M96 32H0V0h96v32ZM96 96H64V0h32v96ZM32 96H0V64h32v32ZM96 128H0V96h96v32ZM160 128h-32V0h32v128ZM192 32h-32V0h32v32ZM224 64h-32V32h32v32ZM256 96h-32V64h32v32ZM256 128h-32V0h32v128Z"

export function JamiuNureniMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <g transform="scale(2)">
        <path fill="currentColor" d={JAMIU_NURENI_MARK_PATH} />
      </g>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="${JAMIU_NURENI_MARK_PATH}"/></svg>`
}
