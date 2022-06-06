module.exports = {
   'exercise-book-api': {
     input: {
       validation: true,
       target: 'http://localhost:3001/api-json'
     },
     output: {
       mode: 'single',
       workspace: 'src/lib/data',
       target: './exercise-boook-api.ts',
       client: 'react-query',
       prettier: true
     },
   },
 };
