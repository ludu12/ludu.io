// Based on https://www.npmjs.com/package/clsx
import { clsx } from '../utils';

describe('clsx', () => {
    it('should combine strings', () => {
        expect(clsx('foo', 'bar', 'baz')).toEqual('foo bar baz');
        expect(clsx('foo', 1, 'baz')).toEqual('foo baz');
        expect(
            clsx('foo', 'bar', () => {
                // unimplemented
            })
        ).toEqual('foo bar');
    });

    it('should combine objects', () => {
        expect(clsx({ foo: true, bar: false, baz: true })).toEqual('foo baz');
        expect(clsx({ foo: true }, { bar: true }, { baz: true })).toEqual('foo bar baz');
        expect(clsx({ foo: true }, { bar: false }, null, { '--foobar': 'hello' })).toEqual('foo --foobar');
    });

    it('should combine arrays', () => {
        expect(clsx(['foo', 0, false, 'bar'])).toEqual('foo bar');
        // Notice empty classname in second array
        expect(clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]])).toEqual(
            'foo bar baz hello there'
        );
    });

    it('should combine the whole kitchen sink', () => {
        expect(
            clsx(
                'foo',
                [
                    1 && 'bar',
                    {
                        baz: false,
                        bat: null
                    },
                    ['hello', ['world']]
                ],
                'cya'
            )
        ).toEqual('foo bar hello world cya');
    });
});
