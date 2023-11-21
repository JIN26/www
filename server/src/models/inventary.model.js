// Importa mongoose module
import mongoose from 'mongoose'

// Crea esquema "Inventory"
const inventorySchema = new mongoose.Schema ({
    item_name: {
        type: String,
        required: true
    },
    item_description: {
        type: String,
        required: true
    },
    item_quantity: {
        type: Number,
        required: true,
        default: 0
    },
    item_price: {
        type: Number,
        required: true,
        default: 0
    }
});

// Crea modelo "Inventory" para una tabla de inventario en MongoDB
const Inventory = mongoose.model("Inventory", inventorySchema);

// Exporta la clase inventario
export default Inventory;
