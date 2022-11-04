export default function toDate(s) {
  const today = new Date();
  if (
    new Date(s).toUTCString().split(" ").splice(0, 4).join(" ") ===
    today.toUTCString().split(" ").splice(0, 4).join(" ")
  ) {
    return "Today";
  }
  if (
    new Date(s).toUTCString().split(" ").splice(0, 4).join(" ") ===
    new Date(Date.now() - 24 * 60 * 60 * 1000)
      .toUTCString()
      .split(" ")
      .splice(0, 4)
      .join(" ")
  ) {
    return "Yesterday";
  }
  return new Date(s).toUTCString().split(" ").splice(0, 4).join(" ");
}