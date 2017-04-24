const Chance = require('chance')
const c = new Chance()

var content = {
    path: '/contents/:id',
    method: 'GET',
    template: {
        id: (params, query, body) => params.id ? params.id : c.natural(),
        title: c.sentence(),
        description: c.sentence(),
        thumbnail: 'j8rZRtONC.png'
    }
}

var contents = {
    path: '/contents',
    method: 'GET',
    collection: true,
    template: content.template,
      container: {
        data: (params, query, data) => data
    }
}

module.exports = [content, contents]
