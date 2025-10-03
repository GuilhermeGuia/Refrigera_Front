export interface BaseResponse<T>
{
    result: T;
    success: boolean;
    errors: string[];
}