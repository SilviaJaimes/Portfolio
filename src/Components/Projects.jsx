import CardProject from "./CardProject";

export default function Projects() {
    const itemsCard = [
        {
            img: <ion-icon name="git-network-outline"></ion-icon>,
            title: "Two-step authentication",
            date: "10/2023 - Backend",
            description: "This project provides an API that allows users to register, authenticate and use two-factor autentication with QR codes in email.",
            href: "https://github.com/SilviaJaimes/Autenticacion-dos-pasos",
        },
        {
            img: <ion-icon name="medkit-outline"></ion-icon>,
            title: "Veterinary project",
            date: "10/2023 - Backend",
            description: "This project provides an API that allows you to manage the entire administration section of a veterinarian.",
            href: "https://github.com/SilviaJaimes/Proyecto-Veterinaria",
        },
        {
            img: <ion-icon name="bag-handle-outline"></ion-icon>,
            title: "Case safe clothing",
            date: "10/2023 - Backend",
            description: "This project provides an API to control, record and track the production of industrial safety garments.",
            href: "https://github.com/SilviaJaimes/Silvia-Ropa",
        },
        {
            img: <ion-icon name="file-tray-full-outline"></ion-icon>,
            title: "Landscaping project",
            date: "11/2023 - Backend",
            description: "This project provides an API that allows the control, management and registration of all the products and services of a gardening business.",
            href: "https://github.com/SilviaJaimes/Proyecto-final",
        },
        {
            img: <ion-icon name="cart-outline"></ion-icon>,
            title: "Shopping cart",
            date: "02/2024",
            description: "This project provides a shopping cart with useEffect made in React, it has the funcionality to add products and undo the purchase.",
            href: "https://github.com/SilviaJaimes/Cart",
        },
        {
            img: <ion-icon name="lock-closed-outline"></ion-icon>,
            title: "Pharmacy",
            date: "09/2023 - Full-Stack",
            description: "This project provides an API fot the management of a pharmacy where roles can be added and each one will have its own space within the web application.",
            href: "https://github.com/omapache/Backend-Farmacia",
        }
    ];

    return (
        <div className="px-10 py-6 sm:py-8 sm:px-20 md:px-28 md:py-10 lg:px-40" id="project">
            <div className="mb-12">
                <h2 className="text-4xl text-white">My projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {itemsCard.map((item) => (
                    <CardProject key={item.title} itemImg={item.img} itemTitle={item.title} itemDate={item.date} itemDescription={item.description} itemHref={item.href} linkTitle="GitHub" />
                ))}
            </div>
        </div>
    );
}