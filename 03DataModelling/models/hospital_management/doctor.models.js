import mongoose, { mongo } from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYear: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        hospital: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Hospital",
          required: true,
        },

        workingHours: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
