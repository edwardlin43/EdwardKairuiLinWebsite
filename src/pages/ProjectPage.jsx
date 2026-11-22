import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { StarBackground } from "@/components/StarBackground"
import { ThemeToggle } from "@/components/ThemeToggle"
import { projects } from "@/data/projects"
import { NotFound } from "./NotFound"

export const ProjectPage = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFound />
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-left md:py-24">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back to portfolio
        </Link>

        <article className="overflow-hidden rounded-lg bg-card shadow-xs">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[32rem] w-full object-cover"
          />

          <div className="p-6 md:p-10">
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              {project.title}
            </h1>
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {project.gallery?.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((photo) => (
                  <figure key={photo.image}>
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="aspect-[4/3] w-full rounded-md object-cover"
                    />
                    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}

            {project.sections?.map((section) => (
              <section key={section.heading} className="mt-8">
                <h2 className="mb-3 border-b border-border pb-2 text-2xl font-semibold">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-3 leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
