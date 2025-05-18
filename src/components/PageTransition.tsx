import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  currentPage: string;
}

const PageTransition = ({ children, currentPage }: PageTransitionProps) => {
  return (
    <div className="absolute inset-0 overflow-y-auto custom-scrollbar" style={{ top: '4rem', height: 'calc(100vh - 4rem)' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition; 