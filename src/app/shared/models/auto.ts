export class Auto {
    public id: number;
    public image: string;
    public name: string;
    public details: string;
    public year: number;

    constructor(id: number, image: string, name: string, details: string, year: number) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.details = details;
        this.year = year;
    }
}
