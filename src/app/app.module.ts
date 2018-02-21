import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { TitlePipe } from './titlecase.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { StarComponent } from './star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
