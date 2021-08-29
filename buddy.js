const randomUser = () => {
    const url = 'https://randomuser.me/api/'
    fetch(url)
        .then(res => res.json())
        .then(data => displayBuddy(data))
}

const displayBuddy = (data) => {
    //if the data that i have got over through object 
    const buddyObject = data.results;
    const buddy = document.getElementById('displaybuddy');
    for (const friend of buddyObject) {
        const details = document.createElement('p')
        details.innerHTML = `<img src="${friend.picture.large}">
        <br>
        Name: ${friend.name.first} ${friend.name.last}
        <br>
        Email: ${friend.email}
        <br>
        City:${friend.location.city}
        <br>
        street:${friend.street}
        <br>
        state:${friend.state}
        <br>
        postcode:${friend.postcode}
        <br>
        coordinates:${friend.location.coordinates.latitude} ${friend.location.coordinates.longitude}
        <br>
        timezone:${friend.location.timezone.offset} ${friend.location.timezone.description}`
        buddy.appendChild(details)

        console.log(friend)
    }

}