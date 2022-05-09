import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'footer', component: FooterComponent}, // ruta al footer de prueba
  {path: '', redirectTo: '/ ', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
