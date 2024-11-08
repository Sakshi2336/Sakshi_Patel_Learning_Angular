import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from "@angular/router";
import {CricketerListComponent} from "./app/cricketer-list/cricketer-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {CricketerListItemComponent} from "./app/cricketer-list-item/cricketer-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";


const routes: Routes = [
  {path:'', redirectTo: '/cricketers', pathMatch: 'full'},
  { path: 'cricketers', component: CricketerListComponent },
  { path: 'cricketers/:id', component: CricketerListItemComponent },
  {path:'modify-cricketer/:id', component: ModifyListItemComponent},
  {path:'modify-cricketer', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
