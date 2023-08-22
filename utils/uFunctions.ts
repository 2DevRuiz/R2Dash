
export default function utilSettings()
{
    
    function getRandomColor(useHexadecimal: boolean = true): string {
        const minChannelValue = 50; // Valor mínimo para los canales de color (R, G y B)
        const maxChannelValue = 200; // Valor máximo para los canales de color (R, G y B)
        
        if (useHexadecimal) {
        const randomRed = Math.floor(Math.random() * (maxChannelValue - minChannelValue) + minChannelValue).toString(16).padStart(2, '0');
        const randomGreen = Math.floor(Math.random() * (maxChannelValue - minChannelValue) + minChannelValue).toString(16).padStart(2, '0');
        const randomBlue = Math.floor(Math.random() * (maxChannelValue - minChannelValue) + minChannelValue).toString(16).padStart(2, '0');
        
        return `#${randomRed}${randomGreen}${randomBlue}`;
        } else {
        const randomRGBA = `rgba(${Math.floor(Math.random() * (maxChannelValue - minChannelValue) + minChannelValue)}, ${Math.floor(Math.random() * (maxChannelValue - minChannelValue) + minChannelValue)}, ${Math.floor(Math.random() * (maxChannelValue - minChannelValue) + minChannelValue)}, ${Math.random().toFixed(2)})`;
        return randomRGBA;
        }
    }
    return {getRandomColor}
}