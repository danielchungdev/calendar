import { getDaySuffix } from './getDaySuffix';

export const stringDateToFormalDate = (dateString: string) => {
  const [year, month, day] = dateString.split("/");
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '.');
  const [dayNumber, weekday] = formattedDate.split(' ');
  const dayWithSuffix = `${dayNumber}${getDaySuffix(parseInt(dayNumber))}`;
  return `${weekday} ${dayWithSuffix}`;
}