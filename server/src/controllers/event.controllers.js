import Event from "../models/inventary.model.js";


export const getEvent = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { event_name, date, time, location, description } = req.body;
    const newEvent = new Event({
      event_name,
      date,
      time,
      location,
      description
    });
    await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { event_name, date, time, location, description } = req.body;
    const EventUpdated = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { event_name, date, time, location, description },
      { new: true }
    );
    return res.json(EventUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEventByIde = async (req, res) => {
  try {
    const Event = await Event.findById(req.params.id);
    if (!Event) return res.status(404).json({ message: "Event not found" });
    return res.json(Event);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};