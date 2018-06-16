export class User {
    constructor(public email: string, 
                public name: string, 
                private password: string) {}

    matches(another: User): boolean {
        return another !== undefined && 
            another.email === this.email && 
            another.password === this.password
    }
}

export const users = {
    "tiagoboeing@bol.com.br": new User('tiagoboeing@bol.com.br', 'Tiago', 'tiago123'),
    "teste@teste.com": new User('teste@teste.com', 'Teste', 'teste'),
    "naosei@naosei.com": new User('naosei@naosei.com', 'Não sei', 'naosei'),
}