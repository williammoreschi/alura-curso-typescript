export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number) { }

  get data(): Date {
    const date = new Date(this._data.getTime());
    return date;
  }

  get volume(): number {
    return this.valor * this.quantidade;
  }
}