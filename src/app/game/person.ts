import {Color} from './color';
import {Gender} from './gender';
import * as moment from 'moment';

const minAge:number = 1;
const maxAge:number = 100;

function randomBirthday():Date
{
    return moment().subtract(Math.random() * (maxAge - minAge), 'years').toDate();
}

export class Person
{
    name:string;
    birthday:Date;
    color:Color;
    gender:Gender;

    constructor(name:string, gender:Gender, color:Color)
    {
        this.name = name;
        this.birthday = randomBirthday();
        this.color = color;
        this.gender = gender;
    }

    getBirthday():string
    {
        return moment(this.birthday).format("LL");
    }

    getAge():number
    {
        return moment.duration(moment().diff(moment(this.birthday))).years();
    }


}
