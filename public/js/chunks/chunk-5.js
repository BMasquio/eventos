(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5OWj":function(n,t,e){"use strict";var r=e("L2JU");function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){s(n,t,e[t])})}return n}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}t.a={methods:i({},Object(r.mapActions)("events",["clearForm"])),computed:i({},Object(r.mapState)({events:function(n){return n.events},subEvents:function(n){return n.subEvents},invitations:function(n){return n.invitations}}))}},"5STX":function(n,t,e){var r=e("yd8q");"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,i);r.locals&&(n.exports=r.locals)},CtO9:function(n,t,e){"use strict";t.a={methods:{can:function(n){return n&&!0},cannot:function(n){return!this.can(n)}}}},"N4/z":function(n,t,e){"use strict";var r=e("L2JU");function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){s(n,t,e[t])})}return n}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}t.a={methods:i({},Object(r.mapActions)("subEvents",["clearForm"])),computed:i({},Object(r.mapState)({addresses:function(n){return n.addresses},events:function(n){return n.events},subEvents:function(n){return n.subEvents}}))}},jx1L:function(n,t,e){"use strict";t.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(n){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",n)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(n){this.$store.dispatch(this.service.name+"/setPerPage",n)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(n){return this.$store.dispatch(this.service.name+"/select",n)},save:function(n){return this.$store.dispatch(this.service.name+"/save",n)},mutateSetErrors:function(n){this.$store.commit(this.service.name+"/mutateSetErrors",n)},mutateFormData:function(n){this.$store.commit(this.service.name+"/mutateFormData",n)},mutateSetFormField:function(n){this.$store.commit(this.service.name+"/mutateSetFormField",n)},mutateSetService:function(n){this.$store.commit(this.service.name+"/mutateSetService",n)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var n=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){n.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var n=this,t="update"===this.mode?_.find(this.rows,function(t){return t.id===n.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(t),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var n=this;this.save(this.mode).then(function(){n.back(),n.clearForm()})},can:function(n){return n&&!1},cannot:function(n){return!can(n)},gotoPage:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(e=e||this.pagination).current_page!==n&&(n<1||n>e.last_page||this.$store.dispatch((t||this.service.name)+"/setCurrentPage",n))},isCurrent:function(n,t){return n.id===t.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}},lMlO:function(n,t,e){"use strict";e.r(t);var r=e("o0o1"),i=e.n(r),s=e("jx1L"),o=e("CtO9"),a=e("L2JU");function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){u(n,t,e[t])})}return n}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var d={methods:c({},Object(a.mapActions)("receptive",["clearForm"])),computed:c({},Object(a.mapState)({invitations:function(n){return n.invitations},receptive:function(n){return n.receptive},statistics:function(n){return n.receptive.data.statistics}}))},l=e("5OWj"),m=e("N4/z"),h=e("mj45"),v=e("NAv5");function p(n,t,e,r,i,s,o){try{var a=n[s](o),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(r,i)}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){b(n,t,e[t])})}return n}function b(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var g={name:"receptive",uri:"events/{events.selected.id}/receptive",isForm:!0},_={props:["mode"],mixins:[s.a,d,o.a,l.a,m.a],components:{QrcodeStream:h.QrcodeStream,QrcodeDropZone:h.QrcodeDropZone,QrcodeCapture:h.QrcodeCapture},data:function(){return{service:g,result:"",noStreamApiSupport:!1,inv:"",qrCodeError:null}},computed:f({},Object(a.mapState)({checkedIn:function(n){return n.receptive.checkedIn}})),methods:f({},Object(a.mapActions)(g.name,["selectInvitation"]),{confirmCheckin:function(n){var t=this;null==n.checkin_at?(dd(n),confirm("Deseja realizar o check-in de "+n.person_institution.person.name+"?",this).then(function(e){e&&t.makeCheckin(n.uuid)})):showMessage("Este convidado já fez check-in no evento",this)},makeCheckin:function(n){return this.$store.dispatch("receptive/makeCheckin",n)},onDecode:function(n){return this.makeCheckin(n)},onInit:function(){var n,t=(n=i.a.mark(function n(t){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t;case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),"NotAllowedError"===n.t0.name?this.qrCodeError="ERROR: you need to grant camera access permisson":"NotFoundError"===n.t0.name?this.qrCodeError="ERROR: no camera on this device":"NotSupportedError"===n.t0.name?this.qrCodeError="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===n.t0.name?this.qrCodeError="ERROR: is the camera already in use?":"OverconstrainedError"===n.t0.name?this.qrCodeError="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===n.t0.name&&(this.qrCodeError="ERROR: Stream API is not supported in this browser");case 8:case"end":return n.stop()}},n,this,[[0,5]])}),function(){var t=this,e=arguments;return new Promise(function(r,i){var s=n.apply(t,e);function o(n){p(s,r,i,o,a,"next",n)}function a(n){p(s,r,i,o,a,"throw",n)}o(void 0)})});return function(n){return t.apply(this,arguments)}}(),getCheckedIn:function(){return this.$store.state.receptive.checkedIn},clearCheckedIn:function(){return this.$store.commit("receptive/clearCheckedIn")},getCheckedInTime:function(n){return Object(v.format)(Object(v.parse)(n.checkin_at),"HH[h]mm")}}),mounted:function(){this.$store.dispatch("receptive/load")}},C=(e("uGW9"),e("KHd+")),k=Object(C.a)(_,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"py-2 text-center"},[e("h3",[n._v(n._s(n.events.selected.name))])]),n._v(" "),e("div",{staticClass:"card card-block bg-faded"},[e("div",{staticClass:"row"},[n.receptive.data.statistics?e("div",{staticClass:"col-6 text-center"},[n._v("\n                confirmados: "+n._s(n.receptive.data.statistics.confirmed)+"\n            ")]):n._e(),n._v(" "),n.receptive.data.statistics?e("div",{staticClass:"col-6 text-center"},[n._v("\n                ingressaram: "+n._s(n.receptive.data.statistics.totalcheckedin)+"\n            ")]):n._e()])]),n._v(" "),n.can("read")&&n.getCheckedIn().data?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[n.getCheckedIn()&&n.getCheckedIn().data?e("div",[e("img",{staticClass:"img-thumbnail rounded mx-auto d-block mb-2",attrs:{src:n.getCheckedIn().data.person_institution.person.photoUrl,width:"200",height:"200"}}),n._v(" "),e("h2",{staticClass:"text-center"},[n._v(n._s(n.getCheckedIn().data.code))]),n._v(" "),e("h5",{staticClass:"text-center"},[n._v("\n                    "+n._s(n.getCheckedIn().data.person_institution.person.name)+"\n                ")]),n._v(" "),e("h6",{staticClass:"text-center"},[n._v("\n                    "+n._s(n.getCheckedIn().data.person_institution.role.name)+"\n                ")]),n._v(" "),e("h6",{staticClass:"text-center"},[n._v("\n                    "+n._s(n.getCheckedIn().data.person_institution.institution.name)+"\n                ")]),n._v(" "),e("br"),e("br"),n._v(" "),e("div",{class:"btn btn-lg btn-block "+(n.getCheckedIn().success?"btn-success":"btn-danger"),domProps:{innerHTML:n._s(n.getCheckedIn().errors?n.checkedIn.errors:"Check-in feito com sucesso!")},on:{click:function(t){n.clearCheckedIn()}}})]):n._e()])]):n._e(),n._v(" "),n.can("read")&&!n.getCheckedIn().data?e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-6"},[e("app-table-panel",{attrs:{title:"Leitura QRCode"}},[e("div",{staticClass:"m-4"},[e("qrcode-drop-zone",{on:{decode:n.onDecode}},[e("qrcode-stream",{on:{decode:n.onDecode,init:n.onInit}})],1),n._v(" "),n.noStreamApiSupport?e("qrcode-capture",{on:{decode:n.onDecode}}):n._e()],1),n._v("\n\n                "+n._s(n.qrCodeError)+"\n            ")])],1),n._v(" "),e("div",{staticClass:"col-sm-12 col-md-6"},[e("app-table-panel",{attrs:{title:"Convidados","per-page":n.perPage,"filter-text":n.filterText},on:{"input-filter-text":function(t){n.filterText=t.target.value},"set-per-page":function(t){n.perPage=t}}},[e("app-table",{attrs:{pagination:n.receptive.data.links.pagination,columns:["Convite","Convidado","Check-in","Photo"]},on:{"goto-page":function(t){n.gotoPage(t)}}},n._l(n.receptive.data.rows,function(t){return e("tr",{staticClass:"cursor-pointer",on:{click:function(e){n.confirmCheckin(t)}}},[e("td",[n._v(n._s(t.code))]),n._v(" "),e("td",[e("strong",[n._v(n._s(t.person_institution.person.name))]),e("br"),n._v("\n                            "+n._s(t.sub_event.name)),e("br"),n._v(" "),e("span",{staticClass:"badge text-white p-1",style:{"background-color":t.sub_event.sector?t.sub_event.sector.color:"","text-transform":"uppercase"}},[n._v("\n                                "+n._s(t.sub_event.sector?t.sub_event.sector.name:"")+"\n                            ")])]),n._v(" "),e("td",[e("h6",{staticClass:"mb-0"},[t.checkin_at?e("span",{staticClass:"badge badge-success"},[n._v(n._s(n.getCheckedInTime(t)))]):n._e(),n._v(" "),t.checkin_at?n._e():e("span",{staticClass:"badge badge-danger"},[n._v("não")])])]),n._v(" "),e("td",[e("img",{staticClass:"img-thumbnail rounded mx-auto d-block mb-2",attrs:{src:t.person_institution.person.photoUrl,width:"50",height:"50"}})])])}),0)],1)],1)]):n._e()])},[],!1,null,null,null);k.options.__file="Receptive.vue";t.default=k.exports},uGW9:function(n,t,e){"use strict";var r=e("5STX");e.n(r).a},yd8q:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}}]);