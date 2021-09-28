export const frecuenciaIsValid = async (frecuencia) => {
  const frecuenciasValidas = ["mensual", "quincenal", "semanal"];

  return frecuenciasValidas.includes(frecuencia.toLowerCase());
};

export const ifHaveDateIsValid = async (fecha_ingreso) => {
  const regex =
    /([0-3])?[0-9]{1}(\/|\-|\.){1}([0-2])?[0-9]{1}(\/|\-|\.){1}[0-9]{2,4}/;

  if (fecha_ingreso && regex.test(fecha_ingreso)) {
    const fi = new Date(fecha_ingreso);
    const year = fi.getFullYear();
    const month = fi.getMonth();
    fecha_ingreso = { year, month };

    const fa = new Date();
    const ya = fa.getFullYear;

    if (year < ya || year > ya || month >= 11) fecha_ingreso = null;

    return fecha_ingreso;
  }

  fecha_ingreso = null;

  return fecha_ingreso;
};


export const getTotalSalarios = async (fecha_ingreso, frecuencia, sueldo) => {
  const meses = fecha_ingreso ? fecha_ingreso.month + 1 - meses : 12;

  let cantSalarios = 0;
  switch (frecuencia.toLowerCase()) {
    case "semanal":
      cantSalarios = meses * 4;
      break;
    case "quincenal":
      cantSalarios = meses * 2;
      break;
    case "mensual":
      cantSalarios = meses;
      break;
  }

  const ingresosSueldoAnual =
    Number((cantSalarios * sueldo?.ingresos).toFixed(2)) || 0;

  const descuentosSueldoAnual =
    Number((cantSalarios * sueldo?.descuentos).toFixed(2)) || 0;

  return { cantSalarios, ingresosSueldoAnual, descuentosSueldoAnual };
};

export const calculateBonos = async (bonos) => {
  const cantidadBonos = bonos.length || 0;
  let ingresosBonos = 0,
    descuentosBonos = 0;

  if (cantidadBonos >= 1) {
    bonos.forEach((bono) => {
      ingresosBonos += bono?.ingresos || 0;
      descuentosBonos += bono?.descuentos || 0;
    });
  }

  return { cantidadBonos, ingresosBonos, descuentosBonos };
};

export const calculateAguinaldo = async (aguinaldo) => {
  const ingresosAguinaldo = aguinaldo?.ingresos || 0;
  const descuentosAguinaldo = aguinaldo?.descuentos || 0;

  return { ingresosAguinaldo, descuentosAguinaldo };
};

export const calculateBono14 = async (bono14) => {
  const ingresosBono14 = bono14?.ingresos || 0;
  const descuentosBono14 = bono14?.descuentos || 0;

  return { ingresosBono14, descuentosBono14 };
};

export const getCalculateIsr = async (TRA, TDA, cantSalarios) => {
  const RIA = TRA - TDA;

  const MV = 48000;

  const RN = RIA - MV;

  if (RN < 0) return 0;

  const ISRA = Number((RN * 0.05).toFixed(2));

  const ISR = Number((ISRA / cantSalarios).toFixed(2));

  return ISR;
};

export const getEmployeeIsr = async (colaborador, fi) => {
  const { frecuencia, sueldo, aguinaldo, salario_14, bonos } = colaborador;

  const fecha_ingreso = await ifHaveDateIsValid(fi);

  const { cantSalarios, ingresosSueldoAnual, descuentosSueldoAnual } =
    await getTotalSalarios(fecha_ingreso, frecuencia, sueldo);

  const { ingresosBonos, descuentosBonos } = await calculateBonos(bonos);

  const { ingresosAguinaldo, descuentosAguinaldo } = await calculateAguinaldo(
    aguinaldo
  );

  const { ingresosBono14, descuentosBono14 } = await calculateBono14(
    salario_14
  );

  const TRA =
    ingresosSueldoAnual + ingresosAguinaldo + ingresosBono14 + ingresosBonos;

  const TDA =
    descuentosSueldoAnual -
    descuentosAguinaldo -
    descuentosBono14 -
    descuentosBonos;

  return await getCalculateIsr(TRA, TDA, cantSalarios);
};
