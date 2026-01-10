import { AppState } from '../models/types';
import { seedState } from '../data/seedData';

const STORAGE_KEY = 'mythesis_state';

export const loadState = (): AppState => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return seedState;
  }
  try {
    return JSON.parse(raw) as AppState;
  } catch {
    return seedState;
  }
};

export const saveState = (state: AppState): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const resetState = (): AppState => {
  saveState(seedState);
  return seedState;
};
