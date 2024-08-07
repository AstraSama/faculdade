const FORMATAR_HORA = (data = "") => {
    let aux_hora;
    let aux2_hora = 0;

    for(let i = 0; i < data.length; i++) {
        if(data[i] == ".") {
            aux_hora = i;

        }
    }

    if(!aux_hora) {
        data = data.split("");
        data.push('.');
        data = data.join("");

    }

    for(let i = aux_hora + 1; i < data.length; i++) {
        aux2_hora++;

    }

    if(aux2_hora == 0) {
        data = data.split("")
        data.push('0');
        data.push('0');
        
    } else if(aux2_hora == 1) {
        data = data.split("")
        data.push('0');

    } else if(aux2_hora > 2) {
        data = data.split("")
        data.splice(5, aux2_hora - 2);

    }

    data = data.join("");
    data = data.replaceAll(".", ":");

    console.log(data);

    return data;
}

module.exports = {
    FORMATAR_HORA
}