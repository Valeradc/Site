/**
 * Ultra-smooth scrolling with cubic ease-in-out easing
 * @param targetY Destination scrollY position in pixels
 * @param duration Duration in milliseconds (default: 850ms)
 */
export function smoothScrollTo(targetY: number, duration: number = 850): void {
  const startY = window.scrollY || window.pageYOffset;
  const difference = targetY - startY;
  
  if (Math.abs(difference) < 2) return;
  
  const startTime = performance.now();

  // Smooth cubic ease-in-out curve
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + difference * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/**
 * Smoothly scrolls to a section by element ID, accounting for the 56px header
 */
export function scrollToSection(sectionId: string, duration: number = 850): void {
  if (sectionId === 'industrial-creator') {
    smoothScrollTo(0, duration);
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 56;
    const elementPosition = element.getBoundingClientRect().top;
    const targetY = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
    smoothScrollTo(Math.max(0, targetY), duration);
  }
}
