import fs from "fs/promises"

async function writeLogs(userAgent:string) {
  try {
    const dateTime = new Date()
    const dateStamp = dateTime.toLocaleDateString()
    const timeStamp = dateTime.toLocaleTimeString()
    const textLog = `Request on ${dateStamp} at ${timeStamp} from ${userAgent}\n`
    await fs.writeFile(`${process.cwd()}/logs/logs.txt`,textLog,{encoding: "utf-8", flag:"a"});
  } catch (err) {
    console.log(err);
  }
}
export {writeLogs}