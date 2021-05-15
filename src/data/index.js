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
    title: "Check out my projects!",
    text: "Check out my list of project that are currently awailable online!",
    link: "/projects",
    imagePosition: "left",
    buttonText: "Check out the list"
}