export class espada{
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private design: string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: string, _design: string){
        this.tamanho = _tamanho;
        this.material = _material;
        this.design = _design;
    
    }

    //MÉTODOS DET E SET
    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho:number): void{
        this.tamanho = _tamanho;
    }

    public getMaterial(): string{
        return this.material;
    } 

    public setMaterial(_material:string): void{
        this.material = _material;
    }

    public getdesign(): string{
        return this.design;
    }

    public setDesign(_design:string): void{
        this.design = _design;
    }

    public cortar(): void {
        console.log (`${this.tamanho} é muito perigosa... cuidado`);
    }

    public atacar(): void{
        console.log (`${this.tamanho} pode ser usado para atacar!`);
    }
}