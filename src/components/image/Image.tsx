const Image = ({
  source,
  className,
  onClick,
}: {
  source: string;
  className: string;
  onClick?: (
    event: React.MouseEventHandler<HTMLImageElement> | undefined
  ) => void;
}) => {
  return (
    <img
      src={source}
      alt={`image + ${source}`}
      className={className}
      onClick={onClick}
    />
  );
};
export default Image;
