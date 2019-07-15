function formatTime(time) {
  let days = Math.floor(time / 1440);
  let hours = Math.floor((time % 1440) / 60);
  let minutes = Math.floor((time % 1440) % 60);

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}

formatTime(120);