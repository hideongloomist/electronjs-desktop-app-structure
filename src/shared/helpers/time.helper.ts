import moment = require('moment');
export function getCurrentUtcDate(): Date {
  const utc = moment().utc();
  return new Date(
    utc.year(),
    utc.month(),
    utc.date(),
    utc.hour(),
    utc.minute(),
    utc.second(),
    utc.millisecond(),
  );
}
