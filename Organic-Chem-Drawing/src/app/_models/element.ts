export class Element {
    static count = 0;
    public nom: string;
    public cas: string;
    public photo: string;
    public formule: string;
    public masseMolaire: number;
    public etatPhysique: string;
    public densite: number;
    public fusion: number;
    public ebul: number;
    public eclair: number;
    public infla: number;
    public toxico: string;
    public id = 0;

    constructor(nom = '',  formule = '',  photo = '' , cas = '',
    masseMolaire = null , etatPhysique = '', densite = null,
    fusion = null, ebul = null, eclair = null, infla = null, toxico = '') {
        this.id = Element.count++;
        this.nom = nom;
        this.photo = photo;
        this.cas = cas;
        this.formule = formule;
        this.masseMolaire = masseMolaire;
        this.etatPhysique = etatPhysique;
        this.densite = densite;
        this.fusion = fusion;
        this.ebul = ebul;
        this.eclair = eclair;
        this.infla = infla;
        this.toxico = toxico;

    }

}
