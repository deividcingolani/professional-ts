/* eslint-disable @typescript-eslint/no-unused-vars  */
const x: {
  user: {
    name: string;
    address?: {
      street: string
      city: string
    }
  }
} = undefined as any

const y = x.user.address?.city;
console.log(x.user.address?.city)