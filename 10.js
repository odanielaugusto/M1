class Funcionario{ // criando a classe Funcionario
    constructor(nome, idade, salarioBase){ //criando atributos da nossa classe
        this.nome = nome; //criação do atributo nome
        this.idade = idade; // criação do atributo idade
        this.salarioBase = salarioBase; // criação do atributo salarioBase
    }

    calcularSalario(){ //criação do método calcularSalario

        console.log(this.salarioBase, "+ [valor adicional de acordo com o cargo do funcionário]"); // exibição do salarioBase + o salário respectivo ao cargo no console
    }
}

class Professor extends Funcionario{ // criação da classe Professor, que herda atributos da classe Funcionario
    constructor(nome, idade, salarioBase, diciplina, horasSemanais, valorHora){ // estabelecendo os atributos da classe Professor
        super(nome,idade,salarioBase); //puxando os atributos da classe Funcionario
        this.diciplina = diciplina //criando atributo diciplina
        this.horasSemanais = horasSemanais; //criando atributo horasSemanais
        this.valorHora = valorHora;//criando atributo valorHora
        
    }

    calcularSalario(){ //criando método calcularSalario na classe Professor

        this.salarioProfessor = this.horasSemanais * this.valorHora; //definindo o cálculo do salarioProfessor
        console.log (this.salarioProfessor); // exibição do salarioProfessor  no console
    }


}
    const professor1 = new Professor("Mario", 37, 2500, "matemática", 40, 20); //criando o objeto professor1 e definindo seus valores
    const professor2 = new Professor("Brenão", 42, 3000, "história", 40, 30); //criando o objeto professor2 e definindo seus valores
    const funcionario1 = new Funcionario("Henrique", 33, 2700); //criando o objeto funcionario1 e definindo seus valores

    professor1.calcularSalario(); //chamando o método calcularSalario para o objeto professor1
    professor2.calcularSalario(); //chamando o método calcularSalario para o objeto professor2
    funcionario1.calcularSalario();//chamando o método calcularSalario para o objeto funcionario1