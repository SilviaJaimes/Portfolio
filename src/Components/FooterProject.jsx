import { Link } from "@nextui-org/react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function FooterProject() {
    useEffect(() => {
        Aos.init({duration:1000})
    }, []);

    return (
        <footer className="bg-zinc-900 px-20 py-10">
            <h2 className="text-2xl text-white mb-4">My contact information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="https://www.instagram.com/silviajaimesc" className="text-white text-md flex gap-2 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:text-violet-500 duration-300" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                    silviajaimesc
                </Link>
                <p className="text-white text-md flex gap-2 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:text-orange-400 duration-300">
                    <ion-icon name="mail"></ion-icon>
                    jaimessilvia338@gmail.com
                </p>
                <Link href="https://www.linkedin.com/in/silvia-jaimes-c" className="text-white text-md flex gap-2 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sky-500 duration-300" target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    silvia-jaimes-c
                </Link>
                <p className="text-white text-md flex gap-2 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:text-green-500 duration-300">
                    <ion-icon name="call"></ion-icon>
                    +57 316 2549650
                </p>
                <Link href="https://github.com/SilviaJaimes" className="text-white text-md flex gap-2 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:text-zinc-400 duration-300" target="_blank">
                    <ion-icon name="logo-github"></ion-icon>
                    SilviaJaimes
                </Link>
            </div>
        </footer>
    );
}