export default function myImageLoader({ src }: { src: string }) {
  if (src.startsWith('/')) {
    return `/Cresent-technosoft${src}`;
  }
  return src;
}