import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onPageChange: (page: string) => void;
}

const Hero = ({ onPageChange }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium text-lg mb-4"
            >
              {t('hero.greeting')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-4"
            >
              Noah Le Veve
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6"
            >
              {t('hero.headline')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-textSecondary text-lg mb-8 max-w-xl"
            >
              {t('hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <button
                onClick={() => onPageChange('projects')}
                className="btn-primary"
              >
                {t('hero.cta')}
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
              >
                {t('hero.contact')}
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className="relative hidden md:block"
          >
            <div className="relative w-[380px] h-[380px] mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border-2 border-secondary animate-spin-slow-reverse" />
              <div className="absolute inset-4 rounded-full border-2 border-secondary animate-spin-slower" />
              
              {/* Profile image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-secondary via-secondary to-transparent backdrop-blur-sm">
                <img
                  src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                  alt="Noah Le Veve"
                  className="w-full h-full object-cover rounded-full p-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;