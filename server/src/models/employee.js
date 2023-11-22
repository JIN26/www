const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  phone_number: { type: String, required: true },
  street_name: { type: String, required: true },
  street_number: { type: Number, required: true },
  zip_code: { type: String, required: true },
  city: { type: String, required: true },
  date: {type: Date,default: Date.now,}
},
{
    timestamps: true,
}
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;