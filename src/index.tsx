import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { queryClient } from './utils/queryClient';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
