// Analytics utility for tracking user interactions
// This is a framework-agnostic implementation that can be connected to any analytics provider

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface PageViewEvent {
  path: string;
  title: string;
}

// Check if user has opted out of analytics
const hasOptedOut = (): boolean => {
  return localStorage.getItem('analytics_opt_out') === 'true';
};

// Opt out of analytics
export const optOutAnalytics = (): void => {
  localStorage.setItem('analytics_opt_out', 'true');
};

// Opt in to analytics
export const optInAnalytics = (): void => {
  localStorage.removeItem('analytics_opt_out');
};

// Track page view
export const trackPageView = (event: PageViewEvent): void => {
  if (hasOptedOut()) return;

  // This is where you would send data to your analytics provider
  // Example: Google Analytics, Plausible, Fathom, etc.
  console.log('[Analytics] Page View:', event);

  // Example for Google Analytics (gtag)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: event.path,
      page_title: event.title,
    });
  }
};

// Track custom event
export const trackEvent = (event: AnalyticsEvent): void => {
  if (hasOptedOut()) return;

  console.log('[Analytics] Event:', event);

  // Example for Google Analytics (gtag)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// Track external link click
export const trackExternalLink = (url: string, label?: string): void => {
  trackEvent({
    category: 'External Link',
    action: 'Click',
    label: label || url,
  });
};

// Track form submission
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackEvent({
    category: 'Form',
    action: success ? 'Submit Success' : 'Submit Error',
    label: formName,
  });
};

// Track download
export const trackDownload = (fileName: string): void => {
  trackEvent({
    category: 'Download',
    action: 'Click',
    label: fileName,
  });
};

// Hook for tracking page views on route changes
export const usePageTracking = () => {
  if (typeof window === 'undefined') return;

  const trackCurrentPage = () => {
    trackPageView({
      path: window.location.pathname,
      title: document.title,
    });
  };

  // Track initial page load
  trackCurrentPage();

  // Return function to track subsequent page changes
  return trackCurrentPage;
};
