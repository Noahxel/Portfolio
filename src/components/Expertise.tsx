import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
  skills: SkillCategory;
}

const Expertise = () => {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const { t } = useTranslation();

  const expertiseItems: ExpertiseItem[] = [
    {
      title: t('expertise.fullstack.title'),
      description: t('expertise.fullstack.description'),
      icon: "💻",
      skills: {
        name: t('expertise.fullstack.category'),
        skills: ["React - React Native", "Node.js", "CSS - Tailwind", "Full Stack Development", "HTML", "SQL"]
      }
    },
    {
      title: t('expertise.systems.title'),
      description: t('expertise.systems.description'),
      icon: "⚡",
      skills: {
        name: t('expertise.systems.category'),
        skills: ["C / C++", "Python", "JavaScript", "PHP", "Assembly (Basic)", "Haskell (Basic)"]
      }
    },
    {
      title: t('expertise.testing.title'),
      description: t('expertise.testing.description'),
      icon: "🔍",
      skills: {
        name: t('expertise.testing.category'),
        skills: ["E2E Testing", "Google Maps API"]
      }
    },
    {
      title: t('expertise.devops.title'),
      description: t('expertise.devops.description'),
      icon: "🛠️",
      skills: {
        name: t('expertise.devops.category'),
        skills: ["Docker", "GitHub", "VS Code - Cursor - Visual Studio"]
      }
    },
    {
      title: t('expertise.design.title'),
      description: t('expertise.design.description'),
      icon: "🎨",
      skills: {
        name: t('expertise.design.category'),
        skills: ["Figma", "Notion", "Microsoft Office Suite"]
      }
    },
    {
      title: t('expertise.languages.title'),
      description: t('expertise.languages.description'),
      icon: "🌍",
      skills: {
        name: t('expertise.languages.category'),
        skills: [t('expertise.languages.french'), t('expertise.languages.english')]
      }
    }
  ];

  const toggleCard = (title: string) => {
    setExpandedCards((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-secondary mb-10 text-center"
        >
          {t('expertise.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {expertiseItems.map((item, index) => {
            const isExpanded = expandedCards.includes(item.title);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-tertiary rounded-lg border border-secondary hover:border-secondary transition-colors duration-300`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCard(item.title)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold text-secondary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-textSecondary mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-end text-secondary hover:text-secondary transition-colors">
                    <span className="text-sm mr-2">{t('expertise.seeSkills')}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="h-5 w-5" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <h4 className="text-lg font-semibold text-secondary mb-4">
                          {item.skills.name}
                        </h4>
                        <ul className="space-y-2">
                          {item.skills.skills.map((skill) => (
                            <motion.li
                              key={skill}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-textSecondary flex items-center"
                            >
                              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                              {skill}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 