export class ApiError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "API-Error"
    }
}

export class LocalBoxError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "LocalBoxError"
    }
}