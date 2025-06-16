import Albums from "./Albums";
import Artists from "./Artists";
import Book from "./Book";
import Heros from "./hero";

export default function Home(){
    return(
        <div>
            <Heros/>
            <Artists/>
            <Book/>
            <Albums/>
        </div>
    )
}