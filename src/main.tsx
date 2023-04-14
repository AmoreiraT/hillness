import ReactDOM from 'react-dom/client';
import { StrictMode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// theme

// routes
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/styles/customTheme';
import { Routes } from './routes';

// Import i18n.ts
import './i18n';
import { setupFirebase } from './core/services/firebase';
import { GlobalStyle } from './shared/styles/global';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
      keepPreviousData: true,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>
);
