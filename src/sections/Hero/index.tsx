import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SectionWrapper from "components/SectionWrapper";
import MailingListSignup from "components/MailingListSignup";

import GradientBg from "static/img/hero/gradient.svg";
import Shanghai from "static/img/photos/shanghai.jpg";

import Lottie from "react-lottie";
import animationData from "sections/Hero/lottie.json";
import animationDataMobile from "sections/Hero/data.json";

import TextLoop from "react-text-loop";
import Parallax from "react-rellax";
import { Text } from "@hackthenorth/north";

import siteCopy from "copy";

const ShanghaiWrapper = styled.div`
  width: calc(100% + 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-left: -70px;
`;

const ShanghaiIllustration = styled.img`
  width: 100%;
  opacity: 80%;
  ${props => props.theme.mediaQueries.medium`
    margin-bottom: 85px;
  `}
  ${props => props.theme.mediaQueries.mobile`
    height: 125px;
    margin-right: 0;
  `}
`;

const Shanghailol = () => (
  <ShanghaiWrapper>
    <ShanghaiIllustration src={siteCopy.about.shanghai} alt="shanghai" />
  </ShanghaiWrapper>
);

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const today = new Date();
const hour = today.getHours();
const backgroundPercentage = hour * (100 / 24);

const HeroWrapper = styled(SectionWrapper)`
  padding-top: 70px;
  max-height: 1500px;
  max-width: 100%;
  overflow: hidden;
  background-image: url(${Shanghai});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 80%;

  ${props => props.theme.mediaQueries.tablet`
    height: auto;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    min-height: 100vh;
  `}

  .shppctitle {
    margin-bottom: 20px;
  }

  & > .parallax {
    position: relative;

    ${props => props.theme.mediaQueries.tablet`
    left: -70px;
  `}
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  ${props => props.theme.mediaQueries.tablet`
    text-align: center;
    margin-top: 70px;
  `}
`;

interface ImageProps {
  left?: string;
  bottom?: string;
}

const Image = styled.img<ImageProps>`
  width: 1150px;
  overflow-x: hidden;
  position: absolute;
  left: ${props => (props.left ? props.left : "0")};
  bottom: ${props => (props.bottom ? props.bottom : "0")};
  pointer-events: none;
`;

const ImageFg = styled(Image)`
  width: 110vw;
  left: -70px;

  ${props => props.theme.mediaQueries.tablet`
    width: 150%;
    left: 0;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 110%;
  `}

  ${props => props.theme.mediaQueries.mobile`
    width: 130%;
    top: 350px;
  `}

  ${props => props.theme.mediaQueries.smallMobile`
    top: 275px;
  `}
`;

const ParallaxWrapper = styled.div`
  width: 1150px;
  margin-top: 340px;
  margin-left: auto;
  margin-right: auto;
`;

const LottieWrapper = styled.div`
  width: 1475px;
  position: absolute;
  left: -206px;
  bottom: 0;
  pointer-events: none;
`;

const MobileWrapper = styled.div`
  width: 135%;
  pointer-events: none;
  margin-top: -23px;

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 100vh;
    margin-left: -105px;
  `}
`;

const style = {
  willChange: "transform"
};

const Hero = () => {
  const { width } = useWindowDimensions();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData
  };
  const mobileOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataMobile
  };

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
    return;
  }, []);

  return (
    <HeroWrapper id="home">
      CHANGE COLOUR HERE
      <Content>
        <Text variant="header" as="h1" className="shppctitle">
          {siteCopy.hero.name}
        </Text>
        <Text variant="header" as="h1">
          {siteCopy.hero.firstLine}{" "}
          <TextLoop>
            {siteCopy.hero.keyWords.map(word => (
              <span key={word}>{word}</span>
            ))}
          </TextLoop>
        </Text>
        <Text variant="header" as="h1">
          {siteCopy.hero.secondLine}
        </Text>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
