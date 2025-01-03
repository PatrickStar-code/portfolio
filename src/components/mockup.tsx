import Safari from "./ui/safari";

export default function MockupSafari({
  url,
  imageSrc,
}: {
  url?: string;
  imageSrc?: string;
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Safari url={url} className="size-full" imageSrc={imageSrc} />
    </a>
  );
}
