interface InfoItemProps {
  title: string;
  content?: string;
}

const InfoItem = ({ title, content }: InfoItemProps) => {
  return (
    <div className=" px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
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
          text-tertiary-text-light
          dark:text-tertiary-text-dark
          sm:col-span-2
          sm:mt-0
          "
      >
        {content}
      </dd>
    </div>
  );
};

export default InfoItem;
