import { ForgeUtil } from "../src";
import * as fs from 'fs';
import * as path from 'path';




function get_text_block(fromRow: number, toRow: number, fromColumn: number, toColumn: number, text: string): string {
	let lines = text.split("\n");
	let block = "";
	const sameRow = fromRow == toRow;
	for (let i = fromRow; i <= toRow; i++) {
		let line = lines[i - 1];
		if (i == fromRow) {
			if (sameRow) {
				block += line.substring(fromColumn - 1, toColumn + 1);  // TODO: THis weems wrong right?
			}
			else {
				block += line.substring(fromColumn - 1);
			}
		} else if (i == toRow) {
			block += line.substring(0, toColumn + 1); // DO WE NEED TO ADD 1?
		} else {
			block += line;
		}

        if(i < toRow) {
		    block += "\n";
        }
	}
	return block;
}



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

    it (' can extract basic tests.',  () => {
               // Construct the path to the Forge file relative to the current directory
        const forgeFilePath = path.join(__dirname, 'examples', 'differenttests.frg');
        const forgeSpec = fs.readFileSync(forgeFilePath, 'utf8');
        const forgeUtil = new ForgeUtil(forgeSpec);
        forgeUtil.processSpec();
        
        let tests = forgeUtil.getTests();
        expect(tests.length).toBe(4);

        let examples = forgeUtil.getExamples();
        expect(examples.length).toBe(2);

        let assertions = forgeUtil.getAssertions();
        expect(assertions.length).toBe(3);

        let quantifiedAssertions = forgeUtil.getQuantifiedAssertions();
        expect(quantifiedAssertions.length).toBe(2);

        let consistencyAssertions = forgeUtil.getConsistencyAssertions();
        expect(consistencyAssertions.length).toBe(2);
    });

    it (' canparse examples.',  () => {
        // Construct the path to the Forge file relative to the current directory
    const forgeFilePath = path.join(__dirname, 'examples', 'exampleTests.frg');
    const forgeSpec = fs.readFileSync(forgeFilePath, 'utf8');
    const forgeUtil = new ForgeUtil(forgeSpec);
    forgeUtil.processSpec();
    
    let tests = forgeUtil.getTests();
    expect(tests.length).toBe(0);

    let examples = forgeUtil.getExamples();
    expect(examples.length).toBe(1);
    

        let fromCol = examples[0].startColumn;
        let fromRow = examples[0].startRow;
        let toCol = examples[0].endColumn
        let toRow = examples[0].endRow;
        let exampleBlock = get_text_block(fromRow, toRow, fromCol, toCol, forgeSpec);

        let testExpr = examples[0].testExpr;
        let testExprBlock = get_text_block(testExpr.startRow, testExpr.endRow, testExpr.startColumn, testExpr.endColumn, forgeSpec).trim();

        expect(testExprBlock).toBe("{not isDirectedTree}");

    });

});