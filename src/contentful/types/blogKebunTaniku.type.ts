import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogKebunTanikuFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  banner: EntryFieldTypes.AssetLink;
  author: EntryFieldTypes.Symbol;
  categories: EntryFieldTypes.Symbol;
  date: EntryFieldTypes.Date;
}

export type TypeBlogKebunTanikuSkeleton = EntrySkeletonType<
  TypeBlogKebunTanikuFields,
  "blogKebunTaniku"
>;
export type TypeBlogKebunTaniku<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogKebunTanikuSkeleton, Modifiers, Locales>;
