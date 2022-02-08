(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 9391:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__OS0q6"
};


/***/ }),

/***/ 915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "react/cjs/react.production.min"
var react_production_min_ = __webpack_require__(2865);
// EXTERNAL MODULE: ./styles/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(9391);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


function MeetupDetail(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    }));
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

;// CONCATENATED MODULE: ./pages/[meetupId].js





// Get meetup data from getStaticProps through props
function MeetupDetails(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_production_min_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                title: props.meetupData.title,
                image: props.meetupData.image,
                address: props.meetupData.address,
                description: props.meetupData.description
            })
        ]
    }));
}
// Describe all the segmatic values
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('dndMeetups');
    // Get all documents from db
    // Use tweek-find, first arg is for search (empty object returns all)
    // Sec arg is for whitch field we want to extract, for every doc
    const dndMeetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        // If not in the paths, return 404 page
        fallback: false,
        // map into object
        paths: dndMeetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            })
        )
    };
}
// Fetch data for a single meetup
async function getStaticProps(context) {
    // Get item id/url, for indentifying item to fetch
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('dndMeetups');
    // Convert string into MongoDB id object
    const selectedMeetup = await meetupsCollection.findOne({
        _id: (0,external_mongodb_.ObjectId)(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 2865:
/***/ ((module) => {

"use strict";
module.exports = require("react/cjs/react.production.min");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(915));
module.exports = __webpack_exports__;

})();