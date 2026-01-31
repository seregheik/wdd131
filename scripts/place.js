document.addEventListener('DOMContentLoaded', () => {

    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = `Last Modification: ${document.lastModified}`;
    }

    const temperature = 10;
    const windSpeed = 5;
    // const condition = "Partly Cloudy";


    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    function displayWindChill() {
        // const tempElement = document.getElementById('temp');
        // const windElement = document.getElementById('wind');
        const windChillElement = document.getElementById('wind-chill');


        let wc = "N/A";

        if (temperature <= 10 && windSpeed > 4.8) {
            wc = calculateWindChill(temperature, windSpeed);
            wc += "°C";
        }

        if (windChillElement) {
            windChillElement.textContent = wc;
        }
    }

    displayWindChill();
});
