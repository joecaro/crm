export default function convertGMTDate(eventDate) {
  const date = new Date(eventDate);
  return date.setDate(date.getDate() + 1);
}
