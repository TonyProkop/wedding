import Typography from "typography"

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Alex Brush",
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: ["Dosis", "Georgia", "serif"],
    googleFonts: [{
        name: "Great Vibes",
        styles: [
            "normal"
        ]
    }, {
        name: "Dosis",
        styles: [

        ]
    }, {
        name: "Alex Brush",
        styles: [
            
        ]
    }],
    overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
        h1: {
            fontWeight: 'normal'
        },
        h2: {
            ...adjustFontSizeTo('4rem'),
            fontWeight: 'normal',
        },
        h3: {
            ...adjustFontSizeTo('3rem'),
            fontWeight: 'normal',
        },
        h4: {
            fontWeight: 'bold',
            fontFamily: 'Dosis',
            textTransform: 'uppercase'
        },
        h5: {
            fontWeight: 'bold',
            fontFamily: 'Dosis',
            textTransform: 'uppercase'
        },
        h6: {
            fontWeight: 'bold',
            fontFamily: 'Dosis',
            textTransform: 'uppercase'
        }
    })
})

export default typography