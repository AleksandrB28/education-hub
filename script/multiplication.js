let a = Math.ceil(Math.random() * 10);
let b = Math.ceil(Math.random() * 10);

document.getElementById('question').textContent = `Сколько будет ${a} × ${b}?`;

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const result = document.getElementById('result');
  if (userAnswer === a * b) {
    result.textContent = 'Верно!';
    result.style.color = 'green';
    a = Math.ceil(Math.random() * 10);
    b = Math.ceil(Math.random() * 10);
    document.getElementById('question').textContent = `Сколько будет ${a} × ${b}?`;
    document.getElementById('answer').value = '';
  } else {
    result.textContent = 'Неверно, попробуйте ещё.';
    result.style.color = 'red';
  }
}
