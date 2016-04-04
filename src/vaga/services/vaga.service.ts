import { Injectable }               from 'angular2/core';
import { AuthHttp }                 from 'angular2-jwt';
import { Http }                     from 'angular2/http';
import { ApiRoutes }                from '../../common/api.routes';
import { contentHeaders }           from '../../common/headers';
import { Vaga }                     from '../models/vaga';

@Injectable()
export class VagaService {

    constructor(private _authHttp: AuthHttp,
                private _http    : Http) {
    }

    register(data) {
        let body = JSON.stringify(data);
        return this._authHttp.post(ApiRoutes.ROUTE_VAGA_REGISTER, body, { headers: contentHeaders })
                   .map(res => res.json())
    }

    list() {
        return this._http.get(ApiRoutes.ROUTE_VAGA_LIST)
                   .map(res => {
                            let list = new Array<Vaga>();
                            let data = res.json();
                            data.forEach(vaga => {
                                list.push(new Vaga(
                                    vaga._id,
                                    vaga.description,
                                    vaga.title,
                                    vaga.type,
                                    new Date(vaga.created_at),
                                    vaga.status,
                                    vaga.cidade,
                                    vaga.user
                                )); 
                            });
                           return list;
                    });
    }

}