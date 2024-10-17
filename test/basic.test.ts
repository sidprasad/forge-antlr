import { ForgeUtil } from "../forgeUtil";
import * as fs from 'fs';
import * as path from 'path';

describe('ForgeUtil', () => {
    it('should be able to parse a simple Forge file.', () => {
        // Construct the path to the Forge file relative to the current directory
        const forgeFilePath = path.join(__dirname, 'examples', 'justsigs.frg');

        const forgeSpec = fs.readFileSync(forgeFilePath, 'utf8');
        const forgeUtil = new ForgeUtil(forgeSpec);
        forgeUtil.processSpec();
        
        let sigs = forgeUtil.getSigs();
        expect(sigs.length).toBe(6);

        // And now we should check the actual sigs
    });


});