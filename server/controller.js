require("dotenv").config()
const Sequelize = require("sequelize")

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false 
        }
    }
})



module.exports = {
    getAllWeapons: (req,res) => {
        sequelize.query(`SELECT weapon_name FROM weapons`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    generateRoll: (req, res) => {
        const {weapon_name} = req.params
        console.log(req.params)
        sequelize.query(`SELECT * FROM weapons
        WHERE weapon_name = '${weapon_name}';`)
        .then(dbRes => res.status(200).send(dbRes[0][0]))
        .catch(err => console.log(err))
    },
    rateWeapon: (req, res) => {
        let {rating} = req.params
        console.log(rating)
        sequelize.query(`UPDATE weapons SET rating = '${rating}'`)
        .then( () => {
            res.status(200).send('Weapon has been rated')
        })

        

    }
}