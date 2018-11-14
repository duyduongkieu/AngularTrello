import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layouts/layouts.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { GroupComponent } from './group/group.component';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutService } from './layouts/service/layout.service';
import { GroupComponent } from './group/group.component';
const appRoutes: Routes = [
  { path: 'group', component: GroupComponent },
  { path: 'group', component: GroupComponent },
  { path: '', redirectTo: '/group', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, LayoutComponent, GroupComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
