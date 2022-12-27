export class PriceFormatters {
  static format(value: number) {
    return new Intl.NumberFormat("pt-br", {
      currency: "BRL",
      style: "currency"
    }).format(value);
  }
}

export class DateFormatters {
  static format(date: string | Date) {
    return new Intl.DateTimeFormat("pt-br").format(new Date(date));
  }
}