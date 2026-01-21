export function formatScheduleToLocal(schedule) {
  if (!schedule?.date || !schedule?.time) return null;

  // Combine date + time into one string
  const dateTimeString = `${schedule.date} ${schedule.time}`;

  // Create Date object (browser local timezone)
  const dateObj = new Date(dateTimeString);

  if (isNaN(dateObj.getTime())) return null;

  const locale = navigator.language || "en-US";

  return {
    date: new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateObj),

    time: new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(dateObj),

    full: new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(dateObj),
  };
}
