const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const toast = document.getElementById('toast');

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    productCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.classList.toggle('hidden', !matches);
    });
  });
});

document.querySelectorAll('.action-btn.primary').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    showToast(`AI try-on activated for ${productName}`);
  });
});

document.querySelectorAll('.action-btn.secondary').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    const encodedMessage = encodeURIComponent(`Hi, I am interested in purchasing the ${productName}`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=15551234567&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });
});
