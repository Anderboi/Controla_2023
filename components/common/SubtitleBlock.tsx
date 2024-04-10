const SubtitleBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h2 className="scroll-m-20 px-4 text-lg font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SubtitleBlock;
