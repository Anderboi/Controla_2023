interface InfoItemProps {
  title: string;
  content?: string;
  icon?: React.ReactElement;
}

const InfoItem = ({ title, content, icon }: InfoItemProps) => {
  return (
    <div className="flex items-center w-full">
      {icon && (
        <span className="dark:text-secondary-text-dark text-secondary-text-light">
          {icon}
        </span>
      )}
      <div className=" px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 w-full">
        <dt
          className="
          line-clamp-2
          text-[15px]
          text-primary-text-light
          dark:text-primary-text-dark
          "
        >
          {title}
        </dt>
        <dd
          className="
          text-balance
          line-clamp-2
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
