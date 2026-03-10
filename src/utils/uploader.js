import multer from "multer";
import __dirname from "./index.js";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "documents";

    if (req.baseUrl.includes("pets")) {
      folder = "pets";
    } else if (req.body.type === "profile") {
      folder = "profiles";
    }

    const path = `${__dirname}/../public/img/${folder}`;

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploader = multer({ storage });
export default uploader;
