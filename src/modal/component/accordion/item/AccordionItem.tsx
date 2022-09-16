import "./_accordion-item.scss";

import React from "react";

import AccordionButton from "../button/AccordionButton";
import AccordionPanel from "../panel/AccordionPanel";
import {AccordionData} from "../util/accordionTypes";
import AccordionCopyButton from "../copy-button/AccordionCopyButton";

interface AccordionItemProps {
  data: AccordionData;
  onToggle: VoidFunction;
  isActive: boolean;
}

function AccordionItem({data, onToggle, isActive}: AccordionItemProps) {
  const {title, description, code} = data;

  return (
    <li
      className={`defly-wallet-accordion-item ${
        isActive ? "defly-wallet-accordion-item--active" : ""
      }`}>
      <AccordionButton onClick={onToggle}>{title}</AccordionButton>
      <AccordionCopyButton>{code}</AccordionCopyButton>
      <AccordionPanel code={code}>{description}</AccordionPanel>
    </li>
  );
}

export default AccordionItem;