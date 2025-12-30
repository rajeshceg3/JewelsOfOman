import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-oman-sky py-24 text-center">
      <div className="max-w-2xl mx-auto px-6 space-y-8">
        <p className="font-serif text-oman-dark/60 italic text-lg">
          "To leave is to feel a sudden, sharp absence."
        </p>
        <div className="w-8 h-[1px] bg-oman-rock/30 mx-auto"></div>
        <p className="text-xs tracking-[0.2em] text-oman-rock/60 uppercase font-sans">
          Designed in Silence
        </p>
      </div>
    </footer>
  );
};
