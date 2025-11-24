import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { teamMatchingAuthExtractor } from '../utils/authorization';

interface UserStore {
  auths: string[];
  setauths: (auths: string[]) => void;
  teamMatchingAuth: () => string;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      auths: [],
      setauths: (auths: string[]) => set({ auths }),
      teamMatchingAuth: () => teamMatchingAuthExtractor(get().auths),
    }),
    {
      name: 'auths',
    }
  )
);

export default useUserStore;
