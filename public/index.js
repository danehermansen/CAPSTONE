function rateWeapon(event) {
    const newWeaponRating = document.querySelector("#rating")
    
    axios.post(`/api/weapons/${newWeaponRating.value}`)
    .then(res => {
         newWeaponRating.value = ''
         console.log(res.data)
     })
}
function generateRoll(event) {
    event.preventDefault();
    const weaponName = document.querySelector("#finder")
    axios.get(`/api/weapons/${weaponName.value}`)
    .then(res => {
        console.log(res.data)
        const weaponObj = res.data
        document.getElementById("container").appendChild(makeWeaponCard(weaponObj))
        weaponName.value = ''
    })
    
}
function makeWeaponCard(weapons) {
    const weaponName = weapons['weapon_name']
    const displayWeaponName = `${weaponName}`
    const pvpPerks = weapons['pvp_perks']
    const displayPvpPerks = `${pvpPerks}`
    const pvePerks = weapons['pve_perks']
    const displayPvePerks = `${pvePerks}`
         let weaponCard = document.createElement('div')
         weaponCard.classList.add('display-weapon-card')
          weaponCard.innerHTML = 
            `
            <h2>${displayWeaponName}</h2>
                <p>PvP godroll perks: ${displayPvpPerks}</p>
                <p>PvE godroll perks: ${displayPvePerks}</p>
                <section id="ratings-container">
            <p>Rate the weapon:</p>
            
            <input
            id= 'rating'
            placeholder= 'Rate out of 5' />
            ` 
            let button = document.createElement('Button')
            button.textContent = 'RATE' 
            button.setAttribute('id', 'rate-button')
            button.addEventListener('click', rateWeapon)
            weaponCard.appendChild(button)
            return weaponCard
            
        }





                    
// const ratingButton = document.querySelector("#rate-button")                                    
const weaponContainer = document.querySelector('.container')
const weaponRoll = document.querySelector("#form")
weaponRoll.addEventListener("submit", generateRoll)

                    
