import React from 'react';
import type { Slide } from '../types';
import { SlideLayout } from '../types';
import { SalesforceLogo, RocketIcon } from './Icons';

// Define layout components here to keep them co-located
const TitleSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
  <div className="relative w-full h-full text-white flex flex-col justify-center items-center text-center p-12">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
    </div>
    <div className="relative z-10">
      <h1 className="text-6xl font-bold leading-tight drop-shadow-lg">{slide.title}</h1>
      <p className="mt-4 text-2xl font-light drop-shadow-md">{slide.subtitle}</p>
    </div>
  </div>
);

const IntroSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
    <div className="w-full h-full bg-white flex flex-col justify-center p-16 text-gray-800">
        <h2 className="text-4xl font-bold text-gray-700 mb-12">{slide.title}</h2>
        <div className="flex items-center space-x-16">
            <div className="w-1/3 flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mb-4 overflow-hidden">
                   <img src="https://picsum.photos/seed/sophia/200/200" alt="Sophia" className="w-full h-full object-cover" />
                </div>
                <p className="text-xl font-semibold text-blue-600">{slide.mainText}</p>
            </div>
            <div className="w-2/3 space-y-6">
                {slide.items?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <item.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                        <p className="text-xl text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <p className="text-center text-xl text-gray-500 mt-auto">{slide.impactPhrase}</p>
    </div>
);

const TimelineSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
    <div className="w-full h-full bg-white flex flex-col justify-center p-16">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-16">{slide.title}</h2>
        <div className="flex items-center justify-between w-full">
            {slide.items?.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center w-1/4">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
                    </div>
                    {index < (slide.items?.length ?? 0) - 1 && (
                        <div className="flex-grow h-1 bg-blue-200 mx-4"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
        <p className="text-center text-xl text-gray-500 mt-auto">{slide.impactPhrase}</p>
    </div>
);

const ProcessSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
    <div className="w-full h-full bg-gray-50 flex flex-col p-12">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">{slide.title}</h2>
        <div className="flex-grow flex items-center justify-around">
            {slide.items?.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center w-48">
                        <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-3">
                            <item.icon className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-blue-700">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    {index < (slide.items?.length ?? 0) - 1 && (
                        <div className="text-gray-300 text-3xl font-light mx-2">&rarr;</div>
                    )}
                </React.Fragment>
            ))}
        </div>
        <p className="text-center text-lg text-gray-500 mt-auto">{slide.impactPhrase}</p>
    </div>
);

const GridSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
    <div className="w-full h-full bg-white flex flex-col p-12">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">{slide.title}</h2>
        <div className="flex-grow grid grid-cols-2 grid-rows-2 gap-8">
            {slide.items?.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg flex space-x-4 items-start">
                    <item.icon className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-center text-lg text-gray-500 mt-auto pt-8">{slide.impactPhrase}</p>
    </div>
);

const BenefitsSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
  <div className="w-full h-full bg-gray-50 flex flex-col justify-center items-center p-12">
    <h2 className="text-4xl font-bold text-gray-700 mb-12">{slide.title}</h2>
    <div className="grid grid-cols-2 gap-x-16 gap-y-10">
      {slide.items?.map((item, index) => (
        <div key={index} className="flex items-center space-x-6">
          <item.icon className="w-16 h-16 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-semibold text-blue-700">{item.title}</h3>
            <p className="text-gray-600 text-lg mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center text-xl text-gray-500 mt-auto pt-8">{slide.impactPhrase}</p>
  </div>
);


const ConclusionSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
  <div className="w-full h-full bg-white flex flex-col justify-center items-center text-center p-16">
      <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center mb-8">
        <RocketIcon className="w-16 h-16 text-blue-500"/>
      </div>
      <h2 className="text-4xl font-bold text-gray-800">{slide.title}</h2>
      <p className="text-2xl text-blue-600 font-semibold my-4">{slide.mainText}</p>
      <p className="text-xl text-gray-600 max-w-3xl">{slide.subtitle}</p>
      <p className="text-2xl text-gray-500 font-semibold mt-auto">{slide.impactPhrase}</p>
  </div>
);

const ContactSlide: React.FC<{ slide: Slide }> = ({ slide }) => (
  <div className="relative w-full h-full text-white flex flex-col justify-center items-center text-center p-12">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
    </div>
    <div className="relative z-10">
      <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">{slide.title}</h1>
      <p className="mt-4 text-3xl font-light drop-shadow-md">{slide.subtitle}</p>
      <div className="mt-12 text-xl bg-black bg-opacity-20 backdrop-blur-sm p-8 rounded-lg">
          <p className="font-bold text-2xl">{slide.contactInfo?.name}</p>
          <p className="text-blue-300">{slide.contactInfo?.title}</p>
          <p className="mt-4">{slide.contactInfo?.email}</p>
          <p>{slide.contactInfo?.phone}</p>
      </div>
    </div>
  </div>
);

export const SlideRenderer: React.FC<{ slide: Slide }> = ({ slide }) => {
  const renderSlide = () => {
    switch (slide.layout) {
      case SlideLayout.Title:
        return <TitleSlide slide={slide} />;
      case SlideLayout.Intro:
        return <IntroSlide slide={slide} />;
      case SlideLayout.Timeline:
        return <TimelineSlide slide={slide} />;
      case SlideLayout.Process:
        return <ProcessSlide slide={slide} />;
      case SlideLayout.Grid:
        return <GridSlide slide={slide} />;
      case SlideLayout.Benefits:
        return <BenefitsSlide slide={slide} />;
      case SlideLayout.Conclusion:
        return <ConclusionSlide slide={slide} />;
      case SlideLayout.Contact:
        return <ContactSlide slide={slide} />;
      default:
        return <div>Slide layout not found</div>;
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-white shadow-2xl rounded-lg">
      {renderSlide()}
      {slide.layout !== SlideLayout.Title && (
        <SalesforceLogo className="absolute bottom-4 right-4 w-10 h-10 opacity-70" />
      )}
    </div>
  );
};