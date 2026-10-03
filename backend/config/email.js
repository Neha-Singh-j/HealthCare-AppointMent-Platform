import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendAppointmentEmail = async ({
    email,
    patientName,
    doctorName,
    date,
    time
}) => {
    const mailOptions = {
        from: `"AppointX Healthcare" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Appointment Confirmed - AppointX",
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Appointment Confirmed </h2>

                <p>Hello <strong>${patientName}</strong>,</p>

                <p>
                    Your appointment has been successfully booked through
                    <strong>AppointX</strong>.
                </p>

                <div style="padding: 15px; background: #f5f5f5;">
                    <p><strong>Doctor:</strong> ${doctorName}</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Time:</strong> ${time}</p>
                </div>

                <p>
                    Please make sure to be available at the scheduled time.
                </p>

                <p>Thank you for using AppointX Healthcare.</p>

                <p>
                    <strong>AppointX Team</strong>
                </p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);
};

export const sendCancellationEmail = async ({
    email,
    patientName,
    doctorName,
    date,
    time
}) => {

    const mailOptions = {
        from: `"AppointX Healthcare" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Appointment Cancelled - AppointX",
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Appointment Cancelled</h2>

                <p>Hello <strong>${patientName}</strong>,</p>

                <p>
                    Your appointment with
                    <strong>Dr. ${doctorName}</strong>
                    has been cancelled.
                </p>

                <div style="padding: 15px; background: #f5f5f5;">
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Time:</strong> ${time}</p>
                </div>

                <p>
                    You can book another appointment with a doctor
                    through AppointX.
                </p>

                <p>
                    Thank you for using AppointX Healthcare.
                </p>

                <p><strong>AppointX Team</strong></p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);
};