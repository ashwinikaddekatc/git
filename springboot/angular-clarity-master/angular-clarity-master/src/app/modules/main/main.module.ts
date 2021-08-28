import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { PreferenceComponent } from './preference/preference.component';
import { HelperModule } from 'src/app/pipes/helpers.module';
import { CollegeComponent } from './college/college.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProductComponent } from './product/product.component';
import { AllproductComponent } from './product/allproduct/allproduct.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { ManageViewComponent } from './manage-view/manage-view.component';
import { TilesComponent } from './tiles/tiles.component';
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
import { AddprojectsetupComponent } from './project-setup/addprojectsetup/addprojectsetup.component';
import { AllprojectsetupComponent } from './project-setup/allprojectsetup/allprojectsetup.component';
import { EditprojectsetupComponent } from './project-setup/editprojectsetup/editprojectsetup.component';
import { ReadonlyprojectsetupComponent } from './project-setup/readonlyprojectsetup/readonlyprojectsetup.component';
import { ModuleSetupComponent } from './module-setup/module-setup.component';
import { AllmoduleSetupComponent } from './module-setup/allmodule-setup/allmodule-setup.component';
import { AddmoduleSetupComponent } from './module-setup/addmodule-setup/addmodule-setup.component';
import { EditmoduleSetupComponent } from './module-setup/editmodule-setup/editmodule-setup.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { AllwireframeComponent } from './wireframe/allwireframe/allwireframe.component';
import { AddwireframeComponent } from './wireframe/addwireframe/addwireframe.component';
import { EditwireframeComponent } from './wireframe/editwireframe/editwireframe.component';
import { WireframetypeComponent } from './wireframe/wireframetype/wireframetype.component';
import { ActionsComponent } from './wireframe/actions/actions.component';
import { PropertiesComponent } from './wireframe/properties/properties.component';
import { UinameeditComponent } from './wireframe/uinameedit/uinameedit.component';
import { BiWidgetsComponent } from './bi-widgets/bi-widgets.component';
import { AddWidgetsComponent } from './bi-widgets/add-widgets/add-widgets.component';
import { AllWidgetsComponent } from './bi-widgets/all-widgets/all-widgets.component';
import { ReportBuilderComponent } from './report-builder/report-builder.component';
import { AllreportBuilderComponent } from './report-builder/allreport-builder/allreport-builder.component';
import { AddreportBuilderComponent } from './report-builder/addreport-builder/addreport-builder.component';
import { SelectBiComponent } from './bi-widgets/select-bi/select-bi.component';
import { EditreportBuilderComponent } from './report-builder/editreport-builder/editreport-builder.component';
import { ProjectSetup1Component } from './project-setup1/project-setup1.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModuleSetup1Component } from './module-setup1/module-setup1.component';
import { ModuleCardComponent } from './module-card/module-card.component';
import { WireframeCardComponent } from './wireframe-card/wireframe-card.component';
import { Wireframe1Component } from './wireframe1/wireframe1.component';
import { PropertyComponent } from './wireframe/property/property.component';
import { SuregitComponent } from './suregit/suregit.component';
import { SuredocrComponent } from './suredocr/suredocr.component';
import { SurefarmComponent } from './surefarm/surefarm.component';







@NgModule({
  declarations: [
    MainPageComponent, PageNotFoundComponent,
    AboutComponent, LayoutComponent,
    UserComponent, PreferenceComponent, CollegeComponent, PasswordResetComponent, ProductComponent, AllproductComponent, AddproductComponent, EditproductComponent, ManageViewComponent, TilesComponent, StepperComponent, Product1Component, UniversityComponent, Product2Component, Allproduct2Component, Addproduct2Component, Editproduct2Component, University1Component, Alluniversity1Component, Adduniversity1Component, Edituniversity1Component, WorkflowComponent, PlayComponent, AllPlayComponent, AddPlayComponent, EditplayComponent, Page11Component, ProjectSetupComponent, AddprojectsetupComponent, AllprojectsetupComponent, EditprojectsetupComponent, ReadonlyprojectsetupComponent, ModuleSetupComponent, AllmoduleSetupComponent, AddmoduleSetupComponent, EditmoduleSetupComponent, WireframeComponent, AllwireframeComponent, AddwireframeComponent, EditwireframeComponent, WireframetypeComponent, ActionsComponent, PropertiesComponent, UinameeditComponent, BiWidgetsComponent, AddWidgetsComponent, AllWidgetsComponent, ReportBuilderComponent, AllreportBuilderComponent, AddreportBuilderComponent, SelectBiComponent, EditreportBuilderComponent, ProjectSetup1Component, ProjectCardComponent, ModuleSetup1Component, ModuleCardComponent, WireframeCardComponent, Wireframe1Component, PropertyComponent, SuregitComponent, SuredocrComponent, SurefarmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    HelperModule,
    MainRoutingModule
  ]
})
export class MainModule { }
