import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { rootRouterConfig } from './app.routes';
import { AppComponent, DialogWelcome } from './app.component';
import { FormComponent } from './components/form/form.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { SimpleService } from './services/service';

/* Other libraries */
import { JoditAngularModule } from 'jodit-angular'; //https://www.npmjs.com/package/jodit-angular

/* Angular Material Modules */
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DialogWelcome,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig),
    FormsModule,
    JoditAngularModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogWelcome],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
