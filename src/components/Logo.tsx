import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-2xl font-bold font-mono">
        <span className="text-primary">RX</span>
        <span className="text-accent ml-1">Design</span>
      </div>
    </div>
  );
};

export default Logo;