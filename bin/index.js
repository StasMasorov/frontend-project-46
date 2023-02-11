#!/usr/bin/env node

import _ from 'lodash';

export default (data1, data2) => {
  const keys = Object.keys({ ...data1, ...data2 });
  const sortKeys = _.sortBy(keys);
  const diff = {};
    for (const key of sortKeys) {
      const val1 = data1[key];
      const val2 = data2[key];
      if ((val1 !== undefined) && !val2) {
        diff[`- ${key}`] = val1;
      } 
      else if (!val1 && (val2 !== undefined)) {
        diff[`+ ${key}`] = val2;
      }
      else if (val1 && val2 && (val1 === val2)) {
        diff[`  ${key}`] = val1;
      } 
      else if (val1 && val2 && (val1 !== val2)) {
        diff[`- ${key}`] = val1;
        diff[`+ ${key}`] = val2; 
      }
    }
    const result = JSON.stringify(diff)
      .replaceAll('"', '')
      .replaceAll(',', `\n  `)
      .replaceAll('{', `{\n  `)
      .replaceAll('}', '\n}');
  
    return result;
  };

