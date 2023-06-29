import {createContext, useContext, useState} from "react";

// a context in React is like a global object for a tree of React components.
const AlertContext = createContext(undefined);
// alertContext has two properties - Provider & Consumer
// Provider - set the value of context & Consumer - read the value of context



// AlertProvider: This is a component that wraps its children with the Provider component from AlertContext. It's used to set the value of the context. 
// In this case, the value of the context is an object with isOpen, type, message, onOpen, and onClose.
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
