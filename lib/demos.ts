export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'React Examples',
    items: [
      {
        name: 'Counter',
        slug: 'counter',
        description: 'Create simple react counter',
      },
      {
        name: 'Tic tac toe',
        slug: 'tic-tac-toe',
        description: 'Create react tic tac toe game',
      },
      {
        name: 'List',
        slug: 'list',
        description: 'Create React list',
      },
      {
        name: 'Color Dropdown',
        slug: 'color-dropdown',
        description: 'Create React color dropdown',
      },
      {
        name: 'Live Paragraph',
        slug: 'live-paragraph',
        description: 'Create React Live Paragraph',
      },
      {
        name: 'Quiz Builder',
        slug: 'quiz-builder',
        description: 'Create React Quiz Builder',
      },
      {
        name: 'Weather Dashboard',
        slug: 'weather-dashboard',
        description: 'Create React Weather Dashboard',
      },
      {
        name: 'Letter Tiles',
        slug: 'letter-tiles',
        description: 'Create React Letter Tiles',
      },
      {
        name: 'Context API',
        slug: 'context-api',
        description: 'Create React Context API',
      },
      {
        name: 'Phone Book',
        slug: 'phone-book',
        description: 'Create React Phone Book',
      },
    ],
  },
  {
    name: 'Custom Hooks',
    items: [
      {
        name: 'useFetch',
        slug: 'useFetch',
        description: 'Create custom useFetch hook',
      },
      {
        name: 'useDebounce',
        slug: 'useDebounce',
        description: 'Create custom useDebounce hook',
      },
    ],
  },
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Parallel Routes',
        slug: 'parallel-routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'Not Found',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Static Data',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Dynamic Data',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'Patterns',
        slug: 'patterns',
        description: 'A collection of useful App Router patterns',
      },
      {
        name: 'Client Component Hooks',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
];
