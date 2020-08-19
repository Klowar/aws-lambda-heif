import * as shell from "shelljs";

shell.rm("-rf", "nodejs");
shell.mkdir("-p", "nodejs/node_modules");
shell.cp("-R", "dist", "nodejs/node_modules/libheif");
shell.cp("lambda.package.json", "nodejs/node_modules/libheif/package.json");
shell.cd("nodejs/node_modules/libheif");
shell.exec("yarn install");