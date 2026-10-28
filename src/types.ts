export interface Root<T> {
  data: T
  meta?: IMeta
}

export interface Ihoimods {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  description?: string
  size: number
  author: string
  UploadDate: string
  followers: string
  tags: Tag[]
  image: Image
}


export interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  focalPoint: any
  width: number
  height: number
  formats: IFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface IFormats {
  small: IMedia
  medium: IMedia
  thumbnail: IMedia
}

export interface IMedia {
    id: number
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
  alternativeText?: string
}

export interface IMeta {
  pagination: IPagination
}

export interface IPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
export const TAGS = ["AlternativeHistory", "Events", "Gameplay", "NationalFocuses"] as const
export type Tag = (typeof TAGS)[number]

export const TAG_LABELS: Record<Tag, string> = {
    AlternativeHistory: "Альтернативная История",
    Events: "События",
    Gameplay: "Геймплей",
    NationalFocuses:"Национальные Фокусы"
}
export type IDaumInput = Omit<
    Ihoimods,
    "id" | "documentId" | "createdAt" | "updatedAt" | "publishedAt" | "image"
>