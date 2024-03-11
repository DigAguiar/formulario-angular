function media ( nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;

}

export interface IAluno {
    nome: string;
    nota1: number;
    nota2: number;
    media?(nota1: any,nota2: any): number;
}


export const listaAlunos: IAluno[] = [
    {nome: "joao",nota1: 5,nota2: 4,media: media},
    {nome: "maria",nota1: 8,nota2: 9,media: media},
]
    

