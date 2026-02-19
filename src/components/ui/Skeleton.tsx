interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = ({
  className = '',
  variant = 'text',
  width,
  height
}: SkeletonProps) => {
  const baseStyles = 'animate-pulse bg-gray-300 dark:bg-gray-700';
  
  const variantStyles = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const style = {
    width: width || (variant === 'circular' ? '40px' : '100%'),
    height: height || (variant === 'circular' ? '40px' : undefined)
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
    />
  );
};

export const SkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
      <Skeleton variant="rectangular" height="192px" className="mb-4" />
      <Skeleton width="60%" className="mb-2" />
      <Skeleton width="100%" className="mb-2" />
      <Skeleton width="80%" className="mb-4" />
      <div className="flex gap-2">
        <Skeleton width="60px" height="24px" />
        <Skeleton width="60px" height="24px" />
        <Skeleton width="60px" height="24px" />
      </div>
    </div>
  );
};
