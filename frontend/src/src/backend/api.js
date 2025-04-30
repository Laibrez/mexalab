// Ejemplo de estructura backend (simulada)
const mockDatabase = {
  services: [
    { id: 1, name: 'Toma de sangre', price: 150 },
    { id: 2, name: 'Radiografía', price: 300 },
  ],
  packages: [
    { id: 1, name: 'Paquete Básico', price: 500, services: [1] },
  ],
};

export const getServices = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDatabase.services), 500);
  });
};

export const getPackages = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDatabase.packages), 500);
  });
};

// DONE