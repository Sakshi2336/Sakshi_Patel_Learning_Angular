import {InMemoryDbService} from "angular-in-memory-web-api";
import {Cricketer} from "../Shared/Modules/cricketer";

export class InMemoryDataService implements InMemoryDbService{

  createDb():{cricketers:Cricketer[]} {

    const cricketers: Cricketer[] = [
      {id: 1, firstName: 'Virat', lastName: 'Kohli', age:40,dob:'1990-12-03',country: 'India', role: 'Batsman', netWorth:127, isActive: true,imageUrl:"/assets/image1.jpeg"},
      {id: 2, firstName: 'Steve', lastName: 'Smith', age:40,dob:'1985-10-06',country: 'Australia', role: 'Batsman', netWorth:5,isActive: false ,imageUrl:"/assets/image2.jpeg"},
      {id: 3, firstName: 'Rashid', lastName: 'Khan', age:40,dob:'1984-08-09',country: 'Afghanistan', role: 'Bowler', netWorth:15,isActive: true,imageUrl:"/assets/image3.jpeg"},
      {id: 4, firstName: 'Ben', lastName: 'Stokes', age:40,dob:'1987-06-12',country: 'England', role: 'All-Rounder', netWorth:15,isActive: true,imageUrl:"/assets/image4.jpeg"},
      {id: 5, firstName: 'Kane', lastName: 'Williamson', age:40,dob:'1982-04-15',country: 'New Zealand', role: 'Batsman', netWorth:13,isActive: false,imageUrl:"/assets/image5.jpeg"},
      {id: 6, firstName: 'AB', lastName: 'de Villiers', age:40,dob:'1990-02-18',country: 'South Africa', role: 'Batsman', netWorth:25,isActive: false,imageUrl:"/assets/image6.jpeg"}
    ];
    return {cricketers};
  }
}