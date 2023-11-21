'use client';

import { createContext } from 'react';
export const FormContext = createContext({
  activeStep: 1,
  isFormAsideOpen: false,
});
