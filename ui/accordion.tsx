import styled from 'styled-components';
import type React from 'react';
import {
  Accordion,
  AccordionItem as Item,
  type AccordionItemProps,
} from '@szhsin/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Wrapper for the Accordion
const Wrapper = styled.div`
  font-family: sans-serif;
  margin-top: 1rem;
  //   border-top: 1px solid #ccc;
`;

// Define props for the ItemWithChevron component
interface ItemWithChevronProps extends AccordionItemProps {
  header: React.ReactNode;
}

// Accordion Item with Chevron Component
const ItemWithChevron: React.FC<ItemWithChevronProps> = ({
  header,
  ...rest
}) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <ChevronDownIcon className="h-4 w-4" />
      </>
    }
  />
);

// Styled Accordion Item Component
const AccordionItem = styled(ItemWithChevron)`
  //   border-bottom: 1px solid #ccc;

  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: 600;
      text-align: left;
      color: #a1a1aa;
      background-color: transparent;
      border: 1 solid transparent;
      border-radius: 5px;

      &:hover {
        background-color: #27272a;
        color: #d4d4d8;
      }
    }

    &-content {
      transition: height 0.25s cubic-bezier(0, 0, 0, 1);
    }

    &-panel {
      padding: 1rem;
    }
  }

  .chevron-down {
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
      background-color: #27272a;
    }

    .chevron-down {
      transform: rotate(180deg);
    }
  }
`;

export { Wrapper, Accordion, AccordionItem };
