import { createClient, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const sanityConfig = {
  projectId: 'rv58nwjp',
  dataset: 'post',
  apiVersion: 'v1',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(sanityConfig)
export const urlForImage = (src: any) =>
  createImageUrlBuilder(sanityConfig).image(src)
export const currentUser = createCurrentUserHook(sanityConfig)
