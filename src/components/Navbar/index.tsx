import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useWindowWidth from "hooks/useWindowWidth";
import useScrollDirection from "hooks/useScrollDirection";
import SectionWrapper from "components/SectionWrapper";

// import copy from "copy";
import { getLocalizedCopy } from "components/getLocalizedCopy";
import ReactFlagsSelect from "react-flags-select";

//import css module
import "react-flags-select/css/react-flags-select.css";

import { UnstyledButton } from "@hackthenorth/north";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import MenuIcon from "./MenuIcon";
import CallToActionButton from "./CallToActionButton";
import { animateInMenu, animateOutMenu } from "./animations";

import throttle from "lodash.throttle";
import smoothscroll from "smoothscroll-polyfill";

export interface ScrolledDownProps {
  scrolledDown: boolean;
}

interface NavBarProps extends ScrolledDownProps {
  hidden: boolean;
}

// this fixes the position: absolute/fixes bug on firefox
const RelativeWrapper = styled.div`
  position: relative;
`;

const NavBarContainer = styled.nav<NavBarProps>`
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  z-index: 10;

  transition: all 250ms ease;
  position: ${props => (props.scrolledDown ? "fixed" : "absolute")};
  background-color: ${({ scrolledDown, theme }) =>
    scrolledDown ? theme.globalConstants.color.textLight : "transparent"};
  transform: ${({ hidden }) =>
    hidden ? "translateY(-70px)" : "translateY(0)"};

  @media (hover: none) {
    & *:hover {
      opacity: 1 !important;
    }
  }
`;

const NavBarWidthLimiter = styled(SectionWrapper)`
  display: flex;
  align-items: center;

  overflow: visible;
  min-height: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

const NavLogoButton = styled(UnstyledButton)`
  transition: opacity 250ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;

const NavLogoImg = styled.img`
  width: 70px;
  height: 70px;
  &:hover {
    opacity: 0.8;
  }
`;

const LinksContainer = styled.div<ScrolledDownProps>`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: ${({ theme }) => theme.globalConstants.color.textDark};
  font-family: ${props => props.theme.globalConstants.fontFamily.text};
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const Circle = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 36px;
  right: 46px;
  width: 0px;
  height: 0px;
  background: ${props => props.theme.globalConstants.color.textDark};
  transition: all 300ms cubic-bezier(0, 0.995, 0.99, 1);

  &.expand {
    width: 2000px;
    height: 2000px;
    top: -560px;
    right: -565px;
    transition: all 400ms cubic-bezier(0, 0.995, 0.99, 1);
  }
`;

const NavBar: React.FC = () => {
  const width = useWindowWidth();
  const mobile = width <= 375;
  const tablet = width <= 768;
  const medium = width < 1024;

  const scrollDirection = useScrollDirection();
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [language, toggleLanguage] = useState("EN");

  const scrollTo = (id: string) => {
    toggleMobileMenu(false);
    if (showMobileMenu) animateOutMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(true);
    animateInMenu();
  };

  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMobileMenu(false);
    const circle = document.getElementById("circle");
    if (circle) circle.classList.remove("expand");
    animateOutMenu();
  };

  const checkSection = () => {
    const { scrollY } = window;

    if (scrollY > 0) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  };

  const throttleCheckSection = throttle(checkSection, 250);

  useEffect(() => {
    window.addEventListener("scroll", throttleCheckSection);
    checkSection();

    return () => window.removeEventListener("scroll", throttleCheckSection);
  }, [throttleCheckSection]);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <RelativeWrapper>
      <NavBarContainer
        hidden={scrolledDown && scrollDirection === "down"}
        scrolledDown={scrolledDown}
      >
        <NavBarWidthLimiter id="nav-bar">
          <NavLogoButton onClick={() => scrollTo("home")} variant="nav">
            <NavLogoImg
              alt=""
              src={
                scrolledDown
                  ? getLocalizedCopy("EN").nav.logo.light
                  : getLocalizedCopy("EN").nav.logo.dark
              }
            />
          </NavLogoButton>
          <LinksContainer scrolledDown={scrolledDown}>
            {tablet ? (
              <MenuIcon
                isOpen={showMobileMenu}
                open={openMenu}
                scrolledDown={scrolledDown}
                close={closeMenu}
              />
            ) : (
              <>
                <NavLinks
                  sections={getLocalizedCopy("ZH").nav.sections}
                  clickHandler={scrollTo}
                />
                {!medium && (
                  <SocialLinks
                    links={getLocalizedCopy("ZH").nav.socialLinks}
                    scrolledDown={scrolledDown}
                  />
                )}
              </>
            )}
            {!mobile && (
              <ReactFlagsSelect
                defaultCountry="CN"
                countries={["CN", "US"]}
                customLabels={{ US: "English", CN: "中文" }}
              />
              // <CallToActionButton
              //   text={getLocalizedCopy("ZH").nav.languageButton.text}
              //   onClick={() => toggleLanguage("ZH")}
              //   scrolledDown={scrolledDown}
              // />
            )}
          </LinksContainer>
          {showMobileMenu && (
            <MobileMenu>
              <NavLinks
                animate
                sections={getLocalizedCopy("ZH").nav.sections}
                clickHandler={scrollTo}
              />
              <SocialLinks
                scrolledDown={false}
                animate
                links={getLocalizedCopy("ZH").nav.socialLinks}
              />
            </MobileMenu>
          )}
          <Circle id="circle" />
        </NavBarWidthLimiter>
      </NavBarContainer>
    </RelativeWrapper>
  );
};

export default NavBar;
