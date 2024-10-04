import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from "@angular/router";
import {CricketerListComponent} from "./app/cricketer-list/cricketer-list.component";


const routes: Routes = [
  {path:'', redirectTo: '/cricketers', pathMatch: 'full'}, //default route
  { path: 'cricketers', component: CricketerListComponent },
  { path: 'cricketers/:id', component: CricketerListComponent },
  {path:'modify-cricketer', component: ModifyStudentComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
