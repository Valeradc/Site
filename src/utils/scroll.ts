/**
 * High-performance smooth scrolling engine
 * Compatible with all devices (60Hz, 90Hz, 120Hz, mobile, desktop, low-power mode)
 */

let activeAnimationId: number | null = null;
let cleanupListeners: (() => void) | null = null;

// Stop any currently running scroll animation
export function cancelActiveScroll(): void {
  if (activeAnimationId !== null) {
    cancelAnimationFrame(activeAnimationId);
    activeAnimationId = null;
  }
  if (cleanupListeners) {
    cleanupListeners();
    cleanupListeners = null;
  }
}

/**
 * Ultra-smooth cubic bezier easing: cubic-bezier(0.25, 1, 0.5, 1)
 * Native iOS / macOS / Android fluid deceleration curve
 */
function fluidEaseInOut(t: number): number {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Smoothly scrolls the window to targetY
 * @param targetY Destination Y in pixels
 * @param customDuration Optional duration override in ms
 */
export function smoothScrollTo(targetY: number, customDuration?: number): void {
  // Cancel previous animation so they never fight
  cancelActiveScroll();

  const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const difference = targetY - startY;

  // If already at or within 1.5px, no scroll needed
  if (Math.abs(difference) <= 2) {
    return;
  }

  // Calculate optimal duration based on distance (responsive & natural on all screen sizes)
  const distance = Math.abs(difference);
  const duration = customDuration ?? Math.min(Math.max(550, Math.round(Math.sqrt(distance) * 22)), 850);
  const startTime = performance.now();

  // If user touches screen or uses mouse wheel during scroll, gracefully release control
  const onUserInterrupt = () => {
    cancelActiveScroll();
  };

  window.addEventListener('wheel', onUserInterrupt, { passive: true });
  window.addEventListener('touchstart', onUserInterrupt, { passive: true });
  window.addEventListener('pointerdown', onUserInterrupt, { passive: true });
  window.addEventListener('keydown', onUserInterrupt, { passive: true });

  cleanupListeners = () => {
    window.removeEventListener('wheel', onUserInterrupt);
    window.removeEventListener('touchstart', onUserInterrupt);
    window.removeEventListener('pointerdown', onUserInterrupt);
    window.removeEventListener('keydown', onUserInterrupt);
  };

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = fluidEaseInOut(progress);

    const currentPos = Math.round(startY + difference * easedProgress);

    window.scrollTo({
      top: currentPos,
      left: 0,
      behavior: 'auto' // Crucial: avoid conflicts with browser's native smooth-scroll
    });

    if (progress < 1) {
      activeAnimationId = requestAnimationFrame(step);
    } else {
      cancelActiveScroll();
    }
  }

  activeAnimationId = requestAnimationFrame(step);
}

/**
 * Smoothly scrolls to section by ID with precise 56px header offset
 */
export function scrollToSection(sectionId: string, customDuration?: number): void {
  if (sectionId === 'industrial-creator') {
    smoothScrollTo(0, customDuration);
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 56;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const targetY = Math.max(0, Math.round(rect.top + scrollTop - headerHeight));
    smoothScrollTo(targetY, customDuration);
  }
}
