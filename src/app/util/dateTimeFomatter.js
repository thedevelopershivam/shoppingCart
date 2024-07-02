
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    // weekday: 'long', // e.g., Tuesday
    year: 'numeric', // e.g., 2024
    month: 'long', // e.g., June
    day: 'numeric', // e.g., 11
    hour: 'numeric', // e.g., 7
    minute: 'numeric', // e.g., 21
    second: 'numeric', // e.g., 42
    timeZoneName: 'short' // e.g., GMT
  };

  return date.toLocaleString('en-US', options);
};
