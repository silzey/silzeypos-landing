
'use client';

import { useUser } from '@/firebase/auth/use-user';
import { useAuthSheet } from '@/hooks/use-auth-sheet';
import { AuthSheet } from './AuthSheet';
import { BlogLinksSheet } from './dashboard/BlogLinksSheet';

export function SheetProviders() {
  const { open, setOpen } = useAuthSheet();
  const { user, isUserLoading } = useUser();

  const handleFabClick = () => {
    if (!isUserLoading) {
      if (!user) {
        setOpen(true);
      }
      // If user is logged in, the BlogLinksSheet handles its own state
    }
  };
  
  return (
    <>
      <BlogLinksSheet onTriggerClick={handleFabClick} />
      <AuthSheet open={open} onOpenChange={setOpen} />
    </>
  )
}
