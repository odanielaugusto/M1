class Funcionario{
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){

        console.log(this.salarioBase + "[valor adicional genérico]");
    }
}

class Professor extends Funcionario{
    constructor(nome, idade, salarioBase, diciplina, horasSemanais, valorHora){
        super(nome,idade,salarioBase);
        this.diciplina = diciplina
        this.horasSemanais = horasSemanais;
        this.valorHora = valorHora;
    }

    calcularSalario(){

        const salarioProfessor = this.horasSemanais * this.valorHora;
        console.log (salarioProfessor);
    }


}
    const professor1 = new Professor("Mario", 37, 2500, "matemática", 40);
    const professor2 = new Professor("Brenão", 42, 2500, "história", 40);

    professor1.calcularSalario();
    professor2.calcularSalario();