import { motion } from 'framer-motion';

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const projects = [
  {
    title: "Area",
    description: "A React/NodeJS automation platform similar to IFTTT/Zapier. This project enables users to create automated workflows and connect different services together.",
    image: `${PUBLIC_URL}/images/area.png`,
    technologies: ["React", "Node.js", "TypeScript", "REST API"],
    github: "https://github.com/Noahxel/Area",
    live: "#"
  },
  {
    title: "Zappy",
    description: "A Python/C/C++ network zero-player game featuring AI team contests. Complex project combining server architecture, GUI visualization, and artificial intelligence.",
    image: `${PUBLIC_URL}/images/zappy.png`,
    technologies: ["Python", "C", "C++", "Network Programming", "AI"],
    github: "https://github.com/Noahxel/Zappy",
    live: "#"
  },
  {
    title: "R-Type",
    description: "A C++ cross-platform multiplayer R-Type game. A modern recreation of the classic 1987 shoot 'em up arcade game with network multiplayer support.",
    image: `${PUBLIC_URL}/images/rtype.png`,
    technologies: ["C++", "SFML", "Network Programming", "Game Development"],
    github: "https://github.com/Noahxel/R-Type",
    live: "#"
  },
  {
    title: "DanteStar",
    description: "A C maze generator and solver implementing advanced pathfinding algorithms and procedural generation techniques.",
    image: `${PUBLIC_URL}/images/dantestar.png`,
    technologies: ["C", "Algorithms", "Pathfinding"],
    github: "https://github.com/Noahxel/DanteStar",
    live: "#"
  },
  {
    title: "MyRPG",
    description: "An ambitious RPG game built from scratch in C, featuring custom game engine, graphics rendering, and game mechanics.",
    image: `${PUBLIC_URL}/images/myrpg.png`,
    technologies: ["C", "Game Development", "CSFML"],
    github: "https://github.com/Noahxel/MyRPG",
    live: "#"
  },
  {
    title: "Arcade",
    description: "C++ Arcade games combined with dynamic graphic libraries. A versatile gaming platform that supports multiple graphic engines and game types.",
    image: `${PUBLIC_URL}/images/arcade.png`,
    technologies: ["C++", "SDL2", "SFML", "NCurses"],
    github: "https://github.com/Noahxel/Arcade",
    live: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative group aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="px-4 py-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className="px-4 py-2 bg-secondary text-primary rounded-full hover:bg-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary text-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 