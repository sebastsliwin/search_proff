const input = document.querySelector('input');
const ul = document.querySelector('ul');
let liElements = document.querySelectorAll('ul li');

const searchProfession = (e) => {
    const yourValue = e.target.value.toLowerCase();
    let professions = [...liElements];
    professions = professions.filter(profession => profession.textContent.toLocaleLowerCase().includes(yourValue));
    ul.textContent = '';
    professions.forEach(li => ul.appendChild(li));
}

input.addEventListener('input', searchProfession);