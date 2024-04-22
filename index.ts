import chalk from "chalk";
import { argv } from "node:process";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const log = async (s: string) => {
  for (const c of s) {
    process.stdout.write(c);
    await sleep(Math.floor(Math.random() * 100));
  }
  process.stdout.write("\n");
};

const email = argv[2];
const token = argv[3];

const auth = Buffer.from(`${email}/token:${token}`, "binary").toString(
  "base64",
);

log("copy me => " + auth);
