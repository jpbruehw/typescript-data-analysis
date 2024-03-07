import { MatchResult } from "./MatchResult";
/** create tuple to define a custom type for
 *  the return value of the conversion
 *  to do this we need to declare it as a type
 */
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
