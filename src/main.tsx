import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './assets/fonts/font.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  await worker.start({
    onUnhandledRequest: 'bypass', // mock하지 않은 요청은 그냥 서버로 흘려보냄
    serviceWorker: {
      url: '/KUpage-FE/mockServiceWorker.js', // base 적용된 경로
    },
  });
}

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
