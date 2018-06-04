// Code goes here

console.log("server starts in a bit..");
var gulp = require('gulp');
var express = require('express');
var fs = require('fs');
var bodyParser = require("body-parser");

gulp.task('express', function() {
    console.log("express starting..");
    var app = express();
    app.use(bodyParser.json());

    app.use('/', express.static('public'));

    app.get('/getData', function(request, response) {
        response.sendFile(__dirname + "/data/movieList.json");
    });

    app.post('/addMovieRecord', function(request, response) {

        //response.sendFile(__dirname + "/data/contactList.json");
        //read the file and update it
        console.log("incoming data=" + JSON.stringify(request.body));

        fs.readFile(__dirname + "/data/movieList.json", 'utf-8', function(err, data) {

            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);

            var newRecord = request.body;

            newRecord.id = fileJsonData.mylist.length + 1;

            console.log("newContact=" + JSON.stringify(newRecord));

            fileJsonData.mylist.push(newRecord);

            var stringFile = JSON.stringify(fileJsonData);

            fs.writeFile(__dirname + "/data/movieList.json", stringFile);
            //fs.close();

            response.send(stringFile);

        });



    });

    app.post('/deleteMovieRecord', function(request, response) {

        console.log("incoming data=" + JSON.stringify(request.body));

        fs.readFile(__dirname + "/data/movieList.json", 'utf-8', function(err, data) {


            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);

            var deletedRecord = request.body;
            var index = -1;
            for (var i = 0; i < fileJsonData.mylist.length; i++) {
                if (fileJsonData.mylist[i].id == deletedRecord.id) {
                    index = i;
                }
            }
             console.log("index="+index);
            if (index >= 0) {
                var newList = fileJsonData.mylist.splice(index, 1);
                var stringFile = JSON.stringify(fileJsonData);
                console.log("after Delete="+stringFile);
                fs.writeFile(__dirname + "/data/movieList.json", stringFile);
                response.send(stringFile);

            } else {
                response.send(JSON.stringify(fileJsonData));
            }

        });

    });

    app.get('/getContact', function(request, response) {

        var id = request.query.id;
        console.log("id=" + id);

        fs.readFile(__dirname + "/data/contactList.json", 'utf-8', function(err, data) {


            console.log('file data' + data);
            var fileJsonData = JSON.parse(data);
            var foundContact = {};

            for (var i = 0; i < fileJsonData.contactList.length; i++) {
                if (fileJsonData.contactList[i].id == id) {
                    foundContact = fileJsonData.contactList[i];
                }
            }


            var stringFile = JSON.stringify(foundContact);
            response.send(stringFile);


        });

        return "success";

    });



    var server = app.listen(3000, function() {
        console.log("server started at port 3000");
    });
});

gulp.task('watch', function() {
    // watch scss files
    gulp.watch('./sass/*.scss', function() {
        gulp.run('sass');
    });

    // watch dust files
    gulp.watch('./dust/*.dust', function() {
        gulp.run('dust');
    });

});

//default task
gulp.task('default', ['express']);