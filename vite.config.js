export default {
    build: {
        rollupOptions: {
          input: {
            main: 'index.html',
            portfolio: 'portfolio.html',
            projects: 'projects.html',
            about: 'about.html'
          }
        }
      },
    optimizeDeps: {
      include: ['three']
    }

  }