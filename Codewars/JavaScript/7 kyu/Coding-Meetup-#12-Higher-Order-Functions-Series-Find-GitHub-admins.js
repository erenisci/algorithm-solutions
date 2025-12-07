function findAdmin(list, lang) {
  return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes');
}
