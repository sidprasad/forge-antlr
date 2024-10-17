import { ForgeUtil } from "../forgeUtil";
import * as fs from 'fs';
import * as path from 'path';

describe('ForgeUtil', () => {
    it(' can parse SIGS.', () => {
        // Construct the path to the Forge file relative to the current directory
        const forgeFilePath = path.join(__dirname, 'examples', 'justsigs.frg');

        const forgeSpec = fs.readFileSync(forgeFilePath, 'utf8');
        const forgeUtil = new ForgeUtil(forgeSpec);
        forgeUtil.processSpec();
        
        let sigs = forgeUtil.getSigs();
        expect(sigs.length).toBe(6);

        // And now we should check the actual sigs
    });


    it(' can parse predicates.', () => {
        // Construct the path to the Forge file relative to the current directory
        const forgeFilePath = path.join(__dirname, 'examples', 'preds.frg');

        const forgeSpec = fs.readFileSync(forgeFilePath, 'utf8');
        const forgeUtil = new ForgeUtil(forgeSpec);
        forgeUtil.processSpec();
        
        let preds = forgeUtil.getPreds();
        expect(preds.length).toBe(3);

        // And now we should check the actual preds

        expect(preds[0].name).toBe('p1');


        expect(preds[1].name).toBe('p2');
        /*
            TODO: Check the parameters and body here 
        */
        expect(preds[2].name).toBe('p3');

    });


});