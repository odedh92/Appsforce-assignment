import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from 'src/components/ui/main-view/main-view.component';
import { EditPopUpComponent } from 'src/components/ui/edit-pop-up/edit-pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from 'src/components/ui/add-user/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    EditPopUpComponent,
    AddUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
