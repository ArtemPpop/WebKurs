const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Импортируем jsonwebto
const sequelize = require('./database.js');
const User = require('./User');
require('dotenv').config();


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

sequelize.sync()
.then(() => {
    console.log('Database & tables created!');
});

//Рег
app.post('/user_reg', async(req,res) =>{
    const {name_user, mail_user, password,age_user,nick_user,number} = req.body;
    try {
        const existingUser = await User.findOne({ where: { name_user }});
        if (existingUser) {
            return res.status(400).send({ message: `User already exists` })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name_user, mail_user, age_user, nick_user, number, password: hashedPassword,});
        res.status(201).json({message: 'User registered successfully', user});
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Something went wrong'})
    }
});

//Аут
app.post('/user_log', async(req,res) =>{
    const {name_user, password} = req.body;
    try {
        const user = await User.findOne({ where: { name_user }});
        if (!user) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }


        //gentok
        const token = jwt.sign({user:name_user, password:password}, process.env.JWT_SECRET || "hui", {expiresIn: '1h'});
        console.log('Geneated Token',token);
        res.json({message: 'User registered successfully', token});
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Something went wrong'})
    }
});


app.get('/users', async(req,res) =>{
    const token = req.headers.authorization?.split('')[1];
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET || 'hui', {expiresIn: '1h'});
        console.log('Generated Token',token);
        res.json({message: 'Login successfull', token});
    }
    catch(err){
        console.error('Error generate token',err);
        return  res.status(500).json({message:'Failed to generate token'});
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

