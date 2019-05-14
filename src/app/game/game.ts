import {Person} from './person';
import {getRandomName} from './names';
import {randomColor, Color } from './color';
import {Gender} from './gender';
import * as converter from 'number-to-words';


export class Game
{
    people: Person[];
    count: number;
    clues: string[] = new Array<string>();

	colors:Boolean = true;
	ages:Boolean = false;
	genders:Boolean = false;


    constructor(count:number)
    {
        this.count = count;

        this.generatePeople();
        this.generateClues();
    }

    play():void
    {
        alert(JSON.stringify(this.clues));
    }

    generatePeople():void
    {
        this.people = new Array<Person>();
        for(var i:number = 1; i <= this.count; i++)
        {
            var p = getRandomName();
            this.people.push(new Person(p[0], p[1], randomColor()));
        }
    }

    generateClues():void
    {

		if (this.colors)
		{
			for (let color of Color.colors)
			{
				{
					let count:number = this.people.filter(person => person.color === color).length;
					if (count > 0)
						this.clues.push("There " + (count == 1 ? "is one person that has" : "are " +
							converter.toWords(count) + " people that have ") + color.name + " as their favorite color");
					else
						this.clues.push("No one has " + color.name + " as their favorite color");
				}

				let g:Gender;
				for (g of [Gender.Male, Gender.Female])
				{
					let count:number = this.people.filter(person => person.gender === g).length;
					if (count == 0)
						this.clues.push("There are no " + g + "s that have " + color.name + " as their favorite color");
					else if (count == 1)
						this.clues.push("There is one " + g + " that has " + color.name + " as " +
							(g === Gender.Male ? "his" : "her") + " favorite color");
					else
					{
						this.clues.push("There are " + converter.toWords(count) + " " + g + "s that have " +
							color.name + " as their favorite color");
						this.clues.push("At least one " + g + " has " + color.name + " as " +
							(g === Gender.Male ? "his" : "her") + " favorite color");
					}
				}
			}
		}

        for(let person of this.people)
        {
            //////////////////////////
            // basic clues
            //////////////////////////
			if (this.ages)
			{
	            this.clues.push(person.name + " is " + person.getAge() + " years old");
	            this.clues.push(person.name + " was born on " + person.getBirthday());
				if (this.genders)
					this.clues.push("At least one " + person.gender + " is " + person.getAge());
			}
			if (this.colors)
			{
				this.clues.push(person.name + "'s favorite color " + (person.color.isPrimary() ? "is" : "isn't") +
					" a primary color");
            	this.clues.push(person.name + "'s favorite color is " + person.color.name);
			}

            for(let person2 of this.people)
            {
                if (person === person2)
                    continue;

                //////////////////////////
                // Color clues
                //////////////////////////
				if (this.colors)
				{
	                if (person.color === person2.color)
	                {
	                    this.clues.push(person.name + " and " + person2.name + " have the same favorite color");
	                }
	                else
	                {
						let c:string = person.color.colorOperation(person2.color, person.name + "'s favorite color",
							person2.name + "'s favorite color");
						if (c)
							this.clues.push(c);
	                }
				}

				if (this.ages)
				{
	                this.clues.push(person.name + "'s age plus " + person2.name + "'s age equals " +
						(person.getAge() + person2.getAge()));

	                var diff = person.getAge() - person2.getAge();
	                if (diff == 0)
	                {
	                    this.clues.push(person.name + " and " + person2.name + " are the same age today");
	                }
	                else
	                {
	                    this.clues.push(person.name + " is " + Math.abs(diff) + " years " +
							(diff > 0 ? "older" : "younger") + " than " + person2.name);
	                    this.clues.push(person2.name + " is " + Math.abs(diff) + " years " +
							(diff < 0 ? "older" : "younger") + " than " + person.name);
	                }
				}
            }
        }
    }
}
