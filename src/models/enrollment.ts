import { Schema, model, models } from 'mongoose';

const EnrollmentSchema = new Schema(
  {
    firstName:   { type: String, required: true, trim: true },
    lastName:    { type: String, required: true, trim: true },
    whatsapp:    { type: String, required: true, trim: true },
    email:       { type: String, required: true, lowercase: true, trim: true },
    address:     { type: String, required: true },
    programTitle:{ type: String, required: true }, // ambil dari programData.title
    status:      { type: String, enum: ['applied','screening','interview','accepted','rejected','enrolled'], default: 'applied' },
  },
  { timestamps: true }
);

export const Enrollment = models.Enrollment || model('Enrollment', EnrollmentSchema);
