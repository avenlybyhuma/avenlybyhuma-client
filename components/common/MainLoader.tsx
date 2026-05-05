import React from 'react';

const MainLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-sand flex flex-col items-center justify-center z-[100] animate-in fade-in duration-700">
      <div className="loader-content flex flex-col items-center gap-8">
        <div className="text-3xl tracking-[0.5em] font-light text-primary uppercase animate-pulse">AVENLY</div>
        <div className="w-48 h-[1px] bg-primary/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-sage w-1/3 animate-[horizontalMove_1.8s_infinite_ease-in-out]" />
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
