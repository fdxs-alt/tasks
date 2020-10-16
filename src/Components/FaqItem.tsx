import React, { useCallback, useState } from "react";
import { Faq } from "./Faqs";
import styled from "styled-components";

const FaqWrapper = styled.div`
  border: 1px solid blue;
  padding: 1.5rem;
  margin-bottom: 1.3rem;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
    border: 1px solid black;
  }
`;

interface Props {
  faq: Faq;
  force?: boolean;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const FaqItem: React.FC<Props> = ({
  faq,
  setSelected,
  selected,
  force = false,
}) => {
  const [itemSelected, setItemSelected] = useState(false);

  const handleClick = useCallback(() => {
    if (force) {
      setItemSelected(true);
    } else {
      setSelected(faq.label);
    }
  }, []);

  return (
    <FaqWrapper onClick={() => handleClick()}>
      <h4> {faq.label}</h4>
      {selected === faq.label || itemSelected ? (
        <div>{faq.description}</div>
      ) : null}
    </FaqWrapper>
  );
};

export default FaqItem;
