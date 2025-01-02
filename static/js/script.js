document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.querySelector('.catalog');
    let isScrolling = false;
  
    catalog.addEventListener('wheel', (event) => {
      if (isScrolling) return;
      isScrolling = true;
  
      // 滑動
      catalog.scrollBy({
        top: event.deltaY > 0 ? 300 : -300, // 向下或向上
        behavior: 'smooth',
      });
  
      // 延遲解除滾動鎖定
      setTimeout(() => (isScrolling = false), 500);
    });
  });
  