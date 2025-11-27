export const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";

  const [day, month, year] = dateStr.split("/");
  const date = new Date(`${year}-${month}-${day}`);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
