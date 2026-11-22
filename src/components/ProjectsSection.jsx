import { ExternalLink } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { projects } from "@/data/projects"

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"> 
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
              <div
                key={project.slug}
                className="group flex flex-col bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>

                <div className="p-6 flex flex-1 flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-small mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-end items-center">
                  <div className="flex space-x-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={`Open ${project.title} project page`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={20}/>
                    </Link>

                  </div>
                </div>
                </div>
              </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            href="https://github.com/edwardlin43" 
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16}/>
          </a>

        </div>
      </div>
    </section>
  );
};