export abstract class Entity<T> {
    queue: Array<(T) => void>
    data: T

    abstract async fetcher(): Promise<T>;

    async fetch(): Promise<T> {
        this.data = await this.fetcher();

        setTimeout(() => this.callQueue(), 0);

        return this.data;
    }

    private callQueue() {
        this.queue.forEach(cb => cb(this.data));
    }

    subscribe(cb) {
        this.queue.push(cb);
    }

    unsubscribe(cb) {
        this.queue = this.queue.filter((el) => el !== cb);
    }
}
