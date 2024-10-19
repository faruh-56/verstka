document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});

function showContent(index) {
    const contents = document.querySelectorAll('.content');
    const tabs = document.querySelectorAll('.tab');
    
    contents.forEach((content, i) => {
        content.style.display = i === index ? 'block' : 'none';
    });

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
}

document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);

        const answer = button.nextElementSibling;
        answer.style.display = !expanded ? 'block' : 'none';
    });
});