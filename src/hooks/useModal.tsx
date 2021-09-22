import React, { createContext, useContext, useState } from 'react';
import { useError } from './useError';

interface buttonProps {
  text: string;
  onClick: () => void;
}

interface contextProps {
  isOpen: boolean;
  openModal: (title: string, content: JSX.Element, rightCorner?: JSX.Element) => void;
  closeModal: () => void;
  modal: {
    title: string;
    content: JSX.Element;
    rightCorner: JSX.Element;
  };
}

const ModalContext = createContext<contextProps>({
  isOpen: false,
  openModal: (title: string, content: JSX.Element, rightCorner?: JSX.Element, buttons?: buttonProps[]) => console.log('Opening modal'),
  closeModal: () => console.log('Opening modal'),
  modal: { title: '', content: <div>aaa</div>, rightCorner: <div>tekst</div> }
});
const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setOpenState] = useState(false);
  const [modal, setModal] = useState({
    title: 'Tytuł',
    content: <div>Treść</div>,
    rightCorner: <div>teskt</div>
  });

  const openModal = (title: string, content: JSX.Element, rightCorner: JSX.Element = <div></div>) => {
    setModal({ title, content, rightCorner });
    setOpenState(true);
  };

  const closeModal = () => {
    setOpenState(false);
    setModal({ title: 'Tytuł', content: <div>Treść</div>, rightCorner: <div>teskt</div> });
  };

  const value: contextProps = {
    isOpen,
    openModal,
    closeModal,
    modal
  };
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = (): contextProps => {
  const { dispatchError } = useError();

  const modal = useContext(ModalContext);
  if (!modal) dispatchError('Something went wrong with modals! Please contact with support!');
  return modal;
};

export default ModalProvider;
