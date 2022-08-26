"use strict";(self.webpackChunkvuexy=self.webpackChunkvuexy||[]).push([[4155],{9010:function(C,_,i){i.d(_,{q:function(){return x}});var v=i(5134),T=i(7289),l=i(4522),e=i(8260),S=i(540),q=i(2047),f=i(6154),x=function(){var h=function(){function g(c){(0,v.Z)(this,g),this._http=c,this.wareData={data:""},this.host=e.N.apiUrl+"/api/warehouses/",this.header=new l.WM({Accept:"application/json"}),this.params=new l.LE}return(0,T.Z)(g,[{key:"AddWare",value:function(p){return this._http.post("".concat(this.host),p,{headers:this.header}).pipe((0,q.K)(function(Z){return console.log(Z),(0,S._)(Z)}))}},{key:"allware",value:function(){return this._http.get("".concat(this.host),{headers:this.header,params:this.params})}},{key:"deleteWare",value:function(p){return this._http.delete("".concat(this.host).concat(p))}},{key:"updateWare",value:function(p,Z){return this._http.patch("".concat(this.host).concat(p),Z)}},{key:"getWareid",value:function(p){return this._http.get("".concat(this.host).concat(p))}}]),g}();return h.\u0275fac=function(c){return new(c||h)(f.LFG(l.eN))},h.\u0275prov=f.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h}()},4155:function(C,_,i){i.r(_),i.d(_,{SalesupdateModule:function(){return L}});var v=i(7289),T=i(5134),l=i(9133),e=i(6154),S=i(9010),q=i(8906),f=i(1948),x=i(8452),h=i(5430),g=i(3907),c=i(6019),p=i(9850);function Z(a,r){1&a&&(e.TgZ(0,"small"),e._uU(1," This field is required "),e.qZA())}function b(a,r){if(1&a&&(e.TgZ(0,"div",39),e.YNc(1,Z,2,0,"small",8),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.editSaleForm.controls.date.errors?null:o.editSaleForm.controls.date.errors.required)}}function y(a,r){if(1&a&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.date)}}function U(a,r){if(1&a&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&a){var o=r.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.name," ")}}function M(a,r){1&a&&(e.TgZ(0,"small"),e._uU(1," This field is required "),e.qZA())}function O(a,r){if(1&a&&(e.TgZ(0,"div",39),e.YNc(1,M,2,0,"small",8),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.editSaleForm.controls.client.errors?null:o.editSaleForm.controls.client.errors.required)}}function F(a,r){if(1&a&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.client)}}function w(a,r){if(1&a&&(e.TgZ(0,"option",40),e._uU(1),e.qZA()),2&a){var o=r.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.name," ")}}function N(a,r){1&a&&(e.TgZ(0,"small"),e._uU(1," This field is required "),e.qZA())}function I(a,r){if(1&a&&(e.TgZ(0,"div",39),e.YNc(1,N,2,0,"small",8),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.editSaleForm.controls.warehouse.errors?null:o.editSaleForm.controls.warehouse.errors.required)}}function J(a,r){if(1&a&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.warehouse)}}function P(a,r){if(1&a){var o=e.EpF();e.TgZ(0,"li",41),e.NdJ("click",function(){var d=e.CHM(o).index;return e.oxw().addSaleDetail(d)}),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()}if(2&a){var t=r.$implicit;e.xp6(2),e.Oqu(t.name)}}function D(a,r){if(1&a){var o=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e.TgZ(8,"core-touchspin",42),e.NdJ("onChange",function(d){var m=e.CHM(o).index;return e.oxw().countChange(d,m)}),e.qZA(),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e.TgZ(14,"div",37),e.TgZ(15,"button",43),e._UZ(16,"i",44),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){var t=r.$implicit,n=r.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.product.name),e.xp6(2),e.Oqu(t.product.cost),e.xp6(2),e.Q6J("minValue",1)("numberValue",t.quantity),e.xp6(2),e.Oqu(t.discount),e.xp6(2),e.Oqu(t.total),e.xp6(4),e.Q6J("size",24)}}function E(a,r){if(1&a&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.tax_rate)}}function k(a,r){if(1&a&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.discount)}}function W(a,r){if(1&a&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&a){var o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.shipping)}}var Q=function(){return{standalone:!0}},Y=function(){var a=function(){function r(o,t,n,s,d,u,m){(0,T.Z)(this,r),this._warehouseService=o,this._clientService=t,this._productSearchService=n,this._toastr=s,this._saleService=d,this._activatedRoute=u,this._route=m,this.searchInput="",this.errors={},this.submitted=!1,this.id=0,this.orderTax=0,this.discount=0,this.shipping=0,this.total=0,this.grandTotal=0,this.wannaPass=!1,this.saleDetails=[],this.editSaleForm=new l.cw({date:new l.NI("",l.kI.required),client:new l.NI(null,l.kI.required),warehouse:new l.NI(null,l.kI.required),shipping:new l.NI(0),tax_rate:new l.NI(0),discount:new l.NI(0),status:new l.NI("PAID"),payment_status:new l.NI("PENDING"),notes:new l.NI("")})}return(0,v.Z)(r,[{key:"ngOnInit",value:function(){this.getClients(),this.getWarehouses(),this.id=+this._activatedRoute.snapshot.paramMap.get("id"),this.edit(this.id)}},{key:"getWarehouses",value:function(){var t=this;this._warehouseService.allware().subscribe({next:function(s){t.warehouses=s.data}})}},{key:"getClients",value:function(){var t=this;this._clientService.allClient().subscribe({next:function(s){t.clients=s.data}})}},{key:"getWarehous",value:function(t){}},{key:"edit",value:function(t){var n=this,s={next:function(u){n.sales=u.data,n.saleDetails=u.data.details,n.editSaleForm.get("date").setValue(u.data.date),n.editSaleForm.get("client").setValue(u.data.client_id),n.editSaleForm.get("warehouse").setValue(u.data.warehouse_id),n.editSaleForm.get("status").setValue(u.data.status),n.editSaleForm.get("payment_status").setValue(u.data.payment_status),n.editSaleForm.get("shipping").setValue(u.data.shipping),n.editSaleForm.get("discount").setValue(u.data.discount),n.editSaleForm.get("tax_rate").setValue(u.data.tax_rate),n.editSaleForm.get("notes").setValue(u.data.notes),n.countTotal(),n.countGrandTotal()}};this._saleService.show(t).subscribe(s)}},{key:"updateSale",value:function(){var t=this;if(this.submitted=!0,0!=this.saleDetails.length){if(this.editSaleForm.valid&&this.wannaPass){var n=this.editSaleForm.value,s=JSON.parse(localStorage.getItem("currentUser")),u={next:function(A){t._toastr.success("Sale has been updated"),t._route.navigate(["saleslist"])},error:function(A){t.errors=A.error.errors,t._toastr.error("Make sure for your data!")}};this._saleService.store({date:n.date,discount:n.discount,tax_rate:n.tax_rate,notes:n.notes,shipping:n.shipping,status:n.status,GrandTotal:this.grandTotal,paid_amount:0,client_id:n.client,user_id:s.id,details:this.saleDetails,payment_status:n.payment_status,due:n.due,warehouse_id:n.warehouse,payment:1}).subscribe(u)}}else this._toastr.error("please choase product!","Error")}},{key:"salesSearch",value:function(t){var n=this;this.warehouse_id?this._productSearchService.salesSearch(t,this.warehouse_id).subscribe({next:function(d){n.products=d.data}}):this._toastr.error("please choose warehouse")}},{key:"addSaleDetail",value:function(t){var n=this;if(this.checkProductExist(this.saleDetails,this.products[t])){var d=this.saleDetails.findIndex(function(m){return m.product.id==n.products[t].id}),u=this.saleDetails[d];u.quantity++,u.subtotal=this.countSubTotal(u.quantity,u.product.tax_cost,u.product.cost)}else{var s={product_id:this.products[t].id,quantity:1,sale_unit_id:this.products[t].unitSale.id,unit_price:this.products[t].total_price,subtotal:this.countSubTotal(1,this.products[t].tax_cost,this.products[t].cost),tax_percent:this.products[t].tax_percent,tax_method:this.products[t].tax_method,product:this.products[t],discount:0};this.saleDetails.push(s)}this.countTotal(),this.countGrandTotal()}},{key:"removeSaleDetail",value:function(t){this.saleDetails.splice(t,1),this.countTotal(),this.countGrandTotal()}},{key:"checkProductExist",value:function(t,n){return t.find(function(s){return s.product.id===n.id})}},{key:"countChange",value:function(t,n){this.saleDetails[n].quantity=t,this.saleDetails[n].subtotal=this.countSubTotal(this.saleDetails[n].quantity,this.saleDetails[n].product.tax_cost,this.saleDetails[n].product.cost),this.countTotal(),this.countGrandTotal()}},{key:"countTax",value:function(t,n){return t*n}},{key:"countSubTotal",value:function(t,n,s){return t*s+this.countTax(t,n)}},{key:"countOrderTax",value:function(){this.orderTax=this.total/100*this.editSaleForm.value.tax_rate}},{key:"countDiscount",value:function(){this.discount=this.editSaleForm.value.discount}},{key:"countShipping",value:function(){this.shipping=this.editSaleForm.value.shipping}},{key:"countGrandTotal",value:function(){this.grandTotal=+this.total+ +this.orderTax+ +this.shipping-+this.discount}},{key:"countTotal",value:function(){var t=this;this.total=0,this.saleDetails.forEach(function(n){t.total+=n.subtotal}),this.countOrderTax(),this.countDiscount(),this.countShipping()}},{key:"passMe",value:function(){this.wannaPass=!0}}]),r}();return a.\u0275fac=function(o){return new(o||a)(e.Y36(S.q),e.Y36(q.k),e.Y36(f.j),e.Y36(x._W),e.Y36(h.F),e.Y36(g.gz),e.Y36(g.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-salesupdate"]],decls:122,vars:24,consts:[["action","",3,"formGroup","ngSubmit"],[1,"col-md-12","row"],[1,"form-group","col-md-4"],["for","category",1,"col-md-4","control-label"],[1,"col-md-12"],["formControlName","date","type","date","placeholder","Date","aria-label","Date",1,"form-control","form-control","col-md-11"],["id","","class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"],[4,"ngIf"],["for","customer",1,"col-md-8","control-label"],["formControlName","client","aria-label","Default select example",1,"form-select","col-md-12"],[3,"value",4,"ngFor","ngForOf"],["for","category",1,"col-md-8","control-label"],["formControlName","warehouse","aria-label","Default select example",1,"form-select","col-md-12",3,"ngModel","ngModelChange"],["for","product",1,"col-md-4","control-label"],[1,"col-md-12","mb-1","row","panel","panel-primary"],[1,"switch-icon-left","col-md-1"],["data-feather","search",3,"size"],["type","text","placeholder","Search By product name or variants","aria-label","Search",1,"form-control","col-md-11","text-left",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-md-12","list-group"],["class","list-group-item","style","list-style: none; cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"table","col-md-11"],["scope","col"],["data-feather","x-circle",1,"btn-outline-secondary"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],[1,"table","col-md-4","tab"],["for","ordertax",1,"col-md-8","control-label"],["id","ordertax","formControlName","tax_rate","placeholder","0","required","","type","text",1,"form-control","input-md",3,"ngModelChange"],["id","ordertax","formControlName","discount","placeholder","0","required","","type","text",1,"form-control","input-md",3,"ngModelChange"],["id","ordertax","formControlName","shipping","placeholder","0","required","","type","text",1,"form-control","input-md",3,"ngModelChange"],["for","status",1,"col-md-8","control-label"],["aria-label","Default select example","formControlName","status",1,"form-select","col-md-12"],["selected",""],[1,"form-group","col-md-12"],["for","exampleFormControlTextarea1",1,"form-label"],["id","exampleFormControlTextarea1","rows","3","formControlName","notes",1,"form-control"],[1,"col-md-4"],["id","singlebutton","name","singlebutton",1,"btn","btn-primary",3,"click"],["id","",1,"form-text","text-danger"],[3,"value"],[1,"list-group-item",2,"list-style","none","cursor","pointer",3,"click"],[3,"minValue","numberValue","onChange"],[1,"btn","btn-sm","btn-danger"],["data-feather","x-circle",3,"size"]],template:function(o,t){1&o&&(e.TgZ(0,"body"),e.TgZ(1,"h2"),e._uU(2,"Update Sale"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"form",0),e.NdJ("ngSubmit",function(){return t.updateSale()}),e.TgZ(5,"div",1),e.TgZ(6,"div",2),e.TgZ(7,"label",3),e._uU(8,"Date"),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"input",5),e.YNc(11,b,2,1,"div",6),e.TgZ(12,"div",7),e.YNc(13,y,2,1,"small",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",2),e.TgZ(15,"label",9),e._uU(16,"Customer"),e.qZA(),e.TgZ(17,"div",4),e.TgZ(18,"select",10),e.YNc(19,U,2,2,"option",11),e.qZA(),e.YNc(20,O,2,1,"div",6),e.TgZ(21,"div",7),e.YNc(22,F,2,1,"small",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",2),e.TgZ(24,"label",12),e._uU(25," Warehouse"),e.qZA(),e.TgZ(26,"div",4),e.TgZ(27,"select",13),e.NdJ("ngModelChange",function(s){return t.warehouse_id=s})("ngModelChange",function(s){return t.getWarehous(s)}),e.YNc(28,w,2,2,"option",11),e.qZA(),e.YNc(29,I,2,1,"div",6),e.TgZ(30,"div",7),e.YNc(31,J,2,1,"small",8),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div",4),e.TgZ(33,"label",14),e._uU(34,"Product"),e.qZA(),e.TgZ(35,"form",15),e.TgZ(36,"span",16),e._UZ(37,"i",17),e.qZA(),e.TgZ(38,"input",18),e.NdJ("ngModelChange",function(s){return t.salesSearch(s)}),e.qZA(),e.TgZ(39,"div",19),e.TgZ(40,"ul",4),e.YNc(41,P,3,1,"li",20),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"h4"),e._uU(43,"Order items"),e.qZA(),e.TgZ(44,"table",21),e.TgZ(45,"thead"),e.TgZ(46,"tr"),e.TgZ(47,"th",22),e._uU(48,"#"),e.qZA(),e.TgZ(49,"th",22),e._uU(50,"Product"),e.qZA(),e.TgZ(51,"th",22),e._uU(52,"Net Unit Code"),e.qZA(),e.TgZ(53,"th",22),e._uU(54,"Quantity"),e.qZA(),e.TgZ(55,"th",22),e._uU(56,"Discount"),e.qZA(),e.TgZ(57,"th",22),e._uU(58,"Subtotal"),e.qZA(),e.TgZ(59,"th",22),e._UZ(60,"i",23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(61,"tbody",24),e.YNc(62,D,17,8,"tr",25),e.qZA(),e.qZA(),e.TgZ(63,"table",26),e.TgZ(64,"tbody",24),e.TgZ(65,"tr"),e.TgZ(66,"td"),e._uU(67,"Order Tax"),e.qZA(),e.TgZ(68,"td"),e._uU(69),e.qZA(),e.qZA(),e.TgZ(70,"tr"),e.TgZ(71,"td"),e._uU(72,"Discount"),e.qZA(),e.TgZ(73,"td"),e._uU(74),e.qZA(),e.qZA(),e.TgZ(75,"tr"),e.TgZ(76,"td"),e._uU(77,"Shipping"),e.qZA(),e.TgZ(78,"td"),e._uU(79),e.qZA(),e.qZA(),e.TgZ(80,"tr"),e.TgZ(81,"td"),e._uU(82,"Grand Total"),e.qZA(),e.TgZ(83,"td"),e._uU(84),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(85,"div",1),e.TgZ(86,"div",2),e.TgZ(87,"label",27),e._uU(88,"Order Tax"),e.qZA(),e.TgZ(89,"div",4),e.TgZ(90,"input",28),e.NdJ("ngModelChange",function(){return t.countOrderTax(),t.countGrandTotal()}),e.qZA(),e.qZA(),e.TgZ(91,"div",7),e.YNc(92,E,2,1,"small",8),e.qZA(),e.qZA(),e.TgZ(93,"div",2),e.TgZ(94,"label",27),e._uU(95,"Discount"),e.qZA(),e.TgZ(96,"div",4),e.TgZ(97,"input",29),e.NdJ("ngModelChange",function(){return t.countDiscount(),t.countGrandTotal()}),e.qZA(),e.qZA(),e.TgZ(98,"div",7),e.YNc(99,k,2,1,"small",8),e.qZA(),e.qZA(),e.TgZ(100,"div",2),e.TgZ(101,"label",27),e._uU(102,"Shipping"),e.qZA(),e.TgZ(103,"div",4),e.TgZ(104,"input",30),e.NdJ("ngModelChange",function(){return t.countShipping(),t.countGrandTotal()}),e.qZA(),e.qZA(),e.TgZ(105,"div",7),e.YNc(106,W,2,1,"small",8),e.qZA(),e.qZA(),e.TgZ(107,"div",2),e.TgZ(108,"label",31),e._uU(109,"Status"),e.qZA(),e.TgZ(110,"div",4),e.TgZ(111,"select",32),e.TgZ(112,"option",33),e._uU(113,"Completed"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(114,"div",34),e.TgZ(115,"label",35),e._uU(116,"Note"),e.qZA(),e._UZ(117,"textarea",36),e.qZA(),e.TgZ(118,"div",34),e.TgZ(119,"div",37),e.TgZ(120,"button",38),e.NdJ("click",function(){return t.passMe()}),e._uU(121," Submit "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(4),e.Q6J("formGroup",t.editSaleForm),e.xp6(7),e.Q6J("ngIf",t.editSaleForm.controls.date.touched&&t.editSaleForm.controls.date.invalid||t.submitted&&t.editSaleForm.controls.date.invalid),e.xp6(2),e.Q6J("ngIf",null==t.errors?null:t.errors.date),e.xp6(6),e.Q6J("ngForOf",t.clients),e.xp6(1),e.Q6J("ngIf",t.editSaleForm.controls.client.touched&&t.editSaleForm.controls.client.invalid||t.submitted&&t.editSaleForm.controls.client.invalid),e.xp6(2),e.Q6J("ngIf",null==t.errors?null:t.errors.client),e.xp6(5),e.Q6J("ngModel",t.warehouse_id),e.xp6(1),e.Q6J("ngForOf",t.warehouses),e.xp6(1),e.Q6J("ngIf",t.editSaleForm.controls.warehouse.touched&&t.editSaleForm.controls.warehouse.invalid||t.submitted&&t.editSaleForm.controls.warehouse.invalid),e.xp6(2),e.Q6J("ngIf",null==t.errors?null:t.errors.warehouse),e.xp6(6),e.Q6J("size",30),e.xp6(1),e.Q6J("ngModel",t.searchInput)("ngModelOptions",e.DdM(23,Q)),e.xp6(3),e.Q6J("ngForOf",t.products),e.xp6(21),e.Q6J("ngForOf",t.saleDetails),e.xp6(7),e.AsE(" (%",t.editSaleForm.value.tax_rate,") ",t.orderTax," \u0631\u064a\u0627\u0644 "),e.xp6(5),e.hij("",t.discount," \u0631\u064a\u0627\u0644"),e.xp6(5),e.hij("",t.shipping," \u0631\u064a\u0627\u0644"),e.xp6(5),e.Oqu(t.grandTotal),e.xp6(8),e.Q6J("ngIf",null==t.errors?null:t.errors.tax_rate),e.xp6(7),e.Q6J("ngIf",null==t.errors?null:t.errors.discount),e.xp6(7),e.Q6J("ngIf",null==t.errors?null:t.errors.shipping))},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,c.O5,l.EJ,c.sg,l.F,p.R,l.On,l.Q7,l.YN,l.Kr],styles:["body[_ngcontent-%COMP%]{background:white;border-radius:20px;padding:20px}select[_ngcontent-%COMP%]{border-radius:5px;padding:7px;border:1px gainsboro solid}.icon[_ngcontent-%COMP%]{padding-left:10px;padding-top:6px;text-align:center}table[_ngcontent-%COMP%]{margin-top:20px;margin-left:25px;text-align:center;border-radius:10px}ul[_ngcontent-%COMP%]{list-style:none;margin:0 -82px 0 auto;text-align:left}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;overflow:hidden}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:bold;padding-top:7px}.list-group[_ngcontent-%COMP%]{max-height:100px;margin-bottom:10px;overflow:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch}"]}),a}(),G=i(9753),V=i(1705),j=i(962),B=[{path:"",component:Y,data:{animation:"sample"}}],L=function(){var a=(0,v.Z)(function r(){(0,T.Z)(this,r)});return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[g.Bz.forChild(B),G.aw,V.$,j.IJ]]}),a}()}}]);