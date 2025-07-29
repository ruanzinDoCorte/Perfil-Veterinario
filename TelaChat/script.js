const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chat = document.getElementById('chat');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = input.value.trim();
  if (message === '') return;

  addMessage('user', message);
  input.value = '';
});

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.textContent = text;

  msg.appendChild(bubble);
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}
