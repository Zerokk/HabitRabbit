import { Component, OnInit, Input, AfterViewInit, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormDefinition } from 'src/interfaces/FormDef';
import { VariableType } from 'src/interfaces/TaskDefinition';
import { HabitFrequency } from 'src/entities/Habit';
import { Task } from 'src/entities/Task';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularyComponent implements AfterViewInit {

  @Output('result') resultObject;
  @Input('formdef') formDef: FormDefinition;
  @Input('boxStyle') boxStyle: string = "width:92%;margin:8px;margin-top:10px";

  constructor(private changeDet: ChangeDetectorRef) {
    
 

  }
  check(){
    this.changeDet.markForCheck();
    const val = this.formDef.fields[3]["value"];    
    this.changeDet.detectChanges();
  }

  removeFromList(field, listItem){
    const index = field.value.indexOf(''+listItem);
    field.value.splice(index, 1);
  }


  ngAfterViewInit() {



  }

}
