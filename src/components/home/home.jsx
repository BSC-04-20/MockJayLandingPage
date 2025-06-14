import Albums from "./Albums";
import Book from "./Book";
import Heros from "./hero";

export default function Home(){
    return(
        <div>
            <Heros/>
            <Book/>
            <Albums/>
        </div>
    )
}