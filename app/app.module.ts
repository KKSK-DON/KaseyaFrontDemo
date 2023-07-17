import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardComponent } from './card/card.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { TeacherComponent } from './assignment/teacher/teacher.component';
import { StudentComponent } from './assignment/student/student.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { AssignmentsComponent } from './assignment/assignments/assignments.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { LoginComponent } from './login/login.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AssignmentComponent,
    TeacherComponent,
    StudentComponent,
    AssignmentsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzListModule,
    NzSkeletonModule,
    NzTabsModule,
    NzGridModule,
    NzMessageModule,
    NzResultModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
