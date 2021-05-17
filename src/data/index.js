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
                location: "https://jean-pierrenovak0612.github.io/react-yt-api/"
            },
            {
                title: "Landing page",
                location: "https://jean-pierrenovak0612.github.io/landing-page/"
            },
            {
                title: "E-comerce page",
                location: "https://jean-pierrenovak0612.github.io/ecomerce-site/#/ecomerce-site/ecomerce-site/"
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
    link: "/about",
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
            buttonText: "Check out the page!"
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
            buttonText: "Check out the page!"
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
            buttonText: "Check out the page!"
        }
    }
];

export const ARTICLE_LIST = [
    {
        ref: "me",
        title: "Who am I?",
        content: {
            title: " ",
            text: "My name is Jean-Pierre and I am a 20 years old self-taught web developer. I am a very imaginative person and love to design and develop web pages and applications, which gives me the opportunity to share my ideas. I see web development as a way to share and combine ideas, which in many cases produces breathtaking results. ",
            imageUrl: `${process.env.PUBLIC_URL}/images/me.png`,
            imagePosition: "left",
        }
    },
    {
        ref: "school",
        title: "Education",
        content: {
            title: " ",
            text: "in 2016. I enroled in the Ruđer Bošković Tehnical School in order to become a game developer. It was a rough ride and wasn't easy at all, especially since I didn't have any programming background at all (Till then I didn't even own a computer). I had to learn everything my colleagues already knew, as well as the new stuff that we were learning in school. To be exact, it was really tough on me. However, now looking back on it all, if I had the chance, I would repeat it all over again.",
            imageUrl: `${process.env.PUBLIC_URL}/images/rudjer.png`,
            imagePosition: "right",
        }
    },
    {
        ref: "webdev",
        title: "How it came to be",
        content: {
            title: " ",
            text: "My journey to become a web developer started in 2018. As mentioned, I enroled the Ruđer Bošković Tehnical School in order to become a game developer. And it stayed that way untill we were introduced to web developent in our 3rd year of highschool. At first, learning about HTML was really boring. I didn't like it at all. later on we were introduced to CSS, which made it kind of interesting. But even so, it wasn't enough. Just after learning about JavaScript was I persuaded and started learning more about web development. After that came jQuery, PHP, React and Typescript, which opened the door to putting everything I could think of onto the web. And that is how it all started.",
            imageUrl: `${process.env.PUBLIC_URL}/images/code.png`,
            imagePosition: "left",
        }
    }
]