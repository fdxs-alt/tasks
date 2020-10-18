import Stepper from "./Components/Stepper";
import React from "react";
import Step from "./Components/Step";

const App: React.FC = () => {
  return (
    <Stepper>
      <Step buttonText={"Krok 1"}>...</Step>
      <Step buttonText={"Krok 2"}>...</Step>
      <Step buttonText={"Krok 3"}>...</Step>
      <Step>...</Step>
      <Step buttonText={"Krok 5"}>...</Step>
    </Stepper>
  );
};

export default App;
