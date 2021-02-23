const {JWT, JWK} = require('jose');
const { get_DID_document } = require('./did/getDidDoc');
const { validateDidDocSchema } = require("./did/didDocValidation");
const { notFoundErr } = require("./errors/index");
const cookieParser = require('cookie-parser');

// Token format
// id_token: <id_token>

exports.initVerIdToken = function(config){

    // Token verification
    let verifyIdToken = async function (req, res, next) {
        // Get authorization header value
        
        let id_token = '';  
        if (req.cookies['idToken']) {
            id_token = req.cookies['idToken'];
        } else if (req.headers['id_token'] !== undefined) {
            id_token = req.headers['id_token'];  
        } 

        try {
            // Check if bearer is undefined
            const decodedIdToken = JWT.decode(id_token, {complete: true});
            
            // extract public key 
            const sub_jwk = JSON.parse(decodedIdToken.payload.sub_jwk); 

            // Preparing data for verification
            const key = JWK.asKey(sub_jwk);
            
            // Setting options for verification
            const options = {
                issuer: config.qrjwt.issuer,
                audience: config.qrjwt.callbackUri,
                nonce: decodedIdToken.payload.nonce,
                algorithms: [decodedIdToken.header.alg],
                subject: key.kid
            }

            // Verify token
            const verJWT = JWT.verify(id_token, key, options);        

            // Verify claimed fields
            const reqFields = config.qrjwt.essClaimFields;
            reqFields.forEach(element => {
                if(!decodedIdToken.payload.hasOwnProperty(element)){
                    throw error;
                } 
            });

            // verify if did_doc field exists - if false fetch diddoc from IPFS
            // validate diddoc by scheme
            if(!decodedIdToken.payload.hasOwnProperty('did_doc')){
                let uid = decodedIdToken.payload.did;
                let did;
                await get_DID_document(uid, res)
                    .then(didDoc => did = didDoc)
                    .catch(error => {throw error});

                decodedIdToken.payload.did_doc = JSON.stringify(did);

            } else { 
                const didDoc = JSON.parse(decodedIdToken.payload.did_doc);
                let valid = await validateDidDocSchema(req, didDoc);
                if (!valid) {
                    throw new notFoundErr('DID document has invalid shcema.');
                }

            }

            req.payload = decodedIdToken.payload;
            next();
        } catch (err) {
            res.sendStatus(403);
        }
    }

return verifyIdToken;

}