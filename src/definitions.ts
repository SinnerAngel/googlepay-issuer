export interface GooglePayIssuerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
