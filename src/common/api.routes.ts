export class ApiRoutes {
    public static API_ENDPOINT = 'http://127.0.0.1:3001/api/';
    
    //USER
    public static ROUTE_LOGIN         = ApiRoutes.API_ENDPOINT + 'sessions/create';
    public static ROUTE_USER_REGISTER = ApiRoutes.API_ENDPOINT + 'users';
    
    //VAGA
    public static ROUTE_VAGA_REGISTER = ApiRoutes.API_ENDPOINT + 'vagas'; 
    public static ROUTE_VAGA_LIST = ApiRoutes.API_ENDPOINT + 'vagas'; 
    
    //CIDADE
    public static ROUTE_CIDADE_LIST = ApiRoutes.API_ENDPOINT + 'cidades';
    
    //CANDIDATO
    public static ROUTE_CANDIDATO_NOVO = ApiRoutes.API_ENDPOINT + 'candidato'; 
}