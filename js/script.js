/* =========================================
   BOOKING FORM → WHATSAPP
========================================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const treatment = document.getElementById("treatment").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "916363519679";

        const whatsappMessage = `Hello Elara Glow Aesthetic Clinic! 🌿

I'd like to request an appointment.

Name: ${name}
Phone: ${phone}
Treatment: ${treatment}
Preferred date: ${date}

Additional details:
${message || "None"}

Please let me know the available appointment timings.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=` +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}


/* =========================================
   PREVENT PAST DATES
========================================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date().toISOString().split("T")[0];

    dateInput.min = today;

}