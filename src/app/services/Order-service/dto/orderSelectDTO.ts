
export class OrderSelectDTO {
    constructor(
        readonly page: number,
        readonly count: number,
        readonly status?: string,
    ) {
    }
}