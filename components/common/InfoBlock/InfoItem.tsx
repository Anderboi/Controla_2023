interface InfoItemProps {
  title: string;
  content?: string;
  icon?: React.ReactElement;
}

const InfoItem = ({ title, content, icon }: InfoItemProps) => {
  return (
    <div className="flex w-full items-center">
      {icon && (
        <span className="text-secondary-text-light dark:text-secondary-text-dark">
          {icon}
        </span>
      )}
      <div className=" w-full px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt
          className="
          line-clamp-2
          text-md
          text-primary-text-light
          dark:text-primary-text-dark
          "
        >
          {title}
        </dt>
        <dd
          className="
          line-clamp-2
          text-balance
          text-sm
          text-secondary-text-light
          dark:text-secondary-text-dark
          sm:col-span-2
          sm:mt-0
          "
        >
          {content}
        </dd>
      </div>
    </div>
  );
};

export default InfoItem;
