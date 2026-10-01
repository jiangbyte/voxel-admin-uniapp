/** Author: Charlie */

/** HTTP JSON wire 辅助 — 标量仅为字符串。 */

/** UI 用：将数字线型 "0"/"1"（及原生 number/boolean）读成 boolean。 */
export function wireBool(value: unknown, defaultValue = false): boolean {
    if (value === null || value === undefined || value === '') {
        return defaultValue
    }
    if (typeof value === 'boolean') {
        return value
    }
    if (typeof value === 'number') {
        return value === 1
    }
    if (typeof value === 'string') {
        const trimmed = value.trim()
        if (trimmed === '1') {
            return true
        }
        if (trimmed === '0') {
            return false
        }
        return defaultValue
    }
    return defaultValue
}

export function wireInt(value: string): number {
    const n = Number(value)
    if (!Number.isFinite(n)) {
        throw new Error(`Invalid wire int: ${value}`)
    }
    return n
}

export function wireFloat(value: string): number {
    const n = Number(value)
    if (!Number.isFinite(n)) {
        throw new Error(`Invalid wire float: ${value}`)
    }
    return n
}

export function stringifyScalars(value: unknown): unknown {
    if (value === null || value === undefined) {
        return value
    }
    if (typeof value === 'boolean') {
        return value ? '1' : '0'
    }
    if (typeof value === 'number') {
        return Number.isFinite(value) ? String(value) : value
    }
    if (typeof value === 'string') {
        return value
    }
    if (Array.isArray(value)) {
        return value.map((item) => stringifyScalars(item))
    }
    if (typeof value === 'object') {
        const result: Record<string, unknown> = {}
        for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
            result[key] = stringifyScalars(item)
        }
        return result
    }
    return value
}
