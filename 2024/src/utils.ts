import fs from "fs";

export function readInputLines(file: string, {keepEmptyLines}: {keepEmptyLines: boolean } = { keepEmptyLines: false }): string[] {
  const data = fs.readFileSync(file, "utf-8");
  const lines = data.split("\n");
  if (!keepEmptyLines) {
    return lines.filter(l => l.length > 0);
  } else {
    // We always remove any trailing lines.
    while (lines.length > 0 && lines[lines.length - 1].length === 0) {
      lines.pop();
    }
    return lines;
  }
}

export function parseNumbers(line: string, { splitter }: {splitter: string} = { splitter: ' '} ): number[] {
  return line.split(splitter).filter(s => s.length > 0).map(s => parseInt(s));
}