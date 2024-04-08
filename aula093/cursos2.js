const cursos = ['JavaScript','HTML','CSS','C++','Python','Java','C#','Arduino']

// const getTodosCursos=()=>{
//     return cursos
// }

export default function getTodosCursos(){
        return cursos
}

function getCurso(i_curso){
    return cursos[i_curso]
}

export {cursos,getCurso}