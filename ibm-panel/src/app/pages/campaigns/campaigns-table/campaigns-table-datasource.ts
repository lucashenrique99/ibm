import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { CrudInterface } from 'src/app/services/interface/crud-interface';
import { Campaign } from 'src/app/services/campaigns/campaigns.service';

// TODO: Replace this with your own data model type
export interface CampaignsTableItem {
  title: string;
  id: number;
}

/**
 * Data source for the CampaignsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CampaignsTableDataSource extends DataSource<CampaignsTableItem> {
  data: CampaignsTableItem[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  campaigns$: BehaviorSubject<CampaignsTableItem[]>;

  constructor(
    private service: CrudInterface<Campaign, number>
  ) {
    super();
    this.campaigns$ = new BehaviorSubject([]);
    this.findAll();
  }

  findAll() {
    this.service
      .findAll()
      .pipe(
        map(campaigns => campaigns.map<Campaign>(a => ({ id: a.id, title: a.title })))
      )
      .subscribe(
        (array) => {
          this.data = array;
          this.campaigns$.next(this.data);
        }
      )
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CampaignsTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    // const dataMutations = [
    //   observableOf(this.data),
    //   this.paginator.page,
    //   this.sort.sortChange
    // ];

    // return merge(...dataMutations).pipe(map(() => {
    //   return this.getPagedData(this.getSortedData([...this.data]));
    // }));
    return this.campaigns$.asObservable();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CampaignsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CampaignsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.title, b.title, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
