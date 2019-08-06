import { VariableType } from './TaskDefinition';

export interface FormDefinition {
    title: string;
    fields: Array<Field>
}

export interface Field {
    name: string;
    id: string;
    type: VariableType;
    validator?: Function;
    options?: Array<string>;
    action?: Function;
    condition?: Function
}