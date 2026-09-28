import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    number: "01",
    title: "Personal Timeline",
    category: "Full Stack",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
  {
    number: "02",
    title: "Green Steps",
    category: "Full Stack",
    description: "A carbon footprint tracking application for logging activities and understanding environmental impact.",
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Project 03",
    category: "Frontend",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
  {
    number: "04",
    title: "Project 04",
    category: "Backend",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
  {
    number: "05",
    title: "Project 05",
    category: "Cloud",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
  {
    number: "06",
    title: "Project 06",
    category: "Full Stack",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
  {
    number: "07",
    title: "Project 07",
    category: "Software",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
  {
    number: "08",
    title: "Project 08",
    category: "Engineering",
    description: "A full-stack application for creating and managing personal timeline entries.",
    technologies: ["React", "TypeScript", ".NET 8", "SQLite"],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    y: 120,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Projects() { 
  const [activeProject, setActiveProject] = useState(0)

const [canScrollLeft, setCanScrollLeft] = useState(false)
const [canScrollRight, setCanScrollRight] = useState(true)

  // Reference to the horizontal project row
  const scrollRef = useRef(null)

    const checkScrollPosition = () => {
  const container = scrollRef.current

  if (!container) return

  const { scrollLeft, scrollWidth, clientWidth } = container

  setCanScrollLeft(scrollLeft > 5)

  setCanScrollRight(
    scrollLeft + clientWidth < scrollWidth - 5
  )
}

  // Move the project row to the left
const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -320,
    behavior: "smooth",
  })
}
  // Move the project row to the right
  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    })
  }
  
  //handle the partially visible project on selection
  const handleProjectSelect = (index, element) => {
  const container = scrollRef.current

  if (!container || !element) return

  const previousIndex = activeProject
  const movingForward = index > previousIndex
  const movingBackward = index < previousIndex

  setActiveProject(index)

  const containerRect = container.getBoundingClientRect()
  const cardRect = element.getBoundingClientRect()

  const cardPreview = 60

  // Moving forward →
  if (movingForward) {
    const preview =
      index < projects.length - 1 ? cardPreview : 0

    const scrollAmount =
      cardRect.right -
      containerRect.right +
      preview

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  // Moving backward ←
  if (movingBackward) {
    const preview =
      index > 0 ? cardPreview : 0

    const scrollAmount =
      cardRect.left -
      containerRect.left -
      preview

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }


  // Moving backward ←
  // Make selected card fully visible
  // while leaving a preview of the previous card
  if (movingBackward) {
    const scrollAmount =
      cardRect.left -
      containerRect.left -
      cardPreview

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }
}

  useEffect(() => {
  checkScrollPosition()

  window.addEventListener("resize", checkScrollPosition)

  return () => {
    window.removeEventListener("resize", checkScrollPosition)
  }
}, [])
 
  return (
    <section
      id="projects"
      className="min-h-screen bg-bg py-24 md:py-32 overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8">

        <p className="text-text-muted text-sm tracking-[0.2em] uppercase">
          Selected Work
        </p>

        <h2 className="mt-4 text-[40px] sm:text-[52px] md:text-[64px] font-light tracking-tight">
          Projects
        </h2>

        <p className="mt-5 max-w-[600px] text-text-secondary text-[16px] md:text-[18px] leading-relaxed">
          A selection of applications I've built across full-stack development,
          backend systems, and modern web experiences.
        </p>

      </div>

      {/* Project selector */}
      <div className="group relative mt-14 md:mt-20">

  {/* Horizontally scrollable cards */}
  <motion.div
    ref={scrollRef}
    onScroll={checkScrollPosition}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: false,
      amount: 0.15,
    }}
    className="
      flex
      gap-4
      overflow-x-auto
      scroll-smooth
      px-5 sm:px-6 md:px-8
      pb-5

      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >
    {projects.map((project, index) => (
      <motion.div
        key={project.number}
        variants={cardVariants}
        className="flex-shrink-0"
      >
        <ProjectCard
          {...project}
          isActive={activeProject === index}
          onClick={(event) =>handleProjectSelect(index, event.currentTarget)
}

        />
      </motion.div>
    ))}
  </motion.div>

   {/* Left arrow */}
{canScrollLeft && (
  <button
    onClick={scrollLeft}
    aria-label="Scroll projects left"
    className="
      absolute
      left-5 md:left-8
      top-1/2
      -translate-y-1/2
      w-12 h-12
      rounded-full
      bg-bg/90
      backdrop-blur-md
      border border-soft
      text-text-primary
      text-xl

      hidden
      sm:flex
      items-center
      justify-center

      opacity-0
      pointer-events-none
      group-hover:opacity-100
      group-hover:pointer-events-auto

      cursor-pointer
      z-10
      transition-all
      duration-300
      hover:bg-surface-1
      hover:scale-105
    "
  >
    ←
  </button>
)}

{/* Right arrow */}
{canScrollRight && (
  <button
    onClick={scrollRight}
    aria-label="Scroll projects right"
    className="
      absolute
      right-5 md:right-8
      top-1/2
      -translate-y-1/2
      w-12 h-12
      rounded-full
      bg-bg/90
      backdrop-blur-md
      border border-soft
      text-text-primary
      text-xl

      hidden
      sm:flex
      items-center
      justify-center

      opacity-0
      pointer-events-none
      group-hover:opacity-100
      group-hover:pointer-events-auto

      cursor-pointer
      z-10
      transition-all
      duration-300
      hover:bg-surface-1
      hover:scale-105
    "
  >
    →
  </button>
)}

</div>


{/* Project details */}
<div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 pt-8 md:pt-12">

  {/* Stable outer detail panel */}
  <div
    className="
      border-t
      border-soft
      py-10 md:py-14
    "
  >

    {/* Only the project content changes */}
    <AnimatePresence mode="wait">
      <motion.div
        key={projects[activeProject].number}

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        exit={{
          opacity: 0,
          y: -20,
        }}

        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          md:gap-16
        "
      >

        {/* Left side */}
        <div>

          <p className="text-text-muted text-xs tracking-[0.2em] uppercase">
            {projects[activeProject].number}
            {" · "}
            {projects[activeProject].category}
          </p>

          <h3 className="mt-4 text-[32px] sm:text-[40px] md:text-[48px] font-light tracking-tight">
            {projects[activeProject].title}
          </h3>

        </div>


        {/* Right side */}
        <div>

          <p className="text-text-secondary text-[16px] md:text-[18px] leading-relaxed">
            {projects[activeProject].description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex flex-wrap gap-2">

            {projects[activeProject].technologies.map((technology) => (
              <span
                key={technology}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-soft
                  text-text-muted
                  text-sm
                "
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </motion.div>
    </AnimatePresence>

  </div>

</div>
    </section>
  )
}