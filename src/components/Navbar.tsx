import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { UKFlag, FRFlag } from './Flags';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar = ({ currentPage, onPageChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('navbar.home'), id: 'home' },
    { name: t('navbar.about'), id: 'about' },
    { name: t('navbar.expertise'), id: 'expertise' },
    { name: t('navbar.experience'), id: 'experience' },
    { name: t('navbar.projects'), id: 'projects' },
    { name: t('navbar.contact'), id: 'contact' }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const handlePageClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-secondary">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-secondary cursor-pointer"
            onClick={() => handlePageClick('home')}
          >
            Noah Le Veve
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="flex space-x-8 items-center">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handlePageClick(item.id)}
                    className={`relative text-textSecondary transition-all duration-300 min-w-[80px] ${
                      isActive ? 'text-secondary' : ''
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(var(--color-secondary), 0.1)',
                      borderRadius: '0.375rem'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${item.id}-${i18n.language}`}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="block px-3 py-1"
                      >
                        {item.name}
                      </motion.span>
                    </AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
            
            {/* Language Toggle - Desktop */}
            <motion.button
              onClick={toggleLanguage}
              className="ml-4 px-2 py-1 rounded-md bg-tertiary transition-all duration-300 relative overflow-hidden"
              style={{ width: '120px', height: '32px' }}
            >
              <motion.div
                className="absolute inset-0 flex items-center"
                initial={false}
                animate={{
                  x: i18n.language === 'en' ? '0%' : '50%'
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                <div className="w-[60px] h-full rounded-md bg-secondary absolute" />
              </motion.div>
              <div className="relative flex justify-between w-full">
                <div className="flex items-center justify-center gap-1 w-[45px] text-white">
                  <UKFlag />
                  <span>EN</span>
                </div>
                <div className="flex items-center justify-center gap-1 w-[45px] text-white">
                  <FRFlag />
                  <span>FR</span>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Mobile Header Items */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Toggle - Mobile */}
            <motion.button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-md bg-tertiary transition-all duration-300 relative overflow-hidden"
              style={{ width: '90px', height: '28px' }}
            >
              <motion.div
                className="absolute inset-0 flex items-center"
                initial={false}
                animate={{
                  x: i18n.language === 'en' ? '0%' : '50%'
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30
                }}
              >
                <div className="w-[45px] h-full rounded-md bg-secondary absolute" />
              </motion.div>
              <div className="relative flex justify-between w-full">
                <div className="flex items-center justify-center w-[27px] text-white">
                  <UKFlag />
                </div>
                <div className="flex items-center justify-center w-[27px] text-white">
                  <FRFlag />
                </div>
              </div>
            </motion.button>

            {/* Menu Button */}
            <button
              className="text-textSecondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-primary/95"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handlePageClick(item.id)}
                      className={`w-full text-left px-3 py-2 text-textSecondary hover:text-secondary transition-colors duration-300 ${
                        isActive ? 'text-secondary border-l-2 border-secondary' : ''
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${item.id}-${i18n.language}`}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 