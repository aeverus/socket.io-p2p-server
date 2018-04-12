var debug = require('debug')('socket')
var clients = {} // if multi servers, clients only has sockets from its own server

module.exports.clients = clients
module.exports.Server = p2pSocket


/**
* move to server.js
*/
function p2pSocket(socket, next, room) {
    // clients[socket.id] = socket
    // if (typeof room === 'object') {
    //     var connectedClients = socket.adapter.rooms[room.name]
    // } else {
    //     var connectedClients = clients
    // }
    // var connectedClients = clients
    // socket.emit('numClients', Object.keys(connectedClients).length - 1)

    // socket.on('disconnect', function() {
    //     delete clients[socket.id]
    //     Object.keys(clients).forEach(function(clientId, i) {
    //         var client = clients[clientId]
    //         client.emit('peer-disconnect', {
    //             peerId: socket.id
    //         })
    //     })
    //     // debug('Client gone (id=' + socket.id + ').')
    //     console.log('self disconnect [%s]', socket.id)
    // })

    // socket.on('offers', function(data) {
    //     // send offers to everyone in a given room
    //     Object.keys(clients).forEach(function(clientId, i) {
    //         var client = clients[clientId]
    //         if (client !== socket) {
    //             var offerObj = data.offers[i]
    //             var emittedOffer = {
    //                 fromPeerId: socket.id,
    //                 offerId: offerObj.offerId,
    //                 offer: offerObj.offer
    //             }

    //             client.emit('offer', emittedOffer)

    //             // debug('Emitting offer: %s', JSON.stringify(emittedOffer))
    //             console.log('self offer [%s]', JSON.stringify(emittedOffer))
    //         }
    //     })
    // })

    // socket.on('peer-signal', function(data) {
    //     var toPeerId = data.toPeerId
    //     var client = clients[toPeerId]
    //     client.emit('peer-signal', data)

    //     // debug('Signal peer id %s', toPeerId);
    //     console.log('self signal to peer id [%s]', toPeerId)
    // })

    typeof next === 'function' && next()
}
