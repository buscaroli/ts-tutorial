import { CsvFileReader } from "./CsvFileReader"
import { MatchReader } from "./MatchReader"
import { ConsoleReport } from "./Reporters/ConsoleReport"
import { WinsAnalysis } from "./Analyzers/WinsAnalysis"
import { Summary } from "./Summary"

// Create an object that satisfies the DataReader interface
const reader = new CsvFileReader("football.csv")

// Create an instance of MatchReader and pass it something that satisfies the DataReader interface
const matchesReader = new MatchReader(reader)
matchesReader.load()

// Build and Show the data
const summary = new Summary(
  new WinsAnalysis("Bournemouth"),
  new ConsoleReport()
)

summary.buildAndPrintReport(matchesReader.matches)
