document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        // Corrected the API endpoint to /api/data
        const response = await fetch('/api/data');
        const items = await response.json();

        const container = document.getElementById('itemsContainer');
        container.innerHTML = items.map(item => `
            <div>
                <h2>${item.name}</h2>
                <p>Price: $${item.price}</p>
                <img src="${item.image}" alt="${item.name}" width="auto">
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching items:', error);
    }
});
