import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component'; // Importa el componente AcercaDeComponent
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'acerca-de', component: AcercadeComponent },
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
