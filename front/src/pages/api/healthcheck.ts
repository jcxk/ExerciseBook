import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { uptime } from 'process';

const fn = (_req: NextApiRequest, res: NextApiResponse): void => {

  // Printing os.uptime() value
  let ut_sec = uptime();
  let ut_min = ut_sec / 60;
  let ut_hour = ut_min / 60;

  ut_sec = Math.floor(ut_sec);
  ut_min = Math.floor(ut_min);
  ut_hour = Math.floor(ut_hour);

  ut_hour = ut_hour % 60;
  ut_min = ut_min % 60;
  ut_sec = ut_sec % 60;

  const uptimeStr =
    ut_hour + ` Hour(s) ` + ut_min + ` minute(s) and ` + ut_sec + ` second(s)`;
  res.status(200).json({
    buildId: process.env.BUILD_ID,
    uptime: uptimeStr,
  });
};

export default fn;
