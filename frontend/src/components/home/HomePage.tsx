import "./home.css";
import Stopify from "./stopify.png"

export default function HomePage() {
    return <main className="home">
        <section className="left"></section>
        <section className="right">
            <h1>Your favorite songs by year.</h1>
            <p>Choose your favorite song from each year to compare with your friends.</p>
            <p>Create playlists from your hottest picks.</p>
            <p>Start today.</p>
            <img id="stopify" src={Stopify}/>
        </section>
    </main>
}