import React from "react";

interface InfoItemProps {
  title: string;
  content?: string;
}

const InfoItem = ({ title, content }: InfoItemProps) => {
  return (
    <div className="px-0 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium leading-5 line-clamp-2 text-primary-text-dark">
        {title}
      </dt>
      <dd className="//mt-1 text-sm leading-6 line-clamp-2 text-secondary-text-dark sm:col-span-2 sm:mt-0">
        {content}
      </dd>
    </div>
  );
};

export default InfoItem;
