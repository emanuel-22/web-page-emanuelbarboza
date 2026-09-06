const monthNames = {
  es: [
    "ene.",
    "feb.",
    "mar.",
    "abr.",
    "may.",
    "jun.",
    "jul.",
    "ago.",
    "sep.",
    "oct.",
    "nov.",
    "dic.",
  ],
  en: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
} as const;

export const formatDate = (
  date: string | undefined,
  locale: keyof typeof monthNames = "es"
) => {
  if (!date) return "";

  // A bare "YYYY" is a deliberately month-less date (we only know the
  // year) — handle it before going through Date, which would otherwise
  // silently assume January and misrepresent the precision we actually have.
  if (/^\d{4}$/.test(date)) return date;

  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  date = dateObj.toISOString().split("T")[0];
  if (!date) return "";

  const [year, month] = date.split("-");
  if (month) {
    return `${monthNames[locale][parseInt(month) - 1]} ${year}`;
  }
  return year;
};


export const getCurrentYear = () => {
  return new Date().getFullYear();
};