/**
 * Created by charlie on 7/18/16.
 */

var elfUtils = require('../index').elfUtils;

describe('Elvenware ElfUtils Basics Suite', function() {
    it('expects extension to png', function() {
        var extension = elfUtils.getExtension('foo.png');
        expect(extension).toBe('png');
    });

    it('expects extension to jpg', function() {
        var extension = elfUtils.getExtension('/foo/bar/foo.jpg');
        expect(extension).toBe('jpg');
    });

    it('expects to swap extension from md to html', function() {
        var newFileName = elfUtils.swapExtension('bar.md', '.html');
        expect(newFileName).toBe('bar.html');
    });

    it('expects padnumber 5,3,"0" to be 005', function() {
        var result = elfUtils.padNumber(5, 3, '0');
        expect(result).toBe('005');
    });
});
