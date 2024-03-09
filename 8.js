class Animal{ //criação de uma classe 
    constructor(nome, idade){ //criação dos atributos da classe
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){ //criação do método descrever
        console.log(nome,idade);
    }
}

class Gato extends Animal{ // criaçao da classe Gato com herança da classe Animal
    constructor(nome, idade, cor){//criação dos atributos
        super(nome, idade);//chamar o constructor da classe Animal     
           this.cor = cor;
    
    }

    miar(){ // criação do método miar
        console.log("miaow");
    }
}

const cachorro = new Animal("Bianca",14); // adição do objeto cachorro com nome e idade
const gato = new Animal("Catarina", 11, "preto" ); //adição do objeto gato com nome, idade e cor

cachorro.descrever(); // puxando o método descrever para o objeto cachorro
gato.miar();// puxando o método miar para o gato