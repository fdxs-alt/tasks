import React, { createContext, useContext, useState } from "react";
import Content from "./Content";
import Footer, { IFooter } from "./Footer";
import Header, { IHeader } from "./Header";

interface ModalContextTypes {
  open: boolean;
  toggle: () => void;
}

interface ModalComposition {
  Header: React.FC<IHeader>;
  Content: React.FC;
  Footer: React.FC<IFooter>;
}

const ModalContext = createContext<ModalContextTypes | undefined>(undefined);

const Modal: React.FC & ModalComposition = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <ModalContext.Provider value={{ open, toggle }}>
      <button onClick={toggle}>Open me</button>
      {open && children}
    </ModalContext.Provider>
  );
};

Modal.Content = Content;
Modal.Header = Header;
Modal.Footer = Footer;

export default Modal;

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Context does not exist");

  return context;
};
