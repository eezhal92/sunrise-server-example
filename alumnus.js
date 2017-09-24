const faker = require('faker');

const alumnus = [];
const alumnusCount = 21;

for (let i = 0; i < alumnusCount; i++) {
  alumnus.push({
    id: i + 1,
    name: faker.name.findName(),
    excerpt: faker.lorem.words(),
    photo: faker.image.avatar(),
  });
}

module.exports = function paginateAlumnus({ page = 1, limit = 9 } = {}) {
  const begin = (page * limit) - limit;
  const end = begin + limit;
  const total = alumnus.length;
  const result = alumnus.slice(begin, end);

  const isThereNextAlumni = alumnus.slice(end, end + 1).length;

  const nextPage = isThereNextAlumni ? page + 1 : null;
  const prevPage = page - 1 === 0 ? null : page - 1;

  return {
    page,
    limit,
    total,
    result,
    nextPage,
    prevPage,
  };
};
