document.getElementById('scrollToBottom').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth'
    });
});

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});

