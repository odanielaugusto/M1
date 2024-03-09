class SomadorDeNotas{ //criando uma classe
    constructor(){//adicionando o atributo de somar notas
        this.total = 0;
    }

    adicionarNota(nota){//adicioando o método de somar notas
        this.total += nota;

    }

    verTotal(){//adicionando método de ver o total
        console.log(total);
    }
}

const somador = new SomadorDeNotas(); //criando um objeto para somar as notas

somador.adicionarNota(8);//atribuindo uma nota
somador.adicionarNota(2);//atribuindo outra nota

somador.verTotal();// chamando o método para ver o total