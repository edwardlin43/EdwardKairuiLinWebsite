import { Code, User, Briefcase } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
    {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
                Passionate McMaster Engineering Student
            </h3>

            <p className="text-muted-foreground">
              As I enter my second year of university, I have a strong curiousity and drive to learn, leaving first 
              year with an 11.4 GPA. Along with my strength in academics, I have also partaken in technical teams such 
              as the McMaster Chem-E-Car Propulsion Team and plan to gain more experience through different teams and clubs. 
            </p>

            <p className="text-muted-foreground">
              I'm extremely passionate about creating elegant solutions to complex 
              problems, constantly finding new technologies to learn, whether it be 
              learning a new coding language or picking up a new productive 
              hobby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
              </a>
              
              <a 
                href="/projects/Edward%20Kairui%20Lin%20Resume.pdf"
                download="Edward Kairui Lin Resume.pdf" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded full bg-primary/10">
                      <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Computer Engineering</h4>
                        <p className="text-muted-foreground">
                         Passionate student with a love for continuous learning and problem-solving, constantly seeking new challenges and opportunities to grow. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded full bg-primary/10">
                      <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Social Life</h4>
                        <p className="text-muted-foreground">
                         Actively involved in campus activities and community service, fostering meaningful connections and contributing to a vibrant social environment.   
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Work Ethic</h4>
                        <p className="text-muted-foreground">
                         Continuously striving for excellence in all endeavors, demonstrating a strong work ethic and dedication to achieving goals with integrity and professionalism.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};