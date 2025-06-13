import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message || 'Something went wrong.' };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundary Caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: '2px solid red', padding: '20px' }}>
          <h4>⚠️ An error occurred:</h4>
          <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const withErrorBoundary = (WrappedComponent) => {
  return function (props) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default withErrorBoundary;