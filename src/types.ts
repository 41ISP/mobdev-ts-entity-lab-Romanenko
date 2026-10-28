export interface Root {
  data: IDaum[]
  meta: IMeta
}

export interface IDaum {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  description: string
  size: number
  author: string
  UploadDate: string
  followers: string
  tags: string[]
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
  small: ISmall
  medium: IMedium
  thumbnail: IThumbnail
}

export interface ISmall {
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
}

export interface IMedium {
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
}

export interface IThumbnail {
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
