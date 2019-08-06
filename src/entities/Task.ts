import { Habit } from './Habit';

export class Task {

    public title: string;
    public createdAt: Date;
    public habitRef: Habit;
    public objectivePoints: number;
    public resolved = false;
    public expiresAt: Date;

    constructor(title: string, habitRef: Habit, objectivePoints ?: number){
        this.title = title;
        this.habitRef = habitRef;
        this.objectivePoints = objectivePoints | 1;
    }


    tryResolve(reachedPoints: number){
        if(reachedPoints >= this.objectivePoints){
            this.resolved = true;
        }
      
    }

}