import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterBanner } from "./FooterBanner";
import { Logo } from "../../elements/Logo";

export function Footer(){
    return(
        <>
        <FooterBanner/>
        <footer className="w-full pt-8 px-4 bg-white flex flex-col items-center ">
            <Logo/>
            <div className="text-center text-sm px-10 pb-6 mt-3 justify-center flex flex-col  items-center gap-3">
                <p>Discover the Essence of Islam: Enlightening Hearts, Empowering Minds.</p>
                <div className="flex flex-col items-center">
                    <div className="flex gap-1">
                        <h1 className="font-medium">Email : </h1>
                        <p>bemuslim@gmail.com</p>
                    </div>
                    <div className="flex gap-1">
                        <h1 className="font-medium">Phone : </h1>
                        <p>+62 82123123</p>
                    </div>
                </div>
                <div className="flex gap-4 text-lg text-emerald-600 justify-center mt-5">
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaLinkedin/>
                </div>
            </div>
            <div className="border-t-2 mt-4 text-neutral-700 py-3 text-xs text-center w-full">
                <p>Copyright © 2024 Be Muslim</p>
            </div>
        </footer>
        </>
    )
}