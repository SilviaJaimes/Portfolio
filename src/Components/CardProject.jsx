import { Link } from "@nextui-org/react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function CardProject({ itemTitle, itemDate, itemDescription, itemHref, linkTitle, itemImg }) {
    useEffect(() => {
        Aos.init({duration:400})
    }, []);

    return (
        <div className="flex items-start p-4" key={itemTitle}>
            <div data-aos="fade-up" className="flex flex-col items-center rounded-2xl group relative cursor-pointer hover:bg-zinc-800 hover:transition-all ease-in-out duration-300">
                <div className="text-white text-4xl w-[85px] h-[85px] flex items-center justify-center rounded-full absolute -top-[50px] group-hover:bg-gradient-to-r from-violet-400 to-violet-700 hover:transition-all ease-in-out duration-300">
                    {itemImg}
                </div>
                <div className="text-white text-center py-2 px-4 mt-[50px]">
                    <h2 className="text-white text-lg font-bold">{itemTitle}</h2>
                    <p className="text-zinc-400 text-md">{itemDate}</p>
                    <p className="text-white text-md text-justify">{itemDescription}</p>
                </div>
                <footer className="h-[40px]">
                    <div className="text-sky-500 font-bold hidden items-center cursor-pointer group-hover:flex">
                        <Link className="flex items-center gap-1 hover:gap-3 transition-all ease-in-out duration-500" href={itemHref} target="_blank">
                            {linkTitle} {" "}
                            <span className="text-sky-600 flex items-center">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}