import { FaFacebook, FaInstagram, FaLinkedin, FaMosque, FaTwitter } from "react-icons/fa";
import { FooterBanner } from "./FooterBanner";

export function Footer(){
    return(
        <>
        <FooterBanner/>
        <footer className="w-full pt-4 px-4 bg-white mt-6">
            <div className="font-bold text-lg text-emerald-500 flex items-center justify-center gap-2">
                <FaMosque/>
                <h1 className="font-marcellus">
                    Be Muslim
                </h1>
            </div>
            <div className="text-center text-sm px-10 mt-3 justify-center flex flex-col  items-center gap-6">
                <p>Discover the Essence of Islam: Enlightening Hearts, Empowering Minds.</p>
                <div>
                    <div className="flex gap-1">
                        <h1 className="font-medium">Email : </h1>
                        <p>bemuslim@gmail.com</p>
                    </div>
                    <div className="flex gap-1">
                        <h1 className="font-medium">Phone : </h1>
                        <p>+62 82123123</p>
                    </div>
                </div>
                <div className="flex gap-4 text-lg text-emerald-600">
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaLinkedin/>
                </div>
            </div>
            <div className="border-t-2 mt-4 text-neutral-700 py-2 text-xs text-center">
                <p>Copyright © 2024 Be Muslim</p>
            </div>
        </footer>
        </>
    )
}