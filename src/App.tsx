import Faqs from "./Components/Faqs";
import React from "react";
import faqs from "./Data/faqs";
const App: React.FC = () => {
  return (
    <div>
      <Faqs faqs={faqs} />
    </div>
  );
};

export default App;
