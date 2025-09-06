import React from 'react';

interface LoadingSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'product-card';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  className = '',
  count = 1,
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-md',
    'product-card': 'rounded-lg'
  };

  const getSkeletonStyle = () => {
    const style: React.CSSProperties = {};
    if (width) style.width = typeof width === 'number' ? `${width}px` : width;
    if (height) style.height = typeof height === 'number' ? `${height}px` : height;
    return style;
  };

  const renderSkeleton = () => (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={getSkeletonStyle()}
    />
  );

  const renderProductCardSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-64 w-full"></div>
        <div className="p-4 space-y-3">
          <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
          <div className="bg-gray-200 h-3 w-full rounded"></div>
          <div className="bg-gray-200 h-3 w-2/3 rounded"></div>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 h-4 w-20 rounded"></div>
            <div className="bg-gray-200 h-4 w-12 rounded"></div>
          </div>
          <div className="flex space-x-2">
            <div className="bg-gray-200 h-8 flex-1 rounded"></div>
            <div className="bg-gray-200 h-8 w-16 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (variant === 'product-card') {
    return (
      <>
        {Array.from({ length: count }, (_, index) => (
          <div key={index}>
            {renderProductCardSkeleton()}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;
