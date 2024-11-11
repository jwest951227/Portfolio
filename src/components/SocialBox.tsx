import { FC } from "react";
import Link from "next/link";
import {
  DiscordHIcon,
  GithubIcon,
  TelegramHIcon,
  TwitterIcon,
} from "./SvgIcons";

const SocialBox: FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <Link href="https://twitter.com/degencap777" passHref target="_blank">
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <TwitterIcon />
        </div>
      </Link>
      <Link href="https://github.com/degencap777" passHref target="_blank">
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <GithubIcon />
        </div>
      </Link>
      {/* <Link
        href="https://discord.com/users/509387421419569152"
        passHref
        target="_blank"
      >
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <DiscordHIcon />
        </div>
      </Link> */}
      <Link href="https://t.me/degencap777" passHref target="_blank">
        <div className="w-10 h-10 flex items-center justify-center rounded-[4px] mr-2.5 card-shadow mb-2.5 shadow-item dark:bg-white dark:shadow-none">
          <TelegramHIcon />
        </div>
      </Link>
    </div>
  );
};

export default SocialBox;
