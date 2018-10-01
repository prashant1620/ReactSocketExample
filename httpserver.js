

var express=require('express');

var app=express();
app.listen(8181,startup);




function startup(){

    console.log("Server started at port 8181");
}
  app.use(express.static(__dirname));

var socketio=require('socket.io');
var http=require('http');
var server=http.createServer();
var io=socketio(server);
server.listen(7171);

io.on("connect",function(client){
  console.log("Client connected");

  io.sockets.emit("myevent","Hello Client");

  client.on("myevent2",function(data){
      console.log(data);
      io.sockets.emit("myevent",data);
  })
});

app.get('/',function(request,response){
    response.sendFile(__dirname+"/index.html");
    

});