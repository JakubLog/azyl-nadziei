import React, { createContext, useState, useContext } from 'react';

interface contextProps {
  error: string | null;
  dispatchError: (message: string) => void;
}

const ErrorContext = createContext<contextProps>({
  error: 'Default error',
  dispatchError: (message: string) => console.error(message)
});
const ErrorProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<null | string>('aa');

  const dispatchError = (message: string): void => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 7000);
  };

  const value: contextProps = {
    error,
    dispatchError
  };

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export const useError = (): contextProps => {
  const error = useContext(ErrorContext);

  if (!error) console.error('Something went wrong with error handling. Please contact with support!');

  return error;
};

export default ErrorProvider;
