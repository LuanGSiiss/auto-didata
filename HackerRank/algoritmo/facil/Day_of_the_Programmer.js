function dayOfProgrammer(year) {
    // Write your code here
    let bissextoGregoriano = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
    let bissextoJuliano = year % 4 == 0
    let dia = 256
    let mes = 1
    let mesesGregoriano = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let mesesGregorianoBis = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let mesesJuliano= [31, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
    let mesesJulianoBis= [31, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
    
    if (year == 1918) {
        while (dia > mesesGregorianoBis[mes - 1]) {
            if (mes == 1) {
                dia -= mesesJulianoBis[mes - 1];
                mes += 1;
            } else if (mes == 2) {
                dia -= mesesGregorianoBis[mes - 1] - 14;
                mes += 1;
            } else {
                dia -= mesesGregorianoBis[mes-1]
                mes += 1
            } 
        }
    } else if (year > 1917 && !bissextoGregoriano) {
        while (dia > mesesGregoriano[mes-1]) {
            dia -= mesesGregoriano[mes-1]
            mes += 1
        }
    } else if (year > 1917 && bissextoGregoriano) {
        while (dia > mesesGregorianoBis[mes-1]) {
            dia -= mesesGregorianoBis[mes-1]
            mes += 1
        }
    } else if (year < 1918 && !bissextoJuliano) {
        while (dia > mesesJuliano[mes-1]) {
            dia -= mesesJuliano[mes-1]
            mes += 1
        }
    } else if (year < 1918 && bissextoJuliano) {
        while (dia > mesesJulianoBis[mes-1]) {
            dia -= mesesJulianoBis[mes-1]
            mes += 1
        }
    }

    let diaFormatado = dia.toString().padStart(2, '0')
    let mesFormatado = mes.toString().padStart(2, '0')
    let dataCompleta = `${diaFormatado}.${mesFormatado}.${year}`
    
    return dataCompleta
}

console.log(dayOfProgrammer(2000))
console.log(dayOfProgrammer(1903))
console.log(dayOfProgrammer(1912))
console.log(dayOfProgrammer(1918))