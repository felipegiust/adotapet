import { Especies } from "./especies.enum";
import { Sexo } from "./sexo.enum";
import { Vacina } from "../vacinas/vacina.model";

export class Pets {
    id?: number;
    especie: Especies; 
    sexo: Sexo;
    nome: string;
    dataNascimento: Date;
    imagem?: string;
    vacinasAplicadas?: Vacina[]
}