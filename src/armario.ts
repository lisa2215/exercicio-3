export class Armario{
    //ATRIBUTOS
    private tinta: string;
    private madeira: string;
    private tranca: string;

    //CONSTRUTOR
    public constructor(_tinta: string, _madeira: string, _tranca: string){
        this.tinta = _tinta;
        this.madeira = _madeira;
        this.tranca = _tranca;
    
    }

    //MÉTODOS DET E SET
    public getTinta(): string{
        return this.tinta;
    }

    public setTinta(_tinta:string): void{
        this.tinta = _tinta;
    }

    public getMadeira(): string{
        return this.madeira;
    } 

    public setMadeira(_madeira:string): void{
        this.madeira = _madeira;
    }

    public getTranca(): string{
        return this.tranca;
    }

    public setTranca(_tranca:string): void{
        this.tranca = _tranca;
    }

    public guardar(): void {
        console.log (`${this.tranca} é muito franca para guardar com segurança.`);
    }

    public decoracao(): void{
        console.log (`${this.madeira} o material dele está desgastado.`);
    }
}