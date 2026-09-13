import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    //Technical skills
    { name: "Python", level: 100, category: "technical skills" },
    { name: "HTML", level: 100, category: "technical skills" },
    { name: "ReactJS", level: 100, category: "technical skills" },
    { name: "TailwindCSS", level: 100, category: "technical skills" },
    { name: "3D Printing", level: 100, category: "technical skills" },
    { name: "MS Office", level: 100, category: "technical skills" },
    { name: "Google Workspace", level: 100, category: "technical skills" },
    { name: "Arduino", level: 100, category: "technical skills" },
    { name: "Autodesk Inventor", level: 100, category: "technical skills" },
    { name: "VS Code", level: 100, category: "technical skills" },
    { name: "Git/Github", level: 100, category: "technical skills" },
    { name: "JavaScript", level: 100, category: "technical skills" },




    //Certs+Languages
    { name: "Standard First Aid & CPR C", level: 100, category: "certifications and languages"},
    { name: "National Lifeguard", level: 100, category: "certifications and languages"},
    { name: "Aquatic Instructor Certified", level: 100, category: "certifications and languages"},
    { name: "English", level: 100, category: "certifications and languages"},
    { name: "Mandarin Chinese", level: 100, category: "certifications and languages"},

    //Interests
    { name: "Weightlifting", level: 100, category: "interests"},
    { name: "Badminton", level: 100, category: "interests"},
    { name: "Piano", level: 100, category: "interests"},
    { name: "Chess", level: 100, category: "interests"},
    { name: "Swimming", level: 100, category: "interests"},

];

const category = ["all", "technical skills", "certifications and languages", "interests"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section 
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills, Certifications, and Interests</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {category.map((category, key) => (
              <button 
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                
                )}
              >
                {category}
              </button>
            ))}

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div 
                key={key} 
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"/>
                </div>
              </div>
            ))}
          </div>
        </div>


    </section>
  );
};