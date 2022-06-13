const books = require("./books.json");
const chapters = require("./chapters.json");
const easton = require("./easton.json");
const events = require("./events.json");
const people = require("./people.json");
const peopleGroup = require("./peopleGroups.json");
const periods = require("./periods.json");
const places = require("./places.json");
const verses = require("./verses.json");
var fs = require("fs");



const getPerson = (id) => {
  const res = people.find((p) => p.id === id);
  const root = res.fields;
  const result = {};
  result.id = res.id;
  result.name = root.name;
  result.gender = root.gender;
  result.mother = root.mother?.[0];
  result.father = root.father?.[0];
  const birthYearContent = periods.find((p) => p.id === root?.birthYear?.[0]);
  const deathYearContent = periods.find((p) => p.id === root?.deathYear?.[0]);

  result.birthYear = birthYearContent?.fields?.yearNum ?? 0;
  result.deathYear = deathYearContent?.fields?.yearNum ?? 0;
  result.age = result.deathYear - result.birthYear;

  if (root.gender === "Male") {
    const children = [];

    root.children?.forEach((childId) => {
      children.push(getPerson(childId));
    });
    
    result.children = children
  }
  return result;
};
const start = () => {
  const data = 
  {
    id: "reccZB8SVU5bEMcgo",
    name: "God",
    children: [
      getPerson("recyYgUiSETdWFgEP"),
      getPerson("recXhV7rg0zIf4OIB")],
  }
;
  fs.writeFileSync("../data/tree.json", JSON.stringify(data));
};

start();
