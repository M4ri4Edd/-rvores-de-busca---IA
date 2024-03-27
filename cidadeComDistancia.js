class CidadeComDistancia {
    nome;
    distanciaObjetivo;
    vizinhos;

    constructor(nome, distanciaObjetivo) {
        this.nome = nome;
        this.distanciaObjetivo = distanciaObjetivo;
        this.vizinhos = []; 
    }

    adicionarVizinho(vizinho) {
        this.vizinhos.push({cidade: vizinho});
    }
}

//===============Exportar o mapa===============

module.exports = CidadeComDistancia;