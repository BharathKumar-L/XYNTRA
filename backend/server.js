import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import multer from "multer";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// Initialize Firebase Admin with your service account and storage bucket.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "xyntra-966c2.appspot.com", // Update if needed.
});

// Get Firestore and Storage bucket instances.
const db = admin.firestore();
const bucket = admin.storage().bucket();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS.
app.use(cors());

// Use multer for multipart/form-data uploads (files stored in memory).
const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /registrations
 * Accepts registration data, including text fields and file uploads.
 * If an abstract file is provided, it is uploaded to Firebase Storage.
 * Additionally, a PPT drive link (if provided) is stored in Firestore.
 */
app.post("/registrations", upload.single("abstractFile"), async (req, res) => {
  try {
    // Copy all form fields from req.body.
    const registrationData = { ...req.body };

    // If a file was uploaded, upload it to Firebase Storage.
    if (req.file) {
      const fileName = `abstracts/${Date.now()}_${req.file.originalname}`;
      const fileUpload = bucket.file(fileName);

      await new Promise((resolve, reject) => {
        const blobStream = fileUpload.createWriteStream({
          metadata: { contentType: req.file.mimetype },
        });
        blobStream.on("error", (error) => {
          console.error("File upload error:", error);
          reject(error);
        });
        blobStream.on("finish", () => {
          // Construct public URL for the uploaded file.
          registrationData.abstractFileUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
          resolve();
        });
        blobStream.end(req.file.buffer);
      });
    }

    // Save the registration data (including pptDriveLink if provided) to Firestore.
    const docRef = await db.collection("registrations").add(registrationData);
    res.json({ message: "Registration successful", id: docRef.id });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
