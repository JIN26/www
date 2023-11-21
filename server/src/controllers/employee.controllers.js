import Employee from "../models/employee.model.js";

export const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const {name, email, age, phone_number, street_name, street_number, zip_code, city} = req.body;
    const newEmployee = new Employee({
      name,
      email,
      age,
      phone_number,
      street_name,
      street_number,
      zip_code,
      city
    });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee)
      return res.status(404).json({ message: "Employee not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const {name, email, age, phone_number, street_name, street_number, zip_code, city} = req.body;
    const EmployeeUpdated = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        email,
        age,
        phone_number,
        street_name,
        street_number,
        zip_code,
        city
      },
      { new: true }
    );
    return res.json(EmployeeUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmployeeByIde = async (req, res) => {
  try {
    const Employee = await Employee.findById(req.params.id);
    if (!Employee) return res.status(404).json({ message: "Employee not found" });
    return res.json(Employee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};