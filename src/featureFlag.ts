export interface FeatureFlag{
    verificarCondicion(nombres:string[]):boolean;
}



export const organizar: FeatureFlag={
    verificarCondicion(nombres:string[]):boolean {
        if(nombres.length%2==0){
            return true;
        }
        return false;
    }
}