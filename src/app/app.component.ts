import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, switchMap, tap } from 'rxjs';
import { AppState } from './core/models/app-state.model';
import { IWorkGroup } from './core/models/work-group.model';
import * as WorkGroupActions from './features/work-group/state/work-group.actions';
import { getWorkGroups } from './features/work-group/state/work-group.selectors';
import { CommonModule } from '@angular/common';
import { NavigationService } from './features/navigation/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  workGroups$: Observable<IWorkGroup[]> | undefined;
  isSidebarCollapsed = false;

  constructor(
    private store: Store<AppState>,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(WorkGroupActions.loadWorkGroups());
    this.workGroups$ = this.store.select(getWorkGroups);
  }
}
