// These styles apply to every route in the application
import './globals.css';

import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from '../theme';
import App from './App';
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
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <App>{children}</App>
          </MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
