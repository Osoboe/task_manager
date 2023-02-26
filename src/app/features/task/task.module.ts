import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { taskReducer } from './state/task.reducer';
import { TaskEffects } from './state/task.effects';

@NgModule({
  declarations: [TaskCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('task', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
  exports: [TaskCardComponent],
})
export class TaskModule {}
