import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config';
import { MatchWidgetContainer } from '@/features/MatchWidget/components';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MatchWidgetContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
