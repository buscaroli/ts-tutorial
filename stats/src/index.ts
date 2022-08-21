import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { ConsoleReport } from "./Reporters/ConsoleReport"
import { WinsAnalysis } from "./Analyzers/WinsAnalysis"
import { Summary } from "./Summary"
import { HtmlReport } from "./Reporters/HtmlReport"

const matchesReader = MatchReader.fromCsv("football.csv")
matchesReader.load()

// Build and Show the data
const summary = new Summary(
  new WinsAnalysis("Bournemouth"),
  new ConsoleReport()
)

summary.buildAndPrintReport(matchesReader.matches)

const htmlSummary = Summary.winsAnalysisWithHtmlReport("Man United")
htmlSummary.buildAndPrintReport(matchesReader.matches)
