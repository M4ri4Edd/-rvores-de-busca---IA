class item {
    nome;
    peso;
    custo;
    
    constructor(nome, peso, custo) {
        this.nome = nome;
        this.peso = peso;
        this.custo = custo;
        this.razao = (custo / peso).toFixed(2);
    }
}
