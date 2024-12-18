import { FC } from "react";
import { CalendarIcon } from "./SvgIcons";

interface ItemProps {
  role: string;
  from: string;
  to: string;
  description: { title: string }[];
  stack: { title: string }[];
}

const EmploymentItem: FC<ItemProps> = ({
  role,
  from,
  to,
  description,
  stack,
}) => {
  return (
    <div className="shadow-item dark:shadow-none px-5 py-6 rounded-xl overflow-hidden border-0 dark:border dark:border-gray-600">
      <p className="flex font-bold text-gray-800 dark:text-gray-200 text-lg my-2 items-center gap-2">
        <CalendarIcon />
        <span>
          {from} - {to}
        </span>
      </p>
      <p className="text-base flex items-center gap-1 font-bold text-gray-800 dark:text-gray-400">
        &nbsp;&nbsp;&nbsp;&nbsp;{role}
      </p>
      {description.map((item, key) => (
        <p className="py-3 text-lg md:text-lg" key={key}>
          {item.title}
        </p>
      ))}
      <ul className="flex flex-wrap ml-5 gap-2 list-disc mt-2">
        {stack.map((item, key) => (
          <li key={key} className="text-xs pr-8 font-semibold">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmploymentItem;
