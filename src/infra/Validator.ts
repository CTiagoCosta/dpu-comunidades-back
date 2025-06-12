import { File } from './HttpAdapter';
import { Report } from './Report';

export class Validator {
  public reports: Report[];

  constructor() {
    this.reports = [];
  }

  public stringIsRequired(value: string, name: string, message: string) {
    if (!value || value.trim().length <= 0) {
      this.reports.push({ name, message });
    }
  }

  public isRequiredBoolean(value: boolean, name: string, message: string) {
    if (typeof value !== 'boolean') {
      this.reports.push({ name, message });
    }
  }

  public isRequired(value: any, name: string, message: string) {
    if (value === undefined || value === null || value === '') {
      this.reports.push({ name, message });
    }
  }

  public isUndefined(value: any, name: string, message: string) {
    if (value === undefined) {
      this.reports.push({ name, message });
    }
  }

  public isGreaterThan(valuea: number, valueb: number, name: string, message: string) {
    if (valuea > valueb) {
      this.reports.push({ name, message });
    }
  }

  public isGreaterOrEqualsThan(valuea: number, valueb: number, name: string, message: string) {
    if (valuea >= valueb) {
      this.reports.push({ name, message });
    }
  }

  public isLessThan(valuea: number, valueb: number, name: string, message: string) {
    if (valuea < valueb) {
      this.reports.push({ name, message });
    }
  }

  public hasMinLen(value: string, min: number, name: string, message: string) {
    if (!value || value?.toString().length < min) {
      this.reports.push({ name, message });
    }
  }

  public hasMaxLen(value: string, max: number, name: string, message: string) {
    if (!value || value?.toString().trim().length > max) {
      this.reports.push({ name, message });
    }
  }

  public isValidEmail(value: string, name: string, message: string) {
    const REGULAR_EXPRESSION = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!REGULAR_EXPRESSION.test(value)) {
      this.reports.push({ name, message });
    }
  }

  public isValidUrl(value: string, name: string, message: string) {
    const REGULAR_EXPRESSION = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    if (!REGULAR_EXPRESSION.test(value)) {
      this.reports.push({ name, message });
    }
  }

  public isValidNumber(value: any, name: string, message: string) {
    if (typeof value !== 'number' || isNaN(value)) {
      this.reports.push({ name, message });
    }
  }

  public dateIsRequired(date: Date, name: string, message: string) {
    if (!date) this.reports.push({ name, message });
  }

  public isValidValue(value: any, toCompare: any, name: string, message: string) {
    if (!Object.values(toCompare).includes(value)) {
      this.reports.push({ name, message });
    }
  }

  public isValidPhoneNumber(value: string, name: string, message: string) {
    const REGULAR_EXPRESSION = /^((1[1-9])|([2-9][0-9]))(([0-9]{8}))$/;
    if (!REGULAR_EXPRESSION.test(value)) this.reports.push({ name, message });
  }

  public isValidMobileNumber(value: string, name: string, message: string) {
    const REGULAR_EXPRESSION = /^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/;
    if (!REGULAR_EXPRESSION.test(value)) this.reports.push({ name, message });
  }

  public isValidCpf(value: string, name: string, message: string) {
    const report = { name, message };
    let som;
    let rest;
    som = 0;

    if (value === '00000000000' || value === '') {
      this.reports.push(report);
      return;
    }

    for (let i = 1; i <= 9; i++) {
      const previousAndCurrentDigit = parseInt(value.substring(i - 1, i));
      som += previousAndCurrentDigit * (11 - i);
    }

    rest = (som * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(value.substring(9, 10))) {
      this.reports.push(report);
      return;
    }

    som = 0;
    for (let i = 1; i <= 10; i++) som += parseInt(value.substring(i - 1, i)) * (12 - i);
    rest = (som * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(value.substring(10, 11))) {
      this.reports.push(report);
    }
  }

  public isValidCpnj(value: string, name: string, message: string) {
    const report = { name, message };
    const cnpj = value.replace(/[^\d]+/g, '');

    if (cnpj === '') return this.reports.push(report);

    if (cnpj.length !== 14) return this.reports.push(report);

    // Elimina CNPJs invalidos conhecidos
    if (
      cnpj === '00000000000000' ||
      cnpj === '11111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999'
    )
      return this.reports.push(report);

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) {
      this.reports.push(report);
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) {
      this.reports.push(report);
    }
  }

  public arrayIsEmpty(arr: any[] = [], name: string, message: string) {
    if (arr.length === 0) this.reports.push({ name, message });
  }

  public isValidDate(date: string | Date, name: string, message: string) {
    const parseDate = new Date(date);
    const isInvalidDate = isNaN(parseDate.getTime());
    if (isInvalidDate) {
      this.reports.push({ name, message });
    }
  }

  public isValidFile(file: File, name: string, message: string) {
    if (!file.size || file.size === 0) {
      this.reports.push({ name, message });
    }
  }

  public isPostalCode(value: string, name: string, message: string) {
    const REGULAR_EXPRESSION = /^\d{5}\d{3}$/;
    if (!REGULAR_EXPRESSION.test(value)) {
      this.reports.push({ name, message });
    }
  }

  public isValidEnum(value: any, toCompare: any, name: string, message: string) {
    if (!Object.values(toCompare).includes(value)) {
      this.reports.push({ name, message });
    }
  }

  public clearReports() {
    this.reports = [];
  }

  public isTrue(value: boolean, name: string, message: string) {
    if (!value) {
      this.reports.push({ name, message });
    }
  }
}
