const CustomHoverButton = ({
  text,
  bgColor = "#1D4ED8",
  textColor = "#FFFFFF",
  foldColor = "#FF4D48",
  foldBackground = "#FF4D48",
}) => {
  return (
    <div className="group inline-block">
      <button
        className="relative px-7 py-1 overflow-hidden cursor-pointer transition-colors duration-300"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
        {/* Background under the fold */}
        <span
          className="absolute top-0 right-0 w-[12px] h-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{ backgroundColor: foldBackground }}
        />
        {/* Folded triangle */}
        <span
          className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{ borderLeftColor: foldColor }}
        />
      </button>
    </div>
  )
}

export default CustomHoverButton
