import { Routes } from '@angular/router';

/* Components */
import { AppComponent, DialogWelcome } from './app.component';
import { FormComponent } from './components/form/form.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { SimpleService } from './services/service';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: 'forum', component: FormComponent },
  { path: 'edit-post', component:EditPostComponent },
]
