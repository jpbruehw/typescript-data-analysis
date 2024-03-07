import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReports";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  /** static method to create a team report and instance
   *  of summary class
   *  now we don't need to call the method to create
   *  the summary class instance we can just use the
   *  static method and it will do that for us
   */
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
