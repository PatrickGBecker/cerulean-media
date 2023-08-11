import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bcjr23an',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  }
})
