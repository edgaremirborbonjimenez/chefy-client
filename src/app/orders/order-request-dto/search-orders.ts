
export class SearchOrdersParamsDTO {
    constructor(
        readonly page: number,
        readonly count: number,
        readonly status?: string,
    ) {
    }
}