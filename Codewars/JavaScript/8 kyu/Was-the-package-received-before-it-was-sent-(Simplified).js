function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  return start - tz_from + duration + tz_to < 0;
}
