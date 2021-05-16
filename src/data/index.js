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
            link: "/projects",
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
            title: "But who am I?",
            text: "I am a 20 years old self-taught web developer. My journey started in 2018 and is still ongoing...",
            link: "/projects",
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
            title: "But who am I?",
            text: "I am a 20 years old self-taught web developer. My journey started in 2018 and is still ongoing...",
            link: "/projects",
            imagePosition: "left",
            buttonText: "Check out the app!"
        }
    }
]