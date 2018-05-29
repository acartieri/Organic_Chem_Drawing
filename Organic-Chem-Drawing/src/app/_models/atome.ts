export class Atome {
    static count = 0;
    public nom: string;
    public symbole: string;
    public numeroAtomique: number;
    public masseAtomique: number;

    constructor(nom = '', symbole = '', numeroAtomique = 0, masseAtomique = 0) {

        this.nom = nom;
        this.symbole = symbole;
        this.numeroAtomique = numeroAtomique;
        this.masseAtomique = masseAtomique;
    }
}
