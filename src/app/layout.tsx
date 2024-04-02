// These styles apply to every route in the application
import './globals.css';

import Drawer from '@/components/AppShell/Navbar';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from '../theme';
import Header from '@components/AppShell/Header';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'TMDB',
  description: '',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <Drawer></Drawer>
            <div className="page-wrapper">
              <Header></Header>
              {children}
            </div>
          </MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
