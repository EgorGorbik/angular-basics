(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Y71p:function(e,t,n){"use strict";n.r(t),n.d(t,"UsersModule",function(){return oe});var r=n("3Pt+"),s=n("tyNb"),i=n("ofXK"),c=n("l7P3"),o=n("9jGm");const u=Object(c.p)("router"),a=Object(c.r)(u,e=>e.state);var b=n("fXoL"),d=function(e){return e[e.EntitiesOnly=0]="EntitiesOnly",e[e.Both=1]="Both",e[e.None=2]="None",e}({});function l(e){return function(t,n){const r={ids:[...n.ids],entities:Object.assign({},n.entities)},s=e(t,r);return s===d.Both?Object.assign({},n,r):s===d.EntitiesOnly?Object.assign(Object.assign({},n),{entities:r.entities}):n}}function m(e,t){const n=t(e);return Object(b.V)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",e,"The `selectId` implementation:",t.toString()),n}function f(e){function t(t,n){const r=m(t,e);return r in n.entities?d.None:(n.ids.push(r),n.entities[r]=t,d.Both)}function n(e,n){let r=!1;for(const s of e)r=t(s,n)!==d.None||r;return r?d.Both:d.None}function r(e,t){const n=(e instanceof Array?e:t.ids.filter(n=>e(t.entities[n]))).filter(e=>e in t.entities).map(e=>delete t.entities[e]).length>0;return n&&(t.ids=t.ids.filter(e=>e in t.entities)),n?d.Both:d.None}function s(e,t){return i([e],t)}function i(t,n){const r={};return(t=t.filter(e=>e.id in n.entities)).length>0?t.filter(t=>function(t,n,r){const s=Object.assign({},r.entities[n.id],n.changes),i=m(s,e),c=i!==n.id;return c&&(t[n.id]=i,delete r.entities[n.id]),r.entities[i]=s,c}(r,t,n)).length>0?(n.ids=n.ids.map(e=>r[e]||e),d.Both):d.EntitiesOnly:d.None}function c(t,r){const s=[],c=[];for(const n of t){const t=m(n,e);t in r.entities?c.push({id:t,changes:n}):s.push(n)}const o=i(c,r),u=n(s,r);switch(!0){case u===d.None&&o===d.None:return d.None;case u===d.Both||o===d.Both:return d.Both;default:return d.EntitiesOnly}}return{removeAll:function(e){return Object.assign({},e,{ids:[],entities:{}})},addOne:l(t),addMany:l(n),setAll:l(function(e,t){return t.ids=[],t.entities={},n(e,t),d.Both}),setOne:l(function(t,n){const r=m(t,e);return r in n.entities?(n.entities[r]=t,d.EntitiesOnly):(n.ids.push(r),n.entities[r]=t,d.Both)}),updateOne:l(s),updateMany:l(i),upsertOne:l(function(e,t){return c([e],t)}),upsertMany:l(c),removeOne:l(function(e,t){return r([e],t)}),removeMany:l(r),map:l(function(e,t){return i(t.ids.reduce((n,r)=>{const s=e(t.entities[r]);return s!==t.entities[r]&&n.push({id:r,changes:s}),n},[]).filter(({id:e})=>e in t.entities),t)}),mapOne:l(function({map:e,id:t},n){const r=n.entities[t];return r?s({id:t,changes:e(r)},n):d.None})}}const h=function(e={}){const{selectId:t,sortComparer:n}=Object.assign({sortComparer:!1,selectId:e=>e.id},e),r={getInitialState:function(e={}){return Object.assign({ids:[],entities:{}},e)}},s={getSelectors:function(e){const t=e=>e.ids,n=e=>e.entities,r=Object(c.r)(t,n,(e,t)=>e.map(e=>t[e])),s=Object(c.r)(t,e=>e.length);return e?{selectIds:Object(c.r)(e,t),selectEntities:Object(c.r)(e,n),selectAll:Object(c.r)(e,r),selectTotal:Object(c.r)(e,s)}:{selectIds:t,selectEntities:n,selectAll:r,selectTotal:s}}},i=n?function(e,t){const{removeOne:n,removeMany:r,removeAll:s}=f(e);function i(e,t){return c([e],t)}function c(t,n){const r=t.filter(t=>!(m(t,e)in n.entities));return 0===r.length?d.None:(b(r,n),d.Both)}function o(e,t){return u([e],t)}function u(t,n){const r=[],s=t.filter(t=>function(t,n,r){if(!(n.id in r.entities))return!1;const s=Object.assign({},r.entities[n.id],n.changes),i=m(s,e);return delete r.entities[n.id],t.push(s),i!==n.id}(r,t,n)).length>0;if(0===r.length)return d.None;{const e=n.ids,t=[];return n.ids=n.ids.filter((e,r)=>e in n.entities||(t.push(r),!1)),b(r,n),!s&&t.every(t=>n.ids[t]===e[t])?d.EntitiesOnly:d.Both}}function a(t,n){const r=[],s=[];for(const c of t){const t=m(c,e);t in n.entities?s.push({id:t,changes:c}):r.push(c)}const i=u(s,n),o=c(r,n);switch(!0){case o===d.None&&i===d.None:return d.None;case o===d.Both||i===d.Both:return d.Both;default:return d.EntitiesOnly}}function b(n,r){n.sort(t);const s=[];let i=0,c=0;for(;i<n.length&&c<r.ids.length;){const o=n[i],u=m(o,e),a=r.ids[c];t(o,r.entities[a])<=0?(s.push(u),i++):(s.push(a),c++)}r.ids=s.concat(i<n.length?n.slice(i).map(e):r.ids.slice(c)),n.forEach((t,n)=>{r.entities[e(t)]=t})}return{removeOne:n,removeMany:r,removeAll:s,addOne:l(i),updateOne:l(o),upsertOne:l(function(e,t){return a([e],t)}),setAll:l(function(e,t){return t.entities={},t.ids=[],c(e,t),d.Both}),setOne:l(function(t,n){const r=m(t,e);return r in n.entities?(n.ids=n.ids.filter(e=>e!==r),b([t],n),d.Both):i(t,n)}),addMany:l(c),updateMany:l(u),upsertMany:l(a),map:l(function(e,t){return u(t.ids.reduce((n,r)=>{const s=e(t.entities[r]);return s!==t.entities[r]&&n.push({id:r,changes:s}),n},[]),t)}),mapOne:l(function({map:e,id:t},n){const r=n.entities[t];return r?o({id:t,changes:e(r)},n):d.None})}}(t,n):f(t);return Object.assign(Object.assign(Object.assign({selectId:t,sortComparer:n},r),s),i)}(),p=h.getInitialState({}),O="users",g=Object(c.p)(O),v=h.getSelectors(),N=Object(c.r)(g,v.selectAll),j=Object(c.r)(g,v.selectEntities),y=Object(c.r)(j,a,(e,t)=>e?e[t.params.id]:null),F=Object(c.o)("[users page] add user",Object(c.u)()),B=Object(c.o)("[users page] add user success",Object(c.u)()),I=Object(c.o)("[users page] update user",Object(c.u)()),S=Object(c.o)("[users page] update user success",Object(c.u)()),w=Object(c.o)("[users page] delete user",Object(c.u)()),U=Object(c.o)("[users page] delete user success",Object(c.u)()),A=Object(c.o)("[users page] load users"),M=Object(c.o)("[users page] load users success",Object(c.u)()),q=function(e){return["edit",e]};function k(e,t){if(1&e){const e=b.Pb();b.Ob(0,"tr"),b.Ob(1,"td"),b.ic(2),b.Nb(),b.Ob(3,"td"),b.ic(4),b.Nb(),b.Ob(5,"td"),b.ic(6),b.Nb(),b.Ob(7,"td"),b.ic(8),b.Nb(),b.Mb(9,"td"),b.Ob(10,"td"),b.Ob(11,"a",6),b.ic(12,"Update"),b.Nb(),b.ic(13,"\xa0 "),b.Ob(14,"button",7),b.Vb("click",function(){b.ec(e);const n=t.$implicit;return b.Xb().onDeleteUser(n.id)}),b.ic(15,"Delete"),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.Bb(2),b.jc(e.id),b.Bb(2),b.jc(e.name),b.Bb(2),b.jc(e.surname),b.Bb(2),b.jc(e.age),b.Bb(3),b.ac("routerLink",b.cc(5,q,e.id))}}const E=function(){return["/users/add"]};let $=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.users=this.store.select(N),this.store.dispatch(A())}onDeleteUser(e){confirm("Are you sure you want to delete")&&this.store.dispatch(w({id:e}))}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(c.i))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-users"]],decls:23,vars:5,consts:[[1,"row"],[1,"col-md-8"],["href","#",1,"btn","btn-primary",3,"routerLink"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"col-md-4"],["href","",1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"h3"),b.ic(3,"Users List"),b.Nb(),b.Ob(4,"div"),b.Ob(5,"a",2),b.ic(6,"Add User"),b.Nb(),b.Nb(),b.Ob(7,"table",3),b.Ob(8,"thead"),b.Ob(9,"tr"),b.Ob(10,"th"),b.ic(11,"Id"),b.Nb(),b.Ob(12,"th"),b.ic(13,"Name"),b.Nb(),b.Ob(14,"th"),b.ic(15,"Surname"),b.Nb(),b.Ob(16,"th"),b.ic(17,"Age"),b.Nb(),b.Nb(),b.Nb(),b.Ob(18,"tbody"),b.hc(19,k,16,7,"tr",4),b.Yb(20,"async"),b.Nb(),b.Nb(),b.Nb(),b.Ob(21,"div",5),b.Mb(22,"router-outlet"),b.Nb(),b.Nb()),2&e&&(b.Bb(5),b.ac("routerLink",b.bc(4,E)),b.Bb(14),b.ac("ngForOf",b.Zb(20,2,t.users)))},directives:[s.f,i.i,s.h],pipes:[i.b],styles:[""]}),e})();function L(e,t){1&e&&(b.Ob(0,"div"),b.ic(1," Name is required "),b.Nb())}function C(e,t){if(1&e&&(b.Ob(0,"div"),b.hc(1,L,2,0,"div",5),b.Nb()),2&e){const e=b.Xb();b.Bb(1),b.ac("ngIf",e.userForm.get("name").errors.required)}}function X(e,t){1&e&&(b.Ob(0,"div"),b.ic(1," Surname is required "),b.Nb())}function x(e,t){if(1&e&&(b.Ob(0,"div"),b.hc(1,X,2,0,"div",5),b.Nb()),2&e){const e=b.Xb();b.Bb(1),b.ac("ngIf",e.userForm.get("surname").errors.required)}}function G(e,t){1&e&&(b.Ob(0,"div"),b.ic(1," Age is required "),b.Nb())}function T(e,t){if(1&e&&(b.Ob(0,"div"),b.hc(1,G,2,0,"div",5),b.Nb()),2&e){const e=b.Xb();b.Bb(1),b.ac("ngIf",e.userForm.get("age").errors.required)}}let V=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.userForm=new r.d({name:new r.b(null,[r.k.required]),surname:new r.b(null,[r.k.required]),age:new r.b(null,[r.k.required])})}onAddUser(){this.userForm.valid&&this.store.dispatch(F({user:{name:this.userForm.value.name,surname:this.userForm.value.surname,age:this.userForm.value.age}}))}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(c.i))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-add-user"]],decls:24,vars:5,consts:[[1,"row","my-4"],[1,"col-md-12"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","formControlName","name",1,"form-control"],[4,"ngIf"],["type","text","formControlName","surname",1,"form-control"],["type","number","formControlName","age",1,"form-control"],[1,"my-3"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"h3"),b.ic(3,"Add User"),b.Nb(),b.Mb(4,"hr"),b.Ob(5,"form",2),b.Vb("ngSubmit",function(){return t.onAddUser()}),b.Ob(6,"div",3),b.Ob(7,"label"),b.ic(8,"Name"),b.Nb(),b.Mb(9,"input",4),b.hc(10,C,2,1,"div",5),b.Nb(),b.Ob(11,"div",3),b.Ob(12,"label"),b.ic(13,"Surname"),b.Nb(),b.Mb(14,"input",6),b.hc(15,x,2,1,"div",5),b.Nb(),b.Ob(16,"div",3),b.Ob(17,"label"),b.ic(18,"Age"),b.Nb(),b.Mb(19,"input",7),b.hc(20,T,2,1,"div",5),b.Nb(),b.Ob(21,"div",8),b.Ob(22,"button",9),b.ic(23,"Add User"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.Bb(5),b.ac("formGroup",t.userForm),b.Bb(5),b.ac("ngIf",t.userForm.get("name").touched&&!t.userForm.get("name").valid),b.Bb(5),b.ac("ngIf",t.userForm.get("surname").touched&&!t.userForm.get("surname").valid),b.Bb(5),b.ac("ngIf",t.userForm.get("age").touched&&!t.userForm.get("age").valid),b.Bb(2),b.ac("disabled",!t.userForm.valid))},directives:[r.l,r.h,r.e,r.a,r.g,r.c,i.j,r.i],styles:[""]}),e})();function D(e,t){1&e&&(b.Ob(0,"div"),b.ic(1," Name is required "),b.Nb())}function J(e,t){if(1&e&&(b.Ob(0,"div"),b.hc(1,D,2,0,"div",5),b.Nb()),2&e){const e=b.Xb();b.Bb(1),b.ac("ngIf",e.userForm.get("name").errors.required)}}function P(e,t){1&e&&(b.Ob(0,"div"),b.ic(1," Surname is required "),b.Nb())}function Y(e,t){if(1&e&&(b.Ob(0,"div"),b.hc(1,P,2,0,"div",5),b.Nb()),2&e){const e=b.Xb();b.Bb(1),b.ac("ngIf",e.userForm.get("surname").errors.required)}}function H(e,t){1&e&&(b.Ob(0,"div"),b.ic(1," Age is required "),b.Nb())}function Z(e,t){if(1&e&&(b.Ob(0,"div"),b.hc(1,H,2,0,"div",5),b.Nb()),2&e){const e=b.Xb();b.Bb(1),b.ac("ngIf",e.userForm.get("age").errors.required)}}let z=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.createForm(),this.userSubscription=this.store.select(y).subscribe(e=>{e&&(this.user=e,this.userForm.patchValue({name:e.name,surname:e.surname,age:e.age}))})}createForm(){this.userForm=new r.d({name:new r.b(null,[r.k.required]),surname:new r.b(null,[r.k.required]),age:new r.b(null,[r.k.required])})}onSubmit(){this.userForm.valid&&this.store.dispatch(I({user:{id:this.user.id,name:this.userForm.value.name,surname:this.userForm.value.surname,age:this.userForm.value.age}}))}ngOnDestroy(){this.userSubscription&&this.userSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(c.i))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-edit-user"]],decls:24,vars:5,consts:[[1,"row","my-4"],[1,"col-md-12"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","formControlName","name",1,"form-control"],[4,"ngIf"],["type","text","formControlName","surname",1,"form-control"],["type","number","formControlName","age",1,"form-control"],[1,"my-3"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"div",1),b.Ob(2,"h3"),b.ic(3,"Edit User"),b.Nb(),b.Mb(4,"hr"),b.Ob(5,"form",2),b.Vb("ngSubmit",function(){return t.onSubmit()}),b.Ob(6,"div",3),b.Ob(7,"label"),b.ic(8,"Name"),b.Nb(),b.Mb(9,"input",4),b.hc(10,J,2,1,"div",5),b.Nb(),b.Ob(11,"div",3),b.Ob(12,"label"),b.ic(13,"Surname"),b.Nb(),b.Mb(14,"input",6),b.hc(15,Y,2,1,"div",5),b.Nb(),b.Ob(16,"div",3),b.Ob(17,"label"),b.ic(18,"Age"),b.Nb(),b.Mb(19,"input",7),b.hc(20,Z,2,1,"div",5),b.Nb(),b.Ob(21,"div",8),b.Ob(22,"button",9),b.ic(23,"Submit"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.Bb(5),b.ac("formGroup",t.userForm),b.Bb(5),b.ac("ngIf",t.userForm.get("name").touched&&!t.userForm.get("name").valid),b.Bb(5),b.ac("ngIf",t.userForm.get("surname").touched&&!t.userForm.get("surname").valid),b.Bb(5),b.ac("ngIf",t.userForm.get("age").touched&&!t.userForm.get("age").valid),b.Bb(2),b.ac("disabled",!t.userForm.valid))},directives:[r.l,r.h,r.e,r.a,r.g,r.c,i.j,r.i],styles:[""]}),e})();const K=Object(c.q)(p,Object(c.t)(B,(e,t)=>h.addOne(t.user,e)),Object(c.t)(S,(e,t)=>h.updateOne(t.user,e)),Object(c.t)(U,(e,{id:t})=>h.removeOne(t,e)),Object(c.t)(M,(e,t)=>h.setAll(t.users,e)));function R(e,t){return K(e,t)}var Q=n("zp1y"),W=n("5+tZ"),_=n("lJxs"),ee=n("eIep"),te=n("LRne"),ne=n("cGLx"),re=n("tk/3");let se=(()=>{class e{constructor(e){this.http=e}getUsers(){return this.http.get("https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb.json").pipe(Object(_.a)(e=>{const t=[];for(let n in e)t.push(Object.assign(Object.assign({},e[n]),{id:n}));return t}))}addUser(e){return this.http.post("https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb.json",e)}updateUser(e){return this.http.patch("https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb.json",{[e.id]:{name:e.name,surname:e.surname,age:e.age}})}deleteUser(e){return this.http.delete(`https://angular-fe24f-default-rtdb.firebaseio.com/angular-fe24f-default-rtdb/${e}.json`)}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(re.b))},e.\u0275prov=b.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ie=(()=>{class e{constructor(e,t,n,r){this.actions$=e,this.usersService=t,this.store=n,this.router=r,this.loadUsers$=Object(o.c)(()=>this.actions$.pipe(Object(o.d)(A),Object(Q.a)(this.store.select(N)),Object(W.a)(([e,t])=>t.length?Object(te.a)(Object(ne.c)()):this.usersService.getUsers().pipe(Object(_.a)(e=>M({users:e})))))),this.addUser$=Object(o.c)(()=>this.actions$.pipe(Object(o.d)(F),Object(W.a)(e=>this.usersService.addUser(e.user).pipe(Object(_.a)(t=>{const n=Object.assign(Object.assign({},e.user),{id:t.name});return this.router.navigate(["users"]),B({user:n})}))))),this.updateUser$=Object(o.c)(()=>this.actions$.pipe(Object(o.d)(I),Object(ee.a)(e=>this.usersService.updateUser(e.user).pipe(Object(_.a)(t=>{const n={id:e.user.id,changes:Object.assign({},e.user)};return this.router.navigate(["users"]),S({user:n})}))))),this.deleteUser$=Object(o.c)(()=>this.actions$.pipe(Object(o.d)(w),Object(ee.a)(e=>this.usersService.deleteUser(e.id).pipe(Object(_.a)(t=>U({id:e.id}))))))}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(o.a),b.Sb(se),b.Sb(c.i),b.Sb(s.e))},e.\u0275prov=b.Hb({token:e,factory:e.\u0275fac}),e})();const ce=[{path:"",children:[{path:"",component:$},{path:"add",component:V},{path:"edit/:id",component:z}]}];let oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({imports:[[i.c,r.j,s.g.forChild(ce),o.b.forFeature([ie]),c.k.forFeature(O,R)]]}),e})()}}]);