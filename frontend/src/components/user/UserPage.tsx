import { useParams } from "react-router-dom";
import "./user.css";

export default function HomePage() {
    const { username } = useParams();
    return <main className="user">
        <section className="left"></section>
        <section className="right">
            <h1>{ username?.toUpperCase() }</h1>
        </section>
    </main>
}