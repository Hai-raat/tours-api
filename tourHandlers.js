const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;

  const tour = Tour.addOne(name, info, image, price, location);
  res.status(201).json(tour);
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.id);

  if (!tour) {
    res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

const updateTour = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Hello from updateTour with id: ${id}` });
};

const deleteTour = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Hello from deleteTour with id: ${id}` });
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};
