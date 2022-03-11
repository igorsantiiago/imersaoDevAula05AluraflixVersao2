
var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMzUwM2E5NzktNDViYy00ZWMyLTk1YTUtZGM1NjYzNjhkYjRhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMzg0NzYyNDMtZTkxMS00NmYzLWJkMDAtMmNlYTY1MTRmM2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"];

var listaNomeFilmes = ["Homem-Aranha: Sem Volta para Casa", "The Batman", "Não Olhe para Cima", "Duna", "Interestelar"];

var listaFilmesUsuario = [];

var listaUsuarioNome = [];


//Mostrar lista de filmes adiocionadas na array interna do desenvolvedor
var boxFilmesDev = document.getElementById("listaFilmesInternos");
    boxFilmesDev.innerHTML ="";
    for (i = 0; i < listaFilmes.length; i++) {
        boxFilmesDev.innerHTML = boxFilmesDev.innerHTML + '<div class="box"><img src="' + listaFilmes[i] + '"/><br><p>'+ listaNomeFilmes[i] +'</p></div>';
    }

//Função que adiciona a URL e nome do filme nas arrays listaFilmesUsuario() e listaUsuarioNome() respectivamente
function adicionarFilme() {
    
    var filmeUsuarioURL = document.getElementById("filme").value;

    var filmeUsuarioNomeURL = document.getElementById("nome-filme").value;

    if (filmeUsuarioURL.length == 0 || filmeUsuarioNomeURL.length == 0) {
        alert("Dados incompletos")
    }else if (filmeUsuarioURL.endsWith(".jpg") || filmeUsuarioURL.endsWith(".png")) {
        listaFilmesUsuario.push(filmeUsuarioURL);
        listaUsuarioNome.push(filmeUsuarioNomeURL);
        imprimeLista();
    } else {
        console.error ("Endereço Inválido")
        alert("Insira um link válido com imagem")
    }

    document.getElementById("filme").value = "";
    document.getElementById("nome-filme").value = "";


}

//Função para imprimir a lista dentro da função adiocionarFilmes()
function imprimeLista() {

    var boxFilmes = document.getElementById("filmesUsuario");
    boxFilmes.innerHTML ="";
    for (i = 0; i < listaFilmesUsuario.length; i++) {
        boxFilmes.innerHTML = boxFilmes.innerHTML + '<div class="box"><img src="' + listaFilmesUsuario[i] + '"/><br><p>'+ listaUsuarioNome[i] +'</p></div>';
        
    }

    console.log(listaFilmesUsuario);
    console.log(listaUsuarioNome);
}

imprimeLista();
