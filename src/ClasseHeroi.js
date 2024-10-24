class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;   
        this.idade = idade; 
        this.tipo = tipo;  
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'não tem ataque definido'; 
                break;
        }
       
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


let heroi1 = new Heroi("Arthur", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 150, "mago");
let heroi3 = new Heroi("Shen", 40, "monge");
let heroi4 = new Heroi("Naruto", 17, "ninja");

heroi1.atacar();  
heroi2.atacar();  
heroi3.atacar();  
heroi4.atacar(); 
