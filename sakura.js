// Sakura (Cherry Blossom) Rain Effect
class SakuraRain {
  constructor() {
    this.container = null;
    this.petals = [];
    this.petalCount = 30;
    this.init();
  }

  init() {
    // Create container for petals
    this.container = document.createElement('div');
    this.container.className = 'sakura-container';
    document.body.appendChild(this.container);

    // Create initial petals
    for (let i = 0; i < this.petalCount; i++) {
      setTimeout(() => this.createPetal(), i * 300);
    }
  }

  createPetal() {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    
    // Random properties
    const size = Math.random() * 10 + 10; // 10-20px
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 8; // 8-13s
    const delay = Math.random() * 2;
    const rotation = Math.random() * 360;
    const swayAmount = Math.random() * 100 + 50; // 50-150px sway
    
    // Apply styles
    petal.style.cssText = `
      left: ${startX}px;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      --sway-amount: ${swayAmount}px;
      --rotation: ${rotation}deg;
    `;
    
    // Random petal shape (3 variants)
    const variant = Math.floor(Math.random() * 3) + 1;
    petal.classList.add(`petal-${variant}`);
    
    this.container.appendChild(petal);
    
    // Remove and recreate petal after animation
    petal.addEventListener('animationend', () => {
      petal.remove();
      this.createPetal();
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SakuraRain();
});
