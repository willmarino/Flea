
export const objToDate = (obj) => {
  let creationDate = obj.created_at.slice(0,10);
  let creationDateParts = creationDate.split("-");
  let year = creationDateParts[0];
  let month = creationDateParts[1] - 1;
  let day = creationDateParts[2];
  return {year, month, day};
}