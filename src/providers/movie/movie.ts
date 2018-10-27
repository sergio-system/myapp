import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath ="https://api.themoviedb.org/3";
  private apiKey = "10abb4487a474e5bd124d64b38283211";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastsMovies(pagina:number){
    return this.http.get(this.baseApiPath+"/movie/popular?page="+pagina+"&language=pt-BR&api_key="+this.apiKey);
  }
}
