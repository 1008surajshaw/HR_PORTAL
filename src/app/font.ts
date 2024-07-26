import { Open_Sans } from "next/font/google";
import { Sarabun } from "next/font/google";
const openSansRegular = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});
const openSansBold = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: '700',
});

export const  opensans_regular= openSansRegular.className;
export const opensans_bold=openSansBold.className;
const sarabunRegular=Sarabun({
    subsets:['latin'],
    display:'swap',
    weight:'400'
})
const sarabunBold=Sarabun({
    subsets:['latin'],
    display:'swap',
    weight:'700'
})
const sarabunSemiBold=Sarabun({
    subsets:['latin'],
    display:'swap',
    weight:'600'
})
export const sarabun_regular=sarabunRegular.className;
export const sarabun_bold=sarabunBold.className;
export const sarabun_semibold=sarabunSemiBold.className;