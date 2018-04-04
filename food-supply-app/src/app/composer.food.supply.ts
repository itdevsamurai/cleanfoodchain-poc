import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {ContactDetails,User} from './composer.base';
// export namespace composer.food.supply{
   export enum Status {
      INITIALREQUEST,
      EXEMPTCHECKREQ,
      HAZARDANALYSISCHECKREQ,
      CHECKCOMPLETED,
   }
   export class Product {
      productId: string;
      quantity: string;
      countryId: string;
   }
   export class Retailer extends User {
      retailerId: string;
      products: Product[];
   }
   export class Importer extends User {
      importerId: string;
   }
   export class Supplier extends User {
      supplierId: string;
      countryId: string;
      orgId: string;
   }
   export class Regulator extends Participant {
      regulatorId: string;
      location: string;
      exemptedOrgIds: string[];
      exemptedProductIds: string[];
   }
   export class ProductListingContract extends Asset {
      listingtId: string;
      status: Status;
      products: Product[];
      owner: User;
      supplier: Supplier;
   }
   export class createProductListing extends Transaction {
      products: string[];
      user: User;
   }
   export class transferListing extends Transaction {
      ownerType: string;
      newOwner: User;
      productListing: ProductListingContract;
   }
   export class checkProducts extends Transaction {
      regulator: Regulator;
      productListing: ProductListingContract;
   }
   export class updateExemptedList extends Transaction {
      newExemptedOrgIds: string[];
      newExemptedProductIds: string[];
      regulator: Regulator;
   }
// }
