import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
})

export const heading = baloo.className
