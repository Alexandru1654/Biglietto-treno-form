document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const km = parseFloat(document.getElementById('km').value);
    const ageGroup = document.getElementById('age-group').value;

    if (!name || isNaN(km) || km <= 0) {
        alert('Inserisci tutti i dati correttamente!');
        return;
    }

    // Cost calculation
    let basePrice = km * 0.21;
    let discount = 0;

    // 20% discount for minors, 40% discount for over 65s
    if (ageGroup === 'minorenne') {
        discount = 0.20; 
    } else if (ageGroup === 'over65') {
        discount = 0.40; 
    }

    const finalPrice = basePrice * (1 - discount);

    // Generate ticket details
    document.getElementById('passenger-name').textContent = name;
    document.getElementById('offer').textContent = ageGroup === 'minorenne' ? 'Sconto Minorenni' : ageGroup === 'over65' ? 'Sconto Over 65' : 'Biglietto Standard';
    document.getElementById('carriage').textContent = Math.floor(Math.random() * 10) + 1; 
    document.getElementById('code').textContent = Math.floor(Math.random() * 90000) + 10000; 
    document.getElementById('ticket-cost').textContent = finalPrice.toFixed(2) + '€';

    // Ticket details
    document.getElementById('ticket-details').classList.remove('hidden');
});

