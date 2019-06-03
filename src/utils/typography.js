import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: ["Georgia", "serif"],
    googleFonts: [{
        name: "Great Vibes",
        styles: [
            "normal"
        ]
    }, {
        name: "Dosis",
        styles: [

        ]
    }]
})

export default typography