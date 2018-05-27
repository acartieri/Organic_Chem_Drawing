import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'chemical' })

export class ChemicalPipe implements PipeTransform {

    transform(formule: string) {

        let ret = '';

        for (const c of formule) {

            if (!isNaN(Number(c)) ) {
                ret += ('<sub>' + c + '</sub>');
            } else {
                ret += c;
            }
        }

        return ret;

    }
}



