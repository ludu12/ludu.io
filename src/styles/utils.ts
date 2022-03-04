export function clsx(...args: any[]): string {
    const entries = args.reduce((acc: Record<string, boolean>, a) => {
        if (a) {
            if (typeof a === 'object') {
                if (Array.isArray(a)) {
                    return {
                        ...acc,
                        [clsx(...a)]: true
                    };
                } else {
                    return {
                        ...acc,
                        ...a
                    };
                }
            } else if (typeof a === 'string') {
                return {
                    ...acc,
                    [a]: true
                };
            }
        }

        return acc;
    }, {} as Record<string, boolean>);

    return Object.entries(entries)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(' ');
}
