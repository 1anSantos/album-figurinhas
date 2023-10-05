class Album {
    constructor(nome, maximoFigurinhas) {
        this._nome = nome;
        this._maximoFigurinhas = maximoFigurinhas;
        this._figurinhas = [];
    }
    static _totalFigurinhas = 0;

    static getTotalFigurinhas() {
        return this._totalFigurinhas;
    }
    
    getNome() {
        return this._nome;
    }
    
    verificarFigurinha(numero) {
        return this._figurinhas.includes(numero);
    }

    adicionarFigurinhas(num) {
        if (this._figurinhas.length >= this._maximoFigurinhas) {
            console.log(`Maximo de Figurinhas Atingido no Album ${this._nome}`);
            return
        }
        if (this.verificarFigurinha(num)) {
            console.log(`A figurinha "${num}" já está presente no álbum ${this._nome}`);
            return
        }

        Album._totalFigurinhas++;
        this._figurinhas.push(num);
        console.log(`A figurinha "${num}" foi adicionada com sucesso no Album ${this._nome}`);
    }
}

exports.Album = Album;