var EmptyTag,Tag,__extends=function(t,r){function n(){this.constructor=t}for(var o in r)__hasProp.call(r,o)&&(t[o]=r[o]);return n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype,t},__hasProp={}.hasOwnProperty;Tag=require("./tag").Tag,exports.EmptyTag=EmptyTag=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return __extends(r,t),r.prototype.haveContent=function(){return!1},r.prototype.generateContent=function(){},r}(Tag);