(() => {
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightboxImage');
  if (!dialog || !image) return;
  document.querySelectorAll('.image-open').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.full || button.querySelector('img')?.src || '';
      image.alt = button.querySelector('img')?.alt || '';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  dialog.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
})();
