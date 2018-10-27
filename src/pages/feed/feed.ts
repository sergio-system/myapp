import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
  })
export class FeedPage {

  public objeto_feed={
         titulo:"Sérgio Oliveira",
         data:"Novembro 5, 1995",
         descricao:"Estou criando o app incrivel",
         qntd_likes: 1200,
         qntd_coments:500,
         time_coment:"21h ago"
  }

  public lista_filmes= new Array <any>();

  public nome_usuario:string="Sérgio Oliveira do codigo";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider:MovieProvider) {
  }
   public somadoisnumero(num1:number, num2:number){
     alert(num1+num2);
   }
  ionViewDidLoad() {
    this.movieProvider.getLastsMovies(1).subscribe(
      data=>{
        const response=(data as any);
        const objeto_retorno=JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      },
      erro=>{
        console.log(erro);
      }
    )
  
  }

}
