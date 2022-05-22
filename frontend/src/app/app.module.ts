import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BodyComponent } from './body/body.component';
import { SelectorComponent } from './selector/selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ExerciseService } from './exercise.service';
import { HttpClientModule } from '@angular/common/http';
import { RutineComponent } from './rutine/rutine.component';
import { ExerciseUploadComponent } from './exercise-upload/exercise-upload.component';
import { TarjetaExerciseUploadComponent } from './tarjeta-exercise-upload/tarjeta-exercise-upload.component';
import { FormsModule } from '@angular/forms';
import { TarjetaExerciseSavedComponent } from './tarjeta-exercise-saved/tarjeta-exercise-saved.component';
import { FraseComponent } from './frase/frase.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    ExerciseComponent,
    BodyComponent,
    SelectorComponent,
    RutineComponent,
    ExerciseUploadComponent,
    TarjetaExerciseUploadComponent,
    TarjetaExerciseSavedComponent,
    FraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
