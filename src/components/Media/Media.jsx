import { useMediaQuery } from "react-responsive";

export const DesktopS = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : null;
};
export const DesktopM = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return isDesktop ? children : null;
};
export const DesktopL = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1920 });
  return isDesktop ? children : null;
};
export const DesktopOnly = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const NoDesktop = ({ children }) => {
  const isNoDesktop = useMediaQuery({ maxWidth: 1199 });
  return isNoDesktop ? children : null;
};
