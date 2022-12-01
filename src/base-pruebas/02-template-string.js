
export const getSaludo = (name) => {
    if (typeof name === 'undefined') return undefined
    return 'Hola ' + name;
}

getSaludo(0)