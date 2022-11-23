export const formatTimeElapsed = (seconds: number) => {
  const minutos = Math.floor(seconds / 60);
  seconds = seconds - (minutos * 60);

  const secString = `${seconds < 10 ? '0' + seconds : seconds}`;
  const minString = `${minutos < 10 ? '0' + minutos : minutos}`;

  return `${minString}:${secString}`;
};