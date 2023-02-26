import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/models/app-state.model';
import { IWorkGroup } from 'src/app/core/models/work-group.model';
import { setCurrentWorkGroup } from 'src/app/features/work-group/state/work-group.actions';
import { isCurrentWorkGroup } from 'src/app/features/work-group/state/work-group.selectors';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss'],
})
export class NavigationSidebarComponent implements OnInit {
  @Input() workGroups$: Observable<IWorkGroup[]> | undefined;
  isCurrentWorkGroup$!: Observable<boolean>;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.isCurrentWorkGroup$ = this.store.select(isCurrentWorkGroup);
  }

  changeCurrentWorkGroup(workGroupId: number): void {
    this.store.dispatch(setCurrentWorkGroup({ workGroupId }));
    this.router.navigateByUrl('board');
  }
}
