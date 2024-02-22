import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username is most be required!"],
    },
    address: {
      type: String,
      required: [true, "Mobile Number is required!"],
    },
    designation: {
      type: String,
      required: [true, "Password must be required!"],
    },
    country: {
      type: String,
      required: [true, "Password must be required!"],
    },
    state: {
      type: String,
      required: [true, ""],
    },
    homeAddress: {
      type: String,
      required: [true, ""],
    },
    currentAddress: {
      type: String,
      required: [true, "Password must be required!"],
    },
  },
  { timeseries: true }
);

const User = mongoose.model("User", userSchema);
export default User;
