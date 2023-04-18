import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly photos?: (PhotoTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly photos: AsyncCollection<PhotoTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: string | null;
  readonly tags?: (PhotoTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: string | null;
  readonly tags: AsyncCollection<PhotoTag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo>) => MutableModel<Photo> | void): Photo;
}

type EagerPhotoTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhotoTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagId?: string | null;
  readonly photoId?: string | null;
  readonly tag: Tag;
  readonly photo: Photo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhotoTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhotoTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagId?: string | null;
  readonly photoId?: string | null;
  readonly tag: AsyncItem<Tag>;
  readonly photo: AsyncItem<Photo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PhotoTag = LazyLoading extends LazyLoadingDisabled ? EagerPhotoTag : LazyPhotoTag

export declare const PhotoTag: (new (init: ModelInit<PhotoTag>) => PhotoTag) & {
  copyOf(source: PhotoTag, mutator: (draft: MutableModel<PhotoTag>) => MutableModel<PhotoTag> | void): PhotoTag;
}