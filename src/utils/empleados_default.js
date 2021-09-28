export const PanfiloReyes = {
  nombre: "Pánfilo Reyes",
  codigo: "2233",
  fecha_ingreso: "Sep 10, 2021",
  pagos: {
    frecuencia: "Mensual",
    moneda: "Q",
    sueldo: {
      ingresos: 11500,
      descuentos: 136.45,
    },
    aguinaldo: {
      ingresos: 11500,
      descuentos: 0,
    },
    salario_14: {
      ingresos: 11500,
      descuentos: 0,
    },
    bonos: [
      {
        name: "aniversario",
        ingresos: 1000,
      },
    ],
  },
};

export const MarcellaFlores = {
  nombre: "Marcella Flores",
  codigo: "002332",
  fecha_ingreso: "Sep 10, 2021",
  pagos: {
    frecuencia: "Mensual",
    moneda: "Q",
    sueldo: {
      ingresos: 3000,
      descuentos: 136.45,
    },
    aguinaldo: {
      ingresos: 3000,
      descuentos: 0,
    },
    salario_14: {
      ingresos: 3000,
      descuentos: 0,
    },
    bonos: [],
  },
};


export const LucreciaArana = {
  nombre: "Lucrecia Arana",
  codigo: "1881",
  fecha_ingreso: "Sep 10, 2021",
  pagos: {
    frecuencia: "Semanal",
    moneda: "Q",
    sueldo: {
      ingresos: 2250,
      descuentos: 50,
    },
    aguinaldo: {
      ingresos: 9000,
      descuentos: 0,
    },
    salario_14: {
      ingresos: 9000,
      descuentos: 0,
    },
    bonos: [],
  },
};

export default { PanfiloReyes, LucreciaArana, MarcellaFlores };
