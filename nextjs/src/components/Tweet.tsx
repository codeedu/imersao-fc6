import Image from "next/image";
import * as React from "react";
import { Tweet as TweetModel } from "../utils/models";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt-PT.json";

TimeAgo.addDefaultLocale(pt);
const timeAgo = new TimeAgo("pt-PT");

type TweetProps = {
  tweet: TweetModel;
};
export const Tweet: React.FunctionComponent<TweetProps> = (props) => {
  const { tweet } = props;
  return (
    <>
      <div className="border-b" />
      <div className="flex p-4 pb-0">
        <div className="flex items-center">
          <div className="h-10 w-10 relative">
            <Image
              className="rounded-full"
              src={tweet.User.BiggerProfileImageURLHttps}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 font-medium text-black dark:text-white">
              {tweet.User.Name}
              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                @{tweet.User.ScreenName} . {timeAgo.format(tweet.CreatedAt)}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="pl-16">
        <p className="text-black dark:text-white">{tweet.Text}</p>
      </div>
      <div className="mb-4" />
    </>
  );
};
