export interface TaskDefinition {
    taskName: string;
    taskDescription: string;
    varType: VariableType;
    possibleValues ?: Array<{val: string | number, points: number}>;
    objectivePoints: number;
}


export enum VariableType {
    NUMBER,
    BOOLEAN,
    SELECT,
    STRING,
    BUTTON,
    LIST
}