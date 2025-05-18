import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface NavigationArrowsProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const NavigationArrows = ({ currentPage, onPageChange }: NavigationArrowsProps) => {
  const pages = ['home', 'about', 'expertise', 'experience', 'projects', 'contact'];
  const currentIndex = pages.indexOf(currentPage);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onPageChange(pages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      onPageChange(pages[currentIndex + 1]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 hidden md:block">
      {currentIndex > 0 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={handlePrevious}
          className="fixed left-6 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-tertiary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeftIcon className="h-6 w-6 text-secondary" />
        </motion.button>
      )}
      {currentIndex < pages.length - 1 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={handleNext}
          className="fixed right-6 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-tertiary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRightIcon className="h-6 w-6 text-secondary" />
        </motion.button>
      )}
    </div>
  );
};

export default NavigationArrows; 