window.addEventListener('load', () => {
    document.getElementById("first-username-output").innerHTML = localStorage.getItem('fu');
    document.getElementById("second-username-output").innerHTML = localStorage.getItem('su');
});

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function sendMessage(sender) {
    var messageInput, messageBox, otherMessageBox;

    if (sender === 'user') {
        messageInput = document.getElementById('user-input');
        messageBox = document.getElementById('user-messages');
        otherMessageBox = document.getElementById('other-messages');
    } else {
        messageInput = document.getElementById('other-input');
        messageBox = document.getElementById('other-messages');
        otherMessageBox = document.getElementById('user-messages');
    }

    var message = messageInput.value.trim();

    if (message !== '') {
        var newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = message;

        messageBox.appendChild(newMessage);
        messageInput.value = '';

        setTimeout(function () {
            var response = document.createElement('div');
            response.className = 'message1';
            response.textContent = message;

            otherMessageBox.appendChild(response);

            var currentTime = getCurrentTime();
            var timeElement = document.createElement('div');
            timeElement.className = 'time';
            timeElement.textContent = `(${currentTime})`;

            otherMessageBox.appendChild(timeElement);

            otherMessageBox.scrollTop = otherMessageBox.scrollHeight;
        }, 1000);

        var currentTime = getCurrentTime();
        var timeElement = document.createElement('div');
        timeElement.className = 'time';
        timeElement.textContent = `(${currentTime})`;

        messageBox.appendChild(timeElement);

        messageBox.scrollTop = messageBox.scrollHeight;
    }
}
