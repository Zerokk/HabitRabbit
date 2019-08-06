export interface Period {

    periodFrom: Date;
    periodTo: Date;
    stats: Array<number>;
    fails: Array<string>;
}