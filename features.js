const chat = document.querySelector('.chat');
const chatBtn = document.querySelector('.chat-btn');

chatBtn.addEventListener('click', () => {
    chat.classList.toggle('hidden');
    if (chat.classList.contains('hidden')) {
        chatBtn.innerHTML = '<i class="fa fa-comments"></i>';
    } else {
        chatBtn.innerHTML = '<i class="fa fa-chevron-down"></i>';
    }
})

// 💥 Emoji functionality -

const emojiBtn = document.querySelector('#emoji-btn');
// // const picker = new EmojiButton();

const picker = new EmojiButton({
    // referenceElement: emojiBtn,
    // triggerElement: emojiBtn,
    // autoHide: false,

    // position: 'auto',
    position: 'bottom-start',
    emojisPerRow: 6,
    rows: 5,
    showPreview: false,
    theme: 'auto',
    rootElement: chat,
    styleProperties: {
    }
});
picker.on('emoji', emoji => {
    document.querySelector('.message-input').value += emoji;
});

emojiBtn.addEventListener('click', () => picker.togglePicker(emojiBtn));