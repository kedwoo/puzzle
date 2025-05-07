function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.trim();
  const result = document.getElementById('result');

  if (userAnswer === '수현') {
    result.textContent = '정답입니다! 🎉';
    result.style.color = 'green';
  } else {
    result.textContent = '틀렸어요. 다시 시도해보세요!';
    result.style.color = 'red';
  }
}
