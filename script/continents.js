const questions = [
  { name: 'Африка', options: ['Евразия', 'Африка', 'Австралия'] },
  { name: 'Южная Америка', options: ['Северная Америка', 'Антарктида', 'Южная Америка'] },
  { name: 'Евразия', options: ['Австралия', 'Африка', 'Евразия'] },
];

let current = 0;

function renderQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = `Найди материк: ${q.name}`;
  const container = document.getElementById('options');
  container.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    container.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const result = document.getElementById('result');
  const correct = selected === questions[current].name;
  result.textContent = correct ? 'Верно!' : 'Неверно!';
  result.style.color = correct ? 'green' : 'red';
  setTimeout(() => {
    current = (current + 1) % questions.length;
    result.textContent = '';
    renderQuestion();
  }, 1000);
}

renderQuestion();
