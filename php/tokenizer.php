<?php

class Tokenizer
{
    private $_patterns = array();
    private $_length = 0;
    private $_tokens = array();
    private $_delimeter = '';
    private $_last_error = '';
    
    public function __construct($delimeter = "#")
    {
        $this->_delimeter = $delimeter;
    }
    /** 
    * Adiciona a expressao regular para o Tokenizer
    */
    public function add($name, $pattern)
    {
        $this->_patterns[$this->_length]['name'] = $name;
        $this->_patterns[$this->_length]['regex'] = $pattern;
        $this->_length++;
    }

    public function tokenize(&$input)
    {
        for($i = 0; $i < $this->_length; $i++)
        {
            if(@preg_match($this->_patterns[$i]['regex'], $input, $matches))
            {
                
   
                $this->_tokens[] = array('name' => $this->_patterns[$i]['name'],
                                         'token' => $matches[0]);

                $input = trim(preg_replace($this->_delimeter."^".preg_quote($matches[0], $this->_delimeter).$this->_delimeter, "", $input));
                return $matches[0];
            }
            elseif(preg_match($this->_patterns[$i]['regex'], $input, $matches) === false)
            {
                    $this->_last_error = 'Erro ocorrido em $_patterns['.$i.']';
                    return false;
            }
        }
        return false;
    }
    public function __get($item)
    {
        switch($item){
            case 'tokens':
                return $this->_tokens;
            case 'last_error':
                return $this->_last_error;
        }
    }
}




