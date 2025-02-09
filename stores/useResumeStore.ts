import { create } from 'zustand';
import { ResumeData } from '@/types/resume';

interface ResumeStore {
    data: ResumeData | null;
    hydrate: (data: ResumeData) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
    data: null,
    hydrate: (data) => set({ data }),
}));