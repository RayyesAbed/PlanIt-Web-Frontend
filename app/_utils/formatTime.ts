const formatTime = (dateString: Date) => {
  const date = new Date(dateString);

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedTime;
};

export default formatTime;
