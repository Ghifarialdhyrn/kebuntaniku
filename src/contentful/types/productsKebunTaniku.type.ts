import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProductsKebunTanikuFields {
  productName: EntryFieldTypes.Symbol;
  categories: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  rating: EntryFieldTypes.Integer;
  soldItems: EntryFieldTypes.Symbol;
  price: EntryFieldTypes.Number;
}

export type TypeProductsKebunTanikuSkeleton = EntrySkeletonType<
  TypeProductsKebunTanikuFields,
  "productsKebunTaniku"
>;
export type TypeProductsKebunTaniku<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProductsKebunTanikuSkeleton, Modifiers, Locales>;
