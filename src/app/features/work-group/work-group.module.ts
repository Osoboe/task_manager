import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { workGroupReducer } from './state/work-group.reducer';
import { WorkGroupEffects } from './state/work-group.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('workGroup', workGroupReducer),
    EffectsModule.forFeature([WorkGroupEffects]),
  ],
})
export class WorkGroupModule {}
