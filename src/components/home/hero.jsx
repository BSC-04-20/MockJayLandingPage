import gangster from "../../assets/images/gangster.webp";

export default function Heros(){
    return(
        <div className="h-[90vh] bg-secondaryblack-500">
            {/* Desktop/laptop heros section */}
            <div className="flex flex-row gap-10 justify-center align-middle h-full">
                <div className="flex flex-col my-[15%] w-[50%] gap-1 ml-24">
                    <span className="text-red-400 text-2xl font-imperial">MOCK BY JAY</span>
                    <span className="text-white text-5xl font-imperial">Built from Bars, Backed by Beats</span>
                    <span className="text-white text-3xl font-inter font-thin">We’re more than a label. We’re a movement driven by passion and hustle.</span>
                </div>
                <div>
                    <img className="h-full object-cover" src={gangster}/>
                </div>
            </div>
        </div>
    )
}