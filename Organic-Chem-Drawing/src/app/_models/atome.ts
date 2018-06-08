export class Atome {
    static count = 0;
    public nom: String;
    public xpos: number;
    public ypos: number;
    public symbole: string;
    public numeroAtomique: number;
    public masseAtomique: number;
    public category: String;
    public discovered_by: String;
    public phase: String;

    constructor(nom = '', discovered_by = '',  category = '', phase = '',
     masseAtomique = 0, numeroAtomique = 0,  symbole = '', xpos = 0, ypos = 0) {

        this.xpos = xpos;
        this.ypos = ypos;
        this.nom = nom;
        this.phase = phase;
        this.discovered_by = discovered_by;
        this.category = category;
        this.symbole = symbole;
        this.numeroAtomique = numeroAtomique;
        this.masseAtomique = masseAtomique;
    }
}
