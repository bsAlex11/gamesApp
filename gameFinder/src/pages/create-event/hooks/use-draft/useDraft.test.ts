import {renderHook} from '@testing-library/react-hooks';
import useDraft from './useDraft';

describe('useDraft', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
        removeItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  it('should call the local storage methods', () => {
    const {result} = renderHook(() => useDraft());
    const {
      current: {getStorageValue, setDraftValue, clearDraft}
    } = result;

    getStorageValue();
    setDraftValue('new value');
    clearDraft();

    expect(window.localStorage.getItem).toHaveBeenCalled();
    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(window.localStorage.removeItem).toHaveBeenCalled();
  });
});
