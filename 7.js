class Animal{ //definição da classe Animal
    constructor(nome, idade){//Adicionando atributos da classe
        this.nome = nome; // atributo para armazenar o nome
        this.idade = idade;//atributo para armazenar uma idade
    }
    descrever(){//método descrever sendo adicionado
    
        console.log(this.nome, this.idade); // exibição do nome e da idade no console

    }

} 
    //criação de objetos na classe Animal
    const cachorro = new Animal("Roberto", 15);//criação do objeto cachorro com 15 anos de idade
    const gato = new Animal("Maria", 12);// criação do objeto gato com 12 anos de idade
    
    //chamado dos métodos para os objetos criados
    cachorro.descrever(); // chamada do método descrever para o objeto cachorro
    gato.descrever(); // chamada do método descrever para o objeto chaamado gato