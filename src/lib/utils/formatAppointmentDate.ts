type AppointmentInfo = {
  date: string;
  status: 'upcoming' | 'passed';
  longDate: string;
  formattedTime: string;
};

function formatAppointmentDate(appointmentStartAt: string): AppointmentInfo {
  const now = new Date();
  const startDate = new Date(appointmentStartAt);

  const timeZone = 'Africa/Lagos';

  // Time: 2:32PM (no space before AM/PM)
  const optionsTimeShort: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone,
  };

  const time = startDate
    .toLocaleTimeString('en-US', optionsTimeShort)
    .replace(' ', '')
    .toUpperCase();

  // Date: Apr. 29, 2025
  const optionsDateShort: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone,
  };

  const formattedDate = startDate.toLocaleDateString('en-US', optionsDateShort);

  // Long date: Tue, Mar 12, 2025
  const optionsLongDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone,
  };

  const longDate = startDate.toLocaleDateString('en-US', optionsLongDate);

  // Formatted time: 3:00 PM
  const formattedTime = startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone,
  });

  const status: 'upcoming' | 'passed' = startDate > now ? 'upcoming' : 'passed';

  return {
    date: `${time} WAT | ${formattedDate}`,
    status,
    longDate,
    formattedTime,
  };
}



export default formatAppointmentDate
