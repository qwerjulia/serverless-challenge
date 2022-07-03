export default class Employee {
	nome: string;
	cargo: string;
	idade: number;

	constructor (nome: string, cargo: string, idade: number) {
        if (!nome) throw new Error('O campo nome não pode ser vazio, por favor informe-o')
        if (!cargo) throw new Error('O campo cargo não pode ser vazio, por favor informe-o')
        if (!idade) throw new Error('O campo idade não pode ser vazio, por favor informe-o')
        if (typeof idade != "number") throw new Error('O campo idade deve ser um número')
		this.nome = nome;
		this.cargo = cargo;
        this.idade = idade;
	}
}
