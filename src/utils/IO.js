import { readFile, writeFile } from "fs";
import path, { join} from "path";
const read = (dir) => {

  return new Promise((resolve, reject) => {
    
    readFile(join(process.cwd(), "src", "models", dir), (err, data) => {
      if (err) reject(err.message);

      resolve(JSON.parse(data));
    });
  });
};

const write = (dir, data) => {
  return new Promise((resolve, reject) => {
    writeFile(
      join(process.cwd(), "src", "models", dir),
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) reject(err.message);

        resolve(JSON.stringify(data, null, 2));
      }
    );
  });
};

export { write, read };
