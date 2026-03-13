import promptSync from "prompt-sync";

const prompt = promptSync();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [3];

for(i = 0; i < 3; ++i)
{
    tab[i] = [3];
    for(j = 0; j < 3; ++j)
    {
        tab[i][j] = ' ';
    }
}

while((jogadas < 9) && (fimJogo ==  false))
{
    for(i = 0; i < 3; ++i)
    {
        console.log(`[${tab[i]}]`);
    }

    lin = parseInt(prompt(`${jogador} em  [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));

    if((lin >= 3) || (lin <= 0))
    {
        console.log("Linha fora de alcance");
    }
    if((col >= 3) || (col <= 0))
    {
        console.log("Coluna fora de alcance");
    }
}

//d

if(vencedor == ' ')
{
    console.log("empate\n");
} 
else
{
    console.log(`${vencedor} venceu`);
}