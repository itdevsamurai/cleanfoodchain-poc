import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace composer.base{
   export abstract class User extends Participant {
      firstName: string;
      lastName: string;
      middleName: string;
      contactDetails: ContactDetails;
   }
   export class ContactDetails {
      email: string;
      mobilePhone: string;
      office: string;
      address: Address;
   }
   export class Address {
      city: string;
      country: string;
      locality: string;
      region: string;
      street: string;
      street2: string;
      street3: string;
      postalCode: string;
      postOfficeBoxNumber: string;
   }
// }
