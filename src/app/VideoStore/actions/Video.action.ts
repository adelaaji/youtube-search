import { Video } from "../models/Video";

export class Getvideos {
  static readonly type = "[Video] Get";
  constructor(public payload: string) {}
}

export class GetVideosList {
  static readonly type = "[Video] GetList";
  constructor() {}
}

export class ReorderVideosList {
  static readonly type = "[Video] Reorder";

  constructor(public payload: Video[]) {}
}

export class UpdateUserNote {
  static readonly type = "[Video] update";

  constructor(public payload: Video) {}
}
