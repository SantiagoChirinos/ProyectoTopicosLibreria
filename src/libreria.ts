export function buscarNombres(nombres:string[], include:string):string[]{
    return nombres.filter(nombre=>nombre.search(include)!=-1);
}

export function buscarYFiltrarNombres(nombres:string[], include:string, exclude:string|null):string[]{
    return nombres.filter(nombre=>nombre.search(include)!=-1 && (nombre.search(exclude)==-1||!exclude));
}

