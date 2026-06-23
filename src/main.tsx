import '@/style/global.css';
import Filter from '@/ui/filter/filter';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Filter />
    <App />
  </StrictMode>,
);
