'use client';
import { ThemeProvider } from '@material-tailwind/react';
import { ReactNode } from 'react';

interface ProvidersProps { 
    children: ReactNode;
 }
export function Providers({children}: ProvidersProps) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
