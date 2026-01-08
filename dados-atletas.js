class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calcularCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Adolescente";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calcularMediaValida() {
        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        const notasValidas = notasOrdenadas.slice(1, -1);
        const soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasValidas.length;
    }

    obterDadosAtleta() {
        return this.nome;
    }

    obterIdadeAtleta() {
        return this.idade;
    }

    obterPesoAtleta() {
        return this.peso;
    }

    oberterAlturaAtleta() {
        return this.altura;
    }

    obterNotasAtleta() {
        return this.notas;
    }

    obterCategoriaAtleta() {
        return this.calcularCategoria();
    }

    obterIMC() {
        return this.calcularIMC();
    }

    obterMadiaValida() {
        return this.calcularMediaValida();
    }

    exibirInfomacoes() {
        console.log(`Nome: ${this.obterDadosAtleta()}`);
        console.log(`Idade: ${this.obterIdadeAtleta()}`);
        console.log(`Peso: ${this.obterPesoAtleta()}`);
        console.log(`Altura: ${this.oberterAlturaAtleta()}`);
        console.log(`Notas: ${this.obterNotasAtleta().join(", ")}`);
        console.log(`Categoria: ${this.obterCategoriaAtleta()}`);
        console.log(`IMC: ${this.obterIMC().toFixed()}`);
        console.log(`Média Válida: ${this.obterMadiaValida().toFixed(8)}`);
    }
    
}

// Exemplo de uso conforme o enunciado
console.log("=== EXEMPLO DO ENUNCIADO ===");
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
atleta.exibirInformacoes();

// Testes adicionais com diferentes atletas
console.log("\n=== TESTES ADICIONAIS ===");

const atletasTeste = [
    new Atleta("Ana Silva", 10, 35, 1.40, [8, 7.5, 9, 8.5, 7]),
    new Atleta("Carlos Santos", 13, 45, 1.55, [9, 8.5, 9.5, 8, 9]),
    new Atleta("Mariana Oliveira", 15, 52, 1.60, [9.5, 10, 9, 9.5, 8.5]),
    new Atleta("João Pereira", 25, 75, 1.75, [7, 8, 7.5, 8.5, 9]),
    new Atleta("Pedro Costa", 8, 30, 1.30, [6, 7, 6.5, 7.5, 6]) // Sem categoria
];

atletasTeste.forEach((atleta, index) => {
    console.log(`\n--- Atleta ${index + 1} ---`);
    atleta.exibirInformacoes();
});

// Demonstração dos métodos individualmente
console.log("\n=== USO INDIVIDUAL DOS MÉTODOS ===");
const novoAtleta = new Atleta("Fernanda Lima", 28, 65, 1.68, [9, 9.5, 8.5, 9, 9.2]);

console.log(`Nome: ${novoAtleta.obtemNomeAtleta()}`);
console.log(`Categoria: ${novoAtleta.obtemCategoria()}`);
console.log(`IMC: ${novoAtleta.obtemIMC().toFixed(2)}`);
console.log(`Média Válida: ${novoAtleta.obtemMediaValida().toFixed(2)}`);
console.log(`Notas: ${novoAtleta.obtemNotasAtleta().join(", ")}`);