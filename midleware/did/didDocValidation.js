const Joi = require("@hapi/joi");
const Ajv = require("ajv");
const { badReqErr, intErr, intErrMsg, notFoundErr } = require("../errors");
const schemaJids = Joi.string().regex(/^0x[a-fA-F0-9]+$/);
const schemaEthAddresses = Joi.string().regex(/^[a-fA-F0-9,x]+$/);
const config = require("../../config/config");

const didDocSchema = require(config.app.didDocSchema);
const JsonldSchema = require(config.app.JsonldSchema);

// Validating did document request parameters
const valUidRequestParameter = (uids) => {
    if (uids.length > 1500) {
        // throws error if request string is too long
        throw new badReqErr(`Request can contain only 20 uid parameter. You have submitted too long request string. `);
    } else { //checks for usage of valid characters in string
        let ids = uids.split(",");
        for (i = 0; i < ids.length; i++) {
            let id = ids[i].split(":");
            if (id.length != 3) {
                throw new badReqErr(`Invalid input parameter '${ids[i]}', parameter you submitted has '${id.length}' subparameters. There shoud be 3 subparameters.`);
            }
            if (ids[i].substring(0, 10) !== "did:ace:0x") { // testing if method and begiinging of address are correctly formed
                throw new badReqErr(`Invalid input parameter '${ids[i]}', parameter must start with 'did:ace:0x'`);
            }
            if (id[2].length != 66) { // check if address is of lenght 66 characters, if not throw error
                throw new badReqErr(`Invalid input parameter ${ids[i]}, parameter does not contain enough characters. Length is: ${id[2].length}`);
            }
            if (schemaJids.validate(id[2]).error) { // checking if address contains allowed characters
                throw new badReqErr(`Invalid input parameter '${id[2]}, parameter contains invalid caharacters'`);
            }
        }
        return true;
    }

}


// Initalizing Ajv for json-ld schema validation
const ajv = new Ajv();

async function ajvInit() {
    //let schm = await sdo_jsd.JSONLD_SCHEMA;
    // instead of loading schema each time from schemaorg-jsd npm package is schema saved in config folder
    let schm = JsonldSchema;
    ajv.addSchema(schm);
}

ajvInit();

// Validating did document by didDocSchema
async function validateDidDocSchema(req, didDoc) {
    let valid = await ajv.validate(didDocSchema, didDoc);
    if (!valid) {
        throw new intErrMsg(` Tracking number:'${Date.now()}' for request DID: '${req}'.  DID document has invalid shcema. Detail info message: '${ajv.errors[0].message}'`);
    }
    return valid;
}



module.exports = { valUidRequestParameter, validateDidDocSchema };