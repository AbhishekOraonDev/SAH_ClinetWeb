import NavbarComponent from "../component/navbar.jsx";
import landingImage from "../assets/landingImg1.png";
import { TextGenerateEffect } from "../component/textGenerated.jsx";

const words = ``;

export default function LandingPage() {
    return (
        <>
            <NavbarComponent />
            <div className="flex flex-col md:flex-row min-h-screen w-full">
                {/* Left Section - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-8 md:py-0">
                    <div className="space-y-2 md:space-y-4 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold">We Provide</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold text-indigo-600">Solutions</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold">for scaling business!</h1>
                        {/* <div className="text-black"> */}
                        {/* <TextGenerateEffect duration={2} filter={false} words={words} className="text-black" /> */}
                        {/* </div> */}
                        {/* Get Started Button */}
                    </div>
                    <div className="mt-6 md:mt-8">
                            <button className="px-5 py-3 text-lg md:text-xl font-semibold text-white bg-indigo-500 hover:bg-indigo-700 rounded-full shadow-[0_20px_80px_rgba(8,_112,_184,_0.7)] transition duration-300">
                                Get Started
                            </button>
                        </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="p-4 md:p-8">
                        <img
                            src={landingImage}
                            alt="Business Solutions"
                            className="w-3/4 md:w-full h-auto max-w-2xl mx-auto "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}