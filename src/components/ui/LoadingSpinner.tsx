const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-700 border-t-green-400 rounded-full animate-spin"></div>
        <div className="mt-4 text-center text-gray-400 font-mono">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
