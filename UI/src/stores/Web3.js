import { writable, get } from 'svelte/store'
import { browser } from '$app/environment'
import EventEmitter from 'eventemitter3'
import * as Web3Data from '../Web3Data/index.js'

let Web3 = writable({})

class Foo extends EventEmitter {
    constructor() {
        super()
        this.on('trip', this.onTrip)
        this.nonce = 0n
    }
    async onTrip(trip, block) {
        let nonce = this.nonce
        let web3 = this.same(trip)
        let diff = this.diff(trip)
        await this.checkDiff(web3, diff)
        if (block !== undefined) web3.block = block
        if (nonce !== this.nonce && name === 'block') return
        this.nonce++
        console.log('set', web3)
        Web3.set(web3)
    }
    data() {
        return Object.values(Web3Data)
    }
    diff(trip) {
        return this.data().filter(d => d.trips.includes(trip))
    }
    same(trip) {
        let diff = this.data().filter(d => !d.trips.includes(trip))
        return diff.reduce((p, c) => (p[c.id] = get(Web3)[c.id], p), {})
    }
    async checkDiff(web3, diff) {
        let next = []
        for (let i = 0; i < diff.length; i++) {
            let d = diff[i]
            if (this.needsMet(web3, d)) web3[d.id] = await this.check(web3, d)
            else if (this.nullNeed(web3, d)) web3[d.id] = null
            else next.push(d)
        }
        await new Promise(_ => setTimeout(_, 100))
        if (next.length) await this.checkDiff(web3, next)
        return web3
    }
    needsMet(web3, d) {
        return d.needs.map(need => !!web3[need]).reduce((p, c) => p && c, true)
    }
    async check(web3, d) {
        return await d.fn.bind({Web3, web3, foo: this})() 
    }
    nullNeed(web3, d) {
        return d.needs.map(need => web3[need] === null).includes(true)
    }
}

let foo = new Foo()
if (browser) foo.emit('trip', 'init')

export { Web3 }