/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';
import { useError } from 'hooks/useError';
import { gsap } from 'gsap';

interface ContextProps {
  turnOn: (links: React.RefObject<HTMLUListElement>, indicator: React.RefObject<HTMLDivElement>, timeout?: number) => void;
}

const MenuContext = createContext<ContextProps>({
  turnOn: (links: React.RefObject<HTMLUListElement>, indicator: React.RefObject<HTMLDivElement>, timeout = 0) => console.log('Ready!')
});
const MenuProvider: React.FC = ({ children }) => {
  const getPositionOf = (el: any) => {
    const { width: itemWidth, height: itemHeight, x: itemX, y: itemY } = el.getBoundingClientRect();
    const currentWidth = itemWidth * 0.6;
    const readyX = itemX + itemWidth / 2 - currentWidth / 2;
    const readyY = itemY + itemHeight + 7;

    return { readyX, readyY, currentWidth };
  };
  const findActiveElement = (links: React.RefObject<HTMLUListElement>) => {
    if (links.current) {
      return document.querySelector('.active-link');
    }
  };
  const setInitialPosition = (links: React.RefObject<HTMLUListElement>, indicator: React.RefObject<HTMLDivElement>, timeout: number) => {
    window.scrollTo(0, 0);
    if (links.current && indicator.current) {
      setTimeout(() => {
        const { readyX, readyY, currentWidth } = getPositionOf(findActiveElement(links));
        timeout
          ? gsap.to(indicator.current, { x: readyX, y: readyY, duration: 0.8, width: currentWidth })
          : gsap.set(indicator.current, { x: readyX, y: readyY, width: currentWidth });
      }, timeout);
    }
  };
  const goToThisElement = (el: any, indicator: React.RefObject<HTMLDivElement>, links: React.RefObject<HTMLUListElement>) => {
    if (links.current && indicator.current) {
      const { readyX, readyY, currentWidth } = getPositionOf(el);
      gsap.to(indicator.current, { x: readyX, y: readyY, duration: 0.8, width: currentWidth });
    }
  };
  const activateTab = (e: any, indicator: React.RefObject<HTMLDivElement>, links: React.RefObject<HTMLUListElement>) => {
    if (e.target.classList.contains('no-active')) {
      goToThisElement(e.target, indicator, links);
    }
  };
  const turnOn = (links: React.RefObject<HTMLUListElement>, indicator: React.RefObject<HTMLDivElement>, timeout = 0) => {
    setInitialPosition(links, indicator, timeout);
    if (links.current) {
      links.current.addEventListener('click', (e) => activateTab(e, indicator, links));
    }
  };

  const value: ContextProps = {
    turnOn
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenu = (): ContextProps => {
  const { dispatchError } = useError();

  const menu = useContext(MenuContext);
  if (!menu) dispatchError('Something went wrong with Menu! Please, contact with us!');
  return menu;
};

export default MenuProvider;
