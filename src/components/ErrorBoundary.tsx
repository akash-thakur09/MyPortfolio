import { Component, type ReactNode, type ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // In production, you would log this to an error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen bg-gray-950 text-white flex items-center justify-center">
          <div className="text-center px-4 max-w-2xl">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-red-400 mb-4">Oops!</h1>
              <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
              <p className="text-gray-400 mb-8">
                We're sorry for the inconvenience. An unexpected error occurred.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-8 text-left">
                  <p className="text-red-400 font-mono text-sm mb-2">
                    {this.state.error.message}
                  </p>
                  <pre className="text-gray-500 text-xs overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="py-3 px-6 bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-colors"
              >
                Try Again
              </button>
              <Link
                to="/"
                className="py-3 px-6 bg-transparent hover:bg-gray-800 text-green-400 border border-green-400 font-bold rounded-lg transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
