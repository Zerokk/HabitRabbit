import { Period } from 'src/interfaces/Period';
import { Task } from './Task';
import * as moment from 'moment';
import { TaskDefinition } from 'src/interfaces/TaskDefinition';
import { PlanData } from './PlanData';

export class Habit {

    public habitName: string;
    public frequency: HabitFrequency;
    protected lastEffectiveDate: Date;
    protected currentTasks: Array<Task>;
    protected statsByPeriod: Array<Period>;
    protected taskDefinitions: Array<TaskDefinition>;
    protected planRef: PlanData;

    constructor() {

    }

    public checkAndFetchTasks(): Array<Task> {
        const tasks = this.currentTasks.filter((t: Task) => {
            const expires = moment(t.expiresAt).isAfter(new Date())
            if(expires || t.resolved){
               return false;
            }else{
               return true;
            }
        });

        if (this.checkActiveDay()) {
            const dayTasks = this.createTasks();
            dayTasks.length === 1
                ? tasks.push(dayTasks[0])
                : tasks.concat(dayTasks);
            return this.currentTasks = tasks;;
        }else{
            return this.currentTasks = tasks;;
        }
    }


    protected createTasks(): Array<Task> {
        return this.taskDefinitions.map(
            (tDef: TaskDefinition) => new Task(tDef.taskName, this, tDef.objectivePoints)
        );
    }


    protected checkActiveDay(): boolean {

        let date;
        switch (this.frequency) {
            case HabitFrequency.Daily: date = moment(this.lastEffectiveDate).add(1, 'day'); break;
            case HabitFrequency.EveryTwoDays: date = moment(this.lastEffectiveDate).add(2, 'day'); break;
            case HabitFrequency.EveryThreeDays: date = moment(this.lastEffectiveDate).add(3, 'day'); break;
            case HabitFrequency.EveryFourDays: date = moment(this.lastEffectiveDate).add(4, 'day'); break;
            case HabitFrequency.EveryFiveDays: date = moment(this.lastEffectiveDate).add(5, 'day'); break;
        }

        if (moment(date).isBefore(new Date())) {
            return true;
        } else {
            return false;
        }
    }


}


export enum HabitFrequency {
    Daily = "Diariamente",
    EveryTwoDays = "Cada dos días",
    EveryThreeDays = "Cada tres días",
    EveryFourDays = "Cada cuatro días",
    EveryFiveDays = "Cada cinco días"
}