import React from "react";
import { useModalContext } from "./ModalContext";

export interface IHeader {
  title: string;
}
const Header: React.FC<IHeader> = ({ title }) => {
  const { toggle } = useModalContext();

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => toggle()}>Close</button>
    </div>
  );
};

export default Header;
