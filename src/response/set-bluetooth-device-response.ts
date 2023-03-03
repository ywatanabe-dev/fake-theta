type supportModel = 'z1';

export const setBluetoothDeviceResponse: {
  [key in supportModel]: (name: string) => unknown;
} = {
  z1: (name) => {
    return {
      name,
      results: { deviceName: '10100001' },
      state: 'done',
    };
  },
};
