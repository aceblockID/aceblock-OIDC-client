const qrCode = require('qrcode-generator');
const qrValue = require('./jwt/jwtgen');

exports.create_qrcode = async function(did, redirectUri, essClaims, volClaims) {
    // create JWT token for qr code
    const {jwt, nonce, uri} = await qrValue.assembleDataForJWT(did, redirectUri, essClaims, volClaims);
    
    let qr = qrCode(32, 'M');
    qr.addData(jwt);
    qr.make();
    let imgTag = qr.createImgTag()
    return {imgTag, jwt, nonce, uri};
}