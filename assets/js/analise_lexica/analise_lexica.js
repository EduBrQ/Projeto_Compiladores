/**
 * Created by eduardobq3 on 01/10/2017.
 */


var codigo = "";

$(document).on('keyup', '#leitor', function () {

    codigo = $("#leitor").val();

});

$(document).on('click', '#analisar', function () {

    var TOKENS = [
        {name: 'EMPTY', regex: /^(\s+)/},
        {name: 'ABRE_CHAVE', regex: /^({)/},
        {name: 'FECHA_CHAVE', regex: /^(})/},
        {name: 'FLUXO_DE_CONTROLE', regex: /^(if|else|while|do|for|foreach|switch)/},
        {name: 'VARIAVEL', regex: /(^\$[a-zA-Z]+)/},
        {name: 'COMPARACAO', regex: /^(==|&&|\|\|)/},
        {name: 'ABRE_PARENTESES', regex: /(^\()/},
        {name: 'FECHA_PARENTESES', regex: /(^\))/},
        {name: 'NUMERO', regex: /(^[0-9]+)/},
        {name: 'RESERVADA', regex: /^(break|case|continue|as|cacth|try|include|echo|die|final|class|new|or|private|protected|use|require|require_once|var|throw|)/},
    ];

    // CHAMA A FUNÇÃO TOKENIZER PASSANDO O CODIGO A SER ANALIZADO E AS REGRAS
    // A FUNÇÃO RETORNA UM ARRAY DEVIDAMENTE SEPARADO COM O TOKEN E O LEXEMA
    var arrayTokens = tokenizer(codigo, TOKENS);

    console.log(arrayTokens);

    $('#myTable').remove();

    // CHAMA A FUNÇÃO DE GERAR TABELA DE TOKENS E LEXEMAS
    var table = geraTabeta(arrayTokens);

    // ADICIONA A TABELA AO CONTENT
    $('#content').append(table);

    // CHAMA O MODAL COM A TABELA DE TOKENS E LEXEMAS
    $('.modal-title').text('Análise Léxica');
    $('#myModal').modal('show');
});

function geraTabeta(arrayTokens) {
    var table = '<table id="myTable" class="table table-responsive">'+
                    '<thead>'+
                        '<tr>'+
                            '<th>TOKEN</th>'+
                            '<th>LEXEMA</th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '</tbody>';

    $.each(arrayTokens, function (index, item) {

        console.log(item);

        table +=    '<tr>' +
                        '<td>'+ item[0] +'</td>' +
                        '<td>'+ item[1] +'</td>' +
                    '</tr>';

    });

    table += '</table>';

    return table;
}