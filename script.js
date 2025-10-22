const taskedItems = document.querySelectorAll('.task-items');

taskedItems.forEach((item, index) => {
  // Reset radius first
  item.style.borderRadius = '0';

  // Apply rounded corners for first and last items
  if (index === 0) {
    item.style.borderTopLeftRadius = '20vh';
    item.style.borderBottomLeftRadius = '20vh';
  } else if (index === taskedItems.length - 1) {
    item.style.borderTopRightRadius = '20vh';
    item.style.borderBottomRightRadius = '20vh';
  }
});
