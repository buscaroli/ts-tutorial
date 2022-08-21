export const dateStringtoDate = (dateString: string): Date => {
  const [day, month, year]: number[] = dateString
    .split("/")
    .map((value: string): number => {
      return parseInt(value)
    })
  return new Date(year, month - 1, day + 1)
}
