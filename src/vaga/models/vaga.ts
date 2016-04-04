import { Cidade } from '../../cidade/models/cidade';
import { User }   from '../../user/models/user';

export class Vaga {
    
    constructor (public id:             String,
                 public description:    String,
                 public title:          String,
                 public type:           String,
                 public created_at:     Date,
                 public status:         Boolean,
                 public cidade?:        Cidade,
                 public user?:          User){}
}