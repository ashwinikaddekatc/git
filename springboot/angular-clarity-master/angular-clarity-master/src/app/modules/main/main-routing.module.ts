import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from './../../services/auth-guard.service';

import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { PreferenceComponent } from './preference/preference.component';
import { CollegeComponent } from './college/college.component';
import { ProductComponent } from './product/product.component';
import { AllproductComponent } from './product/allproduct/allproduct.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { StepperComponent } from './stepper/stepper.component';
import { Product1Component } from './product1/product1.component';
import { UniversityComponent } from './university/university.component';
import { Product2Component } from './product2/product2.component';
import { Allproduct2Component } from './product2/allproduct2/allproduct2.component';
import { Addproduct2Component } from './product2/addproduct2/addproduct2.component';
import { Editproduct2Component } from './product2/editproduct2/editproduct2.component';
import { University1Component } from './university1/university1.component';
import { Alluniversity1Component } from './university1/alluniversity1/alluniversity1.component';
import { Adduniversity1Component } from './university1/adduniversity1/adduniversity1.component';
import { Edituniversity1Component } from './university1/edituniversity1/edituniversity1.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { PlayComponent } from './play/play.component';
import { AllPlayComponent } from './play/all-play/all-play.component';
import { AddPlayComponent } from './play/add-play/add-play.component';
import { EditplayComponent } from './play/editplay/editplay.component';







import { Page11Component } from './page11/page11.component';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { AllprojectsetupComponent } from './project-setup/allprojectsetup/allprojectsetup.component';
import { AddprojectsetupComponent } from './project-setup/addprojectsetup/addprojectsetup.component';
import { ReadonlyprojectsetupComponent } from './project-setup/readonlyprojectsetup/readonlyprojectsetup.component';
import { EditprojectsetupComponent } from './project-setup/editprojectsetup/editprojectsetup.component';
import { ModuleSetupComponent } from './module-setup/module-setup.component';
import { AllmoduleSetupComponent } from './module-setup/allmodule-setup/allmodule-setup.component';
import { AddmoduleSetupComponent } from './module-setup/addmodule-setup/addmodule-setup.component';
import { EditmoduleSetupComponent } from './module-setup/editmodule-setup/editmodule-setup.component';
import { ActionsComponent } from './wireframe/actions/actions.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { AllwireframeComponent } from './wireframe/allwireframe/allwireframe.component';
import { AddwireframeComponent } from './wireframe/addwireframe/addwireframe.component';
import { WireframetypeComponent } from './wireframe/wireframetype/wireframetype.component';
import { EditwireframeComponent } from './wireframe/editwireframe/editwireframe.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { AllreportBuilderComponent } from './report-builder/allreport-builder/allreport-builder.component';
import { AddreportBuilderComponent } from './report-builder/addreport-builder/addreport-builder.component';
import { BiWidgetsComponent } from './bi-widgets/bi-widgets.component';
import { AllWidgetsComponent } from './bi-widgets/all-widgets/all-widgets.component';
import { AddWidgetsComponent } from './bi-widgets/add-widgets/add-widgets.component';
import { PropertiesComponent } from './wireframe/properties/properties.component';
import { SelectBiComponent } from './bi-widgets/select-bi/select-bi.component';
import { EditreportBuilderComponent } from './report-builder/editreport-builder/editreport-builder.component';
import { ProjectSetup1Component } from './project-setup1/project-setup1.component';
import { ModuleSetup1Component } from './module-setup1/module-setup1.component';
import { Wireframe1Component } from './wireframe1/wireframe1.component';
import { UinameeditComponent } from './wireframe/uinameedit/uinameedit.component';
import { PropertyComponent } from './wireframe/property/property.component';





const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'user', component: UserComponent},
      {path:'college',component:CollegeComponent},
      {path:'product1',component:Product1Component},
      {path:'university',component:UniversityComponent},
      {path:'stepper',component:StepperComponent},
      {path:'workflow',component:WorkflowComponent},





      {path:'play',component:PlayComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: AllPlayComponent },
        { path: 'add', component: AddPlayComponent },
        { path: 'edit/:id', component: EditplayComponent },
      ]
    },
      {path:'product',component:ProductComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: AllproductComponent },
        { path: 'add', component: AddproductComponent },
       { path: 'edit/:id', component: EditproductComponent },
      ]
    },
    {path:'product2',component:Product2Component,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: Allproduct2Component },
        { path: 'add', component: Addproduct2Component },
       { path: 'edit/:id', component: Editproduct2Component },
      ]
    },
    {path:'university1',component:University1Component,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: Alluniversity1Component },
        { path: 'add', component: Adduniversity1Component },
       { path: 'edit/:id', component: Edituniversity1Component },
      ]
    },

      { path: 'preference', component: PreferenceComponent },
      { path: 'about', component: AboutComponent },
      //project-setup
      {path:'project1',component:ProjectSetup1Component},
      {path:'module1',component:ModuleSetup1Component},
      { path: 'actions', component: ActionsComponent },
      { path: 'wireframe', component: Wireframe1Component },
      { path: 'bi-build', component: SelectBiComponent },

//report builder
{
  path: 'report-builder', component: ReportBuilderComponent,
  children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: AllreportBuilderComponent },
    { path: 'add', component: AddreportBuilderComponent },
    { path: 'edit/:id', component: EditreportBuilderComponent },

  ]
},
//bi
{
  path: 'bi-widgets', component: BiWidgetsComponent,
  children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: AllWidgetsComponent },
    { path: 'add-widget', component: AddWidgetsComponent }]
},




      { path: 'project', component: ProjectSetupComponent,
    children:[
      { path: '', redirectTo: 'all', pathMatch: 'full' },
       { path:'all',component:AllprojectsetupComponent},
       { path: 'add', component: AddprojectsetupComponent },
       { path: 'edit/:id', component: EditprojectsetupComponent },
       { path: 'readonly/:id', component: ReadonlyprojectsetupComponent },

       {
        path: 'modules', component: ModuleSetupComponent,
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllmoduleSetupComponent },
          { path: 'add', component: AddmoduleSetupComponent },
          { path: 'edit/:id', component: EditmoduleSetupComponent },

          { path: 'actions', component: ActionsComponent },
          { path: 'bi-build', component: SelectBiComponent },
          // wireframe start
          {
            path: 'wireframe', component: WireframeComponent,
            children: [
              { path: '', redirectTo: 'all', pathMatch: 'full' },
              { path: 'all', component: AllwireframeComponent },
              { path: 'add', component: AddwireframeComponent },
              { path: 'types', component: WireframetypeComponent },

              { path: 'edit/:id', component: EditwireframeComponent },
              { path: 'edit/:id/properties', component: PropertiesComponent },
              { path: 'edit/:id/property', component: PropertyComponent },



              { path: 'edit/:id/uinameedit'   , component: UinameeditComponent }

            ]
          },


        ]
      }

    ]
    },

      { path: '**', component: PageNotFoundComponent },

    ]
  },







  { path: 'page11/:id', component: Page11Component, data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
