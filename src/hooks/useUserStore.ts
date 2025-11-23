import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      roles: [],
      setRoles: (roles: string[]) => set({ roles }),
    }),
    {
      name: 'roles',
    }
  )
);

export default useUserStore;
