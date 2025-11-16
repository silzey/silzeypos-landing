
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SilzeyPOSCard } from './SilzeyPOSCard';
import styles from './LoadingScreen.module.css';
import { cn } from '@/lib/utils';

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  const [zoomIn, setZoomIn] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [typedNumber, setTypedNumber] = useState('');
  
  const fullNumber = "1234 5678 9012 3456";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    setIsLoaderVisible(true);
    setIsAnimating(true);
    setZoomIn(false);
    setStartTyping(false);
    setTypedNumber('');

    const zoomTimer = setTimeout(() => {
      setZoomIn(true);
    }, 100);

    const typingTimer = setTimeout(() => {
      setStartTyping(true);
    }, 500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(typingTimer);
    };
  }, [pathname, hasMounted]);

  useEffect(() => {
    if (!hasMounted || !isLoaderVisible || !startTyping) {
        return;
    }

    if (typedNumber.length < fullNumber.length) {
      const typingSpeed = 50; 
      const timeout = setTimeout(() => {
        setTypedNumber(fullNumber.slice(0, typedNumber.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const fadeOutTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); 

      const unmountTimer = setTimeout(() => {
        setIsLoaderVisible(false);
      }, 1000); 
      
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(unmountTimer);
      }
    }
  }, [startTyping, typedNumber, isLoaderVisible, hasMounted]);
  
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>;
  }
  
  return (
    <>
      <div style={{ opacity: isLoaderVisible ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        {children}
      </div>
      {isLoaderVisible && (
        <div className={cn(styles.loadingContainer, !isAnimating && styles.fadeOut, 'bg-background')}>
          <div className={cn(styles.cardContainer, zoomIn && styles.cardZoomIn)}>
            <SilzeyPOSCard number={typedNumber} isTyping={startTyping && typedNumber.length < fullNumber.length} />
          </div>
        </div>
      )}
    </>
  );
}
