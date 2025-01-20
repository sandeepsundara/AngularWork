import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AdminComponent } from './admin/admin.component';
import { StudentService } from './student.service';
import { PercentagePipe } from '../Pipes/Percentage.pipe';
import { FilterPipe } from '../Pipes/Filter.pipe';
import { ObserabletestComponent } from './obserabletest/obserabletest.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectComponent } from './subject/subject.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ContainerngexampleComponent } from './containerngexample/containerngexample.component';
import { ContentExampleComponent } from './content-example/content-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponent,
    UserComponent,
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    ParentComponent,
    ChildComponent,
    AdminComponent,
    PercentagePipe,
    FilterPipe,
    ObserabletestComponent,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    ViewChildrenComponent,
    ContainerngexampleComponent,
    ContentExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
