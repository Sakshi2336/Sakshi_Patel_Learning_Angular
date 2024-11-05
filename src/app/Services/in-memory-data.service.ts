import {InMemoryDbService} from "angular-in-memory-web-api";
import {Cricketer} from "../Shared/Modules/cricketer";

export class InMemoryDataService implements InMemoryDbService{

  createDb():{cricketers:Cricketer[]} {

    const cricketers: Cricketer[] = [
      {id: 1, firstName: 'Virat', lastName: 'Kohli', country: 'India', role: 'Batsman', isActive: true,imageUrl:"/assets/image1.jpeg"},
      {id: 2, firstName: 'Steve', lastName: 'Smith', country: 'Australia', role: 'Batsman', isActive: true ,imageUrl:"/assets/image2.jpeg"},
      {id: 3, firstName: 'Rashid', lastName: 'Khan', country: 'Afghanistan', role: 'Bowler', isActive: true,imageUrl:"/assets/image3.jpeg"},
      {id: 4, firstName: 'Ben', lastName: 'Stokes', country: 'England', role: 'All-Rounder', isActive: true,imageUrl:"/assets/image4.jpeg"},
      {id: 5, firstName: 'Kane', lastName: 'Williamson', country: 'New Zealand', role: 'Batsman', isActive: false,imageUrl:"/assets/image5.jpeg"},
      {id: 6, firstName: 'AB', lastName: 'de Villiers', country: 'South Africa', role: 'Batsman', isActive: false,imageUrl:"/assets/image6.jpeg"}
    ];
    return {cricketers};
  }
}
