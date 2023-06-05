import { parseISO, formatDistanceToNow } from 'date-fns';

import React from 'react';

export default function TimeAgo({ timestamp }) {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = timePeriod;
  }
  return (
    <div title={timestamp}>
      &nbsp; <i>time: {timeAgo} ago</i>
    </div>
  );
}
