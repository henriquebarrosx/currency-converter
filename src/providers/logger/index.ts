class Log {
    info(payload: any): void {
        console.info(payload)
    }

    error(payload: any): void {
        console.error(payload)
    }
}

export default new Log()