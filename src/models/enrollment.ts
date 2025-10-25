// app/models/enrollment.ts
import { Schema, model, models } from 'mongoose';

const EnrollmentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [15, 'First name max 15 Character'],
      match: [/^[\p{L}]{1,15}$/u, 'firstName hanya huruf tanpa spasi/simbol'],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [15, 'Last name max 15 Character'],
      match: [/^[\p{L}]{1,15}$/u, 'lastName hanya huruf tanpa spasi/simbol'],
    },
    whatsapp: {
      type: Number,
      required: true,
      min: [1_000_000_000, 'WhatsApp minimal 10 digit'],
      max: [99_999_999_999_999, 'WhatsApp maksimal 14 digit'],
      validate: {
        validator: (v: number) => Number.isInteger(v),
        message: 'WhatsApp harus bilangan bulat',
      },
    },
    email:  { type: String, required: true, lowercase: true, trim: true },
    address:{ type: String, required: true, maxlength: [400, 'Address maksimal 400 karakter'] },
    age: {
      type: Number, required: true,
      min: [10, 'Usia minimal 10 tahun'],
      max: [40, 'Usia maksimal 40 tahun'],
      validate: { validator: Number.isInteger, message: 'Usia harus berupa bilangan bulat' },
    },
    programTitle:{ type: String, required: true },
    status: {
      type: String,
      enum: ['applied','screening','interview','accepted','rejected','enrolled'],
      default: 'applied'
    },
  },
  { timestamps: true }
);

export const Enrollment = models.Enrollment || model('Enrollment', EnrollmentSchema);
