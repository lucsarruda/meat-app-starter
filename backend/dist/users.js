"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "tiagoboeing@bol.com.br": new User('tiagoboeing@bol.com.br', 'Tiago', 'tiago123'),
    "teste@teste.com": new User('teste@teste.com', 'Teste', 'teste'),
    "naosei@naosei.com": new User('naosei@naosei.com', 'Não sei', 'naosei')
};
