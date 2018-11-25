import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid)
 
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ProgressComponent } from './components/progress/progress.component';

const appRoutes: Routes = [
  { path:'list', component: ListComponent },
  { path:'detail/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieCardComponent,
    DetailsComponent,
    PreloaderComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
