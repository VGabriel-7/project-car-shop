import ICar from '../Interfaces/ICar';

export default class Car {
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(newCar: ICar) {
    this._id = newCar.id;
    this._model = newCar.model;
    this._year = newCar.year;
    this._color = newCar.color;
    this._status = newCar.status;
    this._buyValue = newCar.buyValue;
    this._doorsQty = newCar.doorsQty;
    this._seatsQty = newCar.seatsQty;
  }

  get id(): string | undefined { return this._id; }
  get model(): string { return this._model; }
  get year(): number { return this._year; }
  get color(): string { return this._color; }
  get status(): boolean { return this._status; }
  get buyValue(): number { return this._buyValue; }
  get doorsQty(): number { return this._doorsQty; }
  get seatsQty(): number { return this._seatsQty; }
}
