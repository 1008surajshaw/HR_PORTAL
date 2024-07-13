"use client"
import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { sarabun_bold, opensans_regular } from "@/app/font";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
//@ts-ignore
const WhiteTextField = styled(TextField)(({ height }) => ({
  '& .MuiInputBase-root': {
    color: 'white',
    height: height,
    borderRadius: '4px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Sets the border color to white
    },
    '&:hover fieldset': {
      borderColor: 'white', // Keeps the border color white on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Keeps the border color white when focused
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white', // Sets the label color to white
  },
  '& .MuiInputLabel-shrink': {
    color: 'white', // Ensures the label stays white when shrinked
  }
}));

const Footer = () => {
  return (
    <div className="bg-primary_bg text-white  ">
      <div className="w-10/12 pt-[30px] pb-[10px] mx-auto flex justify-between items-start">
        <div className="w-2/5">
          <h2 className={`${sarabun_bold} text-4xl mb-2`}>Say hello and let's work together !</h2>
          <div className="flex space-x-4 mt-[40px] items-center">
            <Link href="#" className="text-white text-[24px]"><FaInstagram/></Link>
            <Link href="#" className="text-white text-[24px]"><FaFacebook/></Link>
            <Link href="#" className="text-white text-[24px]"><CiLinkedin/></Link>
            <Link href="#" className="text-white text-[24px]"><HiOutlineMailOpen/></Link>
          </div>
          <p className={`mt-4 ${opensans_regular}`}>© 2022 Brand, Inc. • Privacy • Terms • Sitemap</p>
        </div>
        <div className="w-2/5">
          <form className={`space-y-4`}>
            <div>
              
              <WhiteTextField
                id="outlined-basic"
                label="Email"
                type="text"
                //@ts-ignore
                height="40px"
                placeholder="your email address"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div> 
              
              <WhiteTextField
                id="outlined-basic"
                label="Input your message"
                type="text"
                //@ts-ignore
                height="90px"
                placeholder="Describe your project"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`px-6 py-1 bg-white ${opensans_regular} text-black rounded-md`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
      
    </div>
  );
}

export default Footer;
