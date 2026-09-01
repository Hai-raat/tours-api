const getAllTours = (req, res) => {
  res.json({ message: "Hello from getAllTours" });
};

const createTour = (req, res) => {
  res.json({ message: "Hello from createTour" });
};

const getTourById = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Hello from getTourById with id: ${id}` });
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
