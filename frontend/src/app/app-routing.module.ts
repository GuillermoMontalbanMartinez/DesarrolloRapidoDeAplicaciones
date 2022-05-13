import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RutineComponent } from './rutine/rutine.component';

const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'body', component: BodyComponent},
  { path: 'rutine', component: RutineComponent},
  { path: '', redirectTo: '/ ', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
