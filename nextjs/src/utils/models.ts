export interface TweetUser {
  Id: string;

  Name: string;

  ScreenName: string;

  Location: any;

  Description: string;

  ContributorsEnabled: boolean;

  ProfileImageURL: string;

  BiggerProfileImageURL: string;

  MiniProfileImageURL: string;

  OriginalProfileImageURL: string;

  ProfileImageURLHttps: string;

  BiggerProfileImageURLHttps: string;

  MiniProfileImageURLHttps: string;

  OriginalProfileImageURLHttps: string;

  DefaultProfileImage: boolean;

  URL: string;

  Protected: boolean;

  FollowersCount: number;

  ProfileBackgroundColor: string;

  ProfileTextColor: string;

  ProfileLinkColor: string;

  ProfileSidebarFillColor: string;

  ProfileSidebarBorderColor: string;

  ProfileUseBackgroundImage: boolean;

  DefaultProfile: boolean;

  ShowAllInlineMedia: boolean;

  FriendsCount: number;

  CreatedAt: number;

  FavouritesCount: number;

  UtcOffset: number;

  TimeZone: string;

  ProfileBackgroundImageURL: string;

  ProfileBackgroundImageUrlHttps: string;

  ProfileBannerURL: string;

  ProfileBannerRetinaURL: string;

  ProfileBannerIPadURL: string;

  ProfileBannerIPadRetinaURL: string;

  ProfileBannerMobileURL: string;

  ProfileBannerMobileRetinaURL: string;

  ProfileBackgroundTiled: boolean;

  Lang: string;

  StatusesCount: number;

  GeoEnabled: boolean;

  Verified: boolean;

  Translator: boolean;

  ListedCount: number;

  FollowRequestSent: boolean;

  WithheldInCountries: any[];
}

export interface Tweet {
  Text: string;

  Source: string;

  Truncated: boolean;

  InReplyToStatusId: number;

  InReplyToUserId: number;

  InReplyToScreenName: string | null;

  GeoLocation: any;

  Place: any;

  Favorited: boolean;

  Retweeted: boolean;

  FavoriteCount: number;

  Retweet: false;

  Contributors: any[];

  RetweetCount: number;

  RetweetedByMe: boolean;

  CurrentUserRetweetId: string;

  PossiblySensitive: boolean;

  Lang: string;

  WithheldInCountries: any[];

  HashtagEntities: any[];

  UserMentionEntities: any[];

  MediaEntities: any[];

  SymbolEntities: any[];

  URLEntities: any[];

  User: TweetUser;

  CreatedAt: number;
}
