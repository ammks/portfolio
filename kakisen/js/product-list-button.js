const sections = document.querySelectorAll('.tab-section');

sections.forEach(section => {
    const buttons = section.querySelectorAll('.list-button .btn');
    const items = section.querySelectorAll('.list-container .item');

    if (buttons.length > 0 && items.length > 0) {
        buttons[0].classList.add('active');
        items[0].classList.add('active');
    }

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            items.forEach(i => i.classList.remove('active'));

            btn.classList.add('active');
            items[index].classList.add('active');
        });
    });
});
