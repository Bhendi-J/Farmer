// Sample data for demonstration
const sampleWeather = "75°F, Sunny";
const sampleCropHealth = "Good";
const sampleFinancialSnapshot = "$5000";

// Function to update the stats
function updateStats() {
    document.getElementById('weatherValue').textContent = sampleWeather;
    document.getElementById('healthValue').textContent = sampleCropHealth;
    document.getElementById('financialValue').textContent = sampleFinancialSnapshot;
}

// Call the function to update stats on page load
window.onload = updateStats;
