import React from 'react';
import Header from '../Header';
import Footer from '../Footer';


function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="pt-3 pb-3 pb-md-5">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
