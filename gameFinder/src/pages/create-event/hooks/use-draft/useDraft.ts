import {useCallback} from 'react';
export const EVENT_FORM_KEY = 'event_form';

const useDraft = () => {
  const getStorageValue = useCallback(() => {
    return JSON.parse(localStorage.getItem(EVENT_FORM_KEY) as string);
  }, []);

  const setDraftValue = useCallback((values) => {
    localStorage.setItem(EVENT_FORM_KEY, JSON.stringify(values));
  }, []);

  const clearDraft = useCallback(() => {
    localStorage.removeItem(EVENT_FORM_KEY);
  }, []);

  return {
    setDraftValue,
    clearDraft,
    getStorageValue
  };
};

export default useDraft;
