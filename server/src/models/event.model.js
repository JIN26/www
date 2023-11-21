// Importa el módulo mongoose
import mongoose from 'mongoose'

// Crea un esquema llamado 'eventSchema'
const eventSchema = new mongoose.Schema({
  event_name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Crea un modelo llamado 'Event' basado en el esquema 'eventSchema'
const Event = mongoose.model('Event', eventSchema);

export default Event;
