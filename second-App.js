{{
  const _ = require('lodash');
  console.log('Hello');
  console.log('My people');

  const items = [[1],[2],[3],[4]];
  const newItems = _.flattenDeep(items);
  console.log(newItems);
}}