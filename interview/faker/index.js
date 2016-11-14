var faker = require('faker');
var _ = require('underscore');
var ta = require('time-ago')();
var fs = require('fs');
var path = require('path');

var types = [
  "facebook",
  "github",
  "twitter"
];

var data = _.range(30).map(function () {
  return {
    name: faker.name.firstName(),
    text: faker.lorem.sentence(),
    createdAt: faker.date.past(),
    type: _.sample(types)
  }
});

data = _.sortBy(data, 'createdAt');

data.map(function (item) {
  item.createdAt = ta.ago(item.createdAt);
  return item;
});

data.reverse();

var outputPath = path.join(__dirname, '..', 'data.json');

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
