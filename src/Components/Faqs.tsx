import React, { useState } from "react";
import FaqItem from "./FaqItem";
export type Faq = {
  label: string;
  description: string;
};
interface Props {
  faqs: Faq[];
}

const Faqs: React.FC<Props> = ({ faqs }) => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      {faqs.map((el: Faq, i: number) => (
        <FaqItem
          faq={el}
          selected={selected}
          setSelected={setSelected}
          key={i}
        />
      ))}
    </div>
  );
};

export default Faqs;
