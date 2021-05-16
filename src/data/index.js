export const NAV_LINKS = [
    {
        title: "home",
        location: "/"
    },
    {
        title: "about me",
        location: "/about"
    },
    {
        title: "procjects",
        location: "/projects",
        sublinks: [
            {
                title: "YouTube search app",
                location: "/project/youtube-api"
            },
            {
                title: "Landing page",
                location: "/project/landing-page"
            },
            {
                title: "E-comerce page",
                location: "/projects/ecomerce-page"
            }
        ],
        position: "second"
    },
    {
        title: "contact me",
        location: "/contact"
    }
];

export const FOOTER_LINKS = [
    {
        title: "about me",
        location: "/about"
    },
    {
        title: "contact me",
        location: "/contact"
    }
];

export const SOCIAL_LINKS = [
    {
        title: "facebook",
        location: "https://www.facebook.com/jeanpierre.novak.391"
    },
    {
        title: "instagram",
        location: "https://www.instagram.com/jeanpierrenovak/"
    },
    {
        title: "github",
        location: "https://github.com/Jean-PierreNovak0612"
    }
];

export const SEGMENT1 = {
    imageUrl: `${process.env.PUBLIC_URL}/images/code.png`,
    title: "Check out my project list!",
    text: "On this site I included a small project list that contains some descriptions and links to the projects",
    link: "/projects",
    imagePosition: "left",
    buttonText: "Check out the list"
}

export const SEGMENT2 = {
    imageUrl: `${process.env.PUBLIC_URL}/images/me.png`,
    title: "But who am I?",
    text: "I am a 20 years old self-taught web developer. My journey started in 2018 and is still ongoing...",
    link: "/projects",
    imagePosition: "right",
    buttonText: "Read more"
}

export const LIST_ITEMS = [
    {
        title: "Youtube search app",
        active: true,
        text: "",
        className: "yt-app",
        id: "one",
        data: {
            imageUrl: `${process.env.PUBLIC_URL}/images/react_yt_app.png`,
            title: "A small app that implements the YouTube v3 API",
            text: "This small aplication was build during my learning phase. The goal was to implement the YouTube v3 API to allow the user to search for videos, without the user going to YouTube directly.",
            link: "https://jean-pierrenovak0612.github.io/react-yt-api/",
            imagePosition: "left",
            buttonText: "Check out the app!"
        }
    },
    {
        title: "Landing page",
        active: false,
        text: "",
        className: "landing",
        id: "two",
        data: {
            imageUrl: `${process.env.PUBLIC_URL}/images/landig_page.png`,
            title: "A landing page for a small organisation in Croatia",
            text: "After that I created a small landing page, wich should represent a small organisation that helps animals in Croatia. It also has a small contact form at the bottom of the page, which is linked to me.",
            link: "https://jean-pierrenovak0612.github.io/landing-page/",
            imagePosition: "left",
            buttonText: "Check out the app!"
        }
    },
    {
        title: "Ecomerce site",
        active: false,
        text: "",
        className: "ecomerce",
        id: "three",
        data: {
            imageUrl: `${process.env.PUBLIC_URL}/images/ecomerce_site.png`,
            title: "A small E-comerce website that uses the JSON RESTFULL API server",
            text: "This site was created with the intetion to prove that I know how to connect a database with a webpage. However, because of the limitations of the JSON server, the amount of products in the store can't be changed. But even though that is the case, a FAKE PATCH is being made towards the server, which is visible in the developer console (Functional button F12).",
            link: "https://jean-pierrenovak0612.github.io/ecomerce-site/#/ecomerce-site/ecomerce-site/",
            imagePosition: "left",
            buttonText: "Check out the app!"
        }
    }
]