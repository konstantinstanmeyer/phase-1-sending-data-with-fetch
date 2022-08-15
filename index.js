function submitData(name, email){
    return fetch('http://localhost3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify( {
            name,
            email
        } )
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        return document.innerHTML = object['id']
    })

}