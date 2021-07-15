const express = require('express')
const app = express()
const port = 3000;
const path = require('path')



app.get('/', (_, res) => res.sendFile(path.resolve('index.html')))


const server = app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('Usuário on', socket.id)
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => console.log('Usuário Off', socket.id))
})