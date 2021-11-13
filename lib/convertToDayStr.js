export default function convertToDayStr(date) {
  return `${new Date(date).toUTCString().split(" ")[0]} ${
    new Date(date).toUTCString().split(" ")[2]
  } ${new Date(date).toUTCString().split(" ")[1]} `;
}
