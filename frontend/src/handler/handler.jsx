export default async function handleClick(e) {
    let username = document.querySelector('.user').value
    let password = document.querySelector('.pass').value
    let user = {
        username: username,
        password: password
    }
    e.preventDefault()

   let response = await fetch('http://localhost:5000/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
   })
    let result = await response.text()
        console.log(result)
}