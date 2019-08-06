import { Habit } from './Habit';
import { Task } from './Task';

export class PlanData{

    public planName: string;

    protected creationDate: Date;
    protected habits: Array<Habit>;
    protected taskList: Array<Task> = [];
    
    constructor(planName: string, habits: Array<Habit>){
        this.planName = planName;
        this.habits = habits;
        this.creationDate = new Date();
        this.taskList = this.checkPlan();

    }


    public checkPlan(): Array<Task>{
        return this.taskList = this.habits.map( (h:Habit) => h.checkAndFetchTasks())
                                   .reduce( (prev, curr) => prev.concat(curr), []);
        
    }



}