class CidadeComDistancia {
    nome;
    distanciaObjetivo;
    vizinhos;

    constructor(nome, distanciaObjetivo) {
        this.nome = nome;
        this.distanciaObjetivo = distanciaObjetivo;
        this.vizinhos = []; 
    }

    adicionarVizinho(vizinho, distancia) {
        this.vizinhos.push({cidade: vizinho, custo: distancia});    
    }
}

//===============Exportar o mapa===============

module.exports = CidadeComDistancia;