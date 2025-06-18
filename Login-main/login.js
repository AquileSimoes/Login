document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formLogin').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        const usuario = document.getElementById('usuario').value;
        const mensagemDiv = document.getElementById('mensagem');

        if (usuario.trim() !== '') {
            mensagemDiv.textContent = `${usuario}, bem logado!`;
        } else {
            mensagemDiv.textContent = 'Por favor, digite um nome de usuário válido.';
        }
    });
});
