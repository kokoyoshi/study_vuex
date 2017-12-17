const express = require( 'express' );
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const collection = require( '../mongo' );
const COL = 'favorites';

router.all( '/*', ( req, res, next ) => {
    res.contentType('json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    next();
});

// GET find
router.get( '/', ( req, res ) => {
  collection(COL).find().toArray((err, docs) => {
    res.send(docs);
  })
});

// GET find :id
router.get( '/:id', ( req, res ) => {
  collection(COL).findOne( { _id: new ObjectID( req.params.id ) }, {}, (err, r) => {
    res.send( r );
  });
});

// POST insert data
router.post( '/', ( req, res ) => {
  console.log(req.body);
  collection(COL).insert( req.body ).then((r) => {
    res.send( r );
  });
});

// DELETE remove data
router.delete( '/:id', ( req, res ) => {
  collection(COL).findOneAndDelete( { _id: new ObjectID( req.params.id ) }, {}, (err, r) =>{
    res.send( r );
  } );
});

module.exports = router;