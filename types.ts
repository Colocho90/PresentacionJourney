
import React from 'react';

export enum SlideLayout {
  Title = 'title',
  Intro = 'intro',
  Timeline = 'timeline',
  Process = 'process',
  Grid = 'grid',
  Benefits = 'benefits',
  Conclusion = 'conclusion',
  Contact = 'contact',
}

export interface IconProps {
  className?: string;
}

export type IconComponent = React.FC<IconProps>;

export interface SlideDataItem {
  icon: IconComponent;
  title?: string;
  description: string;
}

export interface Slide {
  layout: SlideLayout;
  title?: string;
  subtitle?: string;
  mainText?: string;
  impactPhrase?: string;
  items?: SlideDataItem[];
  backgroundImage?: string;
  contactInfo?: {
    name: string;
    title: string;
    email: string;
    phone: string;
  };
}
