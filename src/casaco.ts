export class Casaco {

    //ATRIBUTOS 
    private tecido: string;
    private cor: string;
    private comprimento:number;

    //CONSTRUTOR
    public constructor(_tecido:string, _cor: string, _comprimento: number){
        this.tecido = _tecido;
        this.cor = _cor;
        this.comprimento = _comprimento;
    }

    //METODOS GET E SET 
    public getTecido(): string{
        return this.tecido;
    }

    public setTecido(_tecido: string): void{
        this.tecido = _tecido;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }
    
    
    public getComprimento(): number{
        return this.comprimento;
    }

    public setComprimento(_comprimento: number): void{
        this.comprimento = _comprimento;
    }

    public vestir(): void{
        console.log (`${this.comprimento} é bem chamativo.`);
    }

    public seAquecer(): void{
        console.log(`${this.tecido} aquece muito bem.`);
    }

}