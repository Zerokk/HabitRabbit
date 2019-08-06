import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PlanManipulatorService } from '../plan-manipulator.service';
import { PlanData } from 'src/entities/PlanData';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, AfterViewInit {


  @ViewChild(IonTabs, {static: false}) tabs: IonTabs;
  constructor(private planManipulator: PlanManipulatorService) {}

  ngOnInit(){
  }

  ngAfterViewInit(): void {
    const planData = this.planManipulator.getPlanData();
    if(!planData){
      this.tabs.select("tab3");
    }else{
      this.tabs.select("tab1");
    }
  }

  

}
