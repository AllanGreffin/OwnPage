import { Address } from 'cluster';
import { Adress } from './adress';

export class Usuario {

    constructor(
        public Id: number,
        public FirstName: string,
        public LastName: string,
        public Email: string,
        public Password: string,
        public Adress: Adress
    ){}
}
