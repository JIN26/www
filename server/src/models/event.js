const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_name: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
      timestamps: true,
  }
  );
  
  const Event = mongoose.model('Event', eventSchema);
  
 export default Event;