class Usuario {
    constructor(obj) {
        obj = obj || {} // tratamento ante erro de undefined

        this.id = obj.id;
        this.nome = obj.nome;
        this.email = obj.email;
        this.senha = obj.senha;
    }
}