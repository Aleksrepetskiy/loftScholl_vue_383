(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{17:function(t,e,i){"use strict";i.r(e),e.default=i.p+"07c2e2714638c971241cb9dab7f6022a.jpg"},18:function(t,e,i){"use strict";i.r(e),e.default=i.p+"f992bdc30ae7a4f357721cece9760055.jpg"},19:function(t,e,i){"use strict";i.r(e),e.default=i.p+"215a824e790c6a23f5d1702e165f5950.jpg"},20:function(t,e,i){"use strict";i.r(e),e.default=i.p+"f992bdc30ae7a4f357721cece9760055.jpg"},21:function(t,e,i){"use strict";i.r(e),e.default=i.p+"f992bdc30ae7a4f357721cece9760055.jpg"},22:function(t,e,i){"use strict";i.r(e),e.default=i.p+"f992bdc30ae7a4f357721cece9760055.jpg"},23:function(t,e,i){"use strict";i.r(e),e.default=i.p+"215a824e790c6a23f5d1702e165f5950.jpg"},24:function(t,e,i){"use strict";i.r(e),e.default=i.p+"d1a86c4720ce292b0cf0928028c6f63a.jpg"},25:function(t){t.exports=JSON.parse('[{"id":0,"name":"Ковальчук Дмитрий","occ":"Основатель Loftschool","pic":"dmitriy.jpg","desk":"Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"},{"id":1,"name":"Владимир Сабанцев","occ":"Преподаватель","pic":"vladimir.jpg","desk":"Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"},{"id":2,"name":"2Ковальчук Дмитрий","occ":"2Основатель Loftschool","pic":"dmitriy.jpg","desk":"2Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"},{"id":3,"name":"2Владимир Сабанцев","occ":"2Преподаватель","pic":"vladimir.jpg","desk":"Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"},{"id":4,"name":"2Ковальчук Дмитрий","occ":"2Основатель Loftschool","pic":"dmitriy.jpg","desk":"2Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"},{"id":5,"name":"2Владимир Сабанцев","occ":"2Преподаватель","pic":"vladimir.jpg","desk":"Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах"}]')},56:function(t,e,i){},71:function(t,e,i){"use strict";i(56)},8:function(t,e,i){var s={"./dmitriy.jpg":17,"./slide_1.jpg":18,"./slide_2.jpg":19,"./slide_3.jpg":20,"./slide_4.jpg":21,"./slide_5.jpg":22,"./slide_6.jpg":23,"./user.jpg":4,"./vladimir.jpg":24};function n(t){var e=a(t);return i(e)}function a(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id=8},83:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reviews-container"},[t._m(0),t._v(" "),t.show?i("div",{staticClass:"review-new"},[i("card",{attrs:{title:"Новый отзыв"}},[i("div",{staticClass:"review-new__box",attrs:{slot:"content"},slot:"content"},[i("div",{staticClass:"review-new__pic"},[i("avatar",{staticClass:"review__avatar",attrs:{size:"13",src:"https://picsum.photos/300/300"}}),t._v(" "),i("btn",{attrs:{plain:"",title:"Добавить фото"}})],1),t._v(" "),i("div",{staticClass:"review-new__data-box"},[i("div",{staticClass:"review-new__inputs"},[i("reviews-input",{attrs:{title:"Имя автора"}}),t._v(" "),i("reviews-input",{attrs:{title:"Титул автора"}})],1),t._v(" "),i("div",[i("reviews-input",{attrs:{title:"Отзыв",fieldType:"textarea"}})],1)]),t._v(" "),i("div",{staticClass:"review-new__btns"},[i("btn",{attrs:{plain:"",title:"Отмена"}}),t._v(" "),i("btn",{attrs:{title:"Сохранить"},on:{click:t.add}})],1)])])],1):t._e(),t._v(" "),i("div",{staticClass:"reviews__list"},[i("div",{staticClass:"reviews__add"},[i("btn",{attrs:{type:"square",title:"Добавить работу"},on:{click:t.addReview}})],1),t._v(" "),t._l(t.reviews,(function(e){return i("div",{key:e.id,staticClass:"reviews__item"},[i("card",[i("div",{staticClass:"review__head",attrs:{slot:"title"},slot:"title"},[i("avatar",{staticClass:"review__avatar",attrs:{size:"2.6",src:e.pic}}),t._v(" "),i("div",{staticClass:"review__head-info"},[i("div",{staticClass:"review__head-name"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"review__head-occ"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.occ)+"\n\t\t\t\t\t\t")])])],1),t._v(" "),i("div",{staticClass:"review__content",attrs:{slot:"content"},slot:"content"},[i("div",{staticClass:"review__content-desk"},[i("div",{staticClass:"review__desk"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.desk)+"\n\t\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"review__btn"},[i("icon",{attrs:{title:"Править",symbol:"pencil"}}),t._v(" "),i("icon",{attrs:{title:"удалить",symbol:"cross"}})],1)])])],1)}))],2)])};s._withStripped=!0;var n={components:{btn:function(){return i.e(13).then(i.bind(null,51))},card:function(){return i.e(8).then(i.bind(null,62))},avatar:function(){return Promise.resolve().then(i.bind(null,16))},icon:function(){return i.e(9).then(i.bind(null,63))},reviewsInput:function(){return i.e(10).then(i.bind(null,48))}},data:function(){return{reviews:[],show:!1}},created:function(){var t=i(25);this.reviews=this.changeImgPath(t)},methods:{changeImgPath:function(t){return t.map((function(t){return t.pic=i(8)("./".concat(t.pic)).default,t}))},addReview:function(){this.show=!0},add:function(){this.show=!1}}},a=(i(71),i(0)),c=Object(a.a)(n,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[this._v("Блок «Отзывы»")])])}],!1,null,"645e4abb",null);c.options.__file="src/admin/components/reviews.vue";e.default=c.exports}}]);