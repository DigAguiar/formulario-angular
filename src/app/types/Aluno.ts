function media ( nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;

}

export interface IAluno {
    id : number;
    nome: string;
    nota1: number;
    nota2: number;
    media?(nota1: any,nota2: any): number;
}


export const listaAlunos: IAluno[] = [
    {id: 1,nome: "joao",nota1: 5,nota2: 4,media: media},
    {id: 2,nome: "maria",nota1: 8,nota2: 9,media: media},
]
    

