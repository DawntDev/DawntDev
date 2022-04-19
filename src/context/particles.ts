export const particlesConnected: object = {
    fpsLimit: 120,
    fullScreen: {
        enable: false,
        zIndex: 0
    },
    interactivity: {
        events: {
            resize: true
        },
    },
    particles: {
        color: {
            value: "#000",
        },
        links: {
            color: "#000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
}