// elements
const elements = document.querySelectorAll('.edit-btn')


// events
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        if (command == 'createLink') {
            let url = prompt('Enter the link here: ');
            document.execCommand(command, false, url);
        }
        else {
            document.execCommand(command, false, null);
        }
    });
});