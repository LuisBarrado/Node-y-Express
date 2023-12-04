import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeComponent } from './node/node.component';
import { ExpressComponent } from './express/express.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'node', component: NodeComponent},
  {path: 'express',component:ExpressComponent},
  {path: '', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
