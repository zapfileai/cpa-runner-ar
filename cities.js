const arkansasCities = [
  "Hardy", "Harrisburg", "Harrison", "Hatfield", "Hazen",
  "Heber Springs", "Helena", "Hensley", "Higden", "Hindsville",
  "Hope", "Hot Springs", "Hot Springs Village", "Hughes", "Jacksonville",
  "Jerusalem", "Jonesboro", "Judsonia", "Junction City", "Knoxville",
  "Lake City", "Lake Village", "Lamar", "Lavaca", "Lawson",
  "Leachville", "Leslie", "Lincoln", "Little Rock", "London",
  "Lonoke", "Lonsdale", "Lowell", "Mabelvale", "Magnolia",
  "Malvern", "Mansfield", "Marianna", "Marion", "Marked Tree",
  "Marshall", "Marvell", "Maumelle", "Mayflower", "Mcgehee",
  "Mcrae", "Melbourne", "Mena", "Monticello", "Moro",
  "Morrilton", "Mount Ida", "Mount Vernon", "Mountain Home", "Mountain View",
  "Mulberry", "Murfreesboro", "Nashville", "Newark", "Newport",
  "Norfork", "North Little Rock", "Oil Trough", "Osceola", "Ozark",
  "Paragould", "Paris", "Paron", "Pea Ridge", "Pearcy",
  "Perryville", "Piggott", "Pine Bluff", "Plainview", "Plumerville",
  "Pocahontas", "Prairie Grove", "Prattsville", "Prescott", "Pyatt",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < arkansasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(arkansasCities[i]);
}

module.exports = { batches };
