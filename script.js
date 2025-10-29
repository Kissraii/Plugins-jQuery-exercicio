    $(document).ready(function() {
    // 🖼️ Inicializa o carrossel (Slick)
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

    // 🎭 Máscaras
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');

    // ✅ Validação do formulário
    $("#cadastroForm").validate({
        rules: {
        nome: { required: true, minlength: 3 },
        cpf: { required: true, minlength: 14 },
        telefone: { required: true, minlength: 14 },
        email: { required: true, email: true }
        },
        messages: {
        nome: "Por favor, digite seu nome completo",
        cpf: "Informe um CPF válido",
        telefone: "Informe um telefone válido",
        email: "Digite um e-mail válido"
        },
        submitHandler: function(form) {
        alert("Formulário enviado com sucesso!");
        form.reset();
        }
    });
    });
