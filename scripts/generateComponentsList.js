const path = require('path');

const glob = require(`glob`);
const fileUtils = require('./utils/files');

function findPackagesFiles() {
  const rootDirectory = './';
  const directory = path.resolve(process.cwd(), rootDirectory);

  return (
    glob
      .sync(path.join(`./@storyblok-components/`, `*`, `package.json`))
      // eslint-disable-next-line global-require, import/no-dynamic-require
      .map((file) => require(path.resolve(directory, file)))
      .filter((file) => {
        if (file.name !== '@storyblok-components/docs') {
          console.log(`Component ${file.name}`);
        }
        return file.name !== '@storyblok-components/docs';
      })
  );
}

const content = findPackagesFiles();

fileUtils.createJsonFile(
  JSON.stringify(content),
  './@storyblok-components/docs/components.json'
);
