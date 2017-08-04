const fs = require('fs');

function createDirectoryContents(templatePath, newProjectPath, currentDir) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originFilePath = `${templatePath}/${file}`;
    const stats          = fs.statSync(originFilePath);

    if (file === '.gitkeep') {
      return;
    }

    if (stats.isFile()) {
      const contents = fs.readFileSync(originFilePath, 'utf8');
      const writePath = `${currentDir}/${newProjectPath}/${file}`;

      fs.writeFileSync(writePath, contents, 'utf8');
    }

    if (stats.isDirectory()) {
      fs.mkdirSync(`${currentDir}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, currentDir);
    }
  });
}

exports.createDirectoryContents = createDirectoryContents;
