import {getRandomElement} from '../commons/array-commons';


export class Color
{
	name:string;
	code:number;

	static colorCodes:Map<number, Color> = new Map();
	static colors:Color[] = new Array<Color>();

	constructor(name:string, code:number)
	{
		this.name = name;
		this.code = code;
		Color.colorCodes.set(code, this);
		Color.colors.push(this);
	}

	isPrimary():Boolean
	{
		return [RED, BLUE, YELLOW].includes(this);
	}

	colorOperation(target:Color, thisDescription:string, targetDescription:string):string
	{

		if (! (this.isPrimary() && target.isPrimary))
			return "";

		if (this.isPrimary() && target.isPrimary())
		{
			let result:Color = Color.colorCodes.get(this.code + target.code);
			return thisDescription + " and " + targetDescription + " combine to make " + result.name;
		}

		// If one does not contain the other
		if ((this.code & target.code) == 0)
			return "";

		let primary:Color;
		let primaryDescription:string;
		let secondary:Color;
		let secondaryDescription:string;

		if (this.isPrimary())
		{
			primary = this;
			primaryDescription = thisDescription;
			secondary = target;
			secondaryDescription = targetDescription;
		}
		else
		{
			primary = target;
			primaryDescription = targetDescription;
			secondary = this;
			secondaryDescription = thisDescription;
		}


		let third:Color = Color.colorCodes.get(secondary.code - primary.code);
		return primaryDescription + " and " + third.name + " combine to make " + secondaryDescription;
	}
}

export const RED = new Color("red", 0b001);
export const BLUE = new Color("blue", 0b010);
export const YELLOW = new Color("yellow", 0b100);
export const PURPLE = new Color("purple", 0b011);
export const GREEN = new Color("green", 0b110);
export const ORANGE = new Color("orange", 0b101);


export function randomColor():Color
{
	return getRandomElement(Color.colors);
}
