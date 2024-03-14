
export interface IAluno {
    id : number;
    nome: string ;
    nota1: number | any;
    nota2: number;
    media: number;
}


export const listaAlunos: IAluno[] = [
    {id: 1,nome: "joao",nota1: 5,nota2: 4,media : 4.5,},
    {id: 2,nome: "maria",nota1: 8,nota2: 9,media: 8.5},
]
    

