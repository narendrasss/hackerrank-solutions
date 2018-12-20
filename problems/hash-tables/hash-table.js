'use strict'

class HashTable {
    constructor(size) {
        this.size = size;
        this.count = 0;
        this.data = new Array(size);
    }

    add(...strings) {
        strings.forEach(str => {
            const idx = this.hash(str, this.size);
            let bucket = this.data[idx];
            if (!bucket) {
                bucket = [];
                this.data[idx] = bucket;
            }
            bucket.push(str);
        });
    }

    remove(...strings) {
        strings.forEach(str => {
            const idx = this.hash(str, this.size);
            const bucket = this.data[idx];
            if (bucket) {
                for (let i = 0; i < bucket.length; i++) {
                    if (bucket[i] === str) {
                        bucket.splice(i, 1);
                    }
                }
            }
        });
    }

    contains(str) {
        const idx = this.hash(str, this.size);
        const bucket = this.data[idx];
        if (!bucket) return false;
        return bucket.filter(el => el === str).length > 0;
    }

    /**
     * This is the same algorithm as Java's String.hashCode(),
     * adjusted to return an index within the hash table's size.
     */
    hash(str, limit) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
            hash = (hash << 5) + letter.charCodeAt(0);
            hash = (hash & hash) % limit;
        }
        return hash;
    }
}

module.exports = HashTable;