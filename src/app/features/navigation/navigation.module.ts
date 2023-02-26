import { NgModule } from '@angular/core';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationSidebarComponent],
})
export class NavigationModule {}
