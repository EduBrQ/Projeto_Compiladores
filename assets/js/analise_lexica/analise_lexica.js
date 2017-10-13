/**
 * Created by eduardobq3 on 01/10/2017.
 */

var codigo = "";

$(document).on('keyup', '#leitor', function () {

    codigo = $("#leitor").val();

});

$(document).on('click', '#analisar', function () {

    console.log(codigo);

    var id = new Token('id','ID');
    var op = new Token('op', 'OP');


// mostrando as propriedades nome dos objetos
    console.log('tipo é ' + id.tipo); // envia "tipo é id" ao log
    console.log('valor é ' + id.valor); // envia "valor é ID" ao log


    // codigo de teste


    // <?php
    //     $array = array(1, 2, 3, 4, 5);
    // print_r($array);
    //
    // foreach ($array as $i => $value) {
    //     unset($array[$i]);
    // }
    // print_r($array);
});

