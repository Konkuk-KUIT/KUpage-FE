import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { teamMatchingAuthExtractor } from '../utils/authorization';

interface UserStore {
  roles: string[];
  setRoles: (roles: string[]) => void;
  teamMatchingAuth: () => string;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      roles: [],
      setRoles: (roles: string[]) => set({ roles }),
      teamMatchingAuth: () => teamMatchingAuthExtractor(get().roles),
    }),
    {
      name: 'roles',
    }
  )
);

export default useUserStore;
