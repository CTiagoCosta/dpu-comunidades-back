import multer from "multer";
import path from "path";
import crypto from "crypto";

// Define destino e nome do arquivo
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "uploads"),
  filename: (req, file, callback) => {
    const hash = crypto.randomBytes(6).toString("hex");
    const filename = `${hash}-${file.originalname}`;
    callback(null, filename);
  }
});

const upload = multer({ storage });

export default upload;
