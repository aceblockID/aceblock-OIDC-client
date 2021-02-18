const { EbsiDidAuth } = require("@cef-ebsi/did-auth");
const DIDAuth_1 = require("@cef-ebsi/did-auth/dist/DIDAuth");
const Util_1 = require("@cef-ebsi/did-auth/dist/util/Util");
const did_jwt_1 = require("@cef-ebsi/did-jwt");


EbsiDidAuth.createUriRequest = async function (didAuthRequestCall) {
    // if (!didAuthRequestCall || !didAuthRequestCall.redirectUri) // KZ
    //     throw new Error(Errors_1.default.BAD_PARAMS);
    const { jwt, nonce } = await EbsiDidAuth.createDidAuthRequest(didAuthRequestCall);
    // const responseUri = `openid://&scope=${DIDAuth_1.DidAuthScope.OPENID_DIDAUTHN}?response_type=${DIDAuth_1.DidAuthResponseType.ID_TOKEN}&client_id=${didAuthRequestCall.redirectUri}&request=${jwt}`;
    
    const responseUri = `openid://&scope=${DIDAuth_1.DidAuthScope.OPENID_DIDAUTHN}?response_type=${DIDAuth_1.DidAuthResponseType.ID_TOKEN}&client_id=${didAuthRequestCall.redirectUri}&request=${jwt}`;
    
    // returns a URI with Request JWT embedded
    return { uri: responseUri, nonce, jwt };
}



/**
 * Creates a DidAuth Request Object
 * @param didAuthRequestCall Request input data to build a signed DidAuth Request Token
 */
EbsiDidAuth.createDidAuthRequest = async function (didAuthRequestCall) {
    const payload = this.createDidAuthRequestPayload(didAuthRequestCall);
    // signs payload calling the provided signatureUri
    // const jwt = await this.signDidAuthExternal(payload, didAuthRequestCall.signatureUri, didAuthRequestCall.authZToken); // KZ

    // console.log(payload)
    // console.log("###### end of payload ####")
    const jwt = await this.signDidAuthInternal(didAuthRequestCall.did, payload, didAuthRequestCall.hexPrivatekey);


    return { jwt, nonce: payload.nonce };
}



EbsiDidAuth.createDidAuthRequestPayload = function(input) {
    // const { payload } = did_jwt_1.decodeJwt(input.authZToken);
    let id_token = {} // KZ

    input.essentialClaims.forEach(claim=>{ // KZ
        id_token[claim] = {"essential":true} // KZ
    })

    input.voluntaryClaims.forEach(claim=>{ // KZ
        id_token[claim] = null // KZ
    })

    return {
        iss: input.did,
        scope: DIDAuth_1.DidAuthScope.OPENID_DIDAUTHN,
        response_type: DIDAuth_1.DidAuthResponseType.ID_TOKEN,
        client_id: input.redirectUri,
        claims: {id_token}, // KZ
        nonce: Util_1.getNonce(), 
    };
}


EbsiDidAuth.signDidAuthInternal = async function(issuer, payload, hexPrivateKey) {
    // assign specific JWT header
    const header = {
        alg: DIDAuth_1.DidAuthKeyAlgo.ES256K,
        typ: "JWT",
        kid: `${issuer}#key-1`,
    };
    const response = await did_jwt_1.createJwt(payload, {
        // issuer: DIDAuth_1.DidAuthResponseIss.SELF_ISSUE, // KZ
        issuer: payload.iss,  //  KZ
        alg: DIDAuth_1.DidAuthKeyAlgo.ES256KR,
        signer: did_jwt_1.SimpleSigner(hexPrivateKey.replace("0x", "")),
        expiresIn: DIDAuth_1.expirationTime,
    }, header);
    return response;
}