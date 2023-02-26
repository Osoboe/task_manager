import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BoardComponent } from './components/board/board.component';
import { BoardRoutingModule } from './components/board/board-routing.module';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [BoardComponent, BoardColumnComponent],
  imports: [CommonModule, DragDropModule, BoardRoutingModule, TaskModule],
  exports: [BoardComponent],
})
export class BoardModule {}
