/**
 * 
 * @param {string[]} nombres - Array de string que en el que se quiere buscar
 * @param {string} include - Cadena que se está buscando en cada nombre
 * @returns {string[]} - Subconjunto del array nombres donde todos contienen a include
 */
export function buscarNombres(nombres:string[], include:string):string[]{
    return nombres.filter(nombre=>nombre.search(include)!=-1);
}

/**
 * 
 * @param {string[]} nombres - Array de string que en el que se quiere buscar
 * @param {string} include - Cadena que se está buscando en cada nombre
 * @param {string|null} exclude - Cadena que se quiere que no aparezca
 * @returns {string[]} - Subconjunto del array nombres donde todos contienen a includey ninguno a exclude
 */
export function buscarYFiltrarNombres(nombres:string[], include:string, exclude:string|null):string[]{
    return nombres.filter(nombre=>nombre.search(include)!=-1 && (nombre.search(exclude)==-1||!exclude));
}

/**
 * Esta clase representa una colección de elementos genéricos ordenados por tiempo de entrada
 * y sin tener una jerarquía entre ellos
 */
export class Coleccion<T>{
    /**
     * @type {T} - representa los componentes de la colección
     */
    private componentes:T[];

    /**
     * crea una instancia de coleccion
     * @param {T} componentes - conjunto de elementos con los que se va a inicializar la colección
     */
    constructor(componentes:T[]){
        this.componentes=componentes;
    }
    /**
     * Permite agregar nuevos elementos a una colección
     * @param nuevoComponente - Nuevo elemento que se quiere añadir 
     * @returns - Retorna la posición donde se insertó el elemento
     */
    agregarComponente(nuevoComponente:T):number{
        return this.componentes.push(nuevoComponente);
    }
    /**
     * Permite eliminar un elemento de la colección
     * @param posicion - Posición del elemento a eliminar
     * @returns - Retorna el elemento eliminado
     */
    quitarComponente(posicion:number):T[]{
        if(posicion>this.componentes.length-1){
            return;
        }
        return this.componentes.splice(posicion,1);
    }

    /**
     * @generator
     * Retorna en orden todos los elementos de la colección uno por uno
     * @yields {T} - siguiente elemento de la colección
     * @returns {IterableIterator<T>} - iterador de la colección
     */
    *conseguirSiguienteElemento():IterableIterator<T>{
        let componentesARecorrer=this.componentes;
        let cantidadElementos=componentesARecorrer.length;
        let i=0;
        while(i<cantidadElementos){
            yield componentesARecorrer[i];
            i++;
        }
    }

    /**
     * @generator
     * Retorna uno por uno elementos aleatorios de la colección
     * @yields {T} - elemento aleatorio de la colección
     * @returns {IterableIterator<T>} - iterador de la colección
     */
    *conseguirElementoAleatorio():IterableIterator<T>{
        while(true){
            yield this.componentes[Math.floor(Math.random()*(this.componentes.length+1))]
        }
    }
}