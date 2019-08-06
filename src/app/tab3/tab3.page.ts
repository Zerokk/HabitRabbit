import { Component } from '@angular/core';
import { VariableType } from 'src/interfaces/TaskDefinition';
import { FormDefinition } from 'src/interfaces/FormDef';
import { HabitFrequency } from 'src/entities/Habit';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formDef: FormDefinition;

  constructor() {
    let nActions = 1;
    this.formDef = {
      title: "Crea un nuevo plan",
      fields: [
        {
          id: "taskName",
          name: "Nombre de tarea 1",
          type: VariableType.STRING,
          validator: (v) => v.length > 3
        },
        {
          id: "taskDesc",
          name: "Descripción de tarea",
          type: VariableType.STRING,
          validator: (v) => v.length > 3
        },
        {
          id: "taskDataType",
          name: "¿Qué tipo de dato vas a recoger?",
          type: VariableType.SELECT,
          options: ["Selecciona una opción", "Número", "Selección", "Texto"],
          validator: (v) => v != undefined
        },
        {
          id: "reps",
          name: "¿Cuántas repeticiones son necesarias?",
          type: VariableType.NUMBER,
          validator: (v) => v > 0,
          condition: () => this.formDef.fields[2]["value"] == "Número"
        },
        {
          id: "options",
          name: "¿Qué opciones hay?",
          type: VariableType.LIST,
          validator: (v) => v.length > 2,
          condition: () => this.formDef.fields[3]["value"] == "Selección"
        },
        {
          id: "frequency",
          name: "¿Cada cuánto se va a repetir la tarea?",
          type: VariableType.SELECT,
          options: [
            "Selecciona una opción",
            HabitFrequency.Daily.toString(),
            HabitFrequency.EveryTwoDays.toString(),
            HabitFrequency.EveryThreeDays.toString(),
            HabitFrequency.EveryFourDays.toString(),
            HabitFrequency.EveryFiveDays.toString(),
          ],
          validator: (v) => v != undefined && v !== "Selecciona una opción"
        }
      ]
    }



  }




}
