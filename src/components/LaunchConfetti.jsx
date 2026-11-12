import { useEffect } from 'react';
import confetti from 'canvas-confetti';

/**
 * LaunchConfetti Component
 * 
 * Temporary celebration confetti for launch day.
 * - Non-intrusive: Renders no DOM elements, does not block clicks (pointer-events: none).
 * - Self-cleaning: Automatically stops and cleans up canvas memory.
 * - Easy removal: To remove after launch, simply delete this file and its import/usage in App.jsx.
 */
export default function LaunchConfetti() {
  useEffect(() => {
    // Check if prefers-reduced-motion is enabled
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Launch brand colors (Amber/Orange accent, Gold, Royal Blue, Crisp Slate)
    const brandColors = ['#f97316', '#ea580c', '#fbbf24', '#3b82f6', '#6366f1'];

    // 1. Initial burst from center
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.65 },
      colors: brandColors,
      zIndex: 99999,
      disableForReducedMotion: true,
    });

    // 2. Left & Right celebration cannons over 2.5 seconds
    const duration = 2500;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
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
        zIndex: 99999,
        disableForReducedMotion: true,
      });

      // Right cannon
      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: brandColors,
        zIndex: 99999,
        disableForReducedMotion: true,
      });
    }, 250);

    return () => {
      clearInterval(interval);
      confetti.reset();
    };
  }, []);

  return null;
}

