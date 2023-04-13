export interface StandardDtkApiResponse<
  TData extends Record<string, any> = Record<string, never>,
  TError extends Record<string, any> = Record<string, never>
> {
  data: TData | null;
  error: TError | null;
}
