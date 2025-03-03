import React from 'react';
import './css/FrameLayout.css';

const FrameLayout = ({ children, activeIndex }) => {
  return (
    <div className="frame-layout">
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            display: activeIndex === index ? 'block' : 'none', // Show only the active child
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FrameLayout;