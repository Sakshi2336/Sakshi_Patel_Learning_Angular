import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from "@angular/router";
import {CricketerListComponent} from "./app/cricketer-list/cricketer-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {CricketerListItemComponent} from "./app/cricketer-list-item/cricketer-list-item.component";


const routes: Routes = [
  {path:'', redirectTo: '/cricketers', pathMatch: 'full'}, //default route
  { path: 'cricketers', component: CricketerListComponent },
  { path: 'cricketers/:id', component: CricketerListItemComponent },
  {path:'modify-cricketer', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
