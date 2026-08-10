# 🩺 AppointX — Healthcare Appointment Platform

**AppointX** is a full-stack healthcare appointment platform that connects patients with doctors through a simple, secure, and role-based system. Patients can discover doctors, book appointments, manage their profiles, and make online payments, while doctors and administrators get dedicated dashboards to manage appointments and healthcare operations.

Built with the **MERN stack**, AppointX combines role-based authentication, appointment management, doctor discovery, and online payment integration into a single platform.

---

## 🚀 Highlights

* 👤 **Role-based access** for Patients, Doctors, and Admins
* 🔐 **JWT-based authentication**
* 🩺 Doctor discovery and specialty-based filtering
* 📅 Online appointment scheduling
* 💳 Payment support with **Razorpay** and **Stripe**
* 📊 Dedicated Doctor and Admin dashboards
* 👨‍⚕️ Doctor profile and availability management
* 🗂️ Appointment tracking and status management
* 🖼️ Profile and doctor image management
* 📱 Responsive and user-friendly interface

---

## 🛠️ Tech Stack

| Layer             | Technology           |
| ----------------- | -------------------- |
| Frontend          | React.js             |
| Backend           | Node.js, Express.js  |
| Database          | MongoDB              |
| Authentication    | JSON Web Token (JWT) |
| Payments          | Razorpay, Stripe     |
| API Communication | REST APIs            |

---

# 👥 Role-Based System

AppointX provides different capabilities depending on the user's role.

### 👤 Patient

Patients can:

* Create an account and securely log in
* Search and filter doctors by specialty
* View doctor profiles and availability
* Book appointments by selecting a date and time
* Choose a payment method
* View upcoming and previous appointments
* Cancel or manage appointments
* Update personal information
* Upload and update their profile picture
* Log out securely

Patient profiles include information such as:

* Name
* Email
* Address
* Gender
* Date of birth
* Profile picture

---

### 🩺 Doctor

Doctors have their own dashboard to manage their appointments and professional information.

**Dashboard includes:**

* Total earnings
* Number of patients
* Appointment statistics
* Recent bookings

Doctors can:

* View patient appointment details
* Check payment methods and appointment status
* Mark appointments as completed
* Cancel appointments
* Update consultation fees
* Update address and description
* Manage their availability status

---

### 🛡️ Admin

The Admin panel provides centralized control over the platform.

Admins can:

* Add new doctors
* Edit doctor information
* Remove doctor profiles
* View all registered doctors
* Monitor patients and appointments
* Cancel appointments
* Mark appointments as completed
* View platform-level statistics

The Admin dashboard provides an overview of:

```text
Doctors
Patients
Appointments
Recent Bookings
```

---

# 🏠 Home & Doctor Discovery

The homepage provides users with quick access to the platform's main functionality.

Users can:

* Search for doctors
* Browse doctors by specialty
* Explore top doctors
* View doctor profiles
* Navigate to About, Contact, Privacy Policy, and other sections

The **All Doctors** section displays available doctors and allows users to filter them according to their specialization.

---

# 📅 Appointment Booking

The appointment workflow is designed to be simple:

```text
Search Doctor
     ↓
View Doctor Profile
     ↓
Select Date & Time
     ↓
Choose Payment Method
     ↓
Confirm Appointment
```

The appointment page displays:

* Doctor profile
* Qualification
* Experience
* Specialty
* Consultation fee
* Description
* Availability
* Related doctors

Users must be authenticated before they can confirm an appointment.

---


# 👤 User Profile

After authentication, patients can access their profile and manage their personal information.

### Profile Management

* Update name
* Update email
* Edit address
* Update gender
* Update date of birth
* Upload profile picture
* View appointment history
* View upcoming appointments
* Logout

---

# 📊 Admin Dashboard

The Admin Dashboard provides a centralized overview of the healthcare platform.

### Dashboard Statistics

* 👨‍⚕️ Total Doctors
* 👥 Total Patients
* 📅 Total Appointments
* 🕒 Latest Bookings

### Doctor Management

Admins can create doctor profiles containing:

* Name
* Profile image
* Specialty
* Degree
* Experience
* Email
* Password
* Address
* Consultation fees
* Description

### Appointment Management

Admins can view appointment information including:

* Patient name
* Patient age
* Doctor name
* Appointment date
* Appointment time
* Consultation fee
* Appointment status

Available actions include:

**Cancel Appointment** | **Mark as Completed**

---

# 🩺 Doctor Dashboard

Doctors can manage their professional activities through a dedicated dashboard.

### 💰 Earnings

Doctors can track earnings generated from completed appointments.

### 📅 Appointment Management

Doctors can view:

* Patient information
* Appointment date
* Appointment time
* Payment method
* Appointment status

They can also:

* Complete appointments
* Cancel appointments

### ⚙️ Profile Management

Doctors can update:

* Description
* Consultation fee
* Address
* Availability


