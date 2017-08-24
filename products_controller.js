// module.exports = {
//     create: (req, res, next) => {
//         let { name, description, price, imageurl } = req.body;
//         req.app.get('db').create_product([name, description, price, imageurl]).then(product => {
//             res.status(200).send();
//         }).catch(err => {
//             res.status(500).send(err);
//         })
//     },
//     getOne: (req, res, next) => {
//         const { params } = req;
//         console.log(params);
//         req.app.get('db').read_product(params.id).then(product => {
//             res.status(200).send(product);
//         }).catch(err => {
//             res.status(500).send();
//         })
//     }, 
//     getAll: (req, res, next) => {
//         req.app.get('db').read_products().then(products => {
//             res.status(200).send(products);
//         }).catch(err => {
//             res.status(500).send();
//         })
//     },
//     update: (req, res, next) => {
//         req.app.get('db').update_product([req.params.id, req.query.Description]).then(product => {
//             res.status(200).send();
//         }).catch(err => {
//             res.status(500).send();
//         })
//     },
//     delete: (req, res, next) => {
//         req.app.get('db').delete_product(req.params.id).then(product => {
//             res.status(200).send();
//         }).catch(err => {
//             res.status(500).send();
//         })
//     }
// }
module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, description, price, imageurl } = req.body;
  
      dbInstance.create_product([ name, description, price, imageurl ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req; 
      console.log(params);
  
      dbInstance.read_product([ params.id ])
        .then( product => res.status(200).send( product ) )
        .catch( () => res.status(500).send() );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params, query } = req;
  
      dbInstance.update_product([ params.id, query.desc ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;
  
      dbInstance.delete_product([ params.id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };