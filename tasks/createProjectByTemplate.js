import fs   from 'fs';
import _    from 'lodash';

const CURR_DIR     = process.cwd();
const PROJECT_NAME = process.argv[1];

export default function run() {
  console.log(CURR_DIR, PROJECT_NAME);
}
