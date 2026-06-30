const arkansasCities = [
  "Alexander", "Alma", "Altus", "Arkadelphia", "Armorel",
  "Ashdown", "Atkins", "Austin", "Bald Knob", "Barling",
  "Batesville", "Beebe", "Bella Vista", "Benton", "Bentonville",
  "Berryville", "Bismarck", "Blytheville", "Bonnerdale", "Bono",
  "Bradford", "Brinkley", "Bryant", "Cabot", "Calico Rock",
  "Camden", "Canehill", "Carlisle", "Casa", "Cave City",
  "Cave Springs", "Centerton", "Charleston", "Choctaw", "Clarendon",
  "Clarksville", "Clinton", "College Station", "Conway", "Corning",
  "Crossett", "Danville", "Dardanelle", "De Queen", "De Witt",
  "Dermott", "Des Arc", "Dierks", "Doddridge", "Dover",
  "Dumas", "Dyer", "Earle", "El Dorado", "El Paso",
  "Elkins", "Elm Springs", "England", "Eudora", "Eureka Springs",
  "Farmington", "Fayetteville", "Flippin", "Fordyce", "Forrest City",
  "Fort Smith", "Fox", "Garfield", "Garner", "Gentry",
  "Glenwood", "Gould", "Gravette", "Green Forest", "Greenbrier",
  "Greenland", "Greenwood", "Guy", "Hamburg", "Hampton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < arkansasCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(arkansasCities[i]);
}

module.exports = { batches };
