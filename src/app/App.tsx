import Header from '@components/AppShell/Header';
import Navbar from '@components/AppShell/Navbar';
import React from 'react';
import AppDataProvider from './AppDataProvider';

export interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <React.Fragment>
      <AppDataProvider></AppDataProvider>
      <Navbar></Navbar>
      <div className="page-wrapper">
        <Header></Header>
        {children}
      </div>
    </React.Fragment>
  );
}

export default App;
