import {Gender} from './gender';
import {flip} from '../commons/misc-commons';
import {getRandomElement} from '../commons/array-commons';


export function getRandomName():[string, Gender]
{
    if (flip())
    {
        return [getRandomElement(boys), Gender.Male];
    }
    return [getRandomElement(girls), Gender.Female];
}

let boys: string[] =
[
'Liam',
'Noah',
'William',
'James',
'Oliver',
'Benjamin',
'Elijah',
'Lucas',
'Mason',
'Logan',
];

let girls: string[] =
[
'Emma',
'Olivia',
'Ava',
'Isabella',
'Sophia',
'Charlotte',
'Mia',
'Amelia',
'Harper',
'Evelyn',
];
