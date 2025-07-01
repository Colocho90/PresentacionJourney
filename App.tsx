
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ArrowLeft, ArrowRight, SalesforceLogo } from './components/Icons';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === SLIDES_DATA.length - 1 ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? 0 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const slide = SLIDES_DATA[currentSlide];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <SalesforceLogo className="w-8 h-8"/>
            <span className="text-gray-600 font-semibold">Universidad San Mateo</span>
        </div>
      </header>

      <main className="w-full max-w-6xl aspect-w-16 aspect-h-9">
        <SlideRenderer key={currentSlide} slide={slide} />
      </main>

      <footer className="w-full max-w-6xl mt-4 flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-gray-600 font-medium">
          {currentSlide + 1} / {SLIDES_DATA.length}
        </div>
        <button
          onClick={nextSlide}
          disabled={currentSlide === SLIDES_DATA.length - 1}
          className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </footer>
    </div>
  );
};

export default App;
