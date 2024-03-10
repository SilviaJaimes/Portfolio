import CardService from "./CardService";

export default function Service() {
    const itemsCard = [
        {
            img: "https://www.esic.edu/sites/default/files/2023-05/dise%C3%B1ador-grafico.jpg",
            icon: <ion-icon name="desktop-outline"></ion-icon>,
            title: "Web design",
            description: "I create and innovate the design for web pages with different themes.",
        },
        {
            img: "https://www.dongee.com/tutoriales/content/images/2023/01/backend.png",
            icon: <ion-icon name="code-download-outline"></ion-icon>,
            title: "Back-end structure",
            description: "I design back-end structures in C# together with the ASP.Net Core framework.",
        },
        {
            img: "https://44653845.fs1.hubspotusercontent-na1.net/hubfs/44653845/Imported_Blog_Media/MicrosoftTeams-image.jpg",
            icon: <ion-icon name="code-slash-outline"></ion-icon>,
            title: "Front-end structure",
            description: "I create the requested layouts in JavaScript together with the React framework.",
        }
    ];

    return (
        <div className="px-10 py-6 sm:py-8 sm:px-20 md:px-28 md:py-10 lg:px-40" id="service">
            <div className="mb-12">
                <h2 className="text-4xl text-white">My services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {itemsCard.map((item) => (
                    <CardService key={item.title} img={item.img} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    );
}