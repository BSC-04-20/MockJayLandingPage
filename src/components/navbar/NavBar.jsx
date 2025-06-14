export default function NavBar(){
    return(
        <>
            {/* Desktop navbar */}
            <div className="h-[10vh] w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sticky flex items-center justify-between px-6">
                <span className="text-xl font-imperial text-red-400">
                    Mock by Jay
                </span>

                <div className="flex flex-row text-xl font-imperial text-gray-200 gap-10 items-center">
                    <span className="hover:text-red-400 hover:cursor-pointer">Home</span>
                    <span className="hover:text-red-400 hover:cursor-pointer">Artists</span>
                    <span className="hover:text-red-400 hover:cursor-pointer">Book</span>
                    <span className="hover:text-red-400 hover:cursor-pointer">Albums</span>
                </div>
            </div>
        </>
    )
}