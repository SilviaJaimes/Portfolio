import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CardService({ img, icon, title, description }) {
    useEffect(() => {
        Aos.init({duration:1000})
    }, []);

    return (
        <div className="w-72 h-40 rounded-md shadow-md flex justify-center items-center transition-transform transform hover:-translate-y-2" data-aos="fade-up">
            <img src={img} alt="" className="w-full h-full rounded-none shadow-md"/>
            <div className="absolute w-full h-full bg-zinc-900 rounded-none shadow-md flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-full h-full flex flex-col justify-center items-center text-white p-2 text-center gap-2">
                    <div className="flex items-center justify-center text-4xl">
                        {icon}
                    </div>
                    <h2 className="font-semibold text-lg max-xl:text-2xl">{title}</h2>
                    <p className="text-md max-xl:text-xl">{description}</p>
                </div>
            </div>
        </div>
    );
}