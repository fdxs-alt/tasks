import React from "react";
import { useModalContext } from "./ModalContext";

export interface IFooter {
  callToAction: string;
}
const Footer: React.FC<IFooter> = ({ callToAction }) => {
  const { toggle } = useModalContext();

  const callToActionAction = () => {
    toggle();
    alert(callToAction);
  };

  return (
    <div>
      <button onClick={() => toggle()}>Cancel</button>
      <button onClick={() => callToActionAction()}>{callToAction}</button>
    </div>
  );
};

export default Footer;
