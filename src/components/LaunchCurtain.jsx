import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

/**
 * LaunchCurtain Component
 *
 * Grand Reveal / Red Velvet Theater Curtain Opening for launch day.
 * - Deep crimson / red velvet drapery with rich vertical folds.
 * - Crisp white pill container for the brand logo.
 * - Manual trigger: Only opens when clicking the "Grand Launch" button.
 * - Slower, majestic parting animation (2.6s smooth cubic-bezier).
 * - Celebratory Confetti: Automatically triggers as curtains part to celebrate the launch.
 * - Self-cleaning: Unmounts from DOM after reveal so nothing is blocked.
 */
export default function LaunchCurtain() {
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'finished'
  const confettiIntervalRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('finished');
      return;
    }

    // Lock body scroll while curtain is closed
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      if (confettiIntervalRef.current) {
        clearInterval(confettiIntervalRef.current);
      }
    };
  }, []);

  // Fire celebratory launch confetti
  const fireConfetti = () => {
    const brandColors = ['#f97316', '#ea580c', '#fbbf24', '#3b82f6', '#6366f1', '#ffffff'];

    // 1. Center celebratory burst
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: brandColors,
      zIndex: 9999999,
      disableForReducedMotion: true,
    });

    // 2. Left & Right celebration cannons over 2.5 seconds
    const duration = 2500;
    const animationEnd = Date.now() + duration;

    confettiIntervalRef.current = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(confettiIntervalRef.current);
        return;
      }

      const particleCount = 40 * (timeLeft / duration);

      // Left cannon
      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: brandColors,
        zIndex: 9999999,
        disableForReducedMotion: true,
      });

      // Right cannon
      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: brandColors,
        zIndex: 9999999,
        disableForReducedMotion: true,
      });
    }, 250);
  };

  // Trigger grand opening and celebratory confetti
  const handleLaunch = () => {
    if (stage !== 'closed') return;

    setStage('opening');

    // Trigger confetti as the curtains open to reveal the website
    setTimeout(() => {
      fireConfetti();
    }, 1100);

    // After curtains fully part (2.6s), unlock scrolling
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 2700);

    // Unmount curtain component once reveal is complete
    setTimeout(() => {
      setStage('finished');
    }, 3600);
  };

  if (stage === 'finished') {
    return null;
  }

  const isOpening = stage === 'opening';

  return (
    <>
      <style>{`
        .launch-curtain-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999999;
          overflow: hidden;
          pointer-events: ${isOpening ? 'none' : 'auto'};
        }

        /* Classic Red Velvet Drapery Panels */
        .curtain-panel {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50vw;
          height: 100vh;
          /* Rich layered ruby/crimson/burgundy velvet */
          background: radial-gradient(circle at 50% 50%, #991b1b 0%, #7f1d1d 45%, #450a0a 90%, #220303 100%);
          /* Slow, majestic theater curtain parting */
          transition: transform 2.6s cubic-bezier(0.65, 0, 0.2, 1);
          will-change: transform;
          box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.88);
        }

        /* Realistic vertical velvet curtain pleats / folds texture */
        .curtain-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08) 0px,
            rgba(255, 255, 255, 0.03) 25px,
            rgba(0, 0, 0, 0.35) 50px,
            rgba(0, 0, 0, 0.6) 75px,
            rgba(255, 255, 255, 0.06) 100px
          );
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        /* Top stage curtain valance shadow */
        .curtain-panel::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
          pointer-events: none;
        }

        .curtain-left {
          left: 0;
          transform: ${isOpening ? 'translateX(-100%)' : 'translateX(0)'};
          border-right: 2px solid rgba(251, 191, 36, 0.6);
        }

        .curtain-right {
          right: 0;
          transform: ${isOpening ? 'translateX(100%)' : 'translateX(0)'};
          border-left: 2px solid rgba(251, 191, 36, 0.6);
        }

        /* Regal golden fringe/trim seam down the middle */
        .curtain-golden-seam {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 6px;
          right: -3px;
          background: linear-gradient(
            180deg,
            #d97706 0%,
            #fef08a 25%,
            #f59e0b 50%,
            #fef08a 75%,
            #b45309 100%
          );
          box-shadow: 0 0 25px rgba(251, 191, 36, 0.8), 0 0 10px rgba(245, 158, 11, 0.9);
          opacity: ${isOpening ? 0 : 1};
          transition: opacity 0.6s ease;
          z-index: 5;
        }

        /* Center brand emblem */
        .curtain-center-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(${isOpening ? 0.9 : 1});
          opacity: ${isOpening ? 0 : 1};
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          text-align: center;
        }

        /* Crisp White Logo Box with Gold Trim */
        .curtain-logo-box {
          padding: 16px 36px;
          background: #ffffff;
          border: 2px solid #fbbf24;
          border-radius: 9999px;
          box-shadow: 
            0 14px 40px rgba(0, 0, 0, 0.75),
            0 0 35px rgba(251, 191, 36, 0.5),
            inset 0 0 10px rgba(251, 191, 36, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .curtain-logo-box img {
          display: block;
          object-fit: contain;
        }

        /* Prominent Grand Launch Button */
        .curtain-launch-btn {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 38px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          color: #450a0a;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 2px solid #fef08a;
          border-radius: 9999px;
          box-shadow: 
            0 8px 30px rgba(0, 0, 0, 0.6),
            0 0 25px rgba(245, 158, 11, 0.6);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }

        .curtain-launch-btn:hover {
          transform: translateY(-2px) scale(1.04);
          background: linear-gradient(135deg, #fef08a 0%, #fbbf24 50%, #ea580c 100%);
          box-shadow: 
            0 12px 35px rgba(0, 0, 0, 0.7),
            0 0 35px rgba(251, 191, 36, 0.85);
          color: #2b0404;
        }

        .curtain-launch-btn:active {
          transform: translateY(1px) scale(0.98);
        }

        /* Subtle pulse glow around launch button */
        @keyframes launchPulse {
          0%, 100% {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.5);
          }
          50% {
            box-shadow: 0 10px 35px rgba(0, 0, 0, 0.7), 0 0 32px rgba(251, 191, 36, 0.85);
          }
        }

        .curtain-launch-btn {
          animation: launchPulse 2.4s infinite ease-in-out;
        }
      `}</style>

      <div
        className="launch-curtain-container"
        role="dialog"
        aria-label="Website Grand Launch Reveal"
      >
        {/* Left Velvet Curtain */}
        <div className="curtain-panel curtain-left">
          <div className="curtain-golden-seam" />
        </div>

        {/* Right Velvet Curtain */}
        <div className="curtain-panel curtain-right" />

        {/* Center Emblem with White Logo Box and Grand Launch Button */}
        <div className="curtain-center-badge">
          {/* Crisp White Logo Box */}
          <div className="curtain-logo-box">
            <img
              src="/media/thulynan-logo.svg"
              alt="Thulynan"
              width="155"
              height="44"
              onError={(e) => {
                e.currentTarget.src = '/media/thulynan-logo-white.svg';
              }}
            />
          </div>

          {/* Interactive Grand Launch Button (Opens Curtain on Click) */}
          <button
            type="button"
            className="curtain-launch-btn"
            onClick={handleLaunch}
            disabled={isOpening}
            aria-label="Grand Launch Website"
          >
            <span>✦</span>
            <span>Grand Launch</span>
            <span>✦</span>
          </button>
        </div>
      </div>
    </>
  );
}
