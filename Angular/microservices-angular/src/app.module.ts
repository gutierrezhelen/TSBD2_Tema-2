import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // 👈 importante
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 👈 debe decir AppComponent, no App
})
export class AppModule { }
