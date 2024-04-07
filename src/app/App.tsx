import Header from '@components/AppShell/Header';
import Navbar from '@components/AppShell/Navbar';
import AppImageViewer from '@components/Pages/Home/AppImageViewer';
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
      <AppImageViewer></AppImageViewer>
    </React.Fragment>
  );
}

export default App;
