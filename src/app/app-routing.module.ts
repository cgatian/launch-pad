import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorView } from './views/editor/editor.view';
import { HomeView } from './views/home/home.view';

const routes: Routes = [{
  component: EditorView, path: 'editor',
},
{
  component: HomeView, path: '',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
