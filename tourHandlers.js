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
  const tour = Tour.update(req.params.id, req.body);

  if (!tour) {
    res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

const deleteTour = (req, res) => {
  const deleted = Tour.delete(req.params.id);

  if (!deleted) {
    res.status(404).json({ message: "Tour not found" });
  }

  res.status(204).send();
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};
