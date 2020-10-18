import React, { Children,  useState } from "react";


const Stepper: React.FC = ({ children }) => {
  const mappedChildren = Children.toArray(children).filter((c: any) => c.props.buttonText);

  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < mappedChildren.length - 1) setStep((s) => s + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  return (
    <div>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
      {mappedChildren[step]}
      <h1>Actual step: {step + 1}</h1>
    </div>
  );
};

export default Stepper;
