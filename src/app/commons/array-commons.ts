export function getRandomElement<T>(myArray:T[]):T
{
    return myArray[Math.floor(Math.random() * myArray.length)];
}
