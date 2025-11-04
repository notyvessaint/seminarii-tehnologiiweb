let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express()
let router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

const array = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
]

router.route('/getList').get((req, res) => {
    res.json(array)
})

router.route('/postList').post((req, res) => {
    let el = req.body
    el.id = array.length + 1
    array.push(el)

    res.json(el)
})

router.route('/getById/:id').get((req, res) => {
    let id = parseInt(req.params.id)
    let el = array.find(e => e.id === id)

    if(el)
        res.json(el)
    else
        res.status(404).send('Not Found')
})

router.route('/updateById/:id').put((req, res) => {
    let id = parseInt(req.params.id)
    let index = array.findIndex(e => e.id === id)

    if(index === -1)
        return res.status(404).send('Not Found')

    const up = req.body
    array[index] = { id: id, ...up }
    res.json(array[index])
})

router.route('/deleteById/:id').delete((req, res) => {
    let id = parseInt(req.params.id)
    let index = array.findIndex(e => e.id === id)

    if(index === -1)
        return res.status(404).send('Not Found')

    const removed = array.splice(index, 1)
    res.json(removed[0])
})

let port = 8000
app.listen(port)
console.log("Api is running")