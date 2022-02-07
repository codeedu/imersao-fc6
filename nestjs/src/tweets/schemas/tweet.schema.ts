import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Int32 } from 'mongodb';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class TweetUser {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  Id: string;
  @Prop()
  Name: string;
  @Prop()
  ScreenName: string;
  @Prop({ type: MongooseSchema.Types.Mixed })
  Location: any;
  @Prop()
  Description: string;
  @Prop({ type: Boolean })
  ContributorsEnabled: boolean;
  @Prop()
  ProfileImageURL: string;
  @Prop()
  BiggerProfileImageURL: string;
  @Prop()
  MiniProfileImageURL: string;
  @Prop()
  OriginalProfileImageURL: string;
  @Prop()
  ProfileImageURLHttps: string;
  @Prop()
  BiggerProfileImageURLHttps: string;
  @Prop()
  MiniProfileImageURLHttps: string;
  @Prop()
  OriginalProfileImageURLHttps: string;
  @Prop({ type: Boolean })
  DefaultProfileImage: boolean;
  @Prop()
  URL: string;
  @Prop({ type: Boolean })
  Protected: boolean;
  @Prop()
  FollowersCount: number;
  @Prop()
  ProfileBackgroundColor: string;
  @Prop()
  ProfileTextColor: string;
  @Prop()
  ProfileLinkColor: string;
  @Prop()
  ProfileSidebarFillColor: string;
  @Prop()
  ProfileSidebarBorderColor: string;
  @Prop({ type: Boolean })
  ProfileUseBackgroundImage: boolean;
  @Prop({ type: Boolean })
  DefaultProfile: boolean;
  @Prop({ type: Boolean })
  ShowAllInlineMedia: boolean;
  @Prop()
  FriendsCount: number;
  @Prop()
  CreatedAt: number;
  @Prop()
  FavouritesCount: number;
  @Prop()
  UtcOffset: number;
  @Prop()
  TimeZone: string;
  @Prop()
  ProfileBackgroundImageURL: string;
  @Prop()
  ProfileBackgroundImageUrlHttps: string;
  @Prop()
  ProfileBannerURL: string;
  @Prop()
  ProfileBannerRetinaURL: string;
  @Prop()
  ProfileBannerIPadURL: string;
  @Prop()
  ProfileBannerIPadRetinaURL: string;
  @Prop()
  ProfileBannerMobileURL: string;
  @Prop()
  ProfileBannerMobileRetinaURL: string;
  @Prop()
  ProfileBackgroundTiled: boolean;
  @Prop()
  Lang: string;
  @Prop()
  StatusesCount: number;
  @Prop({ type: Boolean })
  GeoEnabled: boolean;
  @Prop({ type: Boolean })
  Verified: boolean;
  @Prop({ type: Boolean })
  Translator: boolean;
  @Prop({ type: Boolean })
  ListedCount: number;
  @Prop()
  FollowRequestSent: boolean;
  @Prop()
  WithheldInCountries: any[];
}

@Schema()
export class Tweet {
  @Prop()
  Text: string;

  @Prop()
  Source: string;

  @Prop({ type: Boolean })
  Truncated: boolean;

  @Prop({ type: MongooseSchema.Types.Number })
  InReplyToStatusId: number;

  @Prop({ type: MongooseSchema.Types.Number })
  InReplyToUserId: number;

  @Prop(String)
  InReplyToScreenName: string | null;

  @Prop({ type: MongooseSchema.Types.Mixed })
  GeoLocation: any;

  @Prop({ type: MongooseSchema.Types.Mixed })
  Place: any;

  @Prop({ type: Boolean })
  Favorited: boolean;
  @Prop({ type: Boolean })
  Retweeted: boolean;

  @Prop(Int32)
  FavoriteCount: number;

  @Prop({ type: Boolean })
  Retweet: false;
  @Prop()
  Contributors: any[];
  @Prop(Int32)
  RetweetCount: number;
  @Prop({ type: Boolean })
  RetweetedByMe: boolean;
  @Prop()
  CurrentUserRetweetId: string;
  @Prop({ type: Boolean })
  PossiblySensitive: boolean;
  @Prop()
  Lang: string;
  @Prop()
  WithheldInCountries: any[];
  @Prop()
  HashtagEntities: any[];
  @Prop()
  UserMentionEntities: any[];
  @Prop()
  MediaEntities: any[];
  @Prop()
  SymbolEntities: any[];
  @Prop()
  URLEntities: any[];

  @Prop()
  User: TweetUser;

  @Prop()
  CreatedAt: number;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);


//vendo novos tweets que chegaram no banco de dados

//10 novos tweets chegarem

//enviar um novo e-mail para uma listinha