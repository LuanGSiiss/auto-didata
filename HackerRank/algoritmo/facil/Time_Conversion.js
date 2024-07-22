function timeConversion(s) {
    // Write your code here
    // Separa os dados
    let hora = parseInt(s.substring(0,2))
    let minutos = s.substring(3,5)
    let segundos = s.substring(6,8)
    let periodo = s.substring(8,10)

    // Muda a hora quando necessario
    if (periodo === 'PM' && hora !== 12) {
        hora = hora + 12
    } else if (periodo === 'AM' && hora === 12) {
        hora = 0
    }

    let horaFormatada = hora < 10 ? '0' + hora : hora;
    // Junta tudo de novo
    let tempoMilitar = `${horaFormatada}:${minutos}:${segundos}` 
    
    return tempoMilitar
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('07:05:45AM'))