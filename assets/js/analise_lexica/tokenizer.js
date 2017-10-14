/**
 * Created by eduardobq3 on 01/10/2017.
 */

function tokenizer(codigo, TOKENS) {

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

            console.log(text);

            var set = {
                'FECHA_CHAVE': 1,
                'ABRE_CHAVE': 1,
                'FLUXO_DE_CONTROLE': 1,
                'VARIAVEL': 1,
                'COMPARACAO': 1,
                'ABRE_PARENTESES': 1,
                'FECHA_PARENTESES': 1,
                'NUMERO': 1,
                'RESERVADA': 1,
                'IGUAL': 1,
                'PONTO_VIRGULA': 1,
                'COMENTARIO': 1,
                'INCREMENTO': 1,
                'DECREMENTO': 1,
                'SOMA': 1,
                'SUBTRACAO': 1,
                'MULTIPLICACAO': 1
            };

            if (tokenName in set) {
                // adicionamos tanto o nome do token quanto o lexeme
                outputTokenList.push([tokenName, lexeme]);
            }
            else if (tokenName in {'EMPTY': 1}) {
                // descarte, não nos importamos com espaços e quebras de linha.
            }
            else {
                throw 'Errado Porra!!!:\n' +
                (text.substring(0, text.indexOf('\n')));
                break;
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
