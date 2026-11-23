'use client';

import { createContext, useContext } from 'react';

// Shared state, setters, loaders and save handlers of PartyProjectManagement. The value is rebuilt on
// every render of PartyProjectManagement, so each view reads exactly what that render computed.
export const PmContext = createContext(null);

export function usePm() {
  return useContext(PmContext);
}
