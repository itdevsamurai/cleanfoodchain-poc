import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductListingContractService } from './ProductListingContract.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ProductListingContract',
	templateUrl: './ProductListingContract.component.html',
	styleUrls: ['./ProductListingContract.component.css'],
  providers: [ProductListingContractService]
})
export class ProductListingContractComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          listingtId = new FormControl("", Validators.required);
        
  
      
          status = new FormControl("", Validators.required);
        
  
      
          products = new FormControl("", Validators.required);
        
  
      
          owner = new FormControl("", Validators.required);
        
  
      
          supplier = new FormControl("", Validators.required);
        
  


  constructor(private serviceProductListingContract:ProductListingContractService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          listingtId:this.listingtId,
        
    
        
          status:this.status,
        
    
        
          products:this.products,
        
    
        
          owner:this.owner,
        
    
        
          supplier:this.supplier
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceProductListingContract.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "composer.food.supply.ProductListingContract",
      
        
          "listingtId":this.listingtId.value,
        
      
        
          "status":this.status.value,
        
      
        
          "products":this.products.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "supplier":this.supplier.value
        
      
    };

    this.myForm.setValue({
      
        
          "listingtId":null,
        
      
        
          "status":null,
        
      
        
          "products":null,
        
      
        
          "owner":null,
        
      
        
          "supplier":null
        
      
    });

    return this.serviceProductListingContract.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "listingtId":null,
        
      
        
          "status":null,
        
      
        
          "products":null,
        
      
        
          "owner":null,
        
      
        
          "supplier":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "composer.food.supply.ProductListingContract",
      
        
          
        
    
        
          
            "status":this.status.value,
          
        
    
        
          
            "products":this.products.value,
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "supplier":this.supplier.value
          
        
    
    };

    return this.serviceProductListingContract.updateAsset(form.get("listingtId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceProductListingContract.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceProductListingContract.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "listingtId":null,
          
        
          
            "status":null,
          
        
          
            "products":null,
          
        
          
            "owner":null,
          
        
          
            "supplier":null 
          
        
      };



      
        if(result.listingtId){
          
            formObject.listingtId = result.listingtId;
          
        }else{
          formObject.listingtId = null;
        }
      
        if(result.status){
          
            formObject.status = result.status;
          
        }else{
          formObject.status = null;
        }
      
        if(result.products){
          
            formObject.products = result.products;
          
        }else{
          formObject.products = null;
        }
      
        if(result.owner){
          
            formObject.owner = result.owner;
          
        }else{
          formObject.owner = null;
        }
      
        if(result.supplier){
          
            formObject.supplier = result.supplier;
          
        }else{
          formObject.supplier = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "listingtId":null,
        
      
        
          "status":null,
        
      
        
          "products":null,
        
      
        
          "owner":null,
        
      
        
          "supplier":null 
        
      
      });
  }

}
