import React from 'react';
import renderer from 'react-test-renderer';

import ReactGood from '../react-good';

describe('React good', () => {
    it('good button renders correctly', () => {
        const compliments = {
            CUTE: 'cute',
            SWEET: 'sweet',
            HONEY: 'honey',
        };

        const tree = renderer.create(
            <ReactGood compliments={compliments} />
        ).toJSON();

        const complimentsValues = Object.values(compliments);

        expect(tree.props.className).toBe('good');

        tree.children.forEach((component, key) => {
            expect(component.type).toBe('button');
            expect(component.props.className).toBe('good__button');
            expect(component.children[0]).toBe(complimentsValues[key]);
        });
    });
});