imports {NgModule} from '@angular/core';
imports {Routes,RouterModule} from '@angular/routes';


const routes:Routes=[
	{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule(
{
   impors:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
})

exports class AppRoutingModule{}
