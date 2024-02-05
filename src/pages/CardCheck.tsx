import React, { useEffect, useState } from 'react';
import { Screen } from './Password';
import useDebounce from '../hooks/useDebounce';

const CardCheck: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [valid, setValid] = useState<boolean | undefined>(undefined);

	const isCardValid = (cardNumber: string) => {
		if (cardNumber.length !== 16) {
			return undefined;
		}
		let sum = 0;
		let digit;
		let even = false;
		for (let i = cardNumber.length - 1; i >= 0; i--) {
			digit = parseInt(cardNumber.charAt(i), 10);
			if (even) {
				digit *= 2;
				if (digit > 9) {
					digit -= 9;
				}
			}
			sum += digit;
			even = !even;
		}
		return sum % 10 === 0;
	};

	const debouncedValue = useDebounce(value);

	useEffect(() => {
		setValid(isCardValid(debouncedValue));
	}, [debouncedValue, value]);

	const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setValue(value);
	};

	return (
		<>
			<Screen
				valid={valid}
				onChange={changeValue}
			/>
		</>
	);
};

export default CardCheck;