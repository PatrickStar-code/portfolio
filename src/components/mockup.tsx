import Safari from "./ui/safari";

export default function MockupSafari({
  url,
  imageSrc,
}: {
  url?: string;
  imageSrc?: string;
}) {
  return <Safari url={url} className="size-full" imageSrc={imageSrc} />;
}
