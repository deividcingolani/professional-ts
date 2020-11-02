// /* eslint-disable  */
// // type Course = [...string, ...number, boolean];

// // function Bar(arg:[first:string, second:number]){
// //   console.log(arg.first)
// // }

// type Bar<T extends number & any[]> = [boolean, ...T, boolean];
// type Address = [
//   streetNumber: number,
//   city: string,
//   state: string,
//   postal: number,
// ];

// function printAddress(...address: Address) {
//   address[0];
// }
// printAddress(122, 'san francisco', 'CA', 1231);

// //////
// type JSONValue =
//   | string
//   | number
//   | boolean
//   | null
//   | JSONValue[]
//   | { [k: string]: JSONValue };

// const val: JSONValue = {
//   name: 'mike',
//   address: {
//     street: 'Spear St',
//   },
// };

// // type Coner = `${capitalize<'top'|'bottom'>}-${'left'|'right'} `
// //another file
// type Bar = number; //& any

// // @ts-expect-error
// const num1: Bar = 'hello';
// // @ts-ignore
// const num2: Bar = 'hello';

// function somethingRisky() {}

// function assertIsError(err: any): asserts err is Error {
//   if (!(err instanceof Error))
//     throw new Error(`Not an error: ${err}`);
// }

// try {
//   somethingRisky();
// } catch (err: unknown) {
//   assertIsError(err);
//   console.log(err.stack);
// }
