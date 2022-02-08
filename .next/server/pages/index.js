(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8539:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__QH1mK"
};


/***/ }),

/***/ 52:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__4RuYY",
	"image": "MeetupItem_image__0OzF7",
	"content": "MeetupItem_content__0PE0V",
	"actions": "MeetupItem_actions__PGxb7"
};


/***/ }),

/***/ 4954:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__4AYGO"
};


/***/ }),

/***/ 4117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8539);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 7032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(4117);
// EXTERNAL MODULE: ./styles/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(52);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js




function MeetupItem(props) {
    // Use programmatic navigation
    const router = (0,router_.useRouter)();
    function handleDetailShow() {
        // Get id from meetupList through props and greate route
        router.push('/' + props.id);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: handleDetailShow,
                        children: "Show Details"
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./styles/MeetupList.module.css
var MeetupList_module = __webpack_require__(4954);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



// meetups is a props
function MeetupList(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id)
        )
    }));
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

;// CONCATENATED MODULE: ./pages/index.js


// It is safe with nextJS, It is seperated in build process



const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Dungeons & Dragons: Tomb of Annihilation',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcritforbrains.com%2Fwp-content%2Fuploads%2F2017%2F06%2Ftomb-of-annihilation.jpg&f=1&nofb=1',
        address: 'Online Event',
        description: `
    A shocking rumor buzzes through the Forgotten Realms; a mysterious affliction is targeting those who have been raised from the dead. This wasting disease, which marches its victims back toward the death they once defied, has been dubbed the “death curse.” When this wretched sorcery claims a life, divine magic no longer revives them. Any others who fall to their demise, through natural or unnatural causes, is similarly lost to the living realm.
    Adventurers who wish to stop this devastation must travel to the peninsula of Chult to find the source of this death curse and destroy it. Chult is a tropical wilderness composed mostly of jungles, plateaus, impassable mountains, and belching volcanoes.`
    },
    {
        id: 'm2',
        title: 'Dungeons & Dragons: Treasure of the Broken Hoard',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2F43%2F93%2F214393ca8a90190f0876ec2f36437371.jpg&f=1&nofb=1',
        address: 'Online Event',
        description: `
    A famous relic hunter seeks adventurers to help her find caches of treasure hidden by the now-defeated followers of the Cult of the Dragon. Her maps and notes may lead the way to great wealth
    — or a terrible death. And do other parties have designs on the treasure as well?`
    },
    {
        id: 'm3',
        title: 'Dungeons & Dragons: The Frozen Tomb',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fdd%2F49%2Fa1%2Fdd49a1d80e251795fd6e8c6fdaf57144.jpg&f=1&nofb=1',
        address: 'Online Event',
        description: `This adventure takes place in a cold, snowy mountain pass. The reason the characters are making this trip is not specified; this adventure can take place while journeying from on location to another during or between adventures. While making the difficult journey, the characters are caught in a terrible storm and must take shelter in a cave in the mountainside, only to discover the cave hides even greater dangers than those posed by the weather.`
    }, 
];
function Home(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_production_min_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "DnD Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "See all upcoming DnD game nights."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                meetups: props.loadedMeetups
            })
        ]
    }));
}
// Pre fetch data, replaces useState and useEffect
async function getStaticProps() {
    const client = await external_mongodb_.MongoClient.connect('mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('dndMeetups');
    // Get all documents from db and return as array
    const dndMeetups = await meetupsCollection.find().toArray();
    client.close();
    // Allways return an object
    return {
        // Because MongoDB id we need to map it and return id as string
        props: {
            loadedMeetups: dndMeetups.map((meetup)=>({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString()
                })
            )
        },
        revalidate: 1
    };
}
/* harmony default export */ const pages = (Home);


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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(7032));
module.exports = __webpack_exports__;

})();