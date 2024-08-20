export class portao{

//ATRIBUTOS
    private ferro:string;
    private tranca: string;
    private grade: string;

    //CONSTRUTOR
    public constructor(_ferro: string, _tranca: string, _grade: string){
        this.ferro = _ferro;
        this.tranca = _tranca;
        this.grade = _grade;
    
    }

    //MÉTODOS DET E SET
    public getFerro(): string{
        return this.ferro;
    }

    public setFerro(_Ferro:string): void{
        this.ferro = _Ferro;
    }

    public getGrade(): string{
        return this.grade;
    } 

    public setGrade(_grade:string): void{
        this.grade = _grade;
    }

    public getTranca(): string{
        return this.tranca;
    }

    public setTranca(_tranca:string): void{
        this.tranca = _tranca;
    }

    public abrir(): void {
        console.log (`${this.grade} é bem alta`);
    }

    public trancar(): void{
        console.log (`${this.tranca} pode ser usado fechar.`);
    }
}
