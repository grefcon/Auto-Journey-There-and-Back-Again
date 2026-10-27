import { CarJourney } from '../types/carJourney';
import { DEFAULT_JOURNEYS } from '../data/defaultJourneys';

const STORAGE_KEY = 'autojourney_car_journeys_v3';
const ACTIVE_ID_KEY = 'autojourney_active_journey_id_v3';

/**
 * Load saved car journeys from storage.
 * Defaults to an empty list so sample cars are NO LONGER loaded by default.
 */
export function loadJourneys(): CarJourney[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== null) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
    // Return empty array by default
    return [];
  } catch (e) {
    console.error('Failed to load journeys from localStorage:', e);
  }
  return [];
}

export function saveJourneys(journeys: CarJourney[]): void {
  try {
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    localStorage.removeItem(ACTIVE_ID_KEY);
  } catch (e) {
    console.error('Failed to clear journeys:', e);
  }
}

/**
 * Explicit user action to load sample vehicles (optional for demonstration).
 */
export function resetToDefaultJourneys(): CarJourney[] {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_JOURNEYS));
    if (DEFAULT_JOURNEYS.length > 0) {
      localStorage.setItem(ACTIVE_ID_KEY, DEFAULT_JOURNEYS[0].id);
    }
  } catch (e) {
    console.error('Failed to reset default journeys:', e);
  }
  return DEFAULT_JOURNEYS;
}
