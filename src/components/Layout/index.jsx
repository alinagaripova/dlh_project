import React from 'react';
import Header from '../Header';
import Footer from '../Footer';


function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pb-3 pb-md-5">
        {children}
      </main>
      <footer id={"footer"}>
        <Footer/>
      </footer>
    </>
  );
}

export default Layout;
