function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var r=document.querySelector("table"),t=r.querySelector("thead"),n=r.querySelector("tbody");t.addEventListener("click",function(r){var t=r.target.cellIndex,o=Array.from(n.querySelectorAll("tr")).sort(function(e,r){switch(t){case 0:case 1:return e.cells[t].innerText.localeCompare(r.cells[t].innerText);case 2:return+e.cells[t].innerText-+r.cells[t].innerText;case 3:return parseFloat(e.cells[t].innerText.slice(1))-parseFloat(r.cells[3].innerText.slice(1))}});n.append.apply(n,function(r){if(Array.isArray(r))return e(r)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,void 0)}}(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())});
//# sourceMappingURL=index.785149f7.js.map