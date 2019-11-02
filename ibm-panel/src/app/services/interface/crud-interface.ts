import { Observable } from 'rxjs';

export interface CrudInterface<T, ID> {

    save(value: T): Observable<T>;

    findById(id: ID | string) : Observable<T>;

    findAll() : Observable<Array<T>>;

    delete(id: ID | string) : Observable<T>;

}
