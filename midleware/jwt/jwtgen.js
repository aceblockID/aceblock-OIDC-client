const {ssiaas} = require("./helper/index");
const { JWK } = require('jose');


// creates hex private key
function privKey() {
    // Generate key
    let key = JWK.generateSync('EC', 'secp256k1');

    // Private key in Hex
    let privKey = Buffer.from(key.toJWK(true).d, 'base64').toString('hex');
    
    return privKey;
}


exports.assembleDataForJWT = async function (did, redirectUri, essClaims, volClaims) {  
    const didAuthRequestCall = {
      hexPrivatekey: privKey(), // private key managed by the user. Should be passed in hexadecimal format
      did: did, // User DID
      redirectUri: redirectUri, // Redirect URI after successful authentication
      essentialClaims: essClaims, // List of essential field claims
      voluntaryClaims: volClaims, // List of optional field claims
    };

    const {uri, nonce, jwt } = await ssiaas.createUriRequest(didAuthRequestCall);
    
    return {jwt, nonce, uri}
  }
