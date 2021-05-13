const path = require('path');

const glob = require(`glob`);
const fileUtils = require('./utils/files');

function findPackagesFiles() {
  const rootDirectory = './';
  const directory = path.resolve(process.cwd(), rootDirectory);

  const componentSchemaList = glob
    .sync(path.join(`./@storyblok-components/`, `**`, `*.sb.js`))
    // eslint-disable-next-line global-require, import/no-dynamic-require
    .map((file) => ({
      name: file.split('/')[1],
      data: require(path.resolve(directory, file)), // eslint-disable-line
    }))
    .filter((file) => {
      if (file.name !== '@storyblok-components/utils') {
        console.log(`Component ${file.name}`);
      }
      return file.name !== '@storyblok-components/utils';
    });

  const normalizedSchemaComponentList = {};
  componentSchemaList.forEach((component) => {
    normalizedSchemaComponentList[component.name] = {
      ...normalizedSchemaComponentList[component.name],
      [component.data.name]: component.data,
    };
  });

  return normalizedSchemaComponentList;
}

const content = findPackagesFiles();

fileUtils.createJsonFile(
  JSON.stringify(content),
  './@docs/componentSchemaList.json'
);
