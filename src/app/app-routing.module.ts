import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeResolverService } from './recipes/reciepe-resolver.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'' , redirectTo:'Auth' , pathMatch:'full'},
  {path:'recipe' , component:RecipesComponent,children:[
    {path:'' ,component:RecipeStartComponent},
    {path:'new', component:RecipeEditComponent},
 
    {
    path:':id',
     component:RecipeDetailsComponent,
    resolve:[RecipeResolverService]},

    {
      path:':id/edit',
      component:RecipeEditComponent,
      resolve:[RecipeResolverService]
      },
  ]},
  
  {path:'shopping-list', component:ShoppingListComponent},
  {path:'Auth',component:AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
