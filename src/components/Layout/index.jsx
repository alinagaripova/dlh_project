import React from 'react';
import Header from '../Header';


function Layout({ children }) {
  return (
    <>
     <header>
      <Header />
     </header>
     <main className="pt-md-3 pb-3 pb-md-5">
      {children}
     </main>
    </>
  );
}

export default Layout;
