import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button, Link } from "@nextui-org/react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Description() {
    const [textWriter] = useTypewriter({
        words: [
            'Full-stack developer',
            'Web designer'
        ],
        loop: {},
    });

    useEffect(() => {
        Aos.init({duration:1000})
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-16 py-11 bg-zinc-800" id="home">
            <div className="grid grid-rows-2 gap-11 text-white">
                <div>
                    <p className="text-lg mb-2" data-aos="fade-down">Hi there!</p>
                    <h2 className="text-4xl mb-2" data-aos="fade-right">
                        I am a {" "}
                        <span className="text-violet-400">{textWriter}</span>
                        <Cursor />
                    </h2>
                    <p className="text-lg mb-5" data-aos="fade-right">I make the complex simple</p>
                    <Link href="https://www.linkedin.com/in/silvia-jaimes-c" target="_blank" data-aos="fade-right">
                        <Button className="bg-violet-400 rounded-none text-lg p-4 text-white">
                            Contact me
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-md items-center" data-aos="fade-up">
                    <div>
                        <p>Phone</p>
                        <p className="text-zinc-400">+57 316 2549650</p>
                    </div>
                    <div>
                        <p>LinkedIn</p>
                        <Link href="https://www.linkedin.com/in/silvia-jaimes-c" className="text-zinc-400">silvia-jaimes-c</Link>
                    </div>
                    <div>
                        <p>Email</p>
                        <p className="text-zinc-400">jaimessilvia338@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}