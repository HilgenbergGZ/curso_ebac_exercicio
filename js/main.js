$(document).ready(function(){
    $("#carouselImagens").slick({
        autoplay: true
    })

    $(".menuHamburguer").click(function(){
        $("nav").slideToggle()
    })

    $("#telefone").mask("(00) 00000-0000")

    $("#telefone-fixo").mask("(00) 0000-0000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15,
                maxlength: 15
            },
            telefoneFixo: {
                required: false
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome!",
            email: "Por favor, digite seu e-mail!",
            telefone: "Este campo é obrigatório!",
            mensagem: "Este campo é obrigatório!",
        },
        submitHandler: function(form) {
            alert("Envio feito com sucesso!")
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            let telefoneV = $("#telefone").val()
            if (telefoneV.length < 15) {
                alert("Digite um número de telefone válido!")
            }
            else if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

    $(".lista-veiculos button").click(function(){
        const destino = $("#contato")

        const nomeVeiculo = $(this).parent().find("h3").text()

        $("#veiculoInteresse").val(nomeVeiculo)

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})