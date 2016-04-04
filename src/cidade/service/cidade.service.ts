import { Injectable }               from 'angular2/core';
import { AuthHttp }                 from 'angular2-jwt';
import { ApiRoutes }                from '../../common/api.routes';
import { contentHeaders }           from '../../common/headers';
import { Cidade }                     from '../models/cidade';

@Injectable()
export class CidadeService {

    constructor(private _authHttp: AuthHttp) {
    }

    list() {
        return this._authHttp.get(ApiRoutes.ROUTE_CIDADE_LIST)
                   .map(res => {
                            let list = new Array<Cidade>();
                            let data = res.json();
                            data.forEach(cidade => {
                                list.push(new Cidade(
                                    cidade._id,
                                    cidade.name,
                                    cidade.estado
                                )); 
                            });
                           return list;
                    });
    }

}