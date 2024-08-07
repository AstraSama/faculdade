const prompt = require("prompt-sync")();
const {GERAR_ID} = require("../src/id.js");
const {FORMATAR_HORA} = require("../src/hora.js");
// TODO terminar os módules crud
const CRIAR_CURSO = () => {
    let turno = {
        nome: "",
        inicio: "",
        termino: "",
        id_turno: GERAR_ID()
    }

    do{
        console.log("Escolha entre os turnos: \nMatinal: 'M';\nTarde: 'T';\nNoturno: 'N'\nIntegral: 'I'.");
        turno.nome = prompt("Digite o turno: ").toLowerCase();

        switch (turno.nome) {
            case "m":
                turno.nome = "MATINAL";

                do{
                    turno.inicio = prompt("Em qual horário começa(Use 00:00): ");
                    turno.inicio = turno.inicio.replaceAll(":", ".");
                    turno.inicio = Number(turno.inicio);
            
                    if(
                        isNaN(turno.inicio) ||
                        turno.inicio < 5 ||
                        turno.inicio > 12 ||
                        turno.inicio == "" &&
                        turno.inicio != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.inicio = "";
            
                    } else {
                        turno.inicio = String(turno.inicio);
                        turno.inicio = FORMATAR_HORA(turno.inicio);
                        turno.inicio = turno.inicio.replaceAll(".", ":");
                    }
            
                } while(!turno.inicio);

                do{
                    turno.termino = prompt("Em qual horário termina(Use 00:00): ");
                    turno.termino = turno.termino.replaceAll(":", ".");
                    turno.termino = Number(turno.termino);
            
                    if(
                        isNaN(turno.termino) ||
                        turno.termino < turno.inicio ||
                        turno.termino > 12 ||
                        turno.termino == "" &&
                        turno.termino != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.termino = "";
            
                    } else {
                        turno.termino = String(turno.termino);
                        turno.termino = FORMATAR_HORA(turno.termino);
                        turno.termino = turno.termino.replaceAll(".", ":");
                    }
            
                } while(!turno.termino);

            break;

            case "t":
                turno.nome = "TARDE";

                do{
                    turno.inicio = prompt("Em qual horário começa(Use 00:00): ");
                    turno.inicio = turno.inicio.replaceAll(":", ".");
                    turno.inicio = Number(turno.inicio);
            
                    if(
                        isNaN(turno.inicio) ||
                        turno.inicio < 12 ||
                        turno.inicio > 18 ||
                        turno.inicio == "" &&
                        turno.inicio != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.inicio = "";
            
                    } else {
                        turno.inicio = String(turno.inicio);
                        turno.inicio = FORMATAR_HORA(turno.inicio);
                        turno.inicio = turno.inicio.replaceAll(".", ":");
                    }
            
                } while(!turno.inicio);

                do{
                    turno.termino = prompt("Em qual horário termina(Use 00:00): ");
                    turno.termino = turno.termino.replaceAll(":", ".");
                    turno.termino = Number(turno.termino);
            
                    if(
                        isNaN(turno.termino) ||
                        turno.termino < turno.inicio ||
                        turno.termino > 18 ||
                        turno.termino == "" &&
                        turno.termino != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.termino = "";
            
                    } else {
                        turno.termino = String(turno.termino);
                        turno.termino = FORMATAR_HORA(turno.termino);
                        turno.termino = turno.termino.replaceAll(".", ":");
                    }
            
                } while(!turno.termino);

            break;

            case "n":
                turno.nome = "NOTURNO";

                do{
                    turno.inicio = prompt("Em qual horário começa(Use 00:00): ");
                    turno.inicio = turno.inicio.replaceAll(":", ".");
                    turno.inicio = Number(turno.inicio);
            
                    if(
                        isNaN(turno.inicio) ||
                        turno.inicio < 18 ||
                        turno.inicio > 23.30 ||
                        turno.inicio == "" &&
                        turno.inicio != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.inicio = "";
            
                    } else {
                        turno.inicio = String(turno.inicio);
                        turno.inicio = FORMATAR_HORA(turno.inicio);
                        turno.inicio = turno.inicio.replaceAll(".", ":");
                    }
            
                } while(!turno.inicio);

                do{
                    turno.termino = prompt("Em qual horário termina(Use 00:00): ");
                    turno.termino = turno.termino.replaceAll(":", ".");
                    turno.termino = Number(turno.termino);
            
                    if(
                        isNaN(turno.termino) ||
                        turno.termino < turno.inicio ||
                        turno.termino > 23.30 ||
                        turno.termino == "" &&
                        turno.termino != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.termino = "";
            
                    } else {
                        turno.termino = String(turno.termino);
                        turno.termino = FORMATAR_HORA(turno.termino);
                        turno.termino = turno.termino.replaceAll(".", ":");
                    }
            
                } while(!turno.termino);

            break;

            case "i":
                turno.nome = "INTEGRAL";

                do{
                    turno.inicio = prompt("Em qual horário começa(Use 00:00): ");
                    turno.inicio = turno.inicio.replaceAll(":", ".");
                    turno.inicio = Number(turno.inicio);
            
                    if(
                        isNaN(turno.inicio) ||
                        turno.inicio < 0 ||
                        turno.inicio > 23.59 ||
                        turno.inicio == "" &&
                        turno.inicio != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.inicio = "";
            
                    } else {
                        turno.inicio = String(turno.inicio);
                        turno.inicio = FORMATAR_HORA(turno.inicio);
                        turno.inicio = turno.inicio.replaceAll(".", ":");
                        
                    }
            
                } while(!turno.inicio);

                do{
                    turno.termino = prompt("Em qual horário termina(Use 00:00): ");
                    turno.termino = turno.termino.replaceAll(":", ".");
                    turno.termino = Number(turno.termino);
            
                    if(
                        isNaN(turno.termino) ||
                        turno.termino < turno.inicio ||
                        turno.termino > 23.59 ||
                        turno.termino == "" &&
                        turno.termino != 0
                    ) {
                        console.log("Formato inválido. Tente novamente.");
                        turno.termino = "";
            
                    } else {
                        turno.termino = String(turno.termino);
                        turno.termino = FORMATAR_HORA(turno.termino);
                        turno.termino = turno.termino.replaceAll(".", ":");
                    }
            
                } while(!turno.termino);

            break;

            default:
                console.log("Escolha uma opção correta.");
                turno.nome = "";
        }
    } while(!turno.nome);

    return turno;
}

let a = CRIAR_CURSO()
console.log(a);