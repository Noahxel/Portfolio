import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: ["C / C++", "Python", "JavaScript", "PHP", "Assembly (Basic)", "Haskell (Basic)"]
    },
    {
      name: "Web Development",
      skills: ["React - React Native", "Node.js", "CSS - Tailwind", "Full Stack Development", "HTML", "SQL"]
    },
    {
      name: "Development Tools",
      skills: ["Docker", "GitHub", "VS Code - Cursor - Visual Studio"]
    },
    {
      name: "Testing & APIs",
      skills: ["E2E Testing", "Google Maps API"]
    },
    {
      name: "Design & Productivity",
      skills: ["Figma", "Notion", "Microsoft Office Suite"]
    },
    {
      name: "Languages",
      skills: ["Native French", "Advanced Technical English"]
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-secondary mb-12 text-center"
        >
          Technical Expertise
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-xl font-semibold text-secondary border-b border-secondary pb-2">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-textSecondary flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 