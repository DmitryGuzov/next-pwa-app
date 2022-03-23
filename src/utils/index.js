export function apiUrl(path) {
  if (!path) {
    throw new Error('Url is not defined');
  }

  if (path.startsWith('/')) {
    path = path.substring(1);
  }

  return `/api/${path}`;
}
