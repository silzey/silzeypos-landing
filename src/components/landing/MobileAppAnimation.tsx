
"use client";

import { useState, useEffect } from 'react';
import styles from './MobileAppAnimation.module.css';

export function MobileAppAnimation() {
  const [typedText, setTypedText] = useState('');
  const fullText = "SilzeyPOS";
  const typingSpeed = 150; // ms per character

  useEffect(() => {
    // Prevent re-triggering animation on re-renders if text is already complete
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  const isTyping = typedText.length < fullText.length;

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <svg
          className={styles.leafIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 2.47a.75.75 0 0 0-1.02.09l-5.6 6.3a.75.75 0 0 1-1.01.12l-2.4-1.6a.75.75 0 0 0-.96.06L5 9.03a.75.75 0 0 0 .15 1.05l4.28 4.28a.75.75 0 0 1 .12 1.01l-6.3 5.6a.75.75 0 0 0 .96 1.11l14.4-6.4a.75.75 0 0 0 .42-.82l-1.3-4.83a.75.75 0 0 0-.82-.58L14.7 9.8l2.8-3.15a.75.75 0 0 0-.09-1.02L17.5 2.47z" />
        </svg>
        <h1 className={styles.title}>
          {typedText}
          {isTyping && <span className={styles.cursor}>|</span>}
        </h1>
      </div>
    </div>
  );
}
