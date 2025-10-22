import type { ProjectDetailKey } from './translations';

export const projectLinks: Record<ProjectDetailKey, { slug: string; code: string }> = {
  job: {
    slug: 'job-application-tracking',
    code: 'https://github.com/Hugo-Rodrigues-Dev/job-application-tracking-spreadsheet'
  },
  python: {
    slug: 'python-learning-repository',
    code: 'https://github.com/Hugo-Rodrigues-Dev/python-learning'
  },
  iot: {
    slug: 'iot-android-app',
    code: 'https://github.com/Hugo-Rodrigues-Dev/iot-android-app'
  }
} as const;

export type ProjectKey = keyof typeof projectLinks;
