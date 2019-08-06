import { Injectable } from '@angular/core';
import { PlanData } from 'src/entities/PlanData';

@Injectable({
  providedIn: 'root'
})
export class PlanManipulatorService {

  private planData: PlanData;

  constructor() { 


  }


  getPlanData(getCached?: boolean): PlanData {
    if(getCached) return this.planData;
    
    let planData = localStorage.getItem("plandata");
    if(planData){
      return this.planData = JSON.parse(planData);
    }else{
      return null;
    }
  }

  save(): void{
    localStorage.setItem("plandata", JSON.stringify(this.planData));
  }



}
