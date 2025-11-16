
import styles from './SilzeyPOSCard.module.css';

interface SilzeyPOSCardProps {
    number?: string;
    isTyping?: boolean;
}

export function SilzeyPOSCard({ number = "1234 5678 9012 3456", isTyping = false }: SilzeyPOSCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.brandContainer}>
          <svg
            className={styles.leafIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.5 2.47a.75.75 0 0 0-1.02.09l-5.6 6.3a.75.75 0 0 1-1.01.12l-2.4-1.6a.75.75 0 0 0-.96.06L5 9.03a.75.75 0 0 0 .15 1.05l4.28 4.28a.75.75 0 0 1 .12 1.01l-6.3 5.6a.75.75 0 0 0 .96 1.11l14.4-6.4a.75.75 0 0 0 .42-.82l-1.3-4.83a.75.75 0 0 0-.82-.58L14.7 9.8l2.8-3.15a.75.75 0 0 0-.09-1.02L17.5 2.47z" />
          </svg>
          <div className={styles.brand}>SilzeyPOS</div>
        </div>

        <div className={styles.chip}></div>
        <div className={styles.number}>
            {number}
            {isTyping && <span className={styles.typingCursor}>|</span>}
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.name}>POS MEMBER</div>
          <div className={styles.expiry}>
            VALID THRU<br />12/34
          </div>
        </div>
      </div>
    </div>
  );
}
