let input = document.querySelector('input');
let messages = document.querySelector('.messages');
input.addEventListener('keydown', e => newMessage(e));
document.querySelectorAll('.closeContent')
    .forEach(e => e.addEventListener(
        'click', () => closeMessage(e.parentNode.parentElement)));

let adjectives = ["Коварный", "Сутулый", "Неуравновешенный", "Дурной", "Неугомонный",
    "Больной", "Кровожадный", "Преуспевший", "Кривоногий", "Изворотливый", "Боевой"];
let nouns = ["тигр", "лосось", "олень", "буйвол", "кабан", "филин", "снегирь",
    "слон", "верблюд", "утконос", "ламантин", "енот", "хомяк", "медведь"];
let verbs = ["захватил Польшу", "не может остановиться читать реп",
    "пытается подружиться с духом Фиделя Кастро", "работает на запад",
    "сел в машину и сгорел", "слетал на планету девственниц. Теперь это просто планета",
    "выдает себя за армянина", "слишком много знает о нацистах", "плачет, когда видит твое лицо",
    "уверен, что Пушкин это Дюма", "косо смотрит на свою младшую сестру", "построил коммунизм"];


function newMessage(e) {
    let message = input.value;
    if (e.code !== "Enter" || /^\s*$/.test(message)) {
        return;
    }
    addMessageToMessages(message, "outMessage");
    input.value = "";
    answer(message);
    messages.scrollTop = messages.scrollHeight;
}

function answer(message) {
    let ans = adjectives[rand(0, adjectives.length)] + " " +
              nouns[rand(0, nouns.length)] + " " +
              verbs[rand(0, verbs.length)];
    addMessageToMessages(ans, "inMessage")
}

function addMessageToMessages(message, type) {
    let newMessage = document.createElement('div');
    newMessage.innerHTML = "<div class=\"messageContent\">\n" +
        "                       <p></p>\n" +
        "                       <div class=\"closeContent\">\n" +
        "                           <span class=\"close\">x</span>\n" +
        "                       </div>\n" +
        "                   </div>"
    newMessage.querySelector('p').innerText = message;
    newMessage.querySelector('.closeContent')
        .addEventListener('click', () => closeMessage(newMessage));
    newMessage.classList.add(type);
    messages.appendChild(newMessage);
}

function closeMessage(e) {
    e.remove();
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}