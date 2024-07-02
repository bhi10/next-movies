'use client';

import BasicAppShell from '@components/AppShell/BasicAppShell';
import AppImageViewer from '@components/Pages/Home/AppImageViewer';
import { usePathname } from 'next/navigation';
import React from 'react';
import AppDataProvider from './AppDataProvider';

export interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  const pathName = usePathname().split('/')[1];

  return (
    <React.Fragment>
      <AppDataProvider></AppDataProvider>
      <BasicAppShell pathName={pathName}>
        <div className="page-wrapper">{children}</div>
      </BasicAppShell>
      <AppImageViewer></AppImageViewer>
    </React.Fragment>
  );
}

export default App;
