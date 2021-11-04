const fs = require("fs");

async function listDir(testFolder: string): Promise<string[]> {
  const result: string[] = [];
  try {
    const files = await fs.promises.readdir(testFolder);
    files.forEach((file: string) => result.push(file));
    return result;
  } catch (err) {
    console.error("Error occured while reading directory!", err);
    return [];
  }
}

export default listDir;
