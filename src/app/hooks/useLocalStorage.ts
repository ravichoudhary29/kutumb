'use client';

import { useCallback, useEffect, useState } from 'react';

function getInitialValue(key: string) {
    const valueString =
        typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    if (typeof valueString === 'string') return valueString;
    return valueString ? JSON.parse(valueString) : null;
}

export function useLocalStorage(key: string) {
    const initialValue = getInitialValue(key);
    const [value, setValue] = useState(initialValue);

    const onChangeValue = useCallback((newValue: string) => {
        setValue(newValue);
    }, []);

    const onRemoveKey = useCallback(() => {
        setValue(undefined);
    }, []);

    useEffect(() => {
        if (typeof value === 'undefined') {
            localStorage.removeItem(key);
            return;
        }

        const storageValue = value === null ? '' : value;
        localStorage.setItem(key, storageValue);
    }, [value]);

    return [value, onChangeValue, onRemoveKey];
}
