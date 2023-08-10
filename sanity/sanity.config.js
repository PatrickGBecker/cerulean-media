import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'cerulean-media',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: '2021-03-25',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
