import { TagCompiler } from './tag';

const TYPES = {
    html: '<!DOCTYPE html>',
    xml: '<?xml version="1.0" encoding="utf-8" ?>',
    transitional: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"' +
        ' "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
    strict: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" ' +
        '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
    frameset: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" ' +
        '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">',
    1.1: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" ' +
        '"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">',
    basic: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" ' +
        '"http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">',
    mobile: '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" ' +
        '"http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'
};

export class DoctypeCompiler extends TagCompiler {
    compile (context, tag) {
        let type = 'html';
        this.startIndent(context, tag);
        if (tag.attributeGroups.length) {
            const value = tag.attributeGroups[0].attributes[0].value[0];
            if (value.minor === 'quoted') {
                context.push(`<!DOCTYPE ${value.value}>`);
                return;
            }
            type = value.value;
        }
        context.push(TYPES[type]);
    }
}
