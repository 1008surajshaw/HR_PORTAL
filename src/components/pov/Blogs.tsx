"use client"
import Image from "next/image"
import blog_1 from '@/assets/home/blog_1.jpg'
import blog_2 from '@/assets/home/blog_2.jpg'
import blog_3 from '@/assets/home/blog_3.jpg'
import Link from "next/link"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { opensans_regular, sarabun_bold,sarabun_regular } from "@/app/font"
const Blogs = () => {
  const blogs = [
    {
      image: blog_1,
      title: "Minim anim pariatur magna duis sit et dolor incididunt",
      date: "Oct 16, 2022",
    },
    {
      image: blog_2,
      title: "Dolore nisi ipsum ullamco non officia cupi",
      date: "Oct 2, 2022",
    },
    {
      image: blog_3,
      title: "Consectetur in aute dolore",
      date: "Oct 1, 2022",
    },
  ];

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`heading-large  ${sarabun_bold}`}>Blogs</h2>
          <Link href="#" className={`${opensans_regular} flex items-center gap-x-[6px] text-red-600` }>Explore 
          <MdOutlineKeyboardArrowRight size={"20px"}/>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={blog.image} alt={`Blog ${index + 1}`} className="w-full h-[215px] object-cover"  />
              <div className="p-4">
                <h3 className={`text-[24px] leading-[36px] ${sarabun_regular}  text-primary_text mb-2`}>{blog.title}</h3>
                <p className={`leading-[26px] ${sarabun_regular} text-primary_text`}>{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs;
