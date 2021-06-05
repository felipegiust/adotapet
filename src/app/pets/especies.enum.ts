export enum Especies {
    AVES = 'Aves',
    COELHOS = 'Coelhos',
    FUROES = 'Furões',
    PEIXES = 'Peixes',
    REPTEIS = 'Répteis',
    ROEDORES = 'Roedores',
    CAES = 'Cães',
    GATOS = 'Gatos'
}

export const EspeciesOptions = Object.keys(Especies).map((key) => {
    return {
        label: Especies[key],
        value: key
    }
})