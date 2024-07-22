function gradingStudents(grades) {
    // Write your code here
    let gradeArredondada = []
    
    grades.forEach(num => {
        let proximoMultiplo = (Math.trunc(num / 5) + 1) * 5  

        if ((proximoMultiplo - num) < 3 && num >= 38) {
            gradeArredondada.push(proximoMultiplo) 
        } else {
            gradeArredondada.push(num)
        }       
    })

    return gradeArredondada
}

console.log(gradingStudents([82, 63, 74, 37]))
console.log(gradingStudents([73, 67, 38, 33]))