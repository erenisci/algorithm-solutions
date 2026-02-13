function whosOnline(friends) {
  if (friends.length === 0) return {};

  const result = {};

  for (const { username, status, lastActivity } of friends) {
    if (status === 'offline') {
      result.offline ??= [];
      result.offline.push(username);
    } else if (lastActivity > 10) {
      result.away ??= [];
      result.away.push(username);
    } else {
      result.online ??= [];
      result.online.push(username);
    }
  }

  return result;
}
