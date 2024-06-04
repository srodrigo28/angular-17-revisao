import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { AppCheckboxComponent } from './components/app-checkbox/app-checkbox.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    SelectComponent,
    RadioButtonComponent,
    AppCheckboxComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
