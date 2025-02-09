import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {updateData} from "../services/updateData";


export const useValuesStore = create()(
  persist(
    (set, get) => ({
      data: {},
      period: null,
      updateData: async () => {
        const data = await updateData();

        if (data) {
          const currentState = get();

          if (currentState.data !== data) {
            set({
              data: data,
            });
            console.log('Data updated in store.');
          } else {
            console.log('Data is up to date. No changes made.');
          }
        }
      },
      updatePeriod: (data) => {
        set({period: data})
      },
    }),
    {
      name: 'values-storage',
    },
  ),
);
