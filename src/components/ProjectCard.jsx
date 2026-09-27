export default function ProjectCard({
  number,
  title,
  category,
  isActive,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-shrink-0
        w-[260px] sm:w-[280px] lg:w-[300px]
        h-[180px]
        rounded-2xl
        border
        text-left
        p-6
        transition-all
        duration-300
        cursor-pointer

        ${
          isActive
            ? "bg-surface-1 border-text-primary"
            : "bg-surface-1 border-soft hover:border-text-muted"
        }
      `}
    >
      <div className="h-full flex flex-col justify-between">

        <p className="text-text-muted text-xs tracking-[0.2em] uppercase">
          {number} · {category}
        </p>

        <div>
          <h3 className="text-[24px] font-light tracking-tight">
            {title}
          </h3>

          <p
            className={`
              mt-2 text-sm transition-opacity duration-300
              ${isActive ? "opacity-100" : "opacity-0"}
            `}
          >
            Selected
          </p>
        </div>

      </div>
    </button>
  )
}