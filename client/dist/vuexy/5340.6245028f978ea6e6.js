"use strict";(self.webpackChunkvuexy=self.webpackChunkvuexy||[]).push([[5340],{3420:function(E,s,t){t.d(s,{c:function(){return u}});var d=t(5134),h=t(7289),a=t(4522),i=t(8260),r=t(6154),u=function(){var _=function(){function o(e){(0,d.Z)(this,o),this._http=e,this.brandData={data:""},this.host=i.N.apiUrl+"/api/brands/",this.header=new a.WM({Accept:"application/json"}),this.params=new a.LE}return(0,h.Z)(o,[{key:"AddBrand",value:function(n){return this._http.post("".concat(this.host),n,{headers:this.header})}},{key:"allbrand",value:function(){return this._http.get("".concat(this.host),{headers:this.header,params:this.params})}},{key:"deleteBrand",value:function(n){return this._http.delete("".concat(this.host).concat(n))}},{key:"updateBrand",value:function(n,l){return this._http.patch("".concat(this.host).concat(n),l)}},{key:"getBrandid",value:function(n){return this._http.get("".concat(this.host).concat(n))}}]),o}();return _.\u0275fac=function(e){return new(e||_)(r.LFG(a.eN))},_.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_}()},6905:function(E,s,t){t.d(s,{M:function(){return u}});var d=t(5134),h=t(7289),a=t(4522),i=t(8260),r=t(6154),u=function(){var _=function(){function o(e){(0,d.Z)(this,o),this._http=e,this.host=i.N.apiUrl+"/api/products/",this.params=new a.LE,this.header=new a.WM({Accept:"application/json"})}return(0,h.Z)(o,[{key:"store",value:function(n){return this._http.post("".concat(this.host),n,{headers:this.header})}},{key:"get",value:function(){return this._http.get("".concat(this.host))}},{key:"show",value:function(n){return this._http.get("".concat(this.host).concat(n),{headers:this.header})}},{key:"update",value:function(n,l){return this._http.put("".concat(this.host).concat(n),l,{headers:this.header})}},{key:"destroy",value:function(n){return this._http.delete("".concat(this.host).concat(n),{headers:this.header})}}]),o}();return _.\u0275fac=function(e){return new(e||_)(r.LFG(a.eN))},_.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_}()},8743:function(E,s,t){t.r(s),t.d(s,{CreateproductModule:function(){return l}});var d=t(7289),h=t(5134),a=t(3907),i=t(9753),r=t(962),u=t(1705),_=t(841),o=t(9053),e=t(6154),n=[{path:"",component:o.Z,data:{animation:"sample"}}],l=function(){var c=(0,d.Z)(function v(){(0,h.Z)(this,v)});return c.\u0275fac=function(p){return new(p||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[[a.Bz.forChild(n),i.aw,u.$,r.IJ,_.JX]]}),c}()}}]);