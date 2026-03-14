import promptSync from "prompt-sync";

const prompt = promptSync();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'x';
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

    lin = parseInt(prompt(`${jogador} em  [linha]: `)) - 1;
    col = parseInt(prompt(`${jogador} em [coluna]: `)) - 1;

    if((lin > 3) || (lin < 0))
    {
        console.log("Linha fora de alcance");
    }
    if((col > 3) || (col < 0))
    {
        console.log("Coluna fora de alcance");
    }

    if(tab[lin][col] != ' ')
    {
        console.log("Está coordenada não está vazia");
    }
    else
    {
        tab[lin][col] = jogador;
        ++jogadas;
    }
    
    for(i = 0; i < 3; ++i)
    {
        //linhas
        if(tab[i][0] == jogador && tab[i][1] == jogador && tab[i][2] == jogador)
        {
            fimJogo = true;
            vencedor = jogador;
            break;
        }
        //colunas
        else if(tab[0][i] == jogador && tab[1][i] == jogador && tab[2][i] == jogador)
        {
            fimJogo = true;
            vencedor = jogador;
            break;
        }
    }

    if(tab[0][0] == jogador && tab[1][1] == jogador && tab[2][2] == jogador)
    {
        fimJogo = true;
        vencedor = jogador;
        break;
    }
    else if(tab[2][0] == jogador && tab[1][1] == jogador && tab[0][2] == jogador)
    {
        fimJogo = true;
        vencedor = jogador;
        break;
    }

    if(jogador == 'x')  jogador = 'o';
    else jogador = 'x';
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