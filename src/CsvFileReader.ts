import fs from "fs";
import { MatchResult } from "./MatchResult";

/** create tuple to define a custom type for
 *  the return value of the conversion
 *  to do this we need to declare it as a type
 */
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader<TypeOfData> {
  /** Declare data as array of arrays of strings */
  data: TypeOfData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
