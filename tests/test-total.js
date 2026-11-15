import test from 'node:test';
import assert from 'node:assert/strict';
import { totalWithTax } from '../src/index.js';

test('adds tax to the checkout subtotal', () => {
  assert.equal(totalWithTax([19.99, 5], 0.1), 27.49);
});

test('returns zero for an empty checkout', () => {
  assert.equal(totalWithTax([]), 0);
});