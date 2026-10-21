/*! 
 * Vue String Filters v1.0.0
 * Homepage (https://jivtroy.github.io/vue-string-filters/)
 * Copyright 2026 Jiv Troy
 * License: MIT
 */
import { truncate as e, trainCase as t, titleCase as s, snakeCase as i, pascalCase as l, pad as r, kebabCase as n, flatCase as o, capitalize as C, camelCase as c } from "string-filters";
const f = {
  install(a) {
    a.config.globalProperties.$filters = {
      camelCase: c,
      capitalize: C,
      flatCase: o,
      kebabCase: n,
      pad: r,
      pascalCase: l,
      snakeCase: i,
      titleCase: s,
      trainCase: t,
      truncate: e
    };
  }
};
export {
  f as VueStringFilters
};
