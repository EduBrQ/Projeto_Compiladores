<?php

//Esta é uma classe simples que permite extrair tokens de uma string usando expressões regulares.
// Defina seus padrões usando o método add () e, em seguida, extraie os tokens com tokenize ().
// A classe tokenizer também gera uma série de tokens, identificando o nome e o valor de cada token.

include 'tokenizer.php';

$tokenizer = new Tokenizer();
$strings = <<<'SCRIPT'
/^("|')(\\?.)*?\1/   
  
SCRIPT
;

$comment = <<<'SCRIPT'
/^\/\*.*\*\//     
SCRIPT
;
//-----TOKENS

$tokenizer->add("NUMERO", "/^[0-9]+/");
$tokenizer->add("STRING", $strings);
$tokenizer->add("VARIAVEL", "/^%[a-zA-Z]+/");
$tokenizer->add("IGUAL", "/^=/");
$tokenizer->add("LOGICO", "/^(==|&&|\|\|)/");
$tokenizer->add("ABRE CHAVE", "/^{/");
$tokenizer->add("FECHA CHAVE", "/^}/");
$tokenizer->add("ABRE PARENTESES", "/^\(/");
$tokenizer->add("FECHA PARENTESES", "/^\)/");
$tokenizer->add("DECLARAÇÃO DE FLUXO DE CONTROLE", "/^(if|else|where|for)/");
$tokenizer->add("COMENTARIO", $comment);
$tokenizer->add("NOMENCLATURA", "/^[a-zA-Z]+/");


//TENTANDO CAPTURAR O TEXTO DA TEXTAREA DA HTML
function capturar($string, $comeco, $fim) {
    $str = explode($comeco, $string);
    $str = explode($fim, $str[1]);
    return $str[0];
}
    $url = file_get_contents('index.html');
    $input = capturar($url, '<textarea id="#cphp">', '</textarea>');
    echo $input;

    //$input = '%var string = "Eu sou uma String" %var Num = 99999'
    //          . 'if(string || num){ /*Eu sou um Comentario...*/ }';
//FIM DA CAPTURA
while($result = $tokenizer->tokenize($input)){
    echo $result."<br />";
}
echo $tokenizer->last_error;
echo "<pre>";
print_r($tokenizer->tokens);
echo "</pre>";