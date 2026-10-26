import { CarJourney } from '../types/carJourney';
import { DEFAULT_JOURNEYS } from '../data/defaultJourneys';

const STORAGE_KEY = 'autojourney_car_journeys_v2';
const ACTIVE_ID_KEY = 'autojourney_active_journey_id_v2';
const INITIALIZED_KEY = 'autojourney_initialized_v2';

export function loadJourneys(): CarJourney[] {
  try {
    const initialized = localStorage.getItem(INITIALIZED_KEY);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== null) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
    // If the user has initialized before and cleared journeys (or raw is empty), honor []
    if (initialized === 'true') {
      return [];
    }

    // First-time load: populate default journeys and flag initialized
    localStorage.setItem(INITIALIZED_KEY, 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_JOURNEYS));
    localStorage.setItem(ACTIVE_ID_KEY, DEFAULT_JOURNEYS[0].id);
    return DEFAULT_JOURNEYS;
  } catch (e) {
    console.error('Failed to load journeys from localStorage:', e);
  }
  return DEFAULT_JOURNEYS;
}

export function saveJourneys(journeys: CarJourney[]): void {
  try {
    localStorage.setItem(INITIALIZED_KEY, 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(journeys));
  } catch (e) {
    console.error('Failed to save journeys to localStorage:', e);
  }
}

export function getActiveJourneyId(availableJourneys: CarJourney[]): string {
  try {
    const stored = localStorage.getItem(ACTIVE_ID_KEY);
    if (stored && availableJourneys.some((j) => j.id === stored)) {
      return stored;
    }
  } catch (e) {
    // fallback
  }
  return availableJourneys[0]?.id || '';
}

export function setActiveJourneyId(id: string): void {
  try {
    localStorage.setItem(ACTIVE_ID_KEY, id);
  } catch (e) {
    // fallback
  }
}

export function clearAllSavedJourneys(): void {
  try {
    localStorage.setItem(INITIALIZED_KEY, 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    localStorage.removeItem(ACTIVE_ID_KEY);
  } catch (e) {
    console.error('Failed to clear journeys:', e);
  }
}

export function resetToDefaultJourneys(): CarJourney[] {
  try {
    localStorage.setItem(INITIALIZED_KEY, 'true');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_JOURNEYS));
    localStorage.setItem(ACTIVE_ID_KEY, DEFAULT_JOURNEYS[0].id);
  } catch (e) {
    console.error('Failed to reset default journeys:', e);
  }
  return DEFAULT_JOURNEYS;
}

