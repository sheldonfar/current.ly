import Applications from '../constants/applications';

export default function findApplication(pathname) {
  const keys = Object.keys(Applications);
  return keys.find(name => pathname.startsWith(Applications[name].route)) || keys[0];
}
