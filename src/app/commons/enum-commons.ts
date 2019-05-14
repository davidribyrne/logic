
export function randomEnum<T>(anEnum: T): T[keyof T] {
const v = Object.keys(anEnum);
        var enumKey = v[Math.floor(Math.random() * v.length)];
        return anEnum[enumKey];
        /*
  const enumValues = Object.keys(anEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];

    var x = Object.keys(anEnum)
      .map(n => Number.parseInt(n));
      alert(x);

  const randomIndex = Math.floor(Math.random() * enumValues.length)
  const randomEnumValue = enumValues[randomIndex]
  return randomEnumValue;
  */
}
