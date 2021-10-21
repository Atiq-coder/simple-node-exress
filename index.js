const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("WOW! I am Learning node!")
})

const users = [
    {
        "id": 0, "name": "Leanne Graham", "email": "Sincere@april.biz", "phone": "1-770-736-8031 x56442",
    },
    {
        "id": 1, "name": "Ervin Howell", "email": "Shanna@melissa.tv", "phone": "010-692-6593 x09125",
    },
    {
        "id": 2, "name": "Clementine Bauch", "email": "Nathan@yesenia.net", "phone": "1-463-123-4447",
    },
    {
        "id": 3, "name": "Patricia Lebsack", "email": "Julianne.OConner@kory.org", "phone": "493-170-9623 x156",
    },
    {
        "id": 4, "name": "Chelsey Dietrich ", "email": "Lucio_Hettinger@annie.ca", "phone": "(254)954-1289",
    }
];


app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
})


app.get('/users', (req, res) => {
    res.send(users)
});



//App METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})




//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const index = users[id];
    res.send(index);
});

app.listen(port, () => {
    console.log("listening to the port", port);
})