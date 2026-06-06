export function formatScheduleToLocal(schedule) {
  try {
    if (!schedule?.date || !schedule?.time) return null;

    let year, month, day, hour, minute;

    /* ---------- DATE PARSING ---------- */

    // ISO: YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(schedule.date)) {
      [year, month, day] = schedule.date.split("-").map(Number);
    }
    // US: MM/DD/YYYY
    else if (/^\d{2}\/\d{2}\/\d{4}$/.test(schedule.date)) {
      [month, day, year] = schedule.date.split("/").map(Number);
    } else {
      return null;
    }

    /* ---------- TIME PARSING ---------- */

    // 12h: 04:51 AM
    if (/^\d{1,2}:\d{2}\s?(AM|PM)$/i.test(schedule.time)) {
      const [time, modifier] = schedule.time.split(" ");
      [hour, minute] = time.split(":").map(Number);

      if (modifier.toUpperCase() === "PM" && hour < 12) hour += 12;
      if (modifier.toUpperCase() === "AM" && hour === 12) hour = 0;
    }
    // 24h: 00:00
    else if (/^\d{2}:\d{2}$/.test(schedule.time)) {
      [hour, minute] = schedule.time.split(":").map(Number);
    } else {
      return null;
    }

    if ([year, month, day, hour, minute].some(isNaN)) return null;

    /* ---------- UTC DATE ---------- */
    const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute));
    if (isNaN(utcDate.getTime())) return null;

    /* ---------- LOCAL FORMAT ---------- */
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone,
      }).format(utcDate),

      time: new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone,
      }).format(utcDate),

      full: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone,
      }).format(utcDate),
    };
  } catch {
    return null; // ✅ React will NEVER crash
  }
}
