import { describe, it, expect } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import sinon from 'sinon';

import { mount } from '@vue/test-utils';
import ChessBoard from '../ChessBoard/ChessBoard.vue';

describe('ChessBoard', () => {
  const options = {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            moves: []
          },
          stubActions: false,
          createSpy: sinon.spy
        })
      ]
    }
  };

  it('renders properly', () => {
    const wrapper = mount(ChessBoard, options);
    expect(wrapper.text()).toContain('a');
  });

  it('renders 8 rows of chessboard', () => {
    const wrapper = mount(ChessBoard, options);
    expect(wrapper.findAll('.grid-cols-8')).toHaveLength(8);
  });

  it('renders 8 columns for each row of the chessboard', () => {
    const wrapper = mount(ChessBoard, options);
    const rows = wrapper.findAll('.grid-cols-8');
    expect(rows).toHaveLength(8);

    for (const row of rows) {
      expect(row.findAll('div')).toHaveLength(8);
    }
  });

  it('renders a total of 64 tiles', () => {
    const wrapper = mount(ChessBoard, options);
    const titles = wrapper.findAll('.grid-cols-8 div');
    expect(titles).toHaveLength(64);
  });
});
