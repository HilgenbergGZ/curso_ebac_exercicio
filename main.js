$(document).ready(function() {

    const listaTarefas = $("#lista-de-tarefas")

    //Adiciona um evento click nos elementos listados e uma função que trás
    //a formatação da classe "tarefaConcluida"
    listaTarefas.on("click", "li", function(){
        $(this).toggleClass("tarefaConcluida")
    }) 


    //Quando o botão do tipo submit é clicado ele ativa a function
    //A function evita que a página seja recarregada automaticamente
    //A funciton "puxa" o conteúdo do que é digitado no input #tarefa e deixa na const tarefa
    //uma div com a lista é criada e armazenada na lista de tarefas que foi criada lá em cima
    //por fim, o input é zerado
    $("form").on("submit", function(e){
        e.preventDefault()
        const tarefa = $("#tarefa").val()
        $(`
        <div>
            <li>${tarefa}</li>
        </div>`).appendTo(listaTarefas)
        $("#tarefa").val("")
    })

})
