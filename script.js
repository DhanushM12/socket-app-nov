const socket = io('http://localhost:3000')

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

let name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})

function appendMessage(message){
    const messageElement = document.createElement('div');
    messageElement.innerText = message; //<div>message<div/>
    messageContainer.append(messageElement);
}