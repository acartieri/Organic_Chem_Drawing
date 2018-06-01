export class Atome {
    static count = 0;
    public nom: String;
    public xpos: number;
    public ypos: number;
    public symbole: string;
    public numeroAtomique: number;
    public masseAtomique: number;
    public appearance: String;
    public melt: number;
    public boil: number;
    public category: String;
    public discovered_by: String;
    public phase: String;
    public summary: String;
    public spectral_img: String;

    constructor(nom = '', discovered_by = '', appearance = '', category = '', phase = '',
    melt = 0, boil = 0, summary = '', spectral_img = '', masseAtomique = 0, numeroAtomique = 0,  symbole = '', xpos = 0, ypos = 0) {

        this.xpos = xpos;
        this.ypos = ypos;
        this.nom = nom;
        this.spectral_img = spectral_img;
        this.melt = melt;
        this.phase = phase;
        this.summary = summary;
        this.boil = boil;
        this.discovered_by = discovered_by;
        this.category = category;
        this.appearance = appearance;
        this.symbole = symbole;
        this.numeroAtomique = numeroAtomique;
        this.masseAtomique = masseAtomique;
    }
}
