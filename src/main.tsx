import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ViewContainer from './ViewContainer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewContainer />
  </StrictMode>
);
