import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import ScrollToTop from "../../ScrollToTop/ScrollToTop"

const Footer = () => {
  return (
    <footer className="bg-[#002561] text-white font-['TT_Hoves_Pro'] relative px-4  ">
      <div className="lg:border-b border-dashed border-white/20  ">
        {/* Main Footer Content */}
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8   relative container mx-auto ">
          {/* Location */}
          <div className="lg:border-r border-dashed border-white/20 pt-5">
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-gray-300 text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor i
            </p>
          </div>

          {/* Get In Touch */}
          <div className="lg:border-r border-dashed border-white/20 py-5">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/maps-directions"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Maps & Directions
                </Link>
              </li>
              <li>
                <Link
                  href="/email"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>

          {/* Login */}
          <div className="lg:border-r border-dashed border-white/20 py-5">
            <h3 className="text-xl font-semibold mb-4">Login</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/staff-login"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Staff Login
                </Link>
              </li>
              <li>
                <Link
                  href="/student-login"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Student Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="relative py-5">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Admissions
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/school-of-hospitality"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  School of Hospitality
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/ethics"
                  className="text-gray-300 hover:text-white text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                >
                  Quality and Code of Ethics
                </Link>
              </li> */}
            </ul>

            {/* Back to Top Button inside this section top-right */}
            {/* <div className="absolute top-0 right-0 flex flex-col items-center pt-5">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className=" transition-colors"
              >
                <div className="">
                  <Image
                    src="/rocket-icon.svg"
                    alt="A beautiful image"
                    width={600}
                    height={400}
                    className="w-10 h-10"
                  />
                </div>
              </button>
              <span className="text-[12px] text-white mt-1">Back to Top</span>
            </div> */}
          </div>
        </div>

        {/* Bottom Footer Section */}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center md:text-left container mx-auto">
        {/* Socials */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            href="https://linkedin.com"
            className="bg-white p-2 rounded hover:bg-gray-200"
          >
            <FaLinkedin className="text-[#002561] w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com"
            className="bg-white p-2 rounded hover:bg-gray-200"
          >
            <FaInstagram className="text-[#002561] w-5 h-5" />
          </Link>
          <Link
            href="https://facebook.com"
            className="bg-white p-2 rounded hover:bg-gray-200"
          >
            <FaFacebook className="text-[#002561] w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com"
            className="bg-white p-2 rounded hover:bg-gray-200"
          >
            <FaTwitter className="text-[#002561] w-5 h-5" />
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center p-5">
          <Link href="/">
            <Image
              className="w-24 h-24"
              src="/Ayra-logo.png"
              alt="AYRA Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        {/* Terms & Privacy */}
        <div className="flex justify-center md:justify-end items-center space-x-2 text-[14px] 2xl:text-[18px] text-gray-300 py-5">
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms and Conditions
          </Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
      <ScrollToTop />
      {/* Bottom Copyright */}
    </footer>
  )
}

export default Footer
