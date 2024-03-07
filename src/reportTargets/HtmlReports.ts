import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
    </div    
    `;

    /** use fs file to write a file
     *  we need to pass in a file to the path
     *  where we want the file to output
     *  and what we want to actually output
     */
    fs.writeFileSync("report.html", html);
  }
}
