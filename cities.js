const arkansasCities = [
  "Quitman", "Ratcliff", "Redfield", "Rison", "Rogers",
  "Roland", "Royal", "Russellville", "Searcy", "Sheridan",
  "Sherwood", "Sidney", "Siloam Springs", "Smackover", "Solgohachia",
  "Springdale", "Stamps", "Star City", "Strawberry", "Stuttgart",
  "Swifton", "Texarkana", "Timbo", "Tontitown", "Traskwood",
  "Trumann", "Tumbling Shoals", "Turrell", "Van Buren", "Vilonia",
  "Waldo", "Waldron", "Walnut Ridge", "Ward", "Warren",
  "Weiner", "Wesley", "West Fork", "West Helena", "West Memphis",
  "Wheatley", "White Hall", "Wrightsville", "Wynne", "Yellville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < arkansasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(arkansasCities[i]);
}

module.exports = { batches };
