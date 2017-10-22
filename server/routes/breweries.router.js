var router = require('express').Router();
var pool = require('../modules/pool');
var bodyParser = require('body-parser');

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('user is logged in');
        console.log('in get / function');
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
    } else {
        console.log('not logged in');
        res.send(false);
    }
});


router.post('/', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('user is logged in', req.user);

        console.log('breweries req.body post: ', req.body);
        var userId = req.user.id;
        var breweryId = req.body.id;
        var breweryName = req.body.brewery;
        var breweryLongitude = req.body.longitude;
        var breweryLatitude = req.body.Latitude;
        console.log('in post / function, req.body: ', req.body);
        pool.connect(function (connectionError, client, done) {
            if (connectionError) {
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                var queryString = 'INSERT INTO users_breweries (user_id, breweries_id) VALUES ($1, $2) RETURNING breweries_id;'
                var values = [userId, breweryId]
                client.query(queryString, values, function (queryError, resultsObj) {
                    done();
                    if (queryError) {
                        console.log(queryError);
                        res.sendStatus(500);
                    } else {
                        console.log('resultsObj: ', resultsObj);
                        res.sendStatus(201);
                    }
                });
            }
        });
    } else {
        console.log('not logged in');
        res.send(false);
    }
});

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