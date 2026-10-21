/*! 
 * Vue String Filters v1.0.0
 * Homepage (https://jivtroy.github.io/vue-string-filters/)
 * Copyright 2026 Jiv Troy
 * License: MIT
 */
(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("string-filters")):typeof define=="function"&&define.amd?define(["exports","string-filters"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a.VueStringFilters={},a.StringFilters))})(this,(function(a,e){"use strict";const t={install(i){i.config.globalProperties.$filters={camelCase:e.camelCase,capitalize:e.capitalize,flatCase:e.flatCase,kebabCase:e.kebabCase,pad:e.pad,pascalCase:e.pascalCase,snakeCase:e.snakeCase,titleCase:e.titleCase,trainCase:e.trainCase,truncate:e.truncate}}};a.VueStringFilters=t,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})}));
