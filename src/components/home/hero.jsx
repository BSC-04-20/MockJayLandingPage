import gangster from "../../assets/images/gangster.webp";

export default function Heros(){
    return(
        <div>
            {/* Desktop/laptop heros section */}
            <div className="hidden md:flex h-[90vh] bg-secondaryblack-500">
                <div className="flex flex-row gap-10 justify-center align-middle h-full">
                    <div className="hidden md:flex flex-col my-[15%] w-[50%] gap-1 ml-24">
                        <span className="text-red-400 text-base font-inter">Record Label</span>
                        <span className="text-red-400 text-2xl font-imperial">MOCK BY JAY</span>
                        <span className="text-white text-5xl font-imperial">Built from Bars, Backed by Beats</span>
                        <span className="text-white text-3xl font-inter font-thin">We’re more than a label. We’re a movement driven by passion and hustle.</span>
                        <div className="flex flex-col md:gap-5 md:flex-row mt-5">
                            <a href="#artists" className="text-gray-200 hover:bg-red-700 bg-red-500 px-10 py-2 rounded">Artists</a>
                            <a href="#book" className="bg-gray-950 hover:bg-gray-800 border border-red-500 text-gray-200 px-10 py-2 rounded">Book</a>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <img className="h-full object-cover" src={gangster}/>
                    </div>
                </div>
            </div>


            {/* Mobile phone */}
            <div className="md:hidden relative min-h-screen h-[60vh] overflow-hidden">
                {/* Background Image */}
                <div className="absolute h-[90%] inset-0">
                    <img 
                        className="w-full h-full object-cover opacity-60" 
                        src={gangster}
                        alt="Artist background"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center mt-32 min-h-screen px-4 text-center">
                    {/* Mobile & Desktop Layout */}
                    <div className="flex flex-col max-w-4xl mx-auto">
                        {/* Brand Label */}
                        <span className="text-red-400 text-base font-inter">Record Label</span>
                        <span className="text-red-400 text-lg md:text-xl font-bold tracking-wider uppercase">MOCK BY JAY</span>
                        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">Built from Bars, Backed by Beats</h1>
                        <p className="text-gray-200 font-inter text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed mt-4">
                            We're more than a label. We're a movement driven by passion and hustle.
                        </p>
                        <div className="flex flex-col gap-2.5 sm:gap-5 sm:flex-row mt-5">
                            <a href="#artists" className="text-gray-200 sm:w-full hover:bg-red-700 bg-red-500 px-10 py-2 rounded">Artists</a>
                            <a href="#book" className="bg-gray-950 sm:w-full hover:bg-gray-800 border border-red-500 text-gray-200 px-10 py-2 rounded">Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}