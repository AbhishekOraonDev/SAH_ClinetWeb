import NavbarComponent from "../component/navbar.jsx";
import landingImage from "../assets/landingImg1.png";
import landingImage2 from "../assets/landingImg2.png";
import { TextGenerateEffect } from "../component/textGenerated.jsx";
import FeatureComponent from "../component/feature.jsx";
import FooterComponent from "../component/footer.jsx";

const words = `We are a company dedicated to providing scalable business solutions. Our mission is to help businesses grow and succeed by offering innovative tools and strategies tailored to their needs.`;

export default function LandingPage() {
    return (
        <>
            {/* -------------------Navbar component------------------------ */}
            <NavbarComponent />

            {/* ---------------------- Hero section------------------------------------- */}
            <div className="flex flex-col md:flex-row min-h-screen w-full">
                {/* Left Section - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-8 md:py-0">
                    <div className="space-y-2 md:space-y-4 text-center md:text-left lg:ml-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold">We Provide</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold text-indigo-600">Solutions</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold">for scaling business!</h1>
                        {/* <div className="text-black"> */}
                        {/* <TextGenerateEffect duration={2} filter={false} words={words} className="text-black" /> */}
                        {/* </div> */}
                        {/* Get Started Button */}
                    </div>
                    <div className="lg:ml-16 mt-6 md:mt-8">
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

            {/* -----------------------------About section ----------------------------- */}

            <div className="flex flex-col items-center min-h-screen px-6 md:px-12 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-head1 font-semibold">About Us</h1>

                <TextGenerateEffect duration={2} filter={false} words={words} className="text-black" />

                <FeatureComponent />

                <div className="flex flex-col md:flex-row mt-24 w-full pb-16">
                    {/* Left Section - Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-8 md:py-0">
                        {/* <div className="space-y-2 md:space-y-4 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold">We Provide</h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold text-indigo-600">Solutions</h1>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold">for scaling business!</h1>

                        </div>
                        <div className="mt-6 md:mt-8">
                            <button className="px-5 py-3 text-lg md:text-xl font-semibold text-white bg-indigo-500 hover:bg-indigo-700 rounded-full shadow-[0_20px_80px_rgba(8,_112,_184,_0.7)] transition duration-300">
                                Get Started
                            </button>
                        </div> */}
                        <div className="lg:ml-14">
                            <p className="text-base leading-7 text-gray-600 text-left">Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.

                                Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.

                                Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.</p>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="p-4 md:p-8">
                            <img
                                src={landingImage2}
                                alt="Business Solutions"
                                className="w-3/4 md:w-full h-auto max-w-2xl mx-auto "
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* ------------------------------Footer section------------------------------- */}

            <FooterComponent />
        </>
    )
}