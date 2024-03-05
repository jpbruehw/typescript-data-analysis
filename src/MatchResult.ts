/** a better approach would be to use an enum
 *  this way we can define all the possible outcomes
 *  and then assign them dynamically
 */
export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
