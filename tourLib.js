let tours = [];
let nextId = 1;

const addOne = (name, info, image, price, location) => {
  const tour = {
    id: nextId,
    name,
    info,
    image,
    price,
    location,
  };

  tours.push(tour);
  nextId++;

  return tour;
};

const getAll = () => {
  return tours;
};

if (require.main === module) {
  const result = addOne(
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495",
    "Helsinki, Finland",
  );

  addOne(
    "Paris in 7 Days",
    "Explore Paris.",
    "https://example.com/paris.jpg",
    "1,995",
    "Paris, France",
  );

  addOne(
    "Helsinki Weekend",
    "Discover Helsinki.",
    "https://example.com/helsinki.jpg",
    "795",
    "Helsinki, Finland",
  );

  console.log(result);
  console.log(getAll());
}
const findById = (id) => {
  return tours.find((tour) => tour.id === Number(id)) || null;
};

const update = (id, data) => {
  const tour = tours.find((tour) => tour.id === Number(id));

  if (!tour) {
    return null;
  }

  Object.assign(tour, data);

  return tour;
};

const deleteOne = (id) => {
  const index = tours.findIndex((tour) => tour.id === Number(id));

  if (index === -1) {
    return false;
  }

  tours.splice(index, 1);
  return true;
};

module.exports = {
  addOne,
  getAll,
  findById,
  update,
  deleteOne,
};
