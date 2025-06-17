import AboutLabel from "./About";
import Albums from "./Albums";
import Artists from "./Artists";
import Book from "./Book";
import Heros from "./hero";
import LabelStats from "./LabelStats";

export default function Home(){
    return(
        <div>
            <div id="home"><Heros/></div>
            <div id="about"><AboutLabel/></div>
            <div id="labelStats"><LabelStats/></div>
            <div id="artists"><Artists/></div>
            <div id="albums"><Albums/></div>
            <div id="book"><Book/></div>
        </div>
    )
}