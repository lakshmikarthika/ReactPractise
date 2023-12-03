
import { ErrorBoundary } from 'react-error-boundary';   // install library

const YourComponent = () => {
  // Your component code
};

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h2>Something went wrong:</h2>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

// Usage
const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {/* Optional reset logic */}}>
      <YourComponent />
    </ErrorBoundary>
  );
};
