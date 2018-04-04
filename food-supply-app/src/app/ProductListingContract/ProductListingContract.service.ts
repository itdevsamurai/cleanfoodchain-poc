import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ProductListingContract } from '../composer.food.supply';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ProductListingContractService {

	
		private NAMESPACE: string = 'ProductListingContract';
	



    constructor(private dataService: DataService<ProductListingContract>) {
    };

    public getAll(): Observable<ProductListingContract[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ProductListingContract> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ProductListingContract> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ProductListingContract> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ProductListingContract> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
