document.addEventListener('DOMContentLoaded', function() {
    // Λήψη της σημερινής ημερομηνίας σε μορφή YYYY-MM-DD
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Οι μήνες ξεκινούν από το 0
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    // Ορισμός του min attribute στο στοιχείο input
    document.getElementById('Ημερομηνία').setAttribute('min', today);
document.getElementById('Ημερομηνία').addEventListener('change', function() {
    this.blur();
});
});