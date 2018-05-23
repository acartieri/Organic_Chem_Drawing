export class Element {
    static count = 0;
    public nom: string;
    public formule: string;
    public id = 0;

    constructor(nom = '', formule = '') {
        this.id = Element.count++;
        this.nom = nom;
        this.formule = formule;

    }

}
