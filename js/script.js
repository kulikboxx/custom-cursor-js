const cursor = document.createElement('span');

cursor.classList.add('custom-cursor');
cursor.textContent = 'Clicked';
document.body.append(cursor);

document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});

document.addEventListener('mousedown', () => cursor.classList.add('styled'));
document.addEventListener('mouseup', () => cursor.classList.remove('styled'));
