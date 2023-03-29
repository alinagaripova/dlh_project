import React from 'react';
import ModalProvider from '../../context/Modal/Provider';
import Header from '../Header';
import Footer from '../Footer';
import BurgerMenu from '../BurgerMenu';
import Modals from '../Modals';


function Layout({ children }) {
  return (
    <ModalProvider>
      <div>
        <header>
          <Header />
        </header>
        <main className="pb-3 pb-md-5">
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
