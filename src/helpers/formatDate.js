export const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";

  let year;
  let month;
  let day;

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    [day, month, year] = dateStr.split("/");
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    [year, month, day] = dateStr.split("-");
  } else {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return "N/A";

    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  }

  const date = new Date(`${year}-${month}-${day}`);

  if (Number.isNaN(date.getTime())) return "N/A";

  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
