import { Injectable } from '@angular/core';
import { IPaginationModel } from './ngx-pagination/Models/IPaginationModel';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor() { }

    // A sample conversion method
    paginationToParams<T>(pagedUserModel: IPaginationModel<T>): HttpParams {
        let params = new HttpParams();
        if (pagedUserModel.searchingConfig) {
            params = params.append('searchString', pagedUserModel.searchingConfig.searchString);
        }
        
        if (pagedUserModel.pagingConfig) {
            params = params.append('pageNumber', pagedUserModel.pagingConfig.pageNumber);
            params = params.append('pageLength', pagedUserModel.pagingConfig.pageLength);
        }

        return params;
    }
}