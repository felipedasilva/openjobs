export class Cidade {
    
    constructor(public id:     String,
                public name:   String,
                public estado: {
                            name:       String,
                            initials:   String
                        }){}
}