export default{handleUrlRouting(t){this.routingData=t,this.onhashchange=(e=>{this.$container||removeEventListener("hashchange",this),Object.getOwnPropertyNames(t).forEach(e=>{this.handleRouting&&this.handleRouting(e,t[e])},this)}),addEventListener("hashchange",this.onhashchange)},handleRouting(t,e){if(t.constructor===RegExp){const e=t.exec(location.hash.slice(1)),[h,...n]=e;e&&this.push({props:{urlData:n}})}else{if(t.constructor!==String)throw Error("routePattern field must be of type RegRxp or String");{const n=/(:\w+)/g,o=t.match(n)||[];let s=[];o&&(s=o.map(t=>t.slice(1)));const a=new RegExp(t.replace(n,"(\\w+)")),r=location.hash.slice(1).match(a);if(r){const[t,...n]=r;let a={};for(var h=0;h<o.length;h++)a[s[h]]=n[h];this.push({viewController:e,props:{urlData:a}})}}}}};