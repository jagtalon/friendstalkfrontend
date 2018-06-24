import Typography from "typography";

const fontStack = ['avenir next', 'avenir', '-apple-system', 'BlinkMacSystemFont', 'helvetica nue', 'helvetica', 'ubuntu', 'roboto', 'noto', 'segoe ui', 'arial', 'sans-serif'];
const typography = new Typography({ 
    baseFontSize: "17px",
    bodyFontFamily: fontStack,
    bodyColor: '#4A4A4A',
    headerFontFamily: fontStack,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        'h1': {
            fontSize: '2.1rem'
        }
    })
});

export default typography;

