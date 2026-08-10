import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import doctorModel from "./models/doctorModel.js";

const seedDoctors = async () => {
  try {
    await connectDB();

    await doctorModel.deleteMany({});

    const hashedPassword = await bcrypt.hash("doctor123", 10);

    const doctors = [
      {
        name: "Dr. Raj Sharma",
        email: "raj@gmail.com",
        password: hashedPassword,
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        speciality: "General physician",
        degree: "MBBS",
        experience: "5 Years",
        about: "Experienced General Physician specializing in preventive healthcare.",
        available: true,
        fees: 500,
        slots_booked: {},
        address: { line1: "Sector 18", line2: "Noida" },
        date: Date.now()
      },
      {
        name: "Dr. Priya Singh",
        email: "priya@gmail.com",
        password: hashedPassword,
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        speciality: "Gynecologist",
        degree: "MBBS, MS",
        experience: "8 Years",
        about: "Women's health and pregnancy specialist.",
        available: true,
        fees: 700,
        slots_booked: {},
        address: { line1: "Civil Lines", line2: "Lucknow" },
        date: Date.now()
      },
      {
        name: "Dr. Aman Verma",
        email: "aman@gmail.com",
        password: hashedPassword,
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        speciality: "Dermatologist",
        degree: "MBBS, MD",
        experience: "6 Years",
        about: "Expert in skin and hair disorders.",
        available: true,
        fees: 600,
        slots_booked: {},
        address: { line1: "MG Road", line2: "Delhi" },
        date: Date.now()
      },
      {
        name: "Dr. Neha Kapoor",
        email: "neha@gmail.com",
        password: hashedPassword,
        image: "https://randomuser.me/api/portraits/women/14.jpg",
        speciality: "Pediatrician",
        degree: "MBBS, MD",
        experience: "7 Years",
        about: "Child healthcare specialist.",
        available: true,
        fees: 650,
        slots_booked: {},
        address: { line1: "Gomti Nagar", line2: "Lucknow" },
        date: Date.now()
      },
      {
        name: "Dr. Rohit Mehta",
        email: "rohit@gmail.com",
        password: hashedPassword,
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        speciality: "Neurologist",
        degree: "MBBS, DM",
        experience: "10 Years",
        about: "Treats disorders of the nervous system.",
        available: true,
        fees: 1000,
        slots_booked: {},
        address: { line1: "Connaught Place", line2: "Delhi" },
        date: Date.now()
      }
    ];

    await doctorModel.insertMany(doctors);

    console.log(" Doctors inserted successfully.");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDoctors();