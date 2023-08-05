const list = document.querySelectorAll('.list');
const list2 = document.querySelectorAll('.list2');


function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
function activeLink2() {
    list2.forEach((item) =>
    item.classList.remove('active2'));
    this.classList.add('active2');
}

list.forEach((item) =>
item.addEventListener('click', activeLink))

list2.forEach((item) =>
item.addEventListener('click', activeLink2))
