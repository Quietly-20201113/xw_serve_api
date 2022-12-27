export class AppDto {
  public id: string | undefined;
  public title: string | undefined;
  public name: string | undefined;
}

export class GetNameDto extends AppDto {
  public type: string | undefined;
}
