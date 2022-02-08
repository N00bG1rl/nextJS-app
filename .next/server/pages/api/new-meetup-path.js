"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 3963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup_path)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup-path.js
// Server side code

// Handle POST method
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // Object destructuring, const title = data.title
        //const { title, image, address, description } = data
        const client = await external_mongodb_namespaceObject.MongoClient.connect('mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('dndMeetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: 'Game added.'
        });
    }
}
/* harmony default export */ const new_meetup_path = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3963));
module.exports = __webpack_exports__;

})();