import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import ModalProvider from '../../context/Modal/Provider';
import Header from '../Header';
import Footer from '../Footer';
import BurgerMenu from '../BurgerMenu';
import Modals from '../Modals';


function Layout({ children, title = "" }) {
  const APP_NAME = "DLH";

  useEffect(() => {
    const setHeight = () => {
      document.body.style.height = window.innerHeight + "px";
    };
    let deviceWidth = window.matchMedia("(max-width: 768px)");
    if (deviceWidth.matches) {
      window.addEventListener("resize", setHeight);
      setHeight();
    }
  }, []);

  return (
    <ModalProvider>
      <div>
        <Helmet>
          <title>{[ APP_NAME, title ].filter(Boolean).join(' | ')}</title>
        </Helmet>
        <header>
          <Header />
        </header>
        <main className="pb-3 pb-xl-5">
          {children}
        </main>
        <footer id={"footer"}>
          <Footer/>
        </footer>
        <BurgerMenu />
        <Modals />
      </div>
    </ModalProvider>
  );
}

export default Layout;
