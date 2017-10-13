/**
 * Created by eduardobq3 on 01/10/2017.
 */

var codigo = "";

$(document).on('keyup', '#leitor', function () {

    codigo = $("#leitor").val();

});

$(document).on('click', '#analisar', function () {

    alert(codigo);


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

