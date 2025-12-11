document.addEventListener("DOMContentLoaded", function() {
        const sendButton = document.getElementById("send");

        sendButton.addEventListener("click", function() {
            // Redireciona para a próxima página
            window.location.href = "index2.html";
        });
    });

document.addEventListener("DOMContentLoaded", function() {
        const nextBtn = document.getElementById("nextBtn");

        nextBtn.addEventListener("click", function() {
            // Redireciona para a próxima página
            window.location.href = "index5.html";
        });
    });

const link = document.getElementById('link')

link.addEventListener('click', () => {
    toast.classList.toggle('visivel');
    toast.classList.toggle('oculto');
})