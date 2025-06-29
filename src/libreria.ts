import {organizar} from './featureFlag';

export function organizarNombres(nombres:string[], include:string, exclude:string|null): string[]{
    if(organizar.verificarCondicion(nombres)){
        return nombres.filter(nombre=>nombre.search(include)!=-1 && (nombre.search(exclude)==-1||!exclude));
    }
    else{
        return nombres.filter(nombre=>nombre.search(include)!=-1);
    }
}