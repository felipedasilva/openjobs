import { Injectable }               from 'angular2/core';
import { Http }                     from 'angular2/http';
import { ApiRoutes }                from '../../common/api.routes';
import { contentHeaders }           from '../../common/headers';

@Injectable()
export class CandidatoService {

    constructor(private _http    : Http) {
    }

    register(data) {
        let body = JSON.stringify(data);
        return this._http.post(ApiRoutes.ROUTE_CANDIDATO_NOVO, body, { headers: contentHeaders });
    }

}