import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import PageTransition from './components/PageTransition';
import NavigationArrows from './components/NavigationArrows';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = useCallback((page: string) => {
    if (page === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPage(page);
    
    // Reset transition state after animation
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPage, isTransitioning]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onPageChange={handlePageChange} />;
      case 'about':
        return <About />;
      case 'expertise':
        return <Expertise />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-primary via-primary to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute left-[10%] top-[20%] w-72 h-72 bg-accent opacity-20 rounded-full filter blur-[120px]" />
          <div className="absolute right-[10%] bottom-[20%] w-72 h-72 bg-accent opacity-20 rounded-full filter blur-[120px]" />
        </div>
      </div>

      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="relative h-[calc(100vh-4rem)]">
        <PageTransition currentPage={currentPage}>
          {renderPage()}
        </PageTransition>
      </main>
      <NavigationArrows currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
