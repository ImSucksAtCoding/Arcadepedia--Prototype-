/*===========================================
    Also used in viewtopic + viewpost
===========================================*/

// elements
const elements = document.querySelectorAll('.edit-btn');
const output = document.querySelector('.output');
const textarea = document.querySelector('#postContent');

// events
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];
        let tag, textToInsert;

        switch (command) {
            case 'bold':
                tag = 'b';
                textToInsert = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
                break;
            case 'italic':
                tag = 'i';
                textToInsert = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
                break;
            case 'underline':
                tag = 'u';
                textToInsert = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
                break;
            case 'insertUnorderedList':
                // tag = 'ul';
                // textToInsert = `\n<li></li>\n<li></li>\n`;
                replaceSelectionWith(`\n<ul>\n<li></li>  <!--Item 1 goes inside of the li tag-->\n<li></li>  <!--Item 2 goes inside of the li tag-->\n</ul>`);
                break;
            case 'insertOrderedList':
                // tag = 'ol';
                // textToInsert = `\n<li></li>\n<li></li>\n`;
                replaceSelectionWith(`\n<ol>\n<li></li>  <!--Item 1 goes inside of the li tag-->\n<li></li>  <!--Item 2 goes inside of the li tag-->\n</ol>`);
                break;
            case 'createLink':
                let url = prompt('Enter the link here: ');
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'http://' + url;
                }            
                let linkText = prompt('Enter the link text here: ');
                replaceSelectionWith(`<a href="${url}">${linkText}</a>`);
                break;
        }

        if (tag) {
            replaceSelectionWith(`<${tag}>${textToInsert}</${tag}>`);
        }

        output.innerHTML = textarea.value;
    });
});

textarea.addEventListener('input', () => {
    output.innerHTML = textarea.value;
});

function replaceSelectionWith(text) {
    textarea.value = textarea.value.substring(0, textarea.selectionStart) + text + textarea.value.substring(textarea.selectionEnd);
}