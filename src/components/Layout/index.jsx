import React from 'react';
import { Helmet } from "react-helmet";
import ModalProvider from '../../context/Modal/Provider';
import Header from '../Header';
import Footer from '../Footer';
import BurgerMenu from '../BurgerMenu';
import Modals from '../Modals';


function Layout({ children, title = "" }) {
  const APP_NAME = "DLH";

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
