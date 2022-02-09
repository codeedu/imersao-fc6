import { NextPage } from "next";
import useSWR from "swr";
import { Title } from "../components/Title";
import http from "../utils/http";
import { Tweet as TweetModel } from "../utils/models";
import { Tweet } from "../components/Tweet";

const fetcher = (url: string) => http.get(url).then((res) => res.data);

const TweetsPage: NextPage = () => {
  const { data: tweets } = useSWR<TweetModel[]>("tweets", fetcher, {
    refreshInterval: 5000,
  });

  return (
    <div>
      <Title>Tweets</Title>
      {tweets?.map((t, key) => (
        <Tweet key={key} tweet={t} />
      ))}
    </div>
  );
};

export default TweetsPage;
