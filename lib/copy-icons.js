const fs = require('fs-extra');
const iconsMap = require('../map.json');

// File destination.txt will be created or overwritten by default.




for (let i = 0; i < iconsMap.length; i++) {
    const icon = iconsMap[i];
    if (icon.path) {
    
        fs.ensureDirSync(`./dist/${icon.path.substring(0, icon.path.lastIndexOf("/"))}`);
        fs.copyFile(icon.path, `./dist/${icon.path}`, (err) => {
            if (err) {
                console.log(err.stack);
                // throw err
            };
            // console.log(icon.path);
          });
    }
}