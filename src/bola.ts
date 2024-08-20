export class Bola {

    //ATRIBUTOS 
    private cor: string;
    private design: string;
    private formato: string;

    //CONSTRUTOR
    public constructor(_cor:string, _design: string, _formato: string){
        this.cor = _cor;
        this.design = _design;
        this.formato = _formato;
    }

    //METODOS GET E SET 
    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getDesign(): string{
        return this.design;
    }

    public setDesign(_design: string): void{
        this.design = _design;
    }
    
    
    public getFormato(): string{
        return this.formato;
    }

    public setFormato(_formato: string): void{
        this.formato = _formato;
    }

    public chutar(): void{
        console.log (`${this.formato} é muito boa para chutar.`);
    }

    public cabecear(): void{
        console.log(`${this.design} é muito bonito.`);
    }

}