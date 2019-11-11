/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { Text } from "@hackthenorth/north";

import copy from "copy";
import useWindowWidth from "hooks/useWindowWidth";
import SectionWrapper from "components/SectionWrapper";

import Column from "./Column";

const FAQWrapper = styled(SectionWrapper)`
  padding-top: 26px;
  color: ${({ theme }) => theme.globalConstants.color.textDark};
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const FAQ: React.FC = () => {
  const isMobile = useWindowWidth() <= 768;
  return (
    <FAQWrapper id="faq">
      <Text as="h1" variant="sectionHeading">
        {copy.faq.title}
      </Text>
      <Body>
        <Text as="h2" variant="sectionHeading">
          {copy.faq.contact}
        </Text>
      </Body>
      <Body>
        <Text as="h2" variant="sectionHeading">
          {copy.faq.fax}
        </Text>
      </Body>
      <Body>
        <Text as="h2" variant="sectionHeading">
          {copy.faq.email}
        </Text>
      </Body>
      <Body>
        <Text as="h2" variant="sectionHeading">
          {copy.faq.address}
        </Text>
      </Body>
      <Body>
        <Text as="h2" variant="sectionHeading">
          {copy.faq.postal}
        </Text>
      </Body>
    </FAQWrapper>
  );
};

export default FAQ;
