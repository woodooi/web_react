const Plane = require('../models/item_module');
const { Op } = require("sequelize");

exports.findAll = (req, res) => {
  Plane.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while finding the items."
      });
    });
};

exports.findOne = async (req, res) => {
  try {
    const _id = req.params.id;
    const record = await Plane.findOne({ where: { id: _id } });

    if (!record) {
      res.status(404).json({ error: 'Record not found' });
      return;
    }

    console.log(`Retrieved record ${JSON.stringify(record, null, 2)}`);
    res.status(200).json({ data: record, message: 'Record fetched successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.filtered = async (req, res) => {
  try {
    const { filterValues, sliderValues } = req.query;

    const priceSort = filterValues[0] === 'true' ? 'ASC' : 'DESC';
    const volumeSort = filterValues[1] === 'true' ? 'ASC' : 'DESC';

    const filteredPlanes = await Plane.findAll({
      where: {
        price: {
          [Op.between]: [sliderValues[0], sliderValues[1]]
        }
      },
      order: filterValues[0] === 'true'
    ? [["price", priceSort], ["tank_volume", volumeSort]]
    : [["tank_volume", volumeSort]],
    });

    res.send(filteredPlanes);
  } catch (err) {
    console.error("Error filtering:", err);
    res.status(500).send({
      message: err.message || "Error filtering",
    });
  }
};
