import Inventory from "../models/inventary.model.js";

export const getInventory = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.json(inventories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createInventory = async (req, res) => {
  try {
    const { item_name, item_description, item_quantity, item_price } = req.body;
    const newInventory = new Inventory({
        item_name,
        item_description,
        item_quantity,
        item_price
    });
    await newInventory.save();
    res.json(newInventory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    const deletedInventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!deletedInventory)
      return res.status(404).json({ message: "Inventory not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const { item_name, item_description, item_quantity, item_price } = req.body;
    const inventoryUpdated = await Inventory.findOneAndUpdate(
      { _id: req.params.id },
      { item_name, item_description, item_quantity, item_price },
      { new: true }
    );
    return res.json(inventoryUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getInventoryByIde = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) return res.status(404).json({ message: "Inventory not found" });
    return res.json(inventory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};