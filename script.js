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