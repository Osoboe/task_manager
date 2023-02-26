import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { workGroupsData } from 'src/app/core/mock/data';
import { IWorkGroup } from 'src/app/core/models/work-group.model';

@Injectable({
  providedIn: 'root',
})
export class WorkGroupService {
  getAllWorkGroups(): Observable<IWorkGroup[]> {
    return of(workGroupsData).pipe(delay(1000));
  }
}
