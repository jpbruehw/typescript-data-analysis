/** function to convert a string to a datetime
 *  date format is DD/MM/YYYY
 *  we subtract 1 from dateParts[1] because the
 *  dates are zero indexed in JS so 0 is Jan etc.
 *  final format is YYYY-MM-DD
 */
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((val: string) => {
    return parseInt(val);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
