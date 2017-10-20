var router = require('express').Router();
var pool = require('../modules/pool');
var bodyParser = require('body-parser');

router.get('/', function (req, res) {
// add in authenication

    console.log('in get / response function');
    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM breweries', function (queryError, resultsObj) {
                done();
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultobj.rows: ', resultsObj.rows);
                    res.send(resultsObj.rows);
                }
            });
        }
    });
});

// router.post('/', function (req, res) {
//     var task = req.body.task;
//     console.log('in post / response function', task);
//     pool.connect(function (connectionError, client, done) {
//         if (connectionError) {
//             console.log(connectionError);
//             res.sendStatus(500);
//         } else {
//             var queryString = 'INSERT INTO todos (task) VALUES ($1);';
//             var values = [task];
//             client.query(queryString, values, function (queryError, resultsObj) {
//                 done();
//                 if (queryError) {
//                     console.log(connectionError);
//                     res.sendStatus(500);
//                 } else {
//                     console.log('resultsObj: ', resultsObj);
//                     res.sendStatus(201);
//                 }
//             });
//         }
//     });
// });

// router.delete('/:id', function (req, res) {
//     console.log('in delete /tasks/:id', req.params.id);
//     var itemId = req.params.id;
//     pool.connect(function (connectionError, client, done) {
//         if (connectionError) {
//             res.sendStatus(500);
//         } else {
//             client.query('DELETE FROM todos WHERE id=$1', [itemId], function (queryError, resultsObj) {
//                 done();
//                 if (queryError) {
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(202);
//                 }
//             });
//         }
//     });
// });

// router.put('/:id', function (req, res) {
//     var taskCompleted = req.params.id;
//     console.log('in put /tasks id: ', req.params.id);
//     // var state = 'false';
//     // if (taskExpression === 'false') {
//     //     state === 'true';
//     // } else if (taskExpression === 'true') {
//     //     state === 'fasle';
//     // } else {
//     //     console.log('Are you sure about that?');
//     // }

//     pool.connect(function (connectionError, client, done) {
//         if (connectionError) {
//             console.log(connectionError);
//             res.sendStatus(500);
//         } else {
//             var queryString = 'UPDATE todos SET complete = true WHERE id = $1;';
//             var values = [taskCompleted];
//             client.query(queryString, values, function (queryError, resultsObj) {
//                 done();
//                 if (queryError) {
//                     console.log('query error:', queryError);
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(200);
//                 }
//             });
//         }
//     });
// });

module.exports = router;