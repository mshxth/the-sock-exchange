function handleRegister() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    fetch('http://localhost:9000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
    })
    .then(response => response.json())
    .then(data => console.log('POST:', data))
    .catch((error) => console.error('Error:', error));
}