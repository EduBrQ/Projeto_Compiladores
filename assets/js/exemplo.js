function trocar() {

    // Expressão regular
    var minha_expressao = /valor/ig;

// Variável do tipo string
    var formulario = document.getElementById("formulario");
    valor = codigo.value;
    alert(valor.replace(minha_expressao, 'VALOR') );

}
function analisar() {

    var formulario = document.getElementById("formulario");
    var codigo = formulario.codigo;

    var re_codigo = /regular/ig;  //i -> Não leva em consideração maiúsculas e minúsculas (case-insensitive).
                             // g -> Global Match – procura todas as ocorrências da expressão no texto, ao invés de parar na primeira ocorrência.

    if(re_codigo.test(codigo.value)) {
        alert("CODIGO VALIDO")
        alert(codigo.value = re_codigo)

    }else {
        alert("CODIGO INVALIDO")
    }

 }
