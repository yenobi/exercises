const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    // alert(input.value);
    const item = document.createElement('li');
    item.innerText = input.value;
    list.appendChild(item);
})