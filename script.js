function countdown(targetDate, elementId) {
    const updateCountdown = () => {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById(elementId).innerHTML = "Event telah dimulai!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML = `
            <div style="text-align: center; font-family: 'Bebas Neue', sans-serif;">
                <h2 style="font-size: 50px; margin: 0; line-height: 1.2; color: #FF6F00;">
                    ${days} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}
                </h2>
                <p style="font-size: 24px; margin-top: 5px; color: #212121;">Days &nbsp; Hours &nbsp; Minutes &nbsp; Seconds</p>
            </div>
        `;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

const pilpresDate = new Date('2025-01-18T13:00:00');
const sertijabDate = new Date('2025-01-25T13:00:00');

countdown(pilpresDate, 'countdown-pilpres');
countdown(sertijabDate, 'countdown-sertijab');
