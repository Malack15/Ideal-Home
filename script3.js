document.addEventListener("DOMContentLoaded", () => {
    function openBookingForm(serviceType) {
        document.getElementById("booking-form").classList.remove("hidden");
        document.getElementById("serviceType").value = serviceType;
    }

    function closeBookingForm() {
        document.getElementById("booking-form").classList.add("hidden");
    }

    document.getElementById("bookingForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Booking request submitted successfully!");
        closeBookingForm();
    });

    window.openBookingForm = openBookingForm;
    window.closeBookingForm = closeBookingForm;
});
