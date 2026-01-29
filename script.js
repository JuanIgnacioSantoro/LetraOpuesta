    function Tranformar() {
        var texto = '';
        const diccionario = {' ':' ', 'a':'z', 'b':'y', 'c':'x', 'd':'w', 'e':'v', 'f':'u', 'g':'t', 'h':'s', 'i':'r', 'j':'q', 'k':'p', 'l':'o', 'm':'ñ', 'n':'n', 'ñ':'m', 'o':'l', 'p':'k', 'q':'j', 'r':'i', 's':'h', 't':'g', 'u':'f', 'v':'e', 'w':'d', 'x':'c', 'y':'b', 'z':'a'};
        var Conversion = '';

        texto = prompt('Ingresar texto');
        texto = ('a'+texto);

        var resultado = texto.toLowerCase().split('').map(x => diccionario[x]).reduce( (x,y) => Conversion=Conversion+y );
        
        alert(resultado);
    }