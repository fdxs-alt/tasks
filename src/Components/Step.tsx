import React from "react";

interface Props {
  buttonText?: string;
}
const Step: React.FC<Props> = ({ buttonText, children }) => {
  return (
    <div>
      {children}:
      {buttonText}
    </div>
  );
};

export default Step;
