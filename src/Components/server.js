const { Server } = require("socket.io");

const ioServer  = new Server(4000,{
      cors: {
        origin: ['http://192.168.0.109:3000']
      }
    });
    
    let clients = {}
    
    ioServer.on('connection', (client) => {
      console.log(
          `User ${client.id} connected, there are currently ${ioServer.engine.clientsCount} users connected`
      )
    
      //Add a new client indexed by his id
      clients[client.id] = {
          objName: undefined,
          material: undefined,
      }
    
      ioServer.sockets.emit('move', clients)
    
      client.on('move', ({ id, material, objName }) => {
          clients[client.id].objName = objName
          clients[client.id].material = material
    
          ioServer.sockets.emit('move', clients)
      })
    
      client.on('disconnect', () => {
          console.log(
              `User ${client.id} disconnected, there are currently ${ioServer.engine.clientsCount} users connected`
          )
    
          //Delete this client from the object
          delete clients[client.id]
    
          ioServer.sockets.emit('move', clients)
      })
    })