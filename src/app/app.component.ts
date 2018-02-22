import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star/star.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed", eventArgs);
  }

  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: true,
    likesCount: 10
  }

}
