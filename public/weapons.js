console.log("javascript is connected")  

// const allWeaponsPage = document.querySelector(".crumb")



// const weaponsCallback = ({data: weapons}) => displayWeapons(weapons)


// const getWeapons = () => axios.get("/api/weapons").then(weaponsCallback)


function makeWeaponCard(weapons) {
    const weaponName = weapons['weapon_name']
    const displayWeaponName = `${weaponName}`
     const weaponCard =
        `<div class="weapons-display-card">
        <h2>${displayWeaponName}</h2>
        </div>`
        return weaponCard
    }
    
    
    
    function displayWeapons() {
        axios.get('/api/weapons')
        .then(res => {
            console.log(res.data)
            res.data.forEach(weapons => {
                const weaponCard = makeWeaponCard(weapons)
                console.log(weaponCard)
                // weapons.innerHTML += weaponCard
                document.getElementById("weapons").innerHTML += weaponCard
        })
    })
    .catch(err => console.log(err))
}
    



// getWeapons()
displayWeapons()
// makeWeaponCard()
