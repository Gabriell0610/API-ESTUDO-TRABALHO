import multer from "multer";
import { resolve } from "path"; // importante para lidar com paths
import crypto from "crypto"; // serve para gerar hashes

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (req, file, cb) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          return cb(null, fileName);
        },
      }),
    };
  },
};
