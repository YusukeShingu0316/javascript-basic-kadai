const btn = document.getElementById('');
const text = document.getElementById('');

btn.addEventListener('click', () => {
setTimeout(() => {
  text.textContent="ボタンをクリックしました";
},2000);
});s