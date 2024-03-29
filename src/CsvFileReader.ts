import fs from "fs";

export class CsvFileReader {
  /** Declare data as array of arrays of strings */
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
