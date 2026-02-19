export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    // Network errors
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return 'Unable to connect. Please check your internet connection.';
    }
    
    // Timeout errors
    if (error.message.includes('timeout') || error.message.includes('aborted')) {
      return 'Request timed out. Please try again.';
    }
    
    // Return the error message if it's user-friendly
    if (error.message.length < 100 && !error.message.includes('stack')) {
      return error.message;
    }
    
    return 'An unexpected error occurred. Please try again later.';
  }
  
  return 'Something went wrong. Please try again.';
};

export const fetchWithErrorHandling = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const isNetworkError = (error: unknown): boolean => {
  if (error instanceof Error) {
    return error.message.includes('fetch') || 
           error.message.includes('network') ||
           error.message.includes('Failed to fetch');
  }
  return false;
};

export const isTimeoutError = (error: unknown): boolean => {
  if (error instanceof Error) {
    return error.message.includes('timeout') || 
           error.message.includes('aborted');
  }
  return false;
};
