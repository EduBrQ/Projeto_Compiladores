/**
 * Created by eduardobq3 on 01/10/2017.
 */

function tokenizer(codigo,TOKENS) {

    var text = codigo;

    var outputTokenList = [];

    while (text !== '') { // enquanto existir texto a ser consumido

        var hasMatch = false;

        /**
         * Iteramos sobre toda a lista de TOKENS até encontrarmos algum cujo padrão bata com o início do nosso texto.
         * Quando ocorre um "match" nós adicionamos o lexeme com seu respectivo token na lista de tokens de saída do lexer.
         * Caso nenhum padrão bata com o texto uma exceção é lançada imprimindo a linha que contêm o erro.
         *
         */
        for (var i = 0; i < TOKENS.length; i++) {

            var obj = TOKENS[i];

            var tokenName = obj.name;

            var tokenRegex = obj.regex;

            var matched = text.match(tokenRegex);

            if (!matched) {

                continue;
            }

            hasMatch = true;

            var lexeme = matched[1];

            // removemos do texto o lexeme encontrado
            // para que outro possa ser considerados
            // na próxima iteração
            text = text.substring(lexeme.length);

            var set =  {
                'FECHA_CHAVE': 1,
                'ABRE_CHAVE': 1,
                'FLUXO_DE_CONTROLE': 1,
                'VARIAVEL': 1,
                'COMPARACAO': 1,
                'ABRE_PARENTESES': 1,
                'FECHA_PARENTESES': 1,
                'NUMERO' : 1,
                'RESERVADA' : 1
            };

            if (tokenName in set) {
                // adicionamos tanto o nome do token quanto o lexeme
                outputTokenList.push([tokenName, lexeme]);
            }
            else if (tokenName in {'EMPTY': 1}) {
                // descarte, não nos importamos com espaços e quebras de linha.
            }
            else if(tokenName in {'ERRADAS': 1}) {
                //palavras doidas
            }
            else if(tokenName in {'EMPTY': 1}) {
                // nestes casos o relacionamento entre o nome do token
                // e o lexeme é 1<->1 então não precisamos adicionar o lexeme.
                outputTokenList.push([tokenName]);
            }
            break;
        }

        if (!hasMatch) {
            throw 'Errado Porra!!!:\n' +
            (text.substring(0, text.indexOf('\n')));
            break;
        }
    }

    return outputTokenList;
}
