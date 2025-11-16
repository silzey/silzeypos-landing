
'use client';

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthSheetContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AuthSheetContext = createContext<AuthSheetContextType | undefined>(undefined);

export function AuthSheetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <AuthSheetContext.Provider value={{ open, setOpen }}>
      {children}
    </AuthSheetContext.Provider>
  );
}

export function useAuthSheet() {
  const context = useContext(AuthSheetContext);
  if (context === undefined) {
    throw new Error('useAuthSheet must be used within an AuthSheetProvider');
  }
  return context;
}
