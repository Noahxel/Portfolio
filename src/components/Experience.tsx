import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const experiences = [
  {
    key: 'moove',
    technologies: [
      "TypeScript", "React", "Node.js", "Prisma ORM", "HTML", "E2E Testing", "CRM", "Analytics", "Tailwind CSS"
    ]
  },
  {
    key: 'optivvia',
    technologies: [
      ".NET", "C#", "CSS", "Github", "Frontend", "Backend", "Integration"
    ]
  },
  {
    key: 'directemploi',
    technologies: [
      "HTML", "CSS", "Modern UI", "Refonte", "Frontend", "Responsive", "Teamwork"
    ]
  }
];

const education = [
  {
    key: 'epitech',
    technologies: ["Github", "Figma", "C", "C++", "Python", "Projet", "Teamwork"]
  },
  {
    key: 'bit',
    technologies: ["Exchange", "Computer Science", "International"]
  }
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            {t('experience.title')}
          </h2>
          <div className="space-y-8 mb-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary" />
                <div className="bg-tertiary p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-textPrimary">
                    {t(`experience.${exp.key}.title`)}
                  </h3>
                  <p className="text-secondary mb-2">
                    {t(`experience.${exp.key}.company`)} • {t(`experience.${exp.key}.period`)}
                  </p>
                  <p className="text-textSecondary mb-4">
                    {t(`experience.${exp.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
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
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            {t('experience.education')}
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary" />
                <div className="bg-tertiary p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-textPrimary">
                    {t(`experience.${edu.key}.school`)}
                  </h3>
                  <p className="text-secondary mb-2">
                    {t(`experience.${edu.key}.degree`)} • {t(`experience.${edu.key}.period`)} • {t(`experience.${edu.key}.location`)}
                  </p>
                  <p className="text-textSecondary mb-4">
                    {t(`experience.${edu.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech, techIndex) => (
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

export default Experience; 