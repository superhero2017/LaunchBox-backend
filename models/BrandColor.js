const mongoose = require('mongoose');

const brandColorSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand'
  },
  value: {
    type: String,
    required: true
  },
}, { timestamps: true });

const BrandColor = mongoose.model('BrandColor', brandColorSchema);

module.exports = BrandColor;
