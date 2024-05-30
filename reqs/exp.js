const {instance} = require("../requ");
instance.get("api1.json")
// const http2 = require('http2');
// const fs = require('fs');
// const mime = require('mime-type');
// const path = require('path');

// const {
//     HTTP2_HEADER_PATH,
//     HTTP2_METHOD_METHOD,
//     HTTP_STATUS_NOT_FOUND,
//     HTTP_STATUS_INTERNAL_SERVER_ERROR
// } = http2.constants;

// const options = {

// }

// const server =  http2.createSecureServer(options);
// const serverRoot = "./public";

// function resToStreamError(err, stream){
//     console.log(err)
//     if(err.code === 'ENOENT'){
//         stream.respond({":status": HTTP_STATUS_NOT_FOUND})
//     } else {
//         stream.respond({":status": HTTP_STATUS_INTERNAL_SERVER_ERROR})
//     }
//     stream.end();
// }
// server.on('stream', (stream, headers) => {
//     const reqPath = headers[HTTP2_HEADER_PATH]
//     const reqMethod = headers[HTTP2_METHOD_METHOD]
    
//     const fullPath = path.join(serverRoot, reqPath);
//     const responseMimeType = mime.lookup(fullPath);

//     stream.respondWithFile(fullPath, {
//         'content-type': responseMimeType
//     },{
//         onError: (err) => resToStreamError(err,stream)
//     });
// });
// server.listen(443);